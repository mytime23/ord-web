(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},32:function(e,t,n){e.exports=n(54)},37:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),l=n.n(r),o=(n(37),n(7)),i=n(8),u=n(10),s=n(9),m=n(11),h=n(64),b=n(66),p=n(65),O=n(57),E=n(55),j=n(56),f=n(58),d=n(59),v=n(60),g=n(61),y=n(62),k=(n(23),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggle=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E.a,{color:"dark",dark:!0,expand:"md"},c.a.createElement(j.a,{tag:O.a,to:"/"},c.a.createElement("img",{src:"/ord-web/Ocean.png",width:"32px",height:"32px",alt:"Logo"}),"    ","PWA-APP"),c.a.createElement(f.a,{onClick:this.toggle}),c.a.createElement(d.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(v.a,{className:"ml-auto",navbar:!0},c.a.createElement(g.a,null,c.a.createElement(y.a,{tag:O.a,to:"/home"},"\u9996\u9801")),c.a.createElement(g.a,null,c.a.createElement(y.a,{tag:O.a,to:"/about"},"\u95dc\u65bc")),c.a.createElement(g.a,null,c.a.createElement(y.a,{tag:O.a,to:"/docs"},"\u6587\u4ef6"))))),c.a.createElement("div",{className:"main"},this.props.children),c.a.createElement("div",null,c.a.createElement("p",{className:"footer text-center"},"Copyright \xa92019 Tim ")))}}]),t}(a.Component)),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Home")))}}]),t}(a.Component),w=n(67),x=n(63),P=c.a.createContext({}),A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={color:"primary",title:"Context"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(P.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggle=function(){n.setState({info:"Hello Context API"})},n.state={info:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.info;return c.a.createElement(A,null,c.a.createElement(k,null,c.a.createElement("div",null,c.a.createElement("h1",null,"About"),c.a.createElement(w.a,{color:"success"},e),c.a.createElement(W,{toggle:this.toggle}),c.a.createElement(I,null))))}}]),t}(a.Component),W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggle=function(){n.props.toggle(event)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context,t=e.color,n=e.title;return c.a.createElement("div",null,c.a.createElement("h1",null,"PWA APP About Info 2"),c.a.createElement(x.a,{color:t,onClick:this.toggle},n))}}]),t}(a.Component);W.contextType=P;var I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(P.Consumer,null,function(e){return c.a.createElement("h1",null,"This is Title List ",e.title)})}}]),t}(a.Component),N=T,B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Docs")))}}]),t}(a.Component),H=(n(49),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:C}),c.a.createElement(p.a,{path:"/home",component:C}),c.a.createElement(p.a,{path:"/about",component:N}),c.a.createElement(p.a,{path:"/docs",component:B})))}}]),t}(a.Component));n(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.59cc3503.chunk.js.map