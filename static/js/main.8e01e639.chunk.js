(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(31),a(32),a(2)),l=a(6),o=a(8),d=a.p+"static/media/green-tick.31d040dd.svg",j=a.p+"static/media/wrong-icon.0c1f21d7.svg",m=a(9),u=a.n(m),b=(a(33),a(0));var h=function(e){var t=e.type,a=e.icon,s=e.value,n=e.handler,i=Object(c.useState)(""),r=Object(l.a)(i,2),m=r[0],h=r[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),O=v[0],x=v[1],g=Object(c.useState)(""),f=Object(l.a)(g,2),N=f[0],w=f[1],k=Object(c.useState)(""),S=Object(l.a)(k,2),C=S[0],y=S[1];Object(c.useEffect)((function(){if("name"===t)s.length>5&&h(!1);else if("password"===t){s.length>5&&h(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(s))}}),[s]);var T="text"===t?"Name":"email"===t?"Email":"Password";return Object(b.jsxs)("div",{className:"input-wrapper",children:[Object(b.jsxs)("div",{className:u()(Object(o.a)({},"warning-field",O||N||C),"input-field"),children:[Object(b.jsx)("img",{src:a,className:"user-icon",alt:"icon"}),Object(b.jsx)("input",{value:s,onChange:n,onBlur:function(){return function(){if("password"===t){var e=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;h(!e.test(s)),e.test(s)?x(""):x("Password should contain atleast 6 charecters")}else if("email"===t){var a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;h(!a.test(String(s).toLowerCase())),!0===a.test(String(s).toLowerCase())?(y(""),h(!1)):(y("Invalid Email ID"),h(!0))}else s.length<5?(h(!0),w("Name should have more that 5 charecters")):(h(!1),w(""))}()},className:"input",autoComplete:"off",placeholder:T,type:t}),m&&Object(b.jsx)("img",{src:j}),!1===m&&Object(b.jsx)("img",{src:d,className:"green-tick"})]}),"password"===t&&Object(b.jsx)("label",{className:"warning-label",children:O}),"text"===t&&N&&Object(b.jsx)("label",{className:"warning-label",children:N}),"email"===t&&C&&Object(b.jsx)("label",{className:"warning-label",children:C})]})},p=a.p+"static/media/icon.35dbc1cb.svg",v=a.p+"static/media/at-icon.512dbb18.svg",O=a.p+"static/media/arrow.840ca64b.svg",x=a.p+"static/media/lock.e1b8a009.svg",g=a.p+"static/media/logo.ad688cb8.svg";a(35);var f=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(c.useState)(""),m=Object(l.a)(j,2),u=m[0],f=m[1],N=Object(c.useState)(!1),w=Object(l.a)(N,2),k=w[0],S=w[1],C=Object(c.useState)(""),y=Object(l.a)(C,2),T=y[0],P=y[1];return Object(b.jsxs)("div",{className:"register-layout",children:[Object(b.jsxs)("div",{className:"input-wrapper-container",children:[Object(b.jsxs)("div",{className:"input-container",children:[Object(b.jsx)("div",{className:"card-title",children:"Let\u2019s Get Started."}),Object(b.jsxs)("div",{className:"card-content",children:["Discover the best places in the world ",Object(b.jsx)("br",{})," at your fingertips!"]}),Object(b.jsx)(h,{icon:p,type:"text",value:s,handler:function(e){return n(e.target.value)}}),Object(b.jsx)(h,{icon:v,type:"email",value:o,handler:function(e){return d(e.target.value)}}),Object(b.jsx)(h,{icon:x,type:"password",value:u,handler:function(e){return f(e.target.value)}}),Object(b.jsxs)("label",{className:"container",children:[Object(b.jsxs)("div",{className:"terms-text",children:["I agree to the ",Object(b.jsx)("a",{children:"Terms"})," and ",Object(b.jsx)("a",{children:"Privacy Policy"})]}),".",Object(b.jsx)("input",{type:"checkbox",checked:k,onChange:function(){return S(!k)}}),Object(b.jsx)("span",{className:"checkmark"})]}),!k&&Object(b.jsx)("label",{className:"warning-label",children:T})]}),Object(b.jsx)("div",{className:"end-container",children:Object(b.jsx)("div",{children:Object(b.jsxs)("button",{className:"button-container",onClick:function(){return t=s,a=o,c=u,n=k,P(!0!==k?"Please Confirm Terms and Condition":""),void(n&&t&&a&&c&&(console.log(t,a,c,n,e.history),localStorage.setItem("name",t),localStorage.setItem("email",a),localStorage.setItem("password",c),e.history.push("/home")));var t,a,c,n},children:[Object(b.jsx)("div",{className:"btn-text",children:"SIGN UP"}),Object(b.jsx)("img",{src:O,className:"arrow",alt:"icon"})]})})})]}),Object(b.jsx)("div",{className:"side-wrapper",children:Object(b.jsx)("img",{src:g,className:"logo",alt:""})})]})},N=a(25),w=a(20),k=a(21),S=a(26),C=a(24),y=(a(36),a.p+"static/media/grid-view-icon.2369dff4.svg"),T=a.p+"static/media/list-view-icon.0b865a5e.svg";var P=function(e){var t=e.selectedView,a=e.viewChangeHandler,c=[{path:y},{path:T}];return Object(b.jsx)("div",{className:"view-wrapper",children:c.map((function(e,c){return Object(b.jsx)("div",{onClick:function(){return a(c)},className:u()(Object(o.a)({},"selectedListIcon-container",t===c),"listIcon-container"),children:Object(b.jsx)("img",{className:"icon",src:e.path})},c)}))})},I=(a(37),a(38),a.p+"static/media/place-1.1fd8bd9a.png"),D=a.p+"static/media/message-square.aac1acbd.svg",A=a.p+"static/media/heart-1.b6e59eef.svg";var L=function(e){var t,a=e.item,c=e.index,s=(e.checked,e.handleCheck),n=e.view;return Object(b.jsxs)("div",{className:u()((t={},Object(o.a)(t,"cardSelected",!0===a.checked),Object(o.a)(t,"cardListView",1===n),t)," card"),onClick:function(){return!0===a.checked?a.checked=!1:a.checked=!a.checked,void s(a,c)},children:[Object(b.jsxs)("div",{className:"card-sec",children:[Object(b.jsx)("img",{src:a.path,className:"place"}),Object(b.jsx)("div",{className:"label-container",children:a&&a.labels&&a.labels.map((function(e){return Object(b.jsx)("span",{className:"label",children:e})}))}),Object(b.jsx)("label",{className:"card-title",children:a.contenet}),Object(b.jsx)("div",{className:"card-content",children:a.contenetText})]}),Object(b.jsxs)("div",{className:"icon-click-wrapper",children:[Object(b.jsx)("img",{src:D,className:"icon",alt:""}),Object(b.jsx)("img",{src:A,className:"icon",alt:""})]}),Object(b.jsxs)("label",{className:"container",children:[Object(b.jsx)("div",{className:"terms-text"}),Object(b.jsx)("input",{type:"checkbox",checked:a.checked}),Object(b.jsx)("span",{className:"checkmark"})]})]})},q=a.p+"static/media/place-2.f8286438.png",B=a.p+"static/media/place-3.54a12266.png",F=a.p+"static/media/place-4.1778fe1e.png",$=a.p+"static/media/place-5.1bb4ae53.png",z=a.p+"static/media/place-6.4ebd776d.png",E=a.p+"static/media/place-7.26a113e5.png",H=a.p+"static/media/place-8.089d1d9a.png",V=a.p+"static/media/menu.c40a43fe.svg",W=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(e){var c;return Object(w.a)(this,a),(c=t.call(this,e)).state={viewState:0,cardData:[{path:q,contenet:"Khartoum",contenetText:"Aenean lacinia bibendum nulla sed consectetur.",labels:["Wellington","Tianjin"],checked:!1},{path:I,contenet:"Santa Clara",contenetText:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",labels:["Salt Lake City","Seville"],checked:!1},{path:B,contenet:"Bengaluru",contenetText:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Puebla"],checked:!1},{path:F,contenet:"Portland",contenetText:"Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Sacramento","Osaka","Astana"],checked:!1},{path:$,contenet:"Fairbanks",contenetText:"Pellentesque ornare sem lacinia quam venenatis vestibulum.",labels:["Belgrade","Cali","Stockholm"],checked:!1},{path:z,contenet:"Sofia",contenetText:"Pellentesque ornare sem lacinia quam venenatis vestibulum.",labels:["Trondheim","Xian"],checked:!1},{path:E,contenet:"Belfast",contenetText:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.",labels:["Aarhus","Ankara"],checked:!1},{path:H,contenet:"Pune",contenetText:"Mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Sylhet"],checked:!1}]},c}return Object(k.a)(a,[{key:"checkHandler",value:function(e,t){this.state.cardData;var a=this.state.cardData.findIndex((function(t){return t.contenet==e.contenet})),c=Object(N.a)(this.state.cardData);console.log(c[a].checked),this.setState({cardData:c})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cardData,c=t.viewState;t.checkedVal;return Object(b.jsxs)("div",{className:"dashboard-wrapper",children:[Object(b.jsxs)("div",{className:"header-wrapper",children:[Object(b.jsxs)("div",{className:"header-title",children:["Discover great places to visit ",Object(b.jsx)(P,{selectedView:c,viewChangeHandler:function(t){return e.setState({viewState:t})}})]}),Object(b.jsx)("img",{src:g,alt:"",className:"show-logo"}),Object(b.jsx)("img",{src:V,alt:"",className:"show-menu"})]}),Object(b.jsx)("div",{className:"card-wrapper",children:a.map((function(t,a){return Object(b.jsx)(L,{item:t,index:a,view:c,handleCheck:function(t,a){return e.checkHandler(t,a)}},a)}))})]})}}]),a}(c.Component),Z=(a(39),a.p+"static/media/home.11f532c3.svg"),G=a.p+"static/media/compass.638bdf19.svg",J=a.p+"static/media/briefcase.e1e238d5.svg",M=a.p+"static/media/gear.15b00b82.svg",K=a.p+"static/media/bell.3cfd10ee.svg",U=a.p+"static/media/log-out.3a5d4ca4.svg";var X=function(e){var t=Object(c.useState)(0),a=Object(l.a)(t,2),s=a[0],n=a[1],i=[{path:Z},{path:G},{path:J},{path:M},{path:K}];return console.log(s),Object(b.jsxs)("div",{className:"sidebarWrapper",children:[Object(b.jsxs)("div",{className:"sectionOne",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)("img",{src:g,alt:"",className:"icon"})}),i.map((function(e,t){return Object(b.jsx)("div",{className:u()(Object(o.a)({},"selected-container",s===t),"icon-container"),onClick:function(){return n(t)},children:Object(b.jsx)("img",{src:e.path,alt:"",className:"icon"})},t)}))]}),Object(b.jsx)("div",{className:"sectionTwo",children:Object(b.jsx)("div",{className:"icon-container",children:Object(b.jsx)("img",{src:U,alt:"",className:"icon"})})})]})};a(40);var Q=function(){return Object(b.jsxs)("div",{className:"home-wrapper",children:[Object(b.jsx)(X,{}),Object(b.jsx)(W,{})]})};var R=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(r.a,{exact:!0,path:"/home",component:Q})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))},_=a(16);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(_.a,{basename:"travel-app",children:Object(b.jsx)(R,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Y()}},[[49,1,2]]]);
//# sourceMappingURL=main.8e01e639.chunk.js.map