(this["webpackJsonpreact-tutorial-2"]=this["webpackJsonpreact-tutorial-2"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e.n(a),c=e(3),i=e.n(c),o=(e(12),e(4)),u=e(5),s=e(7),h=e(6),j=e(0),p=function(t){return t.data.map((function(t,n){return Object(j.jsx)("li",{children:t},n)}))},d=function(t){Object(s.a)(e,t);var n=Object(h.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={data:[]},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(n){return t.setState({data:n})}))}},{key:"render",value:function(){var t=this.state.data;return Object(j.jsx)("ul",{children:Object(j.jsx)(p,{data:t})})}}]),e}(a.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a0af42b3.chunk.js.map