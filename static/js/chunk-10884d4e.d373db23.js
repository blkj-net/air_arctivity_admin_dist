/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 14:49:42
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10884d4e","chunk-2d0be29e"],{"2ea6":function(e,t,r){"use strict";r.r(t),r.d(t,"list",(function(){return u})),r.d(t,"hotelList",(function(){return c})),r.d(t,"detail",(function(){return l})),r.d(t,"getairports",(function(){return d})),r.d(t,"deleteimg",(function(){return h})),r.d(t,"create",(function(){return b})),r.d(t,"update",(function(){return j})),r.d(t,"cityName",(function(){return y})),r.d(t,"airportsList",(function(){return v})),r.d(t,"createHotel",(function(){return k})),r.d(t,"updateHotel",(function(){return C}));var n=r("1da1"),a=(r("96cf"),r("b775")),o="manage";function u(e){return i.apply(this,arguments)}function i(){return i=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function c(e){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/info",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/air_list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/del_img",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/city_name",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function v(){return R.apply(this,arguments)}function R(){return R=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/airports_list",method:"get"}));case 1:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function C(e){return N.apply(this,arguments)}function N(){return N=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}},"445b":function(e,t,r){"use strict";r.r(t);var n=r("f2bf"),a=Object(n["withScopeId"])("data-v-42817b4f");Object(n["pushScopeId"])("data-v-42817b4f");var o=Object(n["createTextVNode"])(" 筛选条件 "),u=Object(n["createVNode"])("div",{style:{"margin-bottom":"20px"}},[Object(n["createVNode"])("a",{href:"http://192.168.31.203:9504/excel/航班信息表.xlsx"},"下载模板")],-1),i=Object(n["createTextVNode"])(" 上传文件 ");Object(n["popScopeId"])();var c=a((function(e,t,r,c,s,l){var p=Object(n["resolveComponent"])("p-query"),d=Object(n["resolveComponent"])("p-table"),f=Object(n["resolveComponent"])("upload-outlined"),h=Object(n["resolveComponent"])("a-button"),m=Object(n["resolveComponent"])("a-upload"),b=Object(n["resolveComponent"])("p-modal");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(p,{ref:"query","search-param":e.queryArray,onSearch:c.handleSearch,onReset:c.handleReset},{title:a((function(){return[o]})),_:1},8,["search-param","onSearch","onReset"]),Object(n["createVNode"])(d,{"row-key":"id",columns:e.columns,"option-tip-field":"flightName","action-url":e.actionUrl,param:e.param,fetch:c.fetch,toolbar:e.toolbar,"submit-before":c.onSubmitBefore,"modal-props":e.modalProps,operate:e.operate,ref:"tableRef"},{startAirportsCode:a((function(e){var t=e.record;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.startCityName)+"/"+Object(n["toDisplayString"])(t.startAirportsCode),1)]})),endAirportsCode:a((function(e){var t=e.record;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.endCityName)+"/"+Object(n["toDisplayString"])(t.endAirportsCode),1)]})),_:1},8,["columns","action-url","param","fetch","toolbar","submit-before","modal-props","operate"]),Object(n["createVNode"])(b,{visible:e.modalShow2,"onUpdate:visible":t[1]||(t[1]=function(t){return e.modalShow2=t}),title:"导入航班",footer:!1},{default:a((function(){return[u,Object(n["createVNode"])(m,{name:"file",multiple:!0,action:"/mock-server/manage/flight/info/import",headers:e.header,onChange:c.handleChange2},{default:a((function(){return[Object(n["createVNode"])(h,null,{default:a((function(){return[Object(n["createVNode"])(f),i]})),_:1})]})),_:1},8,["headers","onChange"])]})),_:1},8,["visible"])])})),s=r("5530"),l=r("1da1"),p=(r("159b"),r("99af"),r("96cf"),r("4360")),d=r("6c02"),f=r("2ea6"),h={name:"sell-flight",components:{},setup:function(){var e=Object(n["inject"])("message"),t=Object(n["ref"])(null),r=Object(n["getCurrentInstance"])(),a=r.proxy,o=Object(d["d"])(),u=Object(n["reactive"])({header:{Authorization:"Bearer "+p["default"].getters["user/token"]},modalShow2:!1,param:{},columns:[{title:"航班号",dataIndex:"flightName",key:"flightName",sorter:!1},{title:"起飞城市（三字码）",sorter:!1,slots:{customRender:"startAirportsCode"}},{title:"到达城市（三字码）",sorter:!1,slots:{customRender:"endAirportsCode"}},{title:"起飞时间",dataIndex:"startTime",key:"startTime",sorter:!1},{title:"到达时间",dataIndex:"endTime",key:"endTime",sorter:!1},{title:"价格",dataIndex:"price",key:"price",sorter:!1},{title:"库存",dataIndex:"stock",key:"stock",sorter:!1},{title:"库存限购",dataIndex:"limitNums",key:"limitNums",sorter:!1}],actionUrl:{del:"/manage/flight/info/delete",batchDel:"/manage/flight/info/batch_del"},queryArray:[{type:"input",key:"flight_name",value:"",label:"航班号",hidden:!1,props:{placeholder:"航班号"}},{type:"select",key:"start_airports_code",options:[],label:"起飞机场三字码",hidden:!1,props:{allowClear:!0,showSearch:!0,placeholder:"起飞机场三字码"}},{type:"select",key:"end_airports_code",options:[],label:"到达机场三字码",hidden:!1,props:{allowClear:!0,showSearch:!0,placeholder:"到达机场三字码"}}],toolbar:[{label:"新增",event:function(){return j({url:"/sell/flight/detail",t:1,id:""})},permission:a.$buttons["新增"]},{label:"导入",event:function(){i()},permission:a.$buttons["导入"]}],operate:[{label:"修改",event:function(e){return j({url:"/sell/flight/detail",t:2,id:e.id})},permission:a.$buttons["修改"]},{label:"查看",event:function(e){return j({url:"/sell/flight/detail",t:3,id:e.id})},permission:a.$buttons["查看"]}]}),i=function(){u.modalShow2=!0},c=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["list"])(t);case 2:return r=e.sent,n=r.data,e.abrupt("return",{total:n.total,data:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["airportsList"])();case 2:t=e.sent,r=t.data,n=[],r.forEach((function(e){n.push({label:"".concat(e.cityName,"(").concat(e.airPort,")"),value:e.airPort})})),a=[],u.queryArray.forEach((function(e){"select"==e.type&&(e.options=n),a.push(e)})),u.queryArray=a;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n["onBeforeMount"])((function(){})),Object(n["onMounted"])(Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:h();case 1:case"end":return e.stop()}}),e)})))),Object(n["onBeforeUpdate"])((function(){})),Object(n["onUpdated"])((function(){})),Object(n["onBeforeUnmount"])((function(){})),Object(n["onUnmounted"])((function(){}));var m=function(e){return e},b=function(e){u.param=e},g=function(e){u.param=e},j=function(e){var t=e.url,r=e.t,n=e.id;o.push({path:t,query:{id:n,t:r}})},O=function(r){var n=r.file.status;"done"===n&&(0==r.file.response.code?(u.modalShow2=!1,t.value.reload(),e.success("上传成功")):e.error(r.file.response.msg))};return Object(s["a"])(Object(s["a"])({},Object(n["toRefs"])(u)),{},{fetch:c,airportLists:h,onSubmitBefore:m,handleSearch:b,handleReset:g,openup:i,handleChange2:O,tableRef:t})}};r("a6fa");h.render=c,h.__scopeId="data-v-42817b4f";t["default"]=h},a6fa:function(e,t,r){"use strict";r("e4a5")},e4a5:function(e,t,r){}}]);