import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import Layout from './Layout';
import { PlayContext, PlayProvider } from '../Providers';
import './Styles.css';

interface IComponentState {
    info: string 
}

class About extends Component<{}, IComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            info: ''
        }
    }

    toggle = () => {
        this.setState({
            info: 'Hello Context API'
        });
    }

    render(){
        let { info } = this.state; 
        return(
            <PlayProvider>
              <Layout>
                <div>
                   <h1>About</h1>
                   <Alert color="success">{info}</Alert>
                   <Info toggle={this.toggle} />
                   <List />
                </div>
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
        let { color, title}  = this.context;
        return(
            <div>
                <h1>PWA APP About Info 2</h1>
                <Button 
                  color={color} 
                  onClick={this.toggle}>
                  {title}
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
                 <h1>This is Title List {context.title}</h1>
                 <Button color="warning" onClick= {() =>
                    {
                        return this.setState({ handeChange: context.handeChange()});
                    }}>
                    Update
                 </Button>
                 </>
             )}
            </PlayContext.Consumer>
        )
    }
}

export default About;
