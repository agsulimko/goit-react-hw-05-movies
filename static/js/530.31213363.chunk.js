"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{6713:function(e,t,n){n.d(t,{Cb:function(){return s},Fb:function(){return l},IQ:function(){return o},Jh:function(){return i},UF:function(){return c}});var r=n(4165),a=n(5861),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/trending/movie/day",{});case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t),{});case 2:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t,"/credits"));case 2:return n=e.sent,a=n.data,console.log("Cast=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(t,"/reviews"));case 2:return n=e.sent,a=n.data,console.log("Reviews =",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/search/movie",{params:{query:"".concat(t)}});case 2:return n=e.sent,a=n.data,console.log("getAllMovies=>>",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7530:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(4165),a=n(3433),u=n(5861),s=n(9439),c=n(2791),o=n(6713),i=n(7689),l=n(1087),f={listMovies:"Movies_listMovies__lbxuM"},p=n(3874),v=n(4554),d=n(6314),h=n(8571),m=n(184),Z=function(){var e,t=(0,i.TH)(),n=(0,c.useState)([]),Z=(0,s.Z)(n,2),x=Z[0],b=Z[1],w=(0,c.useState)(""),g=(0,s.Z)(w,2),y=g[0],k=g[1],j=(0,l.lr)(),C=(0,s.Z)(j,2),_=C[0],M=C[1],S=null!==(e=_.get("query"))&&void 0!==e?e:"",q=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Fb)(S);case 3:t=e.sent,n=t.results,b((function(e){return(0,a.Z)(n)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){q()}),[]);return(0,m.jsxs)("div",{className:f.divGoBack,children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y?(q(),k("")):alert("Enter your request")},children:[(0,m.jsxs)(v.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,m.jsx)(p.Z,{type:"text",name:"title",size:"small",sx:{m:1,width:"35ch"},style:{backgroundColor:"rgb(212, 242, 232)"},className:"form-control",onChange:function(e){var t=e.target.value.trim().toLowerCase();t?(M({query:t}),k(t)):(M({}),k(""))},value:S||"",id:"input-with-sx",label:"Search movies",variant:"outlined",margin:"dense"}),(0,m.jsx)(h.Z,{type:"submit",variant:"outlined",children:"Search"})]}),(0,m.jsx)(d.Z,{spacing:2,direction:"row"})]}),(0,m.jsx)("ul",{className:f.listMovies,children:x.map((function(e,n){return(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"/".concat(e.id),state:{from:t},children:e.title})},n)}))})]})}}}]);
//# sourceMappingURL=530.31213363.chunk.js.map