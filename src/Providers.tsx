import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { IpcNetConnectOpts } from 'net';
// import { inherits } from 'util';
import firebase from './Firebase';
import { number, string } from 'prop-types';


/*
 * About Page
 *
 * 
 */
const InitAboutState = {
    color: "primary" ,
    title: "Context",
    docsTitle: "文件",
    toggle: false,
    count: 0,
    handeChange: (toggle: boolean) => {
        InitAboutState.toggle = !toggle;        
        InitAboutState.title = InitAboutState.toggle?"Update Context!":"";
        InitAboutState.color = InitAboutState.toggle?"primary":"warning";
        return InitAboutState;
    },
    handleAdd: () => {
        InitAboutState.count <= 9?InitAboutState.count++:InitAboutState.count;        
        return InitAboutState.count;
    },
    handleSub: () => {
        InitAboutState.count >= 1?InitAboutState.count--:InitAboutState.count;        
        return InitAboutState.count;
    }
}

type State = Readonly<typeof InitAboutState>;

export const PlayContext = React.createContext(InitAboutState); // React 16.3 support

export class PlayProvider extends Component<{}, State> {
    readonly state: State = InitAboutState;

    render() {
        return(
            <PlayContext.Provider value={this.state}>
                {this.props.children}
            </PlayContext.Provider>
        )
    }
}

/*
 * Docs Page
 *
 * 
 */
const InitDocsState = {
    docsTitle: "文件",
    // name:  firebase.firestore().collection('news').doc('Ff0SMGJTiBMG8RPcMtmf'),
    list: {
        id: number,
        title: string,
        created: string
    }
}

const InitList = {
    id: number,
    title: string,
    created: string
}

type DocsState = Readonly<typeof InitDocsState>;

export const DocsContext = React.createContext(InitDocsState); // React 16.3 support

export class DocsProvider extends Component<{}, DocsState> {
    readonly state: DocsState = InitDocsState;

    componentDidMount() {
        var List = InitList ;
        firebase.firestore().collection('news').doc('Ff0SMGJTiBMG8RPcMtmf')
        .get()
        .then((docSnapshot: any) => {
            if (docSnapshot.exists) {
                // console.log('news:', docSnapshot.data());
                const { id, title, created } = docSnapshot.data();
                List.id = id;
                List.title = title;
                List.created = created;
                this.setState({
                    list: List
                });
                // console.log('List:', JSON.stringify(List));
            } else {
              console.log('no this user')
            }
          })
          .catch((err: Error) => console.log(err));
    }

    render() {
        // console.log('List :' + JSON.stringify(this.state.list));
        return(
            <DocsContext.Provider value={this.state}>
                {this.props.children}
            </DocsContext.Provider>
        )
    }
}
  
