import { Card, Col, Progress, Row, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';


const key = 'board';
const PropertyCard = ({ data }) => {
  const { cityArea,

    image,
    investmentMultiple,
    name,
    numberOfInvestors,
    percentageRaised,
    targetAmount,
  } = data
  return <Card >
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <h2 style={{ color: "#25B864" }}>{name}</h2>
      </Col>
      <Col span={24}>
        <img style={{ maxHeight: "300px", width: "100%" }} src={image}></img>
      </Col>
      <Col span={24}>

        Percentage Booked:  <Progress
          width={40}
          type="circle"
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={percentageRaised}
          status="active"
        />



      </Col>
      <Col span={24}>

        <Tag> Number of Investors : {numberOfInvestors}</Tag>
      </Col>
    </Row>
  </Card>
}
function Board(props) {

  const [properties, setProperties] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/api/property').then(res => {
      setProperties(res.data)
    })
  }, []);

  return (
    <>
      <Helmet>
        <title>Board</title>
        <meta name="description" content="Description of Board" />
      </Helmet>
      <Row gutter={[30, 30]} style={{ padding: "30px" }}>
        {properties.map(prop => {
          return <Col span={7}><PropertyCard data={prop} />
          </Col>
        })}
      </Row>


    </>
  );
}



export default Board;
