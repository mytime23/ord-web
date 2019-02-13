import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { IpcNetConnectOpts } from 'net';
// import { inherits } from 'util';
import firebase from './Firebase';
import { number, string, any } from 'prop-types';


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
    isLoading: true,
    lists: Array<InitDocsList>()
}

const InitList = {
    id: number,
    title: string,
    created: string
}

interface InitDocsList {
    id: number
    title: string
    created: string
}

type DocsState = Readonly<typeof InitDocsState>;

export const DocsContext = React.createContext(InitDocsState); // React 16.3 support

export class DocsProvider extends Component<{}, DocsState> {
    readonly state: DocsState = InitDocsState;

    //抓ID 
    // componentDidMount() {
    //     var List = InitList ;
    //     firebase.firestore().collection('news').doc('Ff0SMGJTiBMG8RPcMtmf')
    //     .get()
    //     .then((docSnapshot: any) => {
    //         if (docSnapshot.exists) {
    //             console.log('news:', docSnapshot.data());
    //             const { id, title, created } = docSnapshot.data();
    //             List.id = id;
    //             List.title = title;
    //             List.created = created;
    //             this.setState({
    //                 lists: List
    //             });
    //             // console.log('List:', JSON.stringify(List));
    //         } else {
    //           console.log('no this user')
    //         }
    //       })
    //       .catch((err: Error) => console.log(err));
    // }

    componentDidMount() {
        // var List = Array<InitDocsList>();
        var List = new Array(); 
        firebase.firestore().collection("news").get()
        .then((querySnapshot) => {
            if (querySnapshot) {
                querySnapshot.forEach((doc) => {
                    // console.log(`${doc.id} => ${doc.data()}`);
                    const { id, title, created } = doc.data();
                    List.push({
                        id: id,
                        title: title,
                        created: created
                    });
                });
                this.setState({
                    lists: List,
                    isLoading: false
                });
                // console.log('List =>', JSON.stringify(List));
            } else {
                console.log('找不到最新訊息!')
            }
        })
        .catch((err: Error) => console.log(err));        
    }

    render() {
        console.log('List(render) =>' + JSON.stringify(this.state.lists));
        return(
            <DocsContext.Provider value={this.state}>
                {this.props.children}
            </DocsContext.Provider>
        )
    }
}
  
