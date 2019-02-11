import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from './Layout';
import { PlayProvider } from '../Providers';

class Home extends Component {
    render(){
        return(
            <PlayProvider>
            <Layout>
              <Container className="home" fluid>
                <Row className="topic-1 h-70">                
                  <Row>
                      <Col md={{ size: 12 }}>
                        <h1 className="display-4 ml-2">Ocean Reality Design</h1>
                      </Col>
                      <Col md={{ size: 6, offset: 1 }}>
                        <div className="ml-3 mb-3">
                        <img src={process.env.PUBLIC_URL + '/images/pic80.jpg'} alt="80x80" />
                        </div>                         
                      </Col>
                      <Col md={{ size: 5 }}>
                        <ul>
                          <li>開發實境應用</li>
                          <li>前端技術開發與紀錄</li>
                          <li>ORD相關展示</li>  
                        </ul>
                      </Col>
                    </Row>
                </Row>
                <Row className="topic-2 h-70">
                  <Row>
                    <Col md={{ size: 12 }}>
                      <h1 className="display-4 ml-2">應用</h1>
                    </Col>
                    <Col md={{ size: 4, offset: 2 }}>
                        <ul>
                          <li>漸進式網頁 (Progressive Web App)</li>
                          <li>跨平台桌面應用 (Desktop App)</li>
                          <li>可攜式擴增與虛擬實境應用(AR/VR App)</li>  
                        </ul>                       
                    </Col>
                    <Col md={{ size: 4 }}>
                        <div className="ml-3 mb-3">
                        <img src={process.env.PUBLIC_URL + '/images/pic80.jpg'} alt="80x80" />
                        </div>
                    </Col>
                  </Row>
                </Row>
                <Row className="topic-3 h-70">
                <Row>
                  <Col md={{ size: 12 }}>
                  <h1 className="display-4 ml-2">技術</h1>
                  </Col>
                  <Col md={{ size: 4, offset: 2 }}>
                    <div className="ml-3 mb-3">
                    <img src={process.env.PUBLIC_URL + '/images/pic80.jpg'} alt="80x80" />
                    </div>                         
                  </Col>
                  <Col md={{ size: 4 }}>
                    <ul>
                      <li>使用 React 建構 PWA</li>
                      <li>使用 Electron 建構 Desktop App</li>
                      <li>使用 React 360 建構 AR/VR App</li>  
                    </ul>
                  </Col>
                </Row>
            </Row>
              </Container>
            </Layout>       
          </PlayProvider>
        );
    }
}
export default Home;
