import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, Alert } from 'reactstrap';
import Layout from './Layout';
import { PlayContext, PlayProvider } from '../Providers';
import './Styles.css';

interface IComponentState {
    info: string,
    isOpen: boolean 
}

class About extends Component<{}, IComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            info: '',
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({            
            info: 'Hello Context API',
            isOpen: !this.state.isOpen
        });
    }

    render(){
        let { info, isOpen } = this.state;
        return(
            <PlayProvider>
              <Layout>
                <Row className="h-70">
                  <Col md={{ size: 10, offset: 1 }}>
                    <h1 className="display-4 ml-2">About</h1>
                    <Alert isOpen = {isOpen} color="success">{info}</Alert>
                    <Info toggle={this.toggle} />
                    <List />
                    <Counter />              
                  </Col>
                </Row>
              </Layout>  
            </PlayProvider>             
        );
    }
}

interface IInfoProps {
    toggle(event: any): void;
}

class Info extends Component<IInfoProps, {}> {
    constructor(props: IInfoProps) {
        super(props)
    }
    static contextType = PlayContext; //React 16.6 support
 
    toggle = () => {
        this.props.toggle(event);
    }
    render() {
        let { color }  = this.context;
        return(
            <div>
                <h1>使用 Content API</h1>
                <Button 
                  color={color} 
                  onClick={this.toggle}>
                  Alert
                </Button>
            </div>
        )
    }
 }

class List extends Component {
    render() {
        return(
            <PlayContext.Consumer>
             { (context) => (
                 <>
                 <h1>使用 Content API {context.title}</h1>
                 <Button color="warning" onClick= {() =>
                    {
                        let toggle = context.toggle
                        return this.setState({ handeChange: context.handeChange(toggle)});
                    }}>
                    Update
                 </Button>
                 </>
             )}
            </PlayContext.Consumer>
        )
    }
}

class Counter extends Component {
    render() {
        return(
            <PlayContext.Consumer>
             { (context) => (
                 <>
                 <h1>Content API 計數器： {context.count}</h1>
                 <Button color="primary" onClick= {() =>
                    {
                        return this.setState({ handleAdd: context.handleAdd()});
                    }}>
                    增加
                 </Button>
                 {'             '}
                 <Button color="success" onClick= {() =>
                    {
                        return this.setState({ handleAdd: context.handleSub()});
                    }}>
                    減少
                 </Button>
                 </>
             )}
            </PlayContext.Consumer>
        )
    }
}

export default About;
