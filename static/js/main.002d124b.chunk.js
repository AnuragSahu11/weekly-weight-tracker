(this.webpackJsonpweightracker=this.webpackJsonpweightracker||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),h=a(57),i=a.n(h),c=a(21),d=a(60),r=a(1);var s=function(e){var t={labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],datasets:[{label:"Weight",data:e.weekData}]};return Object(r.jsx)("div",{className:"LineChart",children:Object(r.jsx)(d.a,{data:t})})};a(172);var l=function(e){return Object(r.jsxs)("div",{className:"Inputs",children:[Object(r.jsx)("input",{type:"text",placeholder:"Sunday weight",id:0,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Monday weight",id:1,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Tuesday weight",id:2,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Wednesday weight",id:3,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Thursday weight",id:4,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Friday weight",id:5,onChange:e.handleChange}),Object(r.jsx)("input",{type:"text",placeholder:"Saturday weight",id:6,onChange:e.handleChange})]})};var j=function(){var e=Object(n.useState)([1,1,1,1,1,1,1]),t=Object(c.a)(e,2),a=t[0],h=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Weekly Weight Tracker"}),Object(r.jsx)(s,{weekData:a}),Object(r.jsx)(l,{handleChange:function(e){var t=a.map((function(t,a){return a===parseInt(e.target.id)?e.target.value:t}));h(t)}})]})};i.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.002d124b.chunk.js.map