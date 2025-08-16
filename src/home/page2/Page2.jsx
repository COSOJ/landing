import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';

import Tetris from '../technology-comp/Tetris';
import Column from '../technology-comp/Column';
import Coordinate from '../technology-comp/Coordinate';
import Building from '../technology-comp/Building';


const pageData = [
  {
    title: 'Flexibility',
    content: 'Designed to work seamlessly across all platforms and devices',
    links: [
      <a key="0" href="https://github.com/cosoj" target="_blank">Web&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="1" href="https://github.com/cosoj" target="_blank">Mobile&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="2" href="https://github.com/cosoj" target="_blank">Desktop&nbsp;&nbsp;<Icon type="right" /></a>,
    ],
    Bg: Tetris,
  },
  {
    title: 'Data Visualization',
    content: 'Simple, professional, and endlessly customizable data visualization solutions',
    links: (
      <a href="https://github.com/cosoj" target="_blank">View Details&nbsp;&nbsp;<Icon type="right" /></a>
    ),
    Bg: Column,
  },
  {
    title: 'Kubernetes and Microservices',
    content: 'Harnessing the most resource-efficient and scalable system architecture',
    links: (
      <a href="https://github.com/cosoj" target="_blank">View Details&nbsp;&nbsp;<Icon type="right" /></a>
    ),
    Bg: Coordinate,
  },
  {
    title: 'Frameworks and Tools',
    content: 'Built with Kubernetes, Spring Boot, NestJS, React, TypeScript, Docker, and other tools, following best practices',
    links: (
      <a href="https://github.com/cosoj" target="_blank">View Details&nbsp;&nbsp;<Icon type="right" /></a>
    ),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>Internal</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
