(this.webpackJsonpendata=this.webpackJsonpendata||[]).push([[0],{230:function(e,n,t){e.exports=t(358)},358:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(34),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(217),i=t(4),u=t(153),m=new u.RelayNetworkLayer([Object(u.urlMiddleware)({url:function(e){return Promise.resolve("https://videotest.endataclaims.com/midgard/graphql")}})],{noThrow:!0}),s=new i.Environment({network:m,store:new i.Store(new i.RecordSource)}),d=t(379),p=t(378),h=t(79),b=Object(h.a)({overrides:{MuiCssBaseline:{"@global":{"*":{"scrollbar-width":"thin"},"*::-webkit-scrollbar":{width:4,height:4}}}}}),E=t(221),v=t(122),g=t(8),f=t(222),w=function(e){var n=e.error,t=e.componentStack,a=e.resetErrorBoundary;return r.a.createElement("div",{role:"alert"},r.a.createElement("p",null,"Something went wrong:"),r.a.createElement("pre",null,null===n||void 0===n?void 0:n.message),r.a.createElement("pre",null,t),r.a.createElement("button",{onClick:a},"Try again"))},y=function(){return r.a.createElement(r.a.Fragment,null,"Loading...")},O=t(223),j=function(e){var n=e.component,t=Object(O.a)(e,["component"]),a=localStorage.getItem("ACCESS_TOKEN");return r.a.createElement(g.b,Object.assign({},t,{render:function(e){return a?r.a.createElement(n,e):r.a.createElement(g.a,{to:{pathname:"/user/login",state:{from:e.location}}})}}))},k=[{exact:!0,path:"/user/login",component:Object(a.lazy)((function(){return t.e(3).then(t.bind(null,404))}))},{exact:!0,path:"/video-call",component:Object(a.lazy)((function(){return t.e(10).then(t.bind(null,397))}))},{exact:!0,private:!0,path:"/dashboard",component:Object(a.lazy)((function(){return t.e(7).then(t.bind(null,398))}))},{exact:!0,private:!0,path:"/communication",component:Object(a.lazy)((function(){return t.e(6).then(t.bind(null,399))}))},{exact:!0,private:!0,path:"/media",component:Object(a.lazy)((function(){return t.e(8).then(t.bind(null,400))}))},{exact:!0,private:!0,path:"/claims",component:Object(a.lazy)((function(){return t.e(5).then(t.bind(null,401))}))},{exact:!0,private:!0,path:"/claim/:claimId",component:Object(a.lazy)((function(){return t.e(4).then(t.bind(null,402))}))},{exact:!0,path:"*",component:Object(a.lazy)((function(){return t.e(9).then(t.bind(null,403))}))}],x=function(){return r.a.createElement(f.ErrorBoundary,{FallbackComponent:w},r.a.createElement(v.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(g.d,null,k.map((function(e,n){return e.private?r.a.createElement(j,Object.assign({key:n},e)):r.a.createElement(g.b,Object.assign({key:n},e))}))))))},S=document.getElementById("root");l.a.unstable_createRoot(S).render(r.a.createElement(c.RelayEnvironmentProvider,{environment:s},r.a.createElement(d.a,null),r.a.createElement(p.a,{theme:b},r.a.createElement(E.SnackbarProvider,null,r.a.createElement(x,null))))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[230,1,2]]]);
//# sourceMappingURL=main.e2c28e58.chunk.js.map