import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { IpcNetConnectOpts } from 'net';
// import { inherits } from 'util';

const InitState = {
    color: "primary" ,
    title: "Context",
    toggle: false,
    count: 0,
    handeChange: (toggle: boolean) => {
        InitState.toggle = !toggle;        
        InitState.title = InitState.toggle?"Update Context!":"";
        InitState.color = InitState.toggle?"primary":"warning";
        return InitState;
    },
    handleAdd: () => {
        InitState.count <= 9?InitState.count++:InitState.count;        
        return InitState.count;
    },
    handleSub: () => {
        InitState.count >= 1?InitState.count--:InitState.count;        
        return InitState.count;
    }
}

type State = Readonly<typeof InitState>;

export const PlayContext = React.createContext(InitState); // React 16.3 support

export class PlayProvider extends Component<{}, State> {
    readonly state: State = InitState;
   
    render() {
        {}
        return(
            <PlayContext.Provider value={this.state}>
                {this.props.children}
            </PlayContext.Provider>
        )
    }
}
  
