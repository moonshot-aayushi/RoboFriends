(this.webpackJsonprobofrenz=this.webpackJsonprobofrenz||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),s=n(2),i=n(3),h=n(4),u=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(u,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},f=function(e){Object(h.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOOPs. That is not good."):this.props.children}}]),n}(a.Component),p=(n(13),function(e){Object(h.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(m,{robots:t}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.d33db13c.chunk.js.map