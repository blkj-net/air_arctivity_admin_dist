/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 10:25:30
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e4d2a2","chunk-2d0be29e","chunk-2d215c68","chunk-2d231596"],{"2ea6":function(e,t,r){"use strict";r.r(t),r.d(t,"list",(function(){return u})),r.d(t,"hotelList",(function(){return i})),r.d(t,"detail",(function(){return s})),r.d(t,"getairports",(function(){return d})),r.d(t,"deleteimg",(function(){return m})),r.d(t,"create",(function(){return b})),r.d(t,"update",(function(){return v})),r.d(t,"cityName",(function(){return w})),r.d(t,"airportsList",(function(){return O})),r.d(t,"createHotel",(function(){return R})),r.d(t,"updateHotel",(function(){return x}));var n=r("1da1"),a=(r("96cf"),r("b775")),o="manage";function u(e){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/info",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/air_list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/del_img",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/info/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return k=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/city_name",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/airports_list",method:"get"}));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function R(e){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/create",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/hotel/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}},5477:function(e,t,r){},"8d25":function(e,t,r){"use strict";r.r(t);var n=r("f2bf"),a=Object(n["withScopeId"])("data-v-323d8e44");Object(n["pushScopeId"])("data-v-323d8e44");var o=Object(n["createTextVNode"])(" 筛选条件 ");Object(n["popScopeId"])();var u=a((function(e,t,r,u,c,i){var l=Object(n["resolveComponent"])("p-query"),s=Object(n["resolveComponent"])("p-table"),p=Object(n["resolveComponent"])("p-form"),d=Object(n["resolveComponent"])("p-modal");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(l,{ref:"query","search-param":e.queryArray,onSearch:u.handleSearch,onReset:u.handleReset},{title:a((function(){return[o]})),_:1},8,["search-param","onSearch","onReset"]),Object(n["createVNode"])(s,{"row-key":"id",columns:e.columns,"form-item":e.formItem,"form-item-layout":e.formItemLayout,"default-form-model":e.defaultFormModel,"option-tip-field":"flightName","action-url":e.actionUrl,param:e.param,fetch:u.fetch,operate:e.operate,toolbar:!1,"submit-before":u.onSubmitBefore,"modal-props":e.modalProps,ref:"tableRef",checkbox:!1},{startAirportsCode:a((function(e){var t=e.record;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.startCity)+"/"+Object(n["toDisplayString"])(t.startAirportsCode),1)]})),endAirportsCode:a((function(e){var t=e.record;return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.endCity)+"/"+Object(n["toDisplayString"])(t.endAirportsCode),1)]})),_:1},8,["columns","form-item","form-item-layout","default-form-model","action-url","param","fetch","operate","submit-before","modal-props"]),Object(n["createVNode"])(d,{visible:e.modalShow,"onUpdate:visible":t[1]||(t[1]=function(t){return e.modalShow=t}),forceRender:!0,title:"库存调整",onOk:u.handleStockOK,onCancel:u.handleStockCancel},{default:a((function(){return[Object(n["createVNode"])(p,{ref:"formRef","form-schema":e.formSchema},null,8,["form-schema"])]})),_:1},8,["visible","onOk","onCancel"]),Object(n["createVNode"])(d,{visible:e.modalShow1,"onUpdate:visible":t[2]||(t[2]=function(t){return e.modalShow1=t}),forceRender:!0,title:"修改库存",onOk:u.handleStockOK1,onCancel:u.handleStockCancel1},{default:a((function(){return[Object(n["createVNode"])(p,{ref:"formRef1","form-schema":e.formSchema1},null,8,["form-schema"])]})),_:1},8,["visible","onOk","onCancel"])])})),c=r("1da1"),i=r("5530"),l=(r("159b"),r("99af"),r("96cf"),r("c049")),s=r("2ea6"),p=r("efba"),d={name:"sell-repertory",components:{},setup:function(){var e=Object(n["ref"])(null),t=Object(n["ref"])(null),r=Object(n["ref"])(null),a=Object(n["inject"])("message"),o=function(e){return{formItemLayout:{labelCol:{span:6},wrapperCol:{span:12}},formItem:[{type:"label",label:"当前库存",field:"stock",value:0,placeholder:"当前库存",props:{},rules:[{required:!1,message:"不能为空"}]},{type:"radio",label:"操作类型",field:"type",value:"sub",placeholder:"操作类型",props:{},options:[{label:"减",value:"sub"},{label:"加",value:"add"}],rules:[{required:!1,message:"不能为空"}]},{type:"input-number",label:"库存数量",field:"nums",value:1,placeholder:"库存数量",props:{autofocus:!0,min:0},rules:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}]}]}},u=Object(n["reactive"])({param:{},columns:[{title:"航班号",dataIndex:"flightName",key:"flightName",sorter:!1},{title:"起飞城市（三字码）",dataIndex:"startAirportsCode",key:"startAirportsCode",sorter:!1,slots:{customRender:"startAirportsCode"}},{title:"到达城市（三字码）",dataIndex:"endAirportsCode",key:"endAirportsCode",sorter:!1,slots:{customRender:"endAirportsCode"}},{title:"起飞时间",dataIndex:"startTime",key:"startTime",sorter:!1},{title:"到达时间",dataIndex:"endTime",key:"endTime",sorter:!1},{title:"原价",dataIndex:"originalPrice",key:"originalPrice",sorter:!1},{title:"折扣价格",dataIndex:"discountAmount",key:"discountAmount",sorter:!1},{title:"实际价格",dataIndex:"price",key:"price",sorter:!1},{title:"库存限购",dataIndex:"limitNums",key:"limitNums",sorter:!1},{title:"库存总数",dataIndex:"stock",key:"stock",sorter:!1},{title:"预定库存",dataIndex:"bookingStock",key:"bookingStock",sorter:!1},{title:"班期",dataIndex:"schedule",key:"schedule",sorter:!1,customRender:function(e){var t=e.text;e.record,e.index;return Object(p["getWeekLabel"])(t)}},{title:"备注",dataIndex:"remark",key:"remark",sorter:!1}],defaultFormModel:{id:void 0,key:"",value:"",remark:"",group:""},formItem:[{type:"input",label:"键",field:"key",value:"",props:{placeholder:"键"},rules:[{required:!0,message:"不能为空"}]},{type:"input",label:"值",field:"value",value:"",props:{placeholder:"值"},rules:[{required:!0,message:"不能为空"}]},{type:"input",label:"组",field:"group",value:"",props:{placeholder:"组"},rules:[{required:!1,message:"不能为空"}]},{type:"textarea",label:"备注",field:"remark",value:"",props:{placeholder:"备注"},rules:[{required:!1,message:"不能为空"}]}],actionUrl:{add:"/manage/configure/create",edit:"/manage/configure/update",del:"/manage/configure/delete",batchDel:"/manage/configure/batch_del"},formItemLayout:{labelCol:{span:6},wrapperCol:{span:16}},queryArray:[{type:"input",key:"flight_name",value:"",label:"航班号",hidden:!1,props:{placeholder:"航班号"}},{type:"select",key:"start_airports_code",options:[],label:"起飞机场三字码",hidden:!1,props:{allowClear:!0,showSearch:!0,placeholder:"起飞机场三字码"}},{type:"select",key:"end_airports_code",options:[],label:"到达机场三字码",hidden:!1,props:{allowClear:!0,showSearch:!0,placeholder:"到达机场三字码"}},{type:"datepicker",key:"start_time",value:"",label:"起飞时间",hidden:!1,props:{valueFormat:"YYYY-MM-DD",placeholder:"起飞时间"}}],sdList:[],operate:[{label:"库存修改",event:function(t){e.value.modelRef.id=t.id,e.value.modelRef.stock=t.stock,e.value.modelRef.nums=1,u.modalShow=!0}},{label:"修改",event:function(e){t.value.modelRef=Object(i["a"])({},e),u.modalShow1=!0}},{label:"删除",event:function(e){},hidden:!0}],modalProps:{},modalShow:!1,modalShow1:!1,formSchema:o(e),formSchema1:{formItemLayout:{labelCol:{span:6},wrapperCol:{span:12}},formItem:[{type:"input-number",label:"原价",field:"originalPrice",value:0,placeholder:"原价",props:{min:0},rules:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}]},{type:"input-number",label:"折扣价格",field:"discountAmount",value:1,placeholder:"折扣价格",props:{autofocus:!0,min:0},rules:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}]},{type:"input-number",label:"库存限购",field:"limitNums",value:1,placeholder:"库存限购",props:{autofocus:!0,min:0},rules:[{required:!0,message:"不能为空"},{pattern:/^\d+(\.\d+)?$/,message:"不能为负数"}]},{type:"textarea",label:"备注",field:"remark",value:1,placeholder:"备注",props:{autofocus:!0},rules:[{required:!1,message:"不能为空",transform:function(e){return e||""}}]}]}}),d=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["list"])(t);case 2:return r=e.sent,n=r.data,e.abrupt("return",{total:n.total,data:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["airportsList"])();case 2:t=e.sent,r=t.data,n=[],r.forEach((function(e){n.push({label:"".concat(e.cityName,"(").concat(e.airPort,")"),value:e.airPort})})),a=[],u.queryArray.forEach((function(e){"select"==e.type&&(e.options=n),a.push(e)})),u.queryArray=a;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n["onBeforeMount"])((function(){})),Object(n["onMounted"])(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f();case 1:case"end":return e.stop()}}),e)})))),Object(n["onBeforeUpdate"])((function(){})),Object(n["onUpdated"])((function(){})),Object(n["onBeforeUnmount"])((function(){})),Object(n["onUnmounted"])((function(){}));var m=function(e){return e},h=function(e){u.param=e},b=function(e){u.param=e},g=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.value.modelRef,e.value.validate().then((function(){Object(l["subStock"])({id:e.value.modelRef.id,type:e.value.modelRef.type,nums:e.value.modelRef.nums}).then((function(e){0==e.code&&(a.success("修改成功"),r.value.reload())})),u.modalShow=!1}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){u.modalShow=!1},y=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=Object(n["toRaw"])(t.value.modelRef),o.price=o.originalPrice-o.discountAmount,t.value.validate().then((function(){Object(l["update"])(o).then((function(e){0==e.code&&(a.success("修改成功"),r.value.reload())})),u.modalShow1=!1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){u.modalShow1=!1};return Object(i["a"])(Object(i["a"])({},Object(n["toRefs"])(u)),{},{fetch:d,onSubmitBefore:m,handleSearch:h,handleReset:b,handleStockOK:g,handleStockCancel:v,formRef:e,handleStockOK1:y,handleStockCancel1:w,formRef1:t,tableRef:r})}};r("cde2");d.render=u,d.__scopeId="data-v-323d8e44";t["default"]=d},c049:function(e,t,r){"use strict";r.r(t),r.d(t,"list",(function(){return u})),r.d(t,"subStock",(function(){return i})),r.d(t,"update",(function(){return s}));var n=r("1da1"),a=(r("96cf"),r("b775")),o="manage";function u(e){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/stock/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/stock/sub_stock",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(a["default"])({url:o+"/flight/stock/update",method:"put",data:t}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},cde2:function(e,t,r){"use strict";r("5477")},efba:function(e,t,r){"use strict";r.r(t),r.d(t,"Week",(function(){return n})),r.d(t,"getWeekLabel",(function(){return a}));r("7db0");var n=[{label:"星期一",value:1},{label:"星期二",value:2},{label:"星期三",value:3},{label:"星期四",value:4},{label:"星期五",value:5},{label:"星期六",value:6},{label:"星期天",value:7}];function a(e){try{return n.find((function(t){return t.value==e})).label}catch(t){return"未知"}}}}]);