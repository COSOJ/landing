import React from 'react';
import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { page4 } from './data';

const { Title } = Typography;

const Page4 = () => {
  const children = (!page4.children || !page4.children.length)
    ?
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <Title level={4} style={{ textAlign: 'center', fontWeight: 'bold', width: '100%' }}>We are working on it</Title>
    </div>
    : page4.children.map((img, i) => (
      <Col md={6} xs={24} key={i.toString()} className="page4-item">
        <img src={img} alt="img" />
      </Col>
    ));

  return (
    <div className="page-wrapper page4">
      <div className="page">
        <h1>{page4.title}</h1>
        <i />
        <OverPack playScale="0.3">
          <QueueAnim
            component={Row}
            className="page4-item-wrapper"
            key="item"
            leaveReverse
            type="bottom"
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page4;