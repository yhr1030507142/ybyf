(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pageChildren/activity/activity"],{"30d7":function(o,t,e){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return e.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(e.bind(null,"504f"))},i={data:function(){return{content:"",name:"",open_time:"",shrink:"",showPopupMiddleImg:!1,showPopupMiddleImg1:!1,details:[],id:"",collection:1,report:"",errorMessage:""}},onLoad:function(o){var t=this;t.id=o.id,t.getInfo()},methods:{apply:function(){var t=this;o.request({url:t.$api+"dockingManager/activityReport",data:{id:t.id,optionId:o.getStorageSync("openId"),report:t.report},success:function(e){return 2==e.data?(t.errorMessage="您尚未进行认证",t.showPopupMiddleImg1=!0,!1):1==e.data?(t.errorMessage="恭喜你,报名成功",t.showPopupMiddleImg=!0,!1):6==e.data?(o.showToast({title:"活动已暂停",icon:"none"}),!1):7==e.data?(o.showToast({title:"活动已结束",icon:"none"}),!1):8==e.data?(o.showToast({title:"活动未开始",icon:"none"}),!1):void console.log(e.data)}})},hidePopup:function(){this.showPopupMiddleImg=!1},hidePopup1:function(){this.showPopupMiddleImg1=!1},getInfo:function(){var t=this;console.log(t.id),o.request({url:t.$api+"dockingManager/activityTubeQuery",data:{id:t.id,optionId:o.getStorageSync("openId")},success:function(o){t.details=o.data[0],void 0===o.data[0].reply||null===o.data[0].reply?t.report=1:t.report=0,void 0===o.data[0].mark||null===o.data[0].mark?t.collection=1:t.collection=2,console.log(o)}})},goAudit:function(){o.switchTab({url:"../../../pages/mine/mine"})},collect:function(){var t=this;1==this.collection?o.request({url:t.$api+"dockingManager/activityHideAdd",data:{id:t.id,mark:0,optionId:o.getStorageSync("openId")},success:function(e){1==e.data?(console.log("收藏成功"),t.collection=2):o.showToast({title:"收藏失败",icon:"none"})}}):o.request({url:t.$api+"dockingManager/activityHideDelete",data:{id:t.id,optionId:o.getStorageSync("openId")},success:function(e){1==e.data?(console.log("取消收藏成功"),t.collection=1):o.showToast({title:"取消收藏失败",icon:"none"})}})},onShareAppMessage:function(t){var e=this;return"button"===t.from&&console.log(t.target),{desc:e.details.name,path:"pages/pageChildren/activity/activity?id="+e.id,success:function(t){o.request({url:e.$api+"dockingManager/activityHideAdd",data:{id:e.id,mark:1,optionId:o.getStorageSync("openId")},success:function(o){console.log(o),console.log("转发成功")}})},fail:function(){console.log("error")}}}},components:{uniPopup:n}};t.default=i}).call(this,e("543d")["default"])},"4e5a":function(o,t,e){},"7ecd":function(o,t,e){"use strict";e.r(t);var n=e("30d7"),i=e.n(n);for(var a in n)"default"!==a&&function(o){e.d(t,o,function(){return n[o]})}(a);t["default"]=i.a},c685:function(o,t,e){"use strict";var n=e("4e5a"),i=e.n(n);i.a},d28c:function(o,t,e){"use strict";var n=function(){var o=this,t=o.$createElement;o._self._c},i=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return i})},d915:function(o,t,e){"use strict";e.r(t);var n=e("d28c"),i=e("7ecd");for(var a in i)"default"!==a&&function(o){e.d(t,o,function(){return i[o]})}(a);e("c685");var c=e("2877"),d=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports}},[["2bd6","common/runtime","common/vendor"]]]);