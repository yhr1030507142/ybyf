(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/server/server"],{"0252":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r})},"3d70":function(n,e,t){},d107:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{background:["red","blue","pink"],indicatorDots:!0,indicator1:!1,autoplay:!0,interval:2e3,duration:500,bannerList:[],SearchInput:""}},onLoad:function(){var n=this;n.getBanner()},methods:{getBanner:function(){var e=this;n.request({url:e.$api+"dockingManager/pictureQuery",success:function(n){console.log(n),e.bannerList=n.data}})},gotoPostMessage:function(){n.navigateTo({url:"../postMessage/postMessage"})},searchContent:function(){},goTO:function(e){n.navigateTo({url:"../serverPage/"+e+"/"+e})}}};e.default=t}).call(this,t("543d")["default"])},d332:function(n,e,t){"use strict";t.r(e);var a=t("0252"),r=t("ea41");for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);t("eebb");var u=t("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},ea41:function(n,e,t){"use strict";t.r(e);var a=t("d107"),r=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e["default"]=r.a},eebb:function(n,e,t){"use strict";var a=t("3d70"),r=t.n(a);r.a}},[["722e","common/runtime","common/vendor"]]]);