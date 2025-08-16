import React from 'react';
import { Row, Col } from 'antd';

const footer = [
  {
    title: 'Frontend Technologies',
    children: [
      { title: 'React', link: 'https://reactjs.org' },
      { title: 'TypeScript', link: 'https://www.typescriptlang.org' },
      { title: 'Ant Design', link: 'https://ant.design' },
      { title: 'AntV', link: 'https://antv.alipay.com' },
      { title: 'Node.js', link: 'https://nodejs.org' },
    ],
  },
  {
    title: 'Backend Technologies',
    children: [
      { title: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
      { title: 'NestJS', link: 'https://nestjs.com' },
      { title: 'Node.js', link: 'https://nodejs.org' },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    children: [
      { title: 'Kubernetes', link: 'https://kubernetes.io' },
      { title: 'Docker', link: 'https://www.docker.com' },
      { title: 'Helm', link: 'https://helm.sh' },
      { title: 'MinIO', link: 'https://min.io' },
      { title: 'Grafana', link: 'https://grafana.com' },
      { title: 'Prometheus', link: 'https://prometheus.io' },
    ],
  },
  {
    title: 'Data & Visualization',
    children: [
      { title: 'Data Visualization', link: 'https://antv.alipay.com' },
      { title: 'Chart.js', link: 'https://www.chartjs.org' },
      { title: 'D3.js', link: 'https://d3js.org' },
    ],
  },
  {
    title: 'Contact Us',
    children: [
      { title: 'GitHub', link: 'https://github.com/cosoj' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      <div className="footer-wrap page">
        <Row>
          {
        footer.map((foot, index) => (
          <Col key={index.toString()} md={6} xs={24} className="footer-item-col">
            <div className="footer-item">
              <h2>
                {foot.icon && <img style={{ marginRight: 16 }} src={foot.icon} alt="img" />}
                {foot.title}
              </h2>
              {foot.children.map(child => (
                <div key={child.link}>
                  <a target="_blank " href={child.link}>
                    {child.title}
                    {child.desc && (
                    <span
                      style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                    > - {child.desc}
                    </span>)}
                  </a>
                </div>))}
            </div>
          </Col>
          ))
      }
        </Row>
      </div>
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col md={4} xs={24} style={{ textAlign: 'left' }} className="mobile-hide">
              <a
                href="https://weibo.com/p/1005056420205486"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'left' }}
              >
              Career
              </a>
            </Col>
            <Col md={20} xs={24}>
              <span
                className="mobile-hide"
                style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11 }}
              >
                <a
                  href="https://docs.alipay.com/policies/privacy/antfin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                 Policy
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a
                  href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Customer Service
                </a>
              </span>
              { /* @ts-ignore */}      
              <span style={{ marginRight: 12 }}>{__HEAD_COMMIT_HASH__ ? `Trace: ${__HEAD_COMMIT_HASH__}` : ""}</span>
              <span style={{ marginRight: 12 }}>&copy; {new Date().getFullYear()} - Maifee Ul Asad</span>
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}
