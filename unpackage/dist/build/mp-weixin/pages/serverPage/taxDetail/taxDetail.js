(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/serverPage/taxDetail/taxDetail"],{"0447":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("node-modules/_@dcloudio_uni-ui@0.0.8@@dcloudio/uni-ui/lib/uni-popup/uni-popup").then(e.bind(null,"504f"))},o={data:function(){return{details:[],id:""}},onLoad:function(n){var t=this;t.id=n.id,console.log(t.id),t.getInfo()},methods:{getInfo:function(){var t=this;n.request({url:t.$api+"dockingManager/totalQuery",data:{id:t.id,pull:10},method:"GET",success:function(n){console.log(n),t.details=n.data[0],console.log(n)}})}},components:{uniPopup:u}};t.default=o}).call(this,e("543d")["default"])},3516:function(n,t,e){"use strict";e.r(t);var u=e("a9d5"),o=e("b97d");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("ad2e");var a=e("2877"),d=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=d.exports},a9d5:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},ad2e:function(n,t,e){"use strict";var u=e("f719"),o=e.n(u);o.a},b97d:function(n,t,e){"use strict";e.r(t);var u=e("0447"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=o.a},f719:function(n,t,e){}},[["351f","common/runtime","common/vendor"]]]);