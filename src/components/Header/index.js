import { Icon, Layout } from 'antd';
import React from 'react';


function Header(props) {
  return (
    <Layout.Header style={{ height: '48px', lineHeight: '48px', padding: '0 30px', backgroundColor: "white" }} >
      <a to="/" style={{ padding: "10px" }}>
        <svg style={{ padding: "1px" }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="111" height="37px" viewBox="0 0 111 37" xmlSpace="preserve"><g id="Group-16" transform="translate(95.000000, 170.000000)"><polygon id="Fill-1" fill="#1e1e1e" points="-31,-170 -31,-133.8 -23.8,-133.8 -23.8,-145.6 -23.8,-145.6 -23.8,-147.9 -23.8,-147.9
 -23.8,-170 	"></polygon><polygon id="Fill-2" fill="#1e1e1e" points="-16.3,-146.6 -16.3,-146.6 -23.8,-145.6 -23.7,-145.6 -15.8,-133.8 -6.8,-133.8 	"></polygon><path id="Fill-3" fill="#1e1e1e" d="M-78.3-146.5c-0.9-0.5-1.9-0.9-2.9-1.1c-1-0.2-2-0.5-2.9-0.7c-0.9-0.2-1.7-0.4-2.3-0.7
 c-0.6-0.3-0.9-0.7-0.9-1.3c0-0.7,0.3-1.2,0.9-1.5s1.2-0.4,1.8-0.4c1.7,0,3.1,0.7,4.2,2l4.4-4.4c-1.1-1.2-2.4-1.9-4-2.4
 c-1.6-0.4-3.1-0.7-4.6-0.7c-1.2,0-2.4,0.2-3.6,0.5c-1.2,0.3-2.2,0.8-3.1,1.4c-0.9,0.6-1.6,1.5-2.2,2.4c-0.6,1-0.8,2.2-0.8,3.5
 c0,1.5,0.3,2.6,0.9,3.5c0.6,0.9,1.3,1.6,2.3,2s1.9,0.8,2.9,1.1c1,0.2,2,0.5,2.9,0.7c0.9,0.2,1.7,0.5,2.3,0.8
 c0.6,0.3,0.9,0.8,0.9,1.4c0,0.6-0.3,1.1-1,1.3c-0.7,0.2-1.4,0.4-2.3,0.4c-1.1,0-2-0.2-2.9-0.6c-0.8-0.4-1.6-1.1-2.2-1.9l-4.4,4.8
 c1.2,1.2,2.6,2,4.2,2.5c1.7,0.5,3.3,0.7,4.9,0.7c1.2,0,2.5-0.1,3.8-0.4c1.3-0.2,2.4-0.7,3.5-1.2c1-0.6,1.9-1.4,2.5-2.3
 c0.7-1,1-2.2,1-3.7c0-1.5-0.3-2.6-0.9-3.5C-76.6-145.3-77.3-146-78.3-146.5"></path><path id="Fill-6" fill="#1e1e1e" d="M-63.7-164h-7.2v6.9h-4.6v5.8h4.6v11.1c0,1.3,0.2,2.4,0.6,3.3c0.4,0.9,1,1.6,1.8,2.2
 c0.8,0.6,1.7,1,2.7,1.2c1,0.3,2.1,0.4,3.4,0.4c0.8,0,1.7,0,2.5-0.1c0.9-0.1,1.7-0.3,2.5-0.6v-6c-0.3,0.3-0.8,0.5-1.4,0.6
 c-0.6,0.1-1.1,0.1-1.5,0.1c-0.8,0-1.4-0.1-1.8-0.3c-0.5-0.2-0.8-0.5-1-0.9c-0.2-0.4-0.4-0.8-0.4-1.4c-0.1-0.5-0.1-1.1-0.1-1.7v-7.8
 h6.3v-5.8h-6.3V-164z"></path><path id="Fill-8" fill="#1e1e1e" d="M-40.3-142.4c0,0.7-0.2,1.4-0.5,1.9c-0.3,0.5-0.7,1-1.2,1.3c-0.5,0.4-1.1,0.6-1.7,0.8
 c-0.7,0.2-1.3,0.3-2,0.3c-0.8,0-1.6-0.2-2.3-0.6c-0.7-0.4-1.1-1.1-1.1-1.9c0-0.8,0.3-1.4,0.8-1.9c0.5-0.4,1.2-0.8,1.9-1
 c0.8-0.2,1.5-0.4,2.3-0.4c0.8,0,1.5-0.1,2-0.1h1.8V-142.4z M-35.9-154.5c-0.8-1-1.9-1.8-3.3-2.3c-1.4-0.5-3.1-0.8-5.2-0.8
 c-1.9,0-3.8,0.3-5.6,0.9c-1.8,0.6-3.4,1.6-4.7,2.8l3.8,3.9c0.8-0.9,1.6-1.5,2.6-2c1-0.5,2.1-0.7,3.2-0.7c1.2,0,2.3,0.4,3.2,1.1
 c0.9,0.8,1.4,1.8,1.4,3c-1,0-2.1,0-3.2,0c-1.2,0-2.3,0.1-3.5,0.3c-1.2,0.2-2.3,0.4-3.4,0.7c-1.1,0.3-2.1,0.8-2.9,1.4
 c-0.8,0.6-1.5,1.4-2,2.3c-0.5,0.9-0.7,2.1-0.7,3.4c0,1.2,0.2,2.2,0.7,3.1c0.4,0.9,1.1,1.6,1.8,2.3c0.8,0.6,1.7,1.1,2.7,1.4
 c1,0.3,2.1,0.5,3.1,0.5c1.5,0,2.9-0.3,4.2-0.8c1.3-0.5,2.4-1.4,3.2-2.7h0.1v2.9h6.6v-11.8c0-1.9-0.2-3.7-0.5-5.2
 C-34.5-152.2-35.1-153.5-35.9-154.5L-35.9-154.5z"></path><path id="Fill-10" fill="#1e1e1e" d="M-1.1-148.1c0-0.6,0.2-1.1,0.4-1.7c0.2-0.5,0.6-1,1-1.4c0.4-0.4,0.9-0.7,1.6-1
 c0.6-0.3,1.3-0.4,2.1-0.4c1.3,0,2.4,0.4,3.2,1.3c0.8,0.9,1.2,1.9,1.2,3.1H-1.1z M15.6-145.4c0-1.9-0.3-3.5-0.8-5
 c-0.5-1.5-1.2-2.8-2.2-3.9c-0.9-1.1-2.1-1.9-3.5-2.5c-1.4-0.6-2.9-0.9-4.5-0.9c-1.8,0-3.5,0.3-5.1,0.9c-1.6,0.6-3,1.4-4.1,2.5
 c-1.2,1.1-2.1,2.4-2.8,3.9c-0.7,1.5-1,3.2-1,5s0.3,3.5,1,5c0.7,1.5,1.6,2.8,2.8,3.9c1.2,1.1,2.5,1.9,4.1,2.5
 c1.6,0.6,3.3,0.9,5.1,0.9c1.9,0,3.7-0.4,5.5-1.2c1.8-0.8,3.2-1.9,4.4-3.4l-5-3.7c-0.6,0.8-1.3,1.5-2.1,2c-0.8,0.5-1.8,0.8-3,0.8
 c-1.4,0-2.6-0.4-3.5-1.2c-1-0.8-1.6-1.9-1.9-3.3h16.7V-145.4z"></path><polygon id="Fill-13" fill="#41CE8E" points="-7,-157.1 -15.8,-157.1 -31,-135.1 -31,-133.8 -23.8,-133.8 	"></polygon></g></svg>
      </a>
      <span level={4} style={{ lineHeight: '48px', float: 'right', color: 'rgba(255, 255, 255, 0.65)' }}>
        <Icon type="user" /> {JSON.stringify(props.user)}
      </span>
    </Layout.Header>
  );
}





export default Header;
