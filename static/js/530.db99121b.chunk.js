"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{6713:function(e,t,r){r.d(t,{Cb:function(){return o},Fb:function(){return l},IQ:function(){return i},Jh:function(){return u},UF:function(){return c}});var n=r(4165),a=r(5861),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/",s.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/trending/movie/day",{});case 2:return t=e.sent,r=t.data,console.log("getAllMoviesTrending=",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t),{});case 2:return r=e.sent,a=r.data,console.log("getMoviesTrending=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/credits"));case 2:return r=e.sent,a=r.data,console.log("Cast=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/reviews"));case 2:return r=e.sent,a=r.data,console.log("Reviews =",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/search/movie",{params:{query:"".concat(t)}});case 2:return r=e.sent,a=r.data,console.log("getAllMovies=>>",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7530:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(4165),a=r(3433),s=r(5861),o=r(9439),c=r(2791),i=r(6713),u=r(7689),l=r(1087),p={listMovies:"Movies_listMovies__lbxuM",home:"Movies_home__7CsFj",home_div:"Movies_home_div__Apmeb"},f=r(3874),v=r(4554),d=r(6314),m=r(8571),h=r(184),Z=function(){var e,t=(0,u.TH)(),r=(0,c.useState)([]),Z=(0,o.Z)(r,2),x=Z[0],g=Z[1],b=(0,c.useState)(""),w=(0,o.Z)(b,2),_=w[0],k=w[1],y=(0,l.lr)(),j=(0,o.Z)(y,2),M=j[0],C=j[1],S=null!==(e=M.get("query"))&&void 0!==e?e:"",N=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Fb)(S);case 3:t=e.sent,r=t.results,g((function(e){return(0,a.Z)(r)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){N()}),[]);return(0,h.jsxs)("div",{className:p.divGoBack,children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_?(N(),k("")):alert("Enter your request")},children:[(0,h.jsxs)(v.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,h.jsx)(f.Z,{type:"text",name:"title",size:"small",sx:{m:1,width:"35ch"},style:{backgroundColor:"rgb(212, 242, 232)"},className:"form-control",onChange:function(e){var t=e.target.value.trim().toLowerCase();t?(C({query:t}),k(t)):(C({}),k(""))},value:S||"",id:"input-with-sx",label:"Search movies",variant:"outlined",margin:"dense"}),(0,h.jsx)(m.Z,{type:"submit",variant:"outlined",children:"Search"})]}),(0,h.jsx)(d.Z,{spacing:2,direction:"row"})]}),(0,h.jsx)("ul",{className:p.listMovies,children:x.map((function(e,r){return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"/".concat(e.id),state:{from:t},children:(0,h.jsxs)("div",{className:p.home_div,children:[(0,h.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),e.title]})})},r)}))})]})}}}]);
//# sourceMappingURL=530.db99121b.chunk.js.map