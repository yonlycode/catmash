(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";a.r(t);var n=a(12),o=a(13),r=a(15),s=a(14),c=a(16),u=a(0),l=a.n(u),i=a(74),f=a.n(i),d=a(27),m=a(2),p=a(4),b=a(99),g=a.n(b),h=a(1),v=a.n(h),j=a(5),O=a.n(j),w=a(3),y=v.a.oneOfType([v.a.number,v.a.string]),E=v.a.oneOfType([v.a.bool,v.a.number,v.a.string,v.a.shape({size:v.a.oneOfType([v.a.bool,v.a.number,v.a.string]),order:y,offset:y})]),M={tag:w.g,xs:E,sm:E,md:E,lg:E,xl:E,className:v.a.string,cssModule:v.a.object,widths:v.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},z=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},k=function(e){var t=e.className,a=e.cssModule,n=e.widths,o=e.tag,r=Object(p.a)(e,["className","cssModule","widths","tag"]),s=[];n.forEach(function(t,n){var o=e[t];if(delete r[t],o||""===o){var c=!n;if(g()(o)){var u,l=c?"-":"-"+t+"-",i=z(c,t,o.size);s.push(Object(w.d)(O()(((u={})[i]=o.size||""===o.size,u["order"+l+o.order]=o.order||0===o.order,u["offset"+l+o.offset]=o.offset||0===o.offset,u)),a))}else{var f=z(c,t,o);s.push(f)}}}),s.length||s.push("col");var c=Object(w.d)(O()(t,s),a);return l.a.createElement(o,Object(m.a)({},r,{className:c}))};k.propTypes=M,k.defaultProps=N;var x=k,T={tag:w.g,noGutters:v.a.bool,className:v.a.string,cssModule:v.a.object,form:v.a.bool},G=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,o=e.tag,r=e.form,s=Object(p.a)(e,["className","cssModule","noGutters","tag","form"]),c=Object(w.d)(O()(t,n?"no-gutters":null,r?"form-row":"row"),a);return l.a.createElement(o,Object(m.a)({},s,{className:c}))};G.propTypes=T,G.defaultProps={tag:"div"};var J=G;a.d(t,"default",function(){return C});var P=l.a.lazy(function(){return a.e(6).then(a.bind(null,105))}),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).getMatch=function(){f.a.get("/match").catch(function(e){return alert(e)}).then(function(e){return a.setState({data:e.data})})},a.state={data:[]},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getMatch()}},{key:"render",value:function(){var e=this.state.data,t=0===e.length?l.a.createElement(d.a,null):e.map(function(e,t){return l.a.createElement(x,{sm:{size:"auto",offset:1}},l.a.createElement(P,{key:t,data:e}))});return l.a.createElement("div",null,l.a.createElement("h1",null,"Home page"),l.a.createElement(J,null,t))}}]),t}(u.Component)},99:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}}}]);
//# sourceMappingURL=4.9a7b2656.chunk.js.map