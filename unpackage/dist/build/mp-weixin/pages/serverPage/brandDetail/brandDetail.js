(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serverPage/brandDetail/brandDetail"],{"1d74":function(n,t,u){"use strict";u.r(t);var e=u("4176"),o=u("606f");for(var i in o)"default"!==i&&function(n){u.d(t,n,function(){return o[n]})}(i);u("a506");var a=u("2877"),r=Object(a["a"])(o["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports},4176:function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return o})},"606f":function(n,t,u){"use strict";u.r(t);var e=u("a2df"),o=u.n(e);for(var i in e)"default"!==i&&function(n){u.d(t,n,function(){return e[n]})}(i);t["default"]=o.a},7558:function(n,t,u){},a2df:function(n,t,u){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return u.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(u.bind(null,"504f"))},o={data:function(){return{details:[],id:""}},onLoad:function(n){var t=this;t.id=n.id,console.log(t.id),t.getInfo()},methods:{getInfo:function(){var t=this;n.request({url:t.$api+"dockingManager/totalQuery",data:{id:t.id,pull:8},method:"GET",success:function(n){console.log(n),t.details=n.data[0],console.log(n)}})}},components:{uniPopup:e}};t.default=o}).call(this,u("543d")["default"])},a506:function(n,t,u){"use strict";var e=u("7558"),o=u.n(e);o.a}},[["b062","common/runtime","common/vendor"]]]);