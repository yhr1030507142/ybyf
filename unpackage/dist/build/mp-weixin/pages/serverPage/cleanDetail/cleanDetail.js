(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serverPage/cleanDetail/cleanDetail"],{"1c04":function(n,t,e){},"3a15":function(n,t,e){"use strict";e.r(t);var u=e("8f40"),o=e("a78f");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("6360");var a=e("2877"),c=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},6360:function(n,t,e){"use strict";var u=e("1c04"),o=e.n(u);o.a},"80f2":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(e.bind(null,"504f"))},o={data:function(){return{details:[],id:""}},onLoad:function(n){var t=this;t.id=n.id,console.log(t.id),t.getInfo()},methods:{getInfo:function(){var t=this;n.request({url:t.$api+"dockingManager/totalQuery",data:{id:t.id,pull:13},method:"GET",success:function(n){console.log(n),t.details=n.data[0],console.log(n)}})}},components:{uniPopup:u}};t.default=o}).call(this,e("543d")["default"])},"8f40":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},a78f:function(n,t,e){"use strict";e.r(t);var u=e("80f2"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=o.a}},[["3566","common/runtime","common/vendor"]]]);