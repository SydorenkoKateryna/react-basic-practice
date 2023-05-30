"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{123:function(e,t,n){n.d(t,{Z:function(){return a}});var r,o=n(168),i=n(128),c=n(87),s=n(444),l=n(184),u=(0,s.ZP)(c.rU)(r||(r=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #04b3de;\n  }\n"]))),a=function(e){var t=e.to,n=e.children;return(0,l.jsxs)(u,{to:t,children:[(0,l.jsx)(i.jTe,{size:"24"}),n]})}},759:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(433),o=n(439),i=n(689),c=n(87),s=n(791),l=n(123),u=n(184),a=function(){var e=(0,s.useState)(0),t=(0,o.Z)(e,2),n=t[0],r=t[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:n}),(0,u.jsxs)("div",{className:"counter-btn-wrapper",children:[(0,u.jsx)("button",{className:"counter-btn",onClick:function(){r((function(e){return e+1}))},children:"Increment"}),(0,u.jsx)("button",{className:"counter-btn",onClick:function(){r((function(e){return e-1}))},children:"Decrement"})]})]})},d=n(671),f=n(144),h=n(136),p=n(104),j=function(e){(0,h.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,d.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={count:0},e.handleIncrement=function(){e.setState((function(e){return{count:e.count+1}}))},e.handleDecrement=function(){e.setState((function(e){return{count:e.count-1}}))},e}return(0,f.Z)(n,[{key:"render",value:function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:this.state.count}),(0,u.jsxs)("div",{className:"counter-btn-wrapper",children:[(0,u.jsx)("button",{className:"counter-btn",onClick:this.handleIncrement,children:"Increment"}),(0,u.jsx)("button",{className:"counter-btn",onClick:this.handleDecrement,children:"Decrement"})]})]})}}]),n}(s.Component),x=j;function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g="MyButton_myBtn__2yioc",O=["children"],S=function(e){var t=e.children,n=y(e,O);return(0,u.jsx)("button",m(m({},n),{},{className:g,children:t}))},w=function(e){var t=e.post,n=t.id,r=t.title,o=t.body,i=e.number,c=e.remove;return(0,u.jsxs)("div",{className:"post",children:[(0,u.jsxs)("div",{className:"post__content",children:[(0,u.jsxs)("strong",{children:[i,". ",r]}),(0,u.jsx)("div",{children:o})]}),(0,u.jsx)(S,{type:"button",onClick:function(){return c(n)},children:"Delete"})]})},C=function(e){var t=e.posts,n=e.title,r=e.remove;return t.length?(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:n}),t.map((function(e,t){return(0,u.jsx)(w,{post:e,number:t+1,remove:r},e.id)}))]}):(0,u.jsx)("h2",{style:{textAlign:"center"},children:"There are no posts yet..."})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},D="MyInput_myInput__aNZLY",Z=function(e){return(0,u.jsx)("input",m(m({},e),{},{className:D}))},_=function(e){var t=e.create,n=(0,s.useState)({title:"",body:""}),r=(0,o.Z)(n,2),i=r[0],c=r[1];return(0,u.jsxs)("form",{style:{display:"flex",flexDirection:"column",maxWidth:"600px",alignItems:"flex-start"},children:[(0,u.jsx)(Z,{value:i.title,onChange:function(e){return c(m(m({},i),{},{title:e.target.value}))},type:"text",placeholder:"Name of post"}),(0,u.jsx)(Z,{value:i.body,onChange:function(e){return c(m(m({},i),{},{body:e.target.value}))},type:"text",placeholder:"Description of post"}),(0,u.jsx)(S,{type:"submit",onClick:function(e){e.preventDefault();var n=m(m({},i),{},{id:k()});t(n),c({title:"",body:""})},children:"Create a post"})]})},N=function(e){var t=e.options,n=e.defaultValue,r=e.value,o=e.handleSortValueChange;return(0,u.jsxs)("select",{value:r,onChange:function(e){return o(e.target.value)},children:[(0,u.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return(0,u.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},P=function(e){var t=e.filter,n=e.setFilter;return(0,u.jsxs)("div",{children:[(0,u.jsx)(Z,{value:t.query,onChange:function(e){return n(m(m({},t),{},{query:e.target.value}))},placeholder:"Search..."}),(0,u.jsx)(N,{value:t.sort,handleSortValueChange:function(e){return n(m(m({},t),{},{sort:e}))},defaultValue:"Sort by:",options:[{value:"title",name:"Title"},{value:"body",name:"Description"}]})]})},I=function(){var e,t,n=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/practice",d=(0,s.useState)([{id:1,title:"JS 1",body:"Description"},{id:2,title:"JS 2",body:"Description"},{id:3,title:"JS 3",body:"Description"},{id:4,title:"JS 4",body:"Description"},{id:5,title:"JS 5",body:"Description"}]),f=(0,o.Z)(d,2),h=f[0],p=f[1],j=(0,s.useState)({sort:"",query:""}),v=(0,o.Z)(j,2),b=v[0],m=v[1],y=(0,s.useMemo)((function(){return console.log("Sorted Fn worked"),b.sort?(0,r.Z)(h).sort((function(e,t){return e[b.sort].localeCompare(t[b.sort])})):h}),[h,b.sort]),g=(0,s.useMemo)((function(){return y.filter((function(e){return e.title.toLowerCase().includes(b.query.toLowerCase())}))}),[b.query,y]);return(0,u.jsxs)("main",{children:[(0,u.jsx)(l.Z,{to:n,children:"Back to practice"}),(0,u.jsx)("h1",{children:"General"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"test",children:"Test Subpage"})})}),(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading subpage..."}),children:(0,u.jsx)(i.j3,{})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Counter"}),(0,u.jsx)(a,{}),(0,u.jsx)(x,{})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Form"}),(0,u.jsx)(_,{create:function(e){return[p((function(t){return[].concat((0,r.Z)(t),[e])}))]}}),(0,u.jsx)("hr",{style:{margin:"15px 0"}}),(0,u.jsx)(P,{filter:b,setFilter:m})]}),(0,u.jsx)(C,{remove:function(e){p(h.filter((function(t){return t.id!==e})))},posts:g,title:"List of posts"})]})}}}]);
//# sourceMappingURL=759.560f7f3e.chunk.js.map