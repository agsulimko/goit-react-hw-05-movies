"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6713:function(e,n,t){t.d(n,{Cb:function(){return c},Fb:function(){return f},IQ:function(){return s},Jh:function(){return i},UF:function(){return o}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/trending/movie/day",{});case 2:return n=e.sent,t=n.data,console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n),{});case 2:return t=e.sent,a=t.data,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n,"/credits"));case 2:return t=e.sent,a=t.data,console.log("Cast=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n,"/reviews"));case 2:return t=e.sent,a=t.data,console.log("Reviews =",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/search/movie",{params:{query:"".concat(n)}});case 2:return t=e.sent,a=t.data,console.log("getAllMovies=>>",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},6304:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(4165),a=t(3433),u=t(5861),c=t(9439),o=t(2791),s=t(6713),i=t(7689),f=t(1087),p="Home_homeMovies__WfhNE",l=t(184),v=function(){var e=(0,i.TH)(),n=(0,o.useState)([]),t=(0,c.Z)(n,2),v=t[0],d=t[1],h=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Cb)();case 3:n=e.sent,t=n.results,d((function(e){return(0,a.Z)(t)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){h()}),[]),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h1",{children:"Trending today"}),v.map((function(n,t){return(0,l.jsx)(f.rU,{to:"".concat(n.id),state:{from:e},children:n.title},t)}))]})}}}]);
//# sourceMappingURL=304.b262e590.chunk.js.map