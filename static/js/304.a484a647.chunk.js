"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6713:function(n,e,r){r.d(e,{Cb:function(){return o},Fb:function(){return p},IQ:function(){return i},Jh:function(){return f},UF:function(){return s}});var t=r(5861),a=r(4687),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var o=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("3/trending/movie/day",{});case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("3/movie/".concat(e),{});case 2:return r=n.sent,t=r.data,console.log(t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("3/movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,console.log("Cast=",t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("3/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,console.log("Reviews =",t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("3/search/movie",{params:{query:"".concat(e)}});case 2:return r=n.sent,t=r.data,console.log("getAllMovies=>>",t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6304:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(3433),a=r(5861),u=r(9439),c=r(4687),o=r.n(c),s=r(2791),i=r(6713),f=r(1087),p="Home_homeMovies__WfhNE",l=r(184),v=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),r=e[0],c=e[1],v=function(){var n=(0,a.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Cb)();case 3:e=n.sent,r=e.results,c((function(n){return(0,t.Z)(r)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){v()}),[]),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h1",{children:"Trending today"}),r.map((function(n,e){return(0,l.jsx)(f.rU,{to:"".concat(n.id),children:n.title},e)}))]})}}}]);
//# sourceMappingURL=304.a484a647.chunk.js.map