import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { IpcNetConnectOpts } from 'net';
import { inherits } from 'util';

const InitState = {
    color: "primary" ,
    title: "Context",
    handeChange: () => {
        return InitState.title = "Update Context";
    }
}

type State = Readonly<typeof InitState>;

export const PlayContext = React.createContext(InitState); // React 16.3 support

export class PlayProvider extends Component<{}, State> {
    readonly state: State = InitState;
    
    // componentDidMount() {
    //     this.setState({
    //         title: 'Auto2',
    //         color: "success"
    //     })
    // }
   
    render() {
        {}
        return(
            <PlayContext.Provider value={this.state}>
                {this.props.children}
            </PlayContext.Provider>
        )
    }
}
  
