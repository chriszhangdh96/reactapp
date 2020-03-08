import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './swiper.scss'

export default class Swiper extends Component {
    state = {
        data: [],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['21e1f5d6-14a3-4114-8578-8f376e7aa52e_', 'f37bb95c-903f-4fd9-b173-141ed046637f_', 'c210a0be-f15e-4d74-9f3a-9aa194dafa1d_','0f7efbb1-9ba9-475f-9863-09725c960e95_','398847bc-143a-4d70-aef5-f143b73ed166_','17f35cdb-b1b8-4419-8492-dc2c8688cc75_','6972a999-a210-48c7-9063-f95d63182e7b_','312ae224-c312-4e32-8618-49b546a31230_','f6e0b986-37b2-44f0-83fc-da0e084a19c6_','440cd9c1-6d65-422b-9d48-a41b49f9cd39_','b1b05419-7e56-442a-8ed1-b5123faead33_','4e3eaec1-37a2-42b0-9aa0-e81187635247_','a9607aec-2e3a-4ef5-9156-d1cc92a863cd_','5b576713-47af-4236-96d8-14704acc0836_','585d2129-51a7-41e9-bfb9-1c97164d29f6_'],
          });
        }, 100);
      }
      render() {
        return (
          <div>
             <WingBlank>
                <Carousel
                  autoplay={false}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                  slideWidth={1.0}
                >
                  {this.state.data.map(val => (
                    <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img
                        src={`http://hqs.cc/yxuploadfile/accessories/advertise/${val}.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
              </WingBlank>
          </div>
        );
      }
}
