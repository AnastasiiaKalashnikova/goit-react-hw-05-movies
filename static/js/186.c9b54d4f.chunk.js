"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{1687:function(t,r,e){e.d(r,{IQ:function(){return f},Jh:function(){return h},Si:function(){return s},gG:function(){return o},vL:function(){return p}});var n=e(5861),a=e(7757),u=e.n(a),c=e(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=3ba855b17ad290e76ce8340a960fb4fb",s=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/week?".concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r,"&").concat(i,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews?page=1&").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},2324:function(t,r,e){e.d(r,{a:function(){return s}});var n,a=e(2598),u=e(168),c=e(5867).ZP.div(n||(n=(0,u.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n"]))),i=e(184),s=function(t){return t.statuse&&(0,i.jsx)(c,{children:(0,i.jsx)(a.NB,{visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})})}},186:function(t,r,e){e.r(r);var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(1687),s=e(2324),o=e(2791),p=e(5218),f=e(7689),h=e(184);r.default=function(){var t=(0,f.UO)(),r=(0,o.useState)([]),e=(0,a.Z)(r,2),u=e[0],v=e[1],d=(0,o.useState)(!1),l=(0,a.Z)(d,2),w=l[0],m=l[1];return(0,o.useEffect)((function(){function r(){return(r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,(0,i.Jh)(t.movieId);case 4:e=r.sent,v(e.results),r.next=11;break;case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",p.ZP.error("Something went wrong... Try again!"));case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[t.movieId]),(0,h.jsxs)("div",{children:[(0,h.jsx)(s.a,{statuse:w}),0===u.length&&(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:"We don`t have any reviews for this movie."})}),(0,h.jsx)("ul",{children:u.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h4",{children:["Author: ",t.author]}),(0,h.jsx)("p",{children:t.content})]},t.id)}))})]})}}}]);
//# sourceMappingURL=186.c9b54d4f.chunk.js.map