import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { IpcNetConnectOpts } from 'net';

interface IContextState {
    color: string,
    title: string 
}

export const PlayContext = React.createContext<Partial<IContextState>>({}); // React 16.3 support

export class PlayProvider extends Component<{}, IContextState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: "primary" ,
            title: "Context"
        }
    }
    
   
    render() {
        return(
            <PlayContext.Provider value={this.state}>
                {this.props.children}
            </PlayContext.Provider>
        )
    }
}
  
