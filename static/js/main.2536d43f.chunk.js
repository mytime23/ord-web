(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},33:function(e,t,a){e.exports=a(55)},38:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),c=a.n(r),o=(a(38),a(7)),i=a(8),u=a(10),m=a(9),s=a(11),h=a(68),E=a(69),p=a(70),b=a(64),O=a(65),d=a(66),f=a(58),j=a(56),g=a(57),v=a(59),y=a(60),C=a(61),w=a(62),k=a(63),x=(a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(g.a,{tag:f.a,to:"/"},l.a.createElement("img",{src:"/ord-web/Ocean.png",width:"32px",height:"32px",alt:"Logo"}),"    ","ORD WEB"),l.a.createElement(v.a,{onClick:this.toggle}),l.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(C.a,{className:"ml-auto",navbar:!0},l.a.createElement(w.a,null,l.a.createElement(k.a,{tag:f.a,to:"/home"},"\u9996\u9801")),l.a.createElement(w.a,null,l.a.createElement(k.a,{tag:f.a,to:"/about"},"\u95dc\u65bc")),l.a.createElement(w.a,null,l.a.createElement(k.a,{tag:f.a,to:"/docs"},"\u6587\u4ef6"))))),l.a.createElement("div",{className:"main"},this.props.children),l.a.createElement("div",null,l.a.createElement("p",{className:"footer text-center"},"Copyright \xa92019 Tim ")))}}]),t}(n.Component)),W={color:"primary",title:"Context",handeChange:function(){return W.title="Update Context"}},A=l.a.createContext(W),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state=W,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(A.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(N,null,l.a.createElement(x,null,l.a.createElement(b.a,{className:"home",fluid:!0},l.a.createElement(O.a,{className:"topic-1 h-70"},l.a.createElement(O.a,null,l.a.createElement(d.a,{md:{size:12}},l.a.createElement("h1",{className:"display-4 ml-2"},"ORD WEB")),l.a.createElement(d.a,{md:{size:6,offset:1}},l.a.createElement("div",{className:"ml-3 mb-3"},l.a.createElement("img",{src:"/ord-web/images/pic80.jpg",alt:"80x80"}))),l.a.createElement(d.a,{md:{size:5}},l.a.createElement("ul",null,l.a.createElement("li",null,"Ocean Reality Design Web for PWA"),l.a.createElement("li",null,"WEB\u6280\u8853\u5be6\u8e10\u8207\u7d00\u9304"),l.a.createElement("li",null,"\u672a\u4f86WEB\u6280\u8853\u7814\u7a76"),l.a.createElement("li",null,"\u500b\u4eba\u4f5c\u54c1\u5c55\u793a"))))))))}}]),t}(n.Component),P=a(71),D=a(67),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({info:"Hello Context API"})},a.state={info:""},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.info;return l.a.createElement(N,null,l.a.createElement(x,null,l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement(P.a,{color:"success"},e),l.a.createElement(z,{toggle:this.toggle}),l.a.createElement(I,null))))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.props.toggle(event)},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context,t=e.color,a=e.title;return l.a.createElement("div",null,l.a.createElement("h1",null,"PWA APP About Info 2"),l.a.createElement(D.a,{color:t,onClick:this.toggle},a))}}]),t}(n.Component);z.contextType=A;var I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(A.Consumer,null,function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"This is Title List ",t.title),l.a.createElement(D.a,{color:"warning",onClick:function(){return e.setState({handeChange:t.handeChange()})}},"Update"))})}}]),t}(n.Component),R=T,S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(N,null,l.a.createElement(x,null,l.a.createElement(b.a,null,l.a.createElement(O.a,null,l.a.createElement("h1",null,"Docs")))))}}]),t}(n.Component),J=(a(50),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{basename:"/ord-web"},l.a.createElement(E.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:B}),l.a.createElement(p.a,{path:"/home",component:B}),l.a.createElement(p.a,{path:"/about",component:R}),l.a.createElement(p.a,{path:"/docs",component:S})))}}]),t}(n.Component));a(53),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.2536d43f.chunk.js.map