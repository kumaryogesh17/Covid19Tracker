(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,c,a){},14:function(e,c,a){},15:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a.n(s),n=a(4),r=a.n(n),i=(a(11),a(3)),l=a.n(i),d=a(5),j=a(6),h=a(0),m=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),a=c[0],t=c[1],n=function(){var e=Object(d.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a.statewise[0]),t(a.statewise[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Covid 19 Tracker"}),Object(h.jsx)("h2",{children:"Fetching Data from ( https://api.covid19india.org )"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:" "}),"Country"]}),Object(h.jsx)("p",{className:"total_small_card",children:"India"})]})})}),Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:"Total"}),"Recovered"]}),Object(h.jsx)("p",{className:"total_small_card",children:a.recovered})]})})}),Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:"Total"}),"ConfirmedCases"]}),Object(h.jsx)("p",{className:"total_small_card",children:a.confirmed})]})})}),Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:"Total"}),"Death"]}),Object(h.jsx)("p",{className:"total_small_card",children:a.deaths})]})})}),Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:"Total"}),"ActiveCase"]}),Object(h.jsx)("p",{className:"total_small_card",children:a.active})]})})}),Object(h.jsx)("li",{className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[" ",Object(h.jsx)("span",{children:"Last"}),"Updated"]}),Object(h.jsx)("p",{className:"total_small_card",children:a.lastupdatedtime})]})})})]})]})})},b=(a(14),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(m,{})})}),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(c){var a=c.getCLS,s=c.getFID,t=c.getFCP,n=c.getLCP,r=c.getTTFB;a(e),s(e),t(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.029bcefb.chunk.js.map