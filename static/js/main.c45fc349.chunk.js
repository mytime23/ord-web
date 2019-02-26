(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(40),r=a.n(c),i=(a(84),a(7)),o=a(8),s=a(10),u=a(9),m=a(11),d=a(169),h=a(170),p=a(171),E=a(159),g=a(160),f=a(161),b=a(162),O=a(163),v=a(164),y=a(165),j=a(152),w=a(158),C=a(150),x=a(151),k=a(153),A=a(154),N=a(155),z=a(156),R=a(157),P=(a(59),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(x.a,{tag:j.a,to:"/"},l.a.createElement("img",{src:"/ord-web/Ocean.png",width:"32px",height:"32px",alt:"Logo"}),"    ","ORD WEB"),l.a.createElement(k.a,{onClick:this.toggle}),l.a.createElement(A.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(N.a,{className:"ml-auto",navbar:!0},l.a.createElement(z.a,null,l.a.createElement(R.a,{tag:j.a,to:"/"},"Home")),l.a.createElement(z.a,null,l.a.createElement(R.a,{tag:j.a,to:"/about"},"About")),l.a.createElement(z.a,null,l.a.createElement(R.a,{tag:j.a,to:"/docs"},"Docs")),l.a.createElement(z.a,null,l.a.createElement(R.a,{href:"https://github.com/mytime23/ord-web"},"GitHub"))))),l.a.createElement(w.a,{className:"home",fluid:!0},this.props.children),l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"text-center"},"Copyright \xa92019 Tim v0.1.6 ")))}}]),t}(n.Component)),S=a(57);a(141);S.initializeApp({apiKey:"AIzaSyB7C7h-gZRHtIbBnUTLxdiF_iFeBTFadPY",authDomain:"ocean-358c2.firebaseapp.com",databaseURL:"https://ocean-358c2.firebaseio.com",projectId:"ocean-358c2",storageBucket:"ocean-358c2.appspot.com",messagingSenderId:"233581114598"});var T=S,W=a(0),D={color:"primary",title:"Context",docsTitle:"\u6587\u4ef6",toggle:!1,count:0,handeChange:function(e){return D.toggle=!e,D.title=D.toggle?"Update Context!":"",D.color=D.toggle?"primary":"warning",D},handleAdd:function(){return D.count<=9?D.count++:D.count,D.count},handleSub:function(){return D.count>=1?D.count--:D.count,D.count}},I=l.a.createContext(D),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state=D,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(I.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),U={docsTitle:"\u6587\u4ef6",isLoading:!0,lists:Array()},V=(W.number,W.string,W.string,l.a.createContext(U)),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state=U,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Array;T.firestore().collection("news").get().then(function(a){a?(a.forEach(function(e){var a=e.data(),n=a.id,l=a.title,c=a.created;t.push({id:n,title:l,created:c})}),e.setState({lists:t,isLoading:!1})):console.log("\u627e\u4e0d\u5230\u6700\u65b0\u8a0a\u606f!")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return console.log("List(render) =>"+JSON.stringify(this.state.lists)),l.a.createElement(V.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(B,null,l.a.createElement(P,null,l.a.createElement(E.a,{className:"topic-1 h-70",style:{backgroundImage:"url(/ord-web/images/ocean_min.jpg)",opacity:.8}},l.a.createElement(g.a,{md:{size:10,offset:1}},l.a.createElement(E.a,null,l.a.createElement(g.a,{md:{size:12}},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h1",{className:"display-4 text-center mt-5"},"Ocean Reality Design")),l.a.createElement("ul",{className:"list",style:{margin:80}},l.a.createElement("li",null,"AR/VR Applicaiton Design"),l.a.createElement("li",null,"Front-End Web Technology"),l.a.createElement("li",null,"ORD Demo")))))),l.a.createElement(E.a,{className:"topic-2 h-70"},l.a.createElement(g.a,{md:{size:10,offset:1}},l.a.createElement(E.a,null,l.a.createElement(g.a,{md:{size:12}},l.a.createElement("h1",{className:"display-4 ml-2"},"Application")),l.a.createElement(g.a,{md:{size:4,offset:2}},l.a.createElement("ul",null,l.a.createElement("li",null,"Progressive Web App"),l.a.createElement("li",null,"Desktop App"),l.a.createElement("li",null,"AR/VR App"))),l.a.createElement(g.a,{md:{size:4}},l.a.createElement("div",{className:"ml-3 mb-3"},l.a.createElement("img",{src:"/ord-web/images/pic80.jpg",alt:"80x80"})))))),l.a.createElement(E.a,{className:"topic-3 h-70"},l.a.createElement(g.a,{md:{size:10,offset:1}},l.a.createElement(E.a,null,l.a.createElement(g.a,{md:{size:12}},l.a.createElement("h1",{className:"display-4 ml-2"},"Technology")),l.a.createElement(g.a,{md:{size:4,offset:2}},l.a.createElement("div",{className:"ml-3 mb-3"},l.a.createElement("img",{src:"/ord-web/images/pic80.jpg",alt:"80x80"}))),l.a.createElement(g.a,{md:{size:4}},l.a.createElement("ul",null,l.a.createElement("li",null,"Build Progressive Web App Using React "),l.a.createElement("li",null,"Build Desktop App Using Electron"),l.a.createElement("li",null,"Build AR/VR App Using React 360")))))),l.a.createElement(E.a,{className:"topic-2 h-70"},l.a.createElement(g.a,{md:{size:10,offset:1}},l.a.createElement(E.a,null,l.a.createElement(g.a,{md:{size:3}},l.a.createElement(f.a,{className:"card-margin"},l.a.createElement(b.a,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),l.a.createElement(O.a,null,l.a.createElement(v.a,null,"Photo"),l.a.createElement(y.a,null,"View photos in Virtual Reality")))),l.a.createElement(g.a,{md:{size:3}},l.a.createElement(f.a,{className:"card-margin"},l.a.createElement(b.a,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),l.a.createElement(O.a,null,l.a.createElement(v.a,null,"Music"),l.a.createElement(y.a,null,"Play music in Virtual Reality Play music in Virtual Reality")))),l.a.createElement(g.a,{md:{size:3}},l.a.createElement(f.a,{className:"card-margin"},l.a.createElement(b.a,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),l.a.createElement(O.a,null,l.a.createElement(v.a,null,"Video"),l.a.createElement(y.a,null,"Watch Youtube in a Virtual Reality environment")))),l.a.createElement(g.a,{md:{size:3}},l.a.createElement(f.a,{className:"card-margin"},l.a.createElement(b.a,{top:!0,width:"100%",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",alt:"Card image cap"}),l.a.createElement(O.a,null,l.a.createElement(v.a,null,"Game"),l.a.createElement(y.a,null,"Playe Game on Virtual Reality")))))))))}}]),t}(n.Component),H=a(172),G=a(166),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({info:"Hello Context API",isOpen:!a.state.isOpen})},a.state={info:"",isOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.info,a=e.isOpen;return l.a.createElement(B,null,l.a.createElement(P,null,l.a.createElement(E.a,{className:"h-70"},l.a.createElement(g.a,{md:{size:10,offset:1}},l.a.createElement("h1",{className:"display-4 ml-2"},"About"),l.a.createElement(H.a,{isOpen:a,color:"success"},t),l.a.createElement(M,{toggle:this.toggle}),l.a.createElement(Y,null),l.a.createElement(_,null)))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.props.toggle(event)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.context.color;return l.a.createElement("div",null,l.a.createElement("h1",null,"\u4f7f\u7528 Content API"),l.a.createElement(G.a,{color:e,onClick:this.toggle},"Alert"))}}]),t}(n.Component);M.contextType=I;var Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(I.Consumer,null,function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"\u4f7f\u7528 Content API ",t.title),l.a.createElement(G.a,{color:"warning",onClick:function(){var a=t.toggle;return e.setState({handeChange:t.handeChange(a)})}},"Update"))})}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(I.Consumer,null,function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Content API \u8a08\u6578\u5668\uff1a ",t.count),l.a.createElement(G.a,{color:"primary",onClick:function(){return e.setState({handleAdd:t.handleAdd()})}},"\u589e\u52a0"),"             ",l.a.createElement(G.a,{color:"success",onClick:function(){return e.setState({handleAdd:t.handleSub()})}},"\u6e1b\u5c11"))})}}]),t}(n.Component),K=J,Z=a(167),$=a(168),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(L,null,l.a.createElement(P,null,l.a.createElement(w.a,null,l.a.createElement(E.a,null,l.a.createElement("h1",null,"Docs"),l.a.createElement(Q,null)))))}}]),t}(n.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.context,a=t.docsTitle,n=t.lists;return e=t.isLoading?l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(Z.a,{color:"primary"}))):n.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,e.title),l.a.createElement("td",null),l.a.createElement("td",null,e.created))}),l.a.createElement("div",null,l.a.createElement("h1",null,"\u4f7f\u7528 Content API ",a),l.a.createElement($.a,{striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\u6a19\u984c"),l.a.createElement("th",null,"\u8aaa\u660e"),l.a.createElement("th",null,"\u5efa\u7acb\u65e5\u671f"))),l.a.createElement("tbody",null,e)))}}]),t}(n.Component);Q.contextType=V;var X=q,ee=(a(146),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/ord-web"},l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:F}),l.a.createElement(p.a,{exact:!0,path:"/about",component:K}),l.a.createElement(p.a,{exact:!0,path:"/docs",component:X})))}}]),t}(n.Component)),te=(a(148),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ae(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ord-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ord-web","/service-worker.js");te?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ae(t,e)})}}()},59:function(e,t,a){},79:function(e,t,a){e.exports=a(149)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.c45fc349.chunk.js.map