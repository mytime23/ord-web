import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from './Layout';
import { PlayProvider} from '../Providers';

class Docs extends Component {
    render(){
        return(
            <PlayProvider>
                <Layout>
                    <Container>
                        <Row>
                            <h1>Docs</h1>
                        </Row>
                    </Container>
                </Layout>  
            </PlayProvider>    
        );
    }
}
export default Docs;
