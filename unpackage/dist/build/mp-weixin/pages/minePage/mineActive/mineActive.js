(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/minePage/mineActive/mineActive"],{"220c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{List:[]}},onLoad:function(){var t=this;t.getInfo()},methods:{getInfo:function(){var n=this;t.request({url:n.$api+"dockingManager/activityReportQuery",data:{id:0,optionId:t.getStorageSync("openId")},success:function(t){console.log(t.data),n.List=t.data}})},goActiveDetail:function(n){t.navigateTo({url:"../../pageChildren/activity/activity?id="+n})}}};n.default=e}).call(this,e("543d")["default"])},"55b8":function(t,n,e){},"60a0":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},6795:function(t,n,e){"use strict";var a=e("55b8"),i=e.n(a);i.a},"8a53":function(t,n,e){"use strict";e.r(n);var a=e("220c"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},a658:function(t,n,e){"use strict";e.r(n);var a=e("60a0"),i=e("8a53");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("6795");var u=e("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports}},[["e6ce","common/runtime","common/vendor"]]]);