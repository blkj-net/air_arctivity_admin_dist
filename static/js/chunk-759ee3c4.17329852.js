/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 17:14:08
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759ee3c4","chunk-2d0be29e"],{"2ea6":function(e,t,r){"use strict";r.r(t),r.d(t,"list",(function(){return c})),r.d(t,"hotelList",(function(){return o})),r.d(t,"detail",(function(){return d})),r.d(t,"getairports",(function(){return s})),r.d(t,"deleteimg",(function(){return m})),r.d(t,"create",(function(){return j})),r.d(t,"update",(function(){return h})),r.d(t,"cityName",(function(){return w})),r.d(t,"airportsList",(function(){return x})),r.d(t,"createHotel",(function(){return v})),r.d(t,"updateHotel",(function(){return V}));var n=r("1da1"),a=(r("96cf"),r("b775")),u="manage";function c(e){return i.apply(this,arguments)}function i(){return i=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/info/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/hotel/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/info/info",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function s(e){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/hotel/air_list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/hotel/del_img",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/info/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/info/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e){return N.apply(this,arguments)}function N(){return N=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/city_name",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function x(){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/airports_list",method:"get"}));case 1:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/hotel/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function V(e){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:u+"/flight/hotel/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}},"53f5":function(e,t,r){"use strict";r.r(t);var n=r("f2bf"),a={key:0},u=Object(n["createTextVNode"])("提交"),c={key:1};function i(e,t,r,i,o,l){var d=Object(n["resolveComponent"])("a-input"),f=Object(n["resolveComponent"])("a-form-item"),s=Object(n["resolveComponent"])("a-col"),b=Object(n["resolveComponent"])("a-time-picker"),m=Object(n["resolveComponent"])("a-row"),p=Object(n["resolveComponent"])("a-button"),j=Object(n["resolveComponent"])("a-form");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[e.showDetail?(Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])(j,{model:e.formState,labelAlign:"right","label-col":{span:6}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"航班号"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.flightName),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞城市(三字码)"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.startAirportsCode),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达城市(三字码)"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.endAirportsCode),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞时间"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.startTime),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞城市"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.startCityName),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达城市"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.endCityName),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达时间"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.endTime),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"价格"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.price),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"库存"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.stock),1)]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"库存限购"},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formState.limitNums),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model"])])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])(j,{ref:"formRef",model:e.formState,rules:e.rules,labelAlign:"right","label-col":{span:8}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"航班号",name:"flightName"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{value:e.formState.flightName,"onUpdate:value":t[1]||(t[1]=function(t){return e.formState.flightName=t})},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞城市（三字码）",name:"startAirportsCode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{value:e.formState.startAirportsCode,"onUpdate:value":t[2]||(t[2]=function(t){return e.formState.startAirportsCode=t}),onBlur:t[3]||(t[3]=function(e){return i.onFieldBlur("start")})},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达城市（三字码）",name:"endAirportsCode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{value:e.formState.endAirportsCode,"onUpdate:value":t[4]||(t[4]=function(t){return e.formState.endAirportsCode=t}),onBlur:t[5]||(t[5]=function(e){return i.onFieldBlur("end")})},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞时间",name:"startTime"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{value:e.formState.startTime,"onUpdate:value":t[6]||(t[6]=function(t){return e.formState.startTime=t}),valueFormat:"HH:mm",format:"HH:mm"},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"起飞城市",name:"startCityName"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{value:e.formState.startCityName,"onUpdate:value":t[7]||(t[7]=function(t){return e.formState.startCityName=t}),disabled:""},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达城市",name:"endCityName"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{value:e.formState.endCityName,"onUpdate:value":t[8]||(t[8]=function(t){return e.formState.endCityName=t}),disabled:""},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"到达时间",name:"endTime"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{value:e.formState.endTime,"onUpdate:value":t[9]||(t[9]=function(t){return e.formState.endTime=t}),valueFormat:"HH:mm",format:"HH:mm"},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"价格",name:"price"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{type:"number",value:e.formState.price,"onUpdate:value":t[10]||(t[10]=function(t){return e.formState.price=t}),min:0},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"库存",name:"stock"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{type:"number",value:e.formState.stock,"onUpdate:value":t[11]||(t[11]=function(t){return e.formState.stock=t}),min:0},null,8,["value"])]})),_:1})]})),_:1}),Object(n["createVNode"])(s,{span:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"库存限购",name:"limitNums"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{type:"number",value:e.formState.limitNums,"onUpdate:value":t[12]||(t[12]=function(t){return e.formState.limitNums=t}),min:0},null,8,["value"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{span:12,style:{textAlign:"right"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{type:"primary",onClick:i.handleSubmit,loading:e.okLoading},{default:Object(n["withCtx"])((function(){return[u]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]))])}var o=r("5530"),l=r("1da1"),d=(r("96cf"),r("7db0"),r("4360")),f=r("2ea6"),s=r("6c02"),b={name:"sell-detail",components:{},setup:function(){Object(n["inject"])("moment");var e=Object(n["inject"])("message"),t=Object(n["ref"])(null),r=Object(s["c"])(),a=Object(n["reactive"])({formState:{id:void 0,flightName:"",startAirportsCode:"",endAirportsCode:"",startTime:"",endTime:"",startCityName:"",endCityName:"",limitNums:0,price:0,stock:0},okLoading:!1,rules:{flightName:[{required:!0,message:"不能为空"}],startAirportsCode:[{required:!0,message:"不能为空",trigger:["change","blur"]}],endAirportsCode:[{required:!0,message:"不能为空",trigger:["change","blur"]}],startTime:[{required:!0,message:"不能为空"}],endTime:[{required:!0,message:"不能为空"}],startCityName:[{required:!0,message:"不能为空",trigger:["change","blur"]}],endCityName:[{required:!0,message:"不能为空",trigger:["change","blur"]}],limitNums:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}],price:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}],stock:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}]},showDetail:Object(n["computed"])((function(){return!!r.query&&3==r.query.t}))}),u=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.query.t){e.next=18;break}if(1===r.query.t){e.next=7;break}if(!r.query.id){e.next=7;break}return e.next=5,Object(f["detail"])({id:r.query.id});case 5:t=e.sent,0==t.code&&(a.formState=Object(o["a"])({},t.data));case 7:if(n=d["default"].getters["tagsBar/visitedRoutes"],!n||!n.length){e.next=18;break}if(u=n.find((function(e){return"/sell/flight/detail"==e.path})),!u){e.next=18;break}e.t0=r.query.t,e.next="1"===e.t0?14:"2"===e.t0?16:18;break;case 14:return u.meta.title="新增航班",e.abrupt("break",18);case 16:return u.meta.title="修改航班",e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r="start"==t?a.formState.startAirportsCode:a.formState.endAirportsCode,!r){e.next=6;break}return e.next=4,Object(f["cityName"])({airports:r});case 4:n=e.sent,0==n.code&&("start"==t?a.formState.startCityName=n.data:a.formState.endCityName=n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){try{a.okLoading=!0,t.value.validate().then(Object(l["a"])(regeneratorRuntime.mark((function t(){var r,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=Object(n["toRaw"])(a.formState),u=null,!r.id){t.next=8;break}return t.next=5,Object(f["update"])(r);case 5:u=t.sent,t.next=11;break;case 8:return t.next=10,Object(f["create"])(r);case 10:u=t.sent;case 11:0==u.code&&(r.id?e.success("修改成功"):e.success("新增成功"));case 12:case"end":return t.stop()}}),t)}))))}catch(r){}finally{a.okLoading=!1}};return Object(n["onMounted"])((function(){u()})),Object(n["onUnmounted"])((function(){})),Object(o["a"])(Object(o["a"])({},Object(n["toRefs"])(a)),{},{formRef:t,handleSubmit:i,onFieldBlur:c})}};b.render=i;t["default"]=b}}]);