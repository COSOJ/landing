import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import BannerAnim from 'rc-banner-anim';
import iVOzVyhyQkQDhRsuyBXC from './iVOzVyhyQkQDhRsuyBXC.svg';
import HxEfljPlykWElfhidpxR from './HxEfljPlykWElfhidpxR.svg';

const { Element } = BannerAnim;
const { BgElement } = Element;

const page3 = {
  title: 'Demonstration',
  children: [
    {
      img: iVOzVyhyQkQDhRsuyBXC,
      imgMobile: HxEfljPlykWElfhidpxR,
      src: "https://youtu.be/dQw4w9WgXcQ?si=UlzsD8S-vI29xspm",
    },
    {
      img: iVOzVyhyQkQDhRsuyBXC,
      imgMobile: HxEfljPlykWElfhidpxR,
      src: "https://youtu.be/dQw4w9WgXcQ?si=UlzsD8S-vI29xspm",
    },
  ],
};


export default class Page3 extends React.PureComponent {
  render() {
    const { isMobile } = this.props;
    const children = page3.children.map((item, i) => (
      <Element key={i.toString()}>
        <BgElement className="banner" key="bg">
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onClick={() => {
              const a = document.createElement('a');
              a.href = item.src;
              a.target = '_blank';
              a.rel = 'noopener noreferrer';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }}
          >
            <img
              src={isMobile ? item.imgMobile : item.img}
              alt="Video Thumbnail"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                <polygon points="26,20 48,32 26,44" fill="#fff" />
              </svg>
            </div>
          </button>
        </BgElement>
      </Element>

    ));
    const childrenToRender = (
      <TweenOne key="banner-wrapper" animation={{ type: 'from', y: 30, opacity: 0 }}>
        <BannerAnim type="across" thumb={false} duration={550} ease="easeInOutQuint">
          {children}
        </BannerAnim>
      </TweenOne>
    );
    return (
      <div className="page-wrapper page3">
        <div className="page">
          <h1>{page3.title}</h1>
          <i />
          {
            React.createElement(
              isMobile ? 'div' : OverPack,
              { className: 'banner-wrapper' },
              childrenToRender,
            )}
        </div>
      </div>
    );
  }
}
