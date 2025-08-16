import React from 'react';
import { Row, Col, Tooltip } from 'antd';

const header = [
  {
    title: 'Platform',
    children: [
      {
        title: 'COSOJ',
        desc: 'Self-Hostable & Open Source',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg',
        link: 'https://fengdie.alipay-eco.com/intro', 
        top: '2px',
      },
    ],
  },
  {
    title: 'Principles',
    children: [
      {
        title: 'Innovative',
        desc: 'Open for ideas and funding open source contributions',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg',
         link: 'https://ant.design/docs/spec/values-cn',
      },
      {
        title: 'Open Source',
        desc: 'No vendor lock-in or tracking. Open source from day one.',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/qkNZxQRDqvFJscXVDmKp.svg',
        link: 'https://ant.design/docs/spec/colors-cn',
      },
      {
        title: 'Metrics Driven',
        desc: 'Easy to visualize and track performance',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/MrUQjZNOJhYJCSZZuJDr.svg',
        link: 'https://antv.alipay.com/zh-cn/vis/index.html',
      },
    ],
  },
  {
    title: 'Flexibility',
    children: [
      {
        title: 'All Platforms & Devices',
        desc: 'Web, Mobile, Desktop',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg',
        link: 'https://fengdie.alipay-eco.com/intro', 
        top: '2px',
      },
    ],
  }
];

export default function Header(props) {
  const menuChild = header.map((item, i) => {
    const content = item.children.map((child, ii) => (
      <a href={child.link} key={ii.toString()} className="tip-block">
        <span className="tip-img"><img src={child.img} alt="img" /></span>
        <div className="tip-content">
          {child.title}
          <div>{child.desc}</div>
        </div>
      </a>
    ));
    return (
      <Col key={i.toString()} span={6}>
        <Tooltip title={content} placement="bottom" overlayClassName="header-tip-wrap">
          <span className="nav-title">{item.title}</span>
        </Tooltip>
      </Col>
    );
  });
  return (
    <header {...props}>
      <Row className="nav">
        {menuChild}
      </Row>
    </header>
  );
}
