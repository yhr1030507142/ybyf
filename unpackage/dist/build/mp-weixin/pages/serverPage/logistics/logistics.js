(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serverPage/logistics/logistics"],{"239d":function(t,n,e){},"47ae":function(t,n,e){"use strict";e.r(n);var a=e("65b8"),i=e("d136");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("e097");var u=e("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"65b8":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},b4fa:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{headlineList:[]}},onLoad:function(){var t=this;t.getInfo()},methods:{getInfo:function(){var n=this;t.request({url:n.$api+"dockingManager/totalQuery",data:{id:"0",pull:14},method:"GET",success:function(t){console.log(t),n.headlineList=t.data}})},goto:function(n){t.navigateTo({url:"../logisticsDetail/logisticsDetail?id="+n})}}};n.default=e}).call(this,e("543d")["default"])},d136:function(t,n,e){"use strict";e.r(n);var a=e("b4fa"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},e097:function(t,n,e){"use strict";var a=e("239d"),i=e.n(a);i.a}},[["4506","common/runtime","common/vendor"]]]);