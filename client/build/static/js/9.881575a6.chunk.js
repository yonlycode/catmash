(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return f});var a=n(12),c=n(13),r=n(15),u=n(14),s=n(16),i=n(0),o=n.n(i),l=n(74),d=n.n(l),h=o.a.lazy(function(){return n.e(8).then(n.bind(null,101))}),f=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).getBest=function(){d.a.get("/best").catch(function(t){return alert(t)}).then(function(t){return n.setState({data:t.data})})},n.state={data:[]},n}return Object(s.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getBest()}},{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",null,o.a.createElement("h1",{className:"text-center"},"The Best Cats :"),o.a.createElement("br",null),o.a.createElement(h,{data:this.state.data}))}}]),e}(i.Component)}}]);
//# sourceMappingURL=9.881575a6.chunk.js.map