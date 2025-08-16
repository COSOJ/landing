import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './header/Header';
import Banner from './banner/Banner';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import Page3 from './page3/Page3';
import Page4 from './page4/Page4';
import Footer from './footer/Footer';
import './static/style';

let isMobile = window.matchMedia('(max-width: 768px)').matches;


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    const mq = window.matchMedia('(max-width: 768px)');
    this.setState({ isMobile: mq.matches });
    mq.addEventListener('change', (e) => {
      this.setState({ isMobile: e.matches });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" isMobile={this.state.isMobile} />,
        <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
        <DocumentTitle title="COSOJ | Landing page" key="title" />,
      ]
    );
  }
}
export default Home;
