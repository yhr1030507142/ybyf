(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serverPage/tax/tax"],{"21c2":function(t,n,a){},"38d2":function(t,n,a){"use strict";a.r(n);var e=a("ab88"),u=a("b75f");for(var o in u)"default"!==o&&function(t){a.d(n,t,function(){return u[t]})}(o);a("d832");var i=a("2877"),r=Object(i["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},ab88:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},b241:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{headlineList:[]}},onLoad:function(){var t=this;t.getInfo()},methods:{getInfo:function(){var n=this;t.request({url:n.$api+"dockingManager/totalQuery",data:{id:"0",pull:10},method:"GET",success:function(t){console.log(t),n.headlineList=t.data}})},goto:function(n){t.navigateTo({url:"../taxDetail/taxDetail?id="+n})}}};n.default=a}).call(this,a("543d")["default"])},b75f:function(t,n,a){"use strict";a.r(n);var e=a("b241"),u=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=u.a},d832:function(t,n,a){"use strict";var e=a("21c2"),u=a.n(e);u.a}},[["900a","common/runtime","common/vendor"]]]);