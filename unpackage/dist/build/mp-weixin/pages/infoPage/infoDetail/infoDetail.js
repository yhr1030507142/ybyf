(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/infoPage/infoDetail/infoDetail"],{"017c":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=function(){return t.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(t.bind(null,"504f"))},e={data:function(){return{background:["red","blue","pink"],indicatorDots:!0,indicator1:!1,autoplay:!0,interval:2e3,duration:500,mark:"",id:"",supplyList:[],collection:1,shrink:[]}},onLoad:function(n){var o=this;o.mark=n.mark,o.id=n.id,console.log(o.mark+"/"+o.id),o.getInfo()},onShow:function(){},methods:{apply:function(){this.showPopupMiddleImg1=!0},hidePopup:function(){this.showPopupMiddleImg=!1},hidePopup1:function(){this.showPopupMiddleImg1=!1},getInfo:function(){var o=this;n.request({url:o.$api+"dockingManager/declareQuery",data:{id:o.id,mark:o.mark,optionId:n.getStorageSync("openId")},method:"GET",success:function(n){console.log(n),o.shrink=n.data[0].shrink.split(","),console.log(o.shrink),o.supplyList=n.data[0],void 0===n.data[0].state||null===n.data[0].state?o.collection=1:o.collection=2}})},collect:function(){var o=this;1==o.collection?n.request({url:o.$api+"dockingManager/activityHideAdd",data:{id:o.id,mark:0,optionId:n.getStorageSync("openId")},success:function(t){1==t.data?(console.log("收藏成功"),o.collection=2):n.showToast({title:"收藏失败",icon:"none"})}}):n.request({url:o.$api+"dockingManager/activityHideDelete",data:{id:o.id,optionId:n.getStorageSync("openId")},success:function(t){1==t.data?(console.log("取消收藏成功"),o.collection=1):n.showToast({title:"取消收藏失败",icon:"none"})}})},onShareAppMessage:function(o){var t=this;return"button"===o.from&&console.log(o.target),{desc:t.supplyList.name,path:"pages/infoPage/infoDetail/infoDetail?id="+t.id,success:function(o){n.request({url:t.$api+"dockingManager/activityHideAdd",data:{id:t.id,mark:1,optionId:n.getStorageSync("openId")},success:function(n){console.log(n),console.log("转发成功")}})},fail:function(){console.log("error")}}}},components:{uniPopup:i}};o.default=e}).call(this,t("543d")["default"])},4032:function(n,o,t){},"557f":function(n,o,t){"use strict";t.r(o);var i=t("017c"),e=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(o,n,function(){return i[n]})}(a);o["default"]=e.a},"9c98":function(n,o,t){"use strict";var i=function(){var n=this,o=n.$createElement;n._self._c},e=[];t.d(o,"a",function(){return i}),t.d(o,"b",function(){return e})},a0ea:function(n,o,t){"use strict";var i=t("4032"),e=t.n(i);e.a},e8ca:function(n,o,t){"use strict";t.r(o);var i=t("9c98"),e=t("557f");for(var a in e)"default"!==a&&function(n){t.d(o,n,function(){return e[n]})}(a);t("a0ea");var c=t("2877"),u=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,null,null);o["default"]=u.exports}},[["2ce0","common/runtime","common/vendor"]]]);