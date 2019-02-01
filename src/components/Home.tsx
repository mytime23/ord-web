import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';
import { PlayProvider} from '../Providers';

class Home extends Component {
    render(){
        return(
            <PlayProvider>
            <Layout>
              <Container className="home" fluid>
                <Row className="topic-1 h-70">                
                  <Row>
                      <Col md={{ size: 12 }}>
                        <h1 className="display-4 ml-2">ORD WEB</h1>
                      </Col>
                      <Col md={{ size: 6, offset: 1 }}>
                        <div className="ml-3 mb-3">
                        <img src={process.env.PUBLIC_URL + '/images/pic80.jpg'} alt="80x80" />
                        </div>                         
                      </Col>
                      <Col md={{ size: 5 }}>
                        <ul>
                          <li>Ocean Reality Design Web for PWA</li>
                          <li>WEB技術實踐與紀錄</li>
                          <li>未來WEB技術研究</li>
                          <li>個人作品展示</li>  
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
