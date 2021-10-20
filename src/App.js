import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sider from 'components/Sider';
import Board from "containers/Board"

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Helmet
        titleTemplate="%s - Create React Ant Design Boilerplate"
        defaultTitle="Create React Ant Design Boilerplate"
      >
        <meta name="description" content="A Create React Ant Design Boilerplate application" />
      </Helmet>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Board />
          <Layout.Footer style={{ textAlign: 'center' }}>Create React Ant Design Boilerplate</Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
