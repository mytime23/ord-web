import React, { Component } from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../components/Layout';
// import { PlayProvider} from '../Providers';

class Home extends Component {
    render(){
        let basename = process.env.PUBLIC_URL;
        return(       
            <Layout>
                <div>
                   <h1>Home</h1>
                   <p>URL : {basename}</p>
                </div>
            </Layout>                
        );
    }
}
export default Home;
