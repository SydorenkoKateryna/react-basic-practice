"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{123:function(e,n,t){t.d(n,{Z:function(){return a}});var r,o=t(168),i=t(128),c=t(87),l=t(444),u=t(184),s=(0,l.ZP)(c.rU)(r||(r=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #04b3de;\n  }\n"]))),a=function(e){var n=e.to,t=e.children;return(0,u.jsxs)(s,{to:n,children:[(0,u.jsx)(i.jTe,{size:"24"}),t]})}},941:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(433),o=t(439),i=t(689),c=t(87),l=t(791),u=function(e,n,t){var o=function(e,n){return(0,l.useMemo)((function(){return n?(0,r.Z)(e).sort((function(e,t){return e[n].localeCompare(t[n])})):e}),[e,n])}(e,n);return(0,l.useMemo)((function(){return o.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}),[t,o])},s=t(123),a=t(184),d=function(){var e=(0,l.useState)(0),n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:t}),(0,a.jsxs)("div",{className:"counter-btn-wrapper",children:[(0,a.jsx)("button",{className:"counter-btn",onClick:function(){r((function(e){return e+1}))},children:"Increment"}),(0,a.jsx)("button",{className:"counter-btn",onClick:function(){r((function(e){return e-1}))},children:"Decrement"})]})]})},f=t(671),h=t(144),p=t(136),j=t(104),v=function(e){(0,p.Z)(t,e);var n=(0,j.Z)(t);function t(){var e;(0,f.Z)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={count:0},e.handleIncrement=function(){e.setState((function(e){return{count:e.count+1}}))},e.handleDecrement=function(){e.setState((function(e){return{count:e.count-1}}))},e}return(0,h.Z)(t,[{key:"render",value:function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:this.state.count}),(0,a.jsxs)("div",{className:"counter-btn-wrapper",children:[(0,a.jsx)("button",{className:"counter-btn",onClick:this.handleIncrement,children:"Increment"}),(0,a.jsx)("button",{className:"counter-btn",onClick:this.handleDecrement,children:"Decrement"})]})]})}}]),t}(l.Component),x=v;function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var C="MyButton_myBtn__2yioc",O=["children"],_=function(e){var n=e.children,t=g(e,O);return(0,a.jsx)("button",y(y({},t),{},{className:C,children:n}))},k=function(e){var n=e.post,t=n.id,r=n.title,o=n.body,i=e.number,c=e.remove;return(0,a.jsxs)("div",{className:"post",children:[(0,a.jsxs)("div",{className:"post__content",children:[(0,a.jsxs)("strong",{children:[i,". ",r]}),(0,a.jsx)("div",{children:o})]}),(0,a.jsx)(_,{type:"button",onClick:function(){return c(t)},children:"Delete"})]})},w=function(e){var n=e.posts,t=e.title,r=e.remove;return n.length?(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:t}),n.map((function(e,n){return(0,a.jsx)(k,{post:e,number:n+1,remove:r},e.id)}))]}):(0,a.jsx)("h2",{style:{textAlign:"center"},children:"There are no posts yet..."})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},Z="MyInput_myInput__aNZLY",M=function(e){return(0,a.jsx)("input",y(y({},e),{},{className:Z}))},N=function(e){var n=e.create,t=(0,l.useState)({title:"",body:""}),r=(0,o.Z)(t,2),i=r[0],c=r[1];return(0,a.jsxs)("form",{style:{display:"flex",flexDirection:"column",maxWidth:"600px",alignItems:"flex-start"},children:[(0,a.jsx)(M,{value:i.title,onChange:function(e){return c(y(y({},i),{},{title:e.target.value}))},type:"text",placeholder:"Name of post"}),(0,a.jsx)(M,{value:i.body,onChange:function(e){return c(y(y({},i),{},{body:e.target.value}))},type:"text",placeholder:"Description of post"}),(0,a.jsx)(_,{type:"submit",onClick:function(e){e.preventDefault();var t=y(y({},i),{},{id:S()});n(t),c({title:"",body:""})},children:"Create"})]})},D=function(e){var n=e.options,t=e.defaultValue,r=e.value,o=e.handleSortValueChange;return(0,a.jsxs)("select",{value:r,onChange:function(e){return o(e.target.value)},children:[(0,a.jsx)("option",{disabled:!0,value:"",children:t}),n.map((function(e){return(0,a.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},P=function(e){var n=e.filter,t=e.setFilter;return(0,a.jsxs)("div",{children:[(0,a.jsx)(M,{value:n.query,onChange:function(e){return t(y(y({},n),{},{query:e.target.value}))},placeholder:"Search..."}),(0,a.jsx)(D,{value:n.sort,handleSortValueChange:function(e){return t(y(y({},n),{},{sort:e}))},defaultValue:"Sort by:",options:[{value:"title",name:"Title"},{value:"body",name:"Description"}]})]})},I="MyModal_myModal__vrZhj",V="MyModal_active__Mh-j3",L="MyModal_myModalContent__RfrMF",T=function(e){var n=e.children,t=e.visible,r=e.setVisible,o=[I];return t&&o.push(V),(0,a.jsx)("div",{className:o.join(" "),onClick:function(){return r(!1)},children:(0,a.jsx)("div",{className:L,onClick:function(e){return e.stopPropagation()},children:n})})},q=function(){var e,n,t=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/practice",f=(0,l.useState)([]),h=(0,o.Z)(f,2),p=h[0],j=h[1],v=(0,l.useState)({sort:"",query:""}),m=(0,o.Z)(v,2),b=m[0],y=m[1],g=(0,l.useState)(!1),C=(0,o.Z)(g,2),O=C[0],k=C[1],S=u(p,b.sort,b.query);return(0,a.jsxs)("main",{children:[(0,a.jsx)(s.Z,{to:t,children:"Back to practice"}),(0,a.jsx)("h1",{children:"General"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"test",children:"Test Subpage"})})}),(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading subpage..."}),children:(0,a.jsx)(i.j3,{})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Counter"}),(0,a.jsx)(d,{}),(0,a.jsx)(x,{})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Form"}),(0,a.jsx)(_,{onClick:function(){return k(!0)},children:"Create a post"}),(0,a.jsx)("hr",{style:{margin:"15px 0"}}),(0,a.jsx)(P,{filter:b,setFilter:y})]}),(0,a.jsx)(w,{remove:function(e){j(p.filter((function(n){return n.id!==e})))},posts:S,title:"List of posts"}),(0,a.jsx)(T,{visible:O,setVisible:k,children:(0,a.jsx)(N,{create:function(e){j((function(n){return[].concat((0,r.Z)(n),[e])})),k(!1)}})})]})}}}]);
//# sourceMappingURL=941.e702c806.chunk.js.map