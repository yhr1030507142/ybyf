(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pageChildren/productDetail/productDetail"],{"0429":function(n,t,u){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},e=[];u.d(t,"a",function(){return o}),u.d(t,"b",function(){return e})},"0a93":function(n,t,u){"use strict";var o=u("7638"),e=u.n(o);e.a},"4a5b":function(n,t,u){"use strict";u.r(t);var o=u("0429"),e=u("d479");for(var i in e)"default"!==i&&function(n){u.d(t,n,function(){return e[n]})}(i);u("0a93");var a=u("2877"),d=Object(a["a"])(e["default"],o["a"],o["b"],!1,null,null,null);t["default"]=d.exports},7638:function(n,t,u){},bbb3:function(n,t,u){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return u.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(u.bind(null,"504f"))},e={data:function(){return{details:[],id:""}},onLoad:function(n){var t=this;t.id=n.id,console.log(t.id),t.getInfo()},methods:{getInfo:function(){var t=this;n.request({url:t.$api+"dockingManager/totalQuery",data:{id:t.id,pull:18},method:"GET",success:function(n){console.log(n),t.details=n.data[0],console.log(n)}})}},components:{uniPopup:o}};t.default=e}).call(this,u("543d")["default"])},d479:function(n,t,u){"use strict";u.r(t);var o=u("bbb3"),e=u.n(o);for(var i in o)"default"!==i&&function(n){u.d(t,n,function(){return o[n]})}(i);t["default"]=e.a}},[["ed74","common/runtime","common/vendor"]]]);