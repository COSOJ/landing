import React from 'react';
import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const { Title } = Typography;

const page4 = {
  title: 'Our Commercial Partners',
  children: [
    // todo: add our clients' logos
    // 'https://gw.alipayobjects.com/zos/rmsportal/qImQXNUdQgqAKpPgzxyK.svg', // 阿里巴巴
    // 'https://gw.alipayobjects.com/zos/rmsportal/LqRoouplkwgeOVjFBIRp.svg', // 蚂蚁金服
    // 'https://gw.alipayobjects.com/zos/rmsportal/TLCyoAagnCGXUlbsMTWq.svg', // 人民网
    // 'https://gw.alipayobjects.com/zos/rmsportal/HmCGMKcJQMwfPLNCIhOH.svg', // cisco
    // 'https://gw.alipayobjects.com/zos/rmsportal/aqldfFDDqRVFRxqLUZOk.svg', // GrowingIO
    // 'https://gw.alipayobjects.com/zos/rmsportal/rqNeEFCGFuwiDKHaVaPp.svg', // 饿了么
    // 'https://gw.alipayobjects.com/zos/rmsportal/FdborlfwBxkWIqKbgRtq.svg', // 滴滴出行
    // 'https://gw.alipayobjects.com/zos/rmsportal/coPmiBkAGVTuTNFVRUcg.png', // 飞凡网
  ],
};

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