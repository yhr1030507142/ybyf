(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pageChildren/headerMore/headerMore"],{"1e8b":function(e,t,n){"use strict";n.r(t);var a=n("ffa3"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},"42d8":function(e,t,n){"use strict";var a=n("68a0"),o=n.n(a);o.a},"68a0":function(e,t,n){},"9e0f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},ff67:function(e,t,n){"use strict";n.r(t);var a=n("9e0f"),o=n("1e8b");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("42d8");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},ffa3:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{headlineList:[]}},onLoad:function(){var e=this;e.getInfo()},methods:{getInfo:function(){var t=this;e.request({url:t.$api+"dockingManager/totalQuery",data:{id:"0",pull:4},method:"GET",success:function(e){console.log(e),t.headlineList=e.data}})},goto:function(t){e.navigateTo({url:"../headerDetail/headerDetail?id="+t})}}};t.default=n}).call(this,n("543d")["default"])}},[["4379","common/runtime","common/vendor"]]]);