import React, { Component } from 'react';
import { Container, Row, Table, Spinner } from 'reactstrap';
import Layout from './Layout';
import { DocsContext, DocsProvider } from '../Providers';

class Docs extends Component {

    render(){
        return(
            <DocsProvider>
                <Layout>
                    <Container>
                        <Row>
                            <h1>Docs</h1>
                            <Info />
                        </Row>
                    </Container>
                </Layout>  
            </DocsProvider>    
        );
    }
}

class Info extends Component {

    static contextType = DocsContext; //React 16.6 support
 
    render() {
        let data:any;
        let { docsTitle, lists, isLoading} = this.context;        

        if(isLoading) {
            data = <div><Spinner color="primary" /></div>;
        }else {
            data = lists.map((i: any) =>
              <tr key={i.id}>
                <th scope="row">{i.id}</th>
                <td>{i.title}</td>
                <td></td>
                <td>{i.created}</td>
            </tr> 
            );
        }
        
        return(
             <div>
                <h1>使用 Content API {docsTitle}</h1>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>標題</th>
                        <th>說明</th>
                        <th>建立日期</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data}
                    </tbody>
                 </Table>   
             </div>

        )
    }
}

export default Docs;
