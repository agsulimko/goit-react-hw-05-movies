"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{6713:function(e,t,n){n.d(t,{Cb:function(){return c},Fb:function(){return l},IQ:function(){return u},Jh:function(){return o},UF:function(){return i}});var r=n(4165),a=n(5861),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/",s.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/trending/movie/day",{});case 2:return t=e.sent,n=t.data,console.log("getAllMoviesTrending=",n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t),{});case 2:return n=e.sent,a=n.data,console.log("getMoviesTrending=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/credits"));case 2:return n=e.sent,a=n.data,console.log("Cast=",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/reviews"));case 2:return n=e.sent,a=n.data,console.log("Reviews =",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/search/movie",{params:{query:"".concat(t)}});case 2:return n=e.sent,a=n.data,console.log("getAllMovies=>>",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4274:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(4165),a=n(3433),s=n(5861),c=n(9439),i=n(2791),u=n(7689),o=n(1087),l=n(6713),d="MoviesDetails_divGoBack__NYjGe",v="MoviesDetails_GoBack__rXay-",p="MoviesDetails_divDetails__MRggn",f="MoviesDetails_listCast__8uDxb",h="MoviesDetails_img__qPO0V",m="MoviesDetails_title__sF6b5",x=n(184),Z=function(){var e,t=(0,u.TH)(),n=(0,i.useRef)(null!==(e=t.state&&t.state.from)&&void 0!==e?e:"/movies"),Z=(0,u.UO)().movieId,_=(0,i.useState)(null),g=(0,c.Z)(_,2),j=g[0],w=g[1],b=(0,i.useState)(null),k=(0,c.Z)(b,2),y=k[0],M=k[1],S=(0,i.useState)(null),U=(0,c.Z)(S,2),D=U[0],N=U[1],C=(0,i.useState)(null),F=(0,c.Z)(C,2),G=F[0],R=F[1],A=(0,i.useState)(null),O=(0,c.Z)(A,2),T=O[0],q=O[1],B=(0,i.useState)([]),I=(0,c.Z)(B,2),L=I[0],E=I[1],H=(0,i.useState)(""),J=(0,c.Z)(H,2),P=J[0],Q=J[1],V=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n,s,c,i,u,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.UF)(Z);case 3:t=e.sent,n=t.poster_path,s=t.title,c=t.overview,i=t.release_date,u=t.vote_average,o=t.genres,w(s),M(n),N(i.slice(0,4)),R(c),q(Math.round(10*u)),E((function(e){return(0,a.Z)(o)})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),Q(P.message);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){V()}),[Z]),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)(o.rU,{className:v,to:n.current,children:(0,x.jsx)("button",{type:"button",children:"Go back"})}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{className:h,width:"250px",src:"https://image.tmdb.org/t/p/w500/".concat(y),alt:j,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"".concat(j,"(").concat(D,")")}),(0,x.jsxs)("p",{children:["User Score:"," ".concat(T,"%")]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)(x.Fragment,{children:G}),(0,x.jsx)("h3",{children:"Genres"}),L.map((function(e,t){return(0,x.jsxs)("p",{children:[e.name," "]},t)}))]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:m,children:"Additional information"}),(0,x.jsxs)("ul",{className:f,children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("div",{children:"Laoding..."}),children:(0,x.jsx)(u.j3,{})})]})]})}}}]);
//# sourceMappingURL=274.cc254173.chunk.js.map