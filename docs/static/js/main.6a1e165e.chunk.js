(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{12:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=(a(12),a(1)),s=(a(2),function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],s=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i]})),s(""))}},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Ingresa categoria",value:i,onChange:function(e){s(e.target.value)}}))}),u=a(3),o=a.n(u),m=a(6),d=function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=NiEeCjvs9SWVHvL8DPScewOAJD6LoVeD"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.id,a=e.title,n=e.url;return r.a.createElement("div",{className:"card my-3 animate__animated animate__fadeInDownBig",style:{width:"18rem"}},r.a.createElement("img",{src:n,alt:a,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}," ",a," "),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"}," id: ",t," ")))},p=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),i&&r.a.createElement("div",{className:"d-flex justify-content-center animate__animated animate__flash"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),r.a.createElement("div",{className:"card-columns"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)(["Star Wars"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(p,{key:e,category:e})}))))};a(14);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.6a1e165e.chunk.js.map