"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[547],{6713:function(e,t,n){n.d(t,{Cb:function(){return s},Fb:function(){return f},IQ:function(){return i},Jh:function(){return p},UF:function(){return o}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var s=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/trending/movie/day",{});case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t),{});case 2:return n=e.sent,r=n.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,console.log("Cast=",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,console.log("Reviews =",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/search/movie",{params:{query:"".concat(t)}});case 2:return n=e.sent,r=n.data,console.log("getAllMovies=>>",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},547:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(3433),a=n(5861),c=n(9439),u=n(4687),s=n.n(u),o=n(2791),i=n(6713),p=n(7689),f="Cast_divCast__qO2oy",l="Cast_cardCast__gpxKx",v="Cast_text__WPJ4q",d=n(184),h=function(){var e=(0,p.UO)().moveId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),u=n[0],h=n[1],m=(0,o.useState)(null),x=(0,c.Z)(m,2),w=x[0],b=x[1],g=function(){var t=(0,a.Z)(s().mark((function t(){var n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.IQ)(e);case 3:n=t.sent,a=n.cast,console.log(a),h((function(e){return(0,r.Z)(a)})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b(w.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){g()}),[]),(0,d.jsx)("div",{className:f,children:u.map((function(e,t){return e.profile_path?(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{className:"center-block img-responsive",width:"150px",src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,d.jsx)("p",{className:v,children:e.name}),(0,d.jsx)("p",{className:v,children:"Character: ".concat(e.character)})]},t):null}))})}}}]);
//# sourceMappingURL=547.d54936a3.chunk.js.map