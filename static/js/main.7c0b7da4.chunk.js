(this.webpackJsonpconversor_moedas=this.webpackJsonpconversor_moedas||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=(n(9),n(1)),s=(n(10),n(11),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),u=s[0],i=s[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),d=p[0],f=p[1],h=Object(a.useState)(0),v=Object(l.a)(h,2),E=v[0],b=v[1],j=Object(a.useState)(0),g=Object(l.a)(j,2),O=g[0],k=g[1];return Object(a.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates);t.push("EUR"),t.sort(),c(t)}))}),[]),Object(a.useEffect)((function(){var e="https://api.exchangeratesapi.io/latest?base=".concat(u,"&symbols=").concat(d);fetch(e).then((function(e){return e.json()})).then((function(e){var t=parseFloat(e.rates[d]),n=Number((E*t).toFixed(2));k(n)}))}),[u,d,E]),o.a.createElement("div",{className:"conversor"},o.a.createElement("p",null,"Converter",o.a.createElement("input",{placeholder:"quantidade",className:"inputQuantidade",type:"number",onChange:function(e){var t=Number(parseFloat(e.target.value).toFixed(2));b(t)}})),o.a.createElement("p",null,"de",o.a.createElement("select",{name:"moedas",id:"moedas",onChange:function(e){var t=e.target.value;i(t)}},o.a.createElement("option",null),n.map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))),"para",o.a.createElement("select",{name:"moedas",id:"moedas",onChange:function(e){var t=e.target.value;f(t)}},o.a.createElement("option",null),n.map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))),o.a.createElement("h2",null,O&&u&&d?O:0))}),u=(n(12),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"botaoAdicionar",onClick:e.onClick},"+"))});var i=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Conversor de moedas"),o.a.createElement("div",{className:"ConversorContainer"},o.a.createElement(s,null),n,o.a.createElement(u,{onClick:function(){for(var e=[],t=0;t<n.length+1;t++)e.push(o.a.createElement(s,null));c(e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.7c0b7da4.chunk.js.map