/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 10:25:30
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039aa32c","chunk-2d20f389"],{"1c20":function(e,t,r){"use strict";r.r(t);var a=r("f2bf"),n=Object(a["withScopeId"])("data-v-48e36a38"),o=n((function(e,t,r,n,o,u){var l=Object(a["resolveComponent"])("p-table");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(l,{"row-key":"id",columns:e.columns,"form-item":e.formItem,"form-item-layout":e.formItemLayout,"default-form-model":e.defaultFormModel,"option-tip-field":"key","action-url":e.actionUrl,param:e.param,fetch:n.fetch,operate:!0,"submit-before":n.onSubmitBefore,"modal-props":e.modalProps},null,8,["columns","form-item","form-item-layout","default-form-model","action-url","param","fetch","submit-before","modal-props"])])})),u=r("5530"),l=r("1da1"),c=(r("96cf"),r("99af"),r("d81d"),r("b368")),i={name:"configuration",components:{},setup:function(){var e=Object(a["reactive"])({param:{},columns:[{title:"键",dataIndex:"key",key:"key",sorter:!1},{title:"值",dataIndex:"value",key:"value",sorter:!1},{title:"组",dataIndex:"group",key:"group",sorter:!1},{title:"备注",dataIndex:"remark",key:"remark",sorter:!1}],defaultFormModel:{id:void 0,key:"",value:"",remark:"",group:""},formItem:[{type:"input",label:"键",field:"key",value:"",props:{placeholder:"键"},rules:[{required:!0,message:"不能为空"}]},{type:"input",label:"值",field:"value",value:"",props:{placeholder:"值"},rules:[{required:!0,message:"不能为空"}]},{type:"input",label:"组",field:"group",value:"",props:{placeholder:"组"},rules:[{required:!1,message:"不能为空"}]},{type:"textarea",label:"备注",field:"remark",value:"",props:{placeholder:"备注"},rules:[{required:!1,message:"不能为空"}]}],actionUrl:{add:"/manage/configure/create",edit:"/manage/configure/update",del:"/manage/configure/delete",batchDel:"/manage/configure/batch_del"},formItemLayout:{labelCol:{span:6},wrapperCol:{span:16}},queryArray:[{type:"input",key:"shop_name",value:"",label:"店铺名称",hidden:!1,props:{placeholder:"店铺名称"}},{type:"select",key:"platform_id",value:"",label:"所属平台",hidden:!1,options:Object(a["computed"])((function(){var t=[{label:"全部",value:""}];return t=t.concat(e.platformList.map((function(e){return{label:e.platformName,value:e.id}}))),t})),props:{placeholder:"所属平台"}},{type:"tree-select",key:"department_id",value:[""],label:"所属部门",hidden:!1,options:Object(a["computed"])((function(){var t=[{key:"",title:"全部",value:""}];return t=t.concat(e.departmentList),t})),props:{placeholder:"所属部门"}}],sdList:[],modalProps:{}}),t=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["list"])(t);case 2:return r=e.sent,a=r.data,e.abrupt("return",{total:a.total,data:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a["onBeforeMount"])((function(){})),Object(a["onMounted"])(Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),Object(a["onBeforeUpdate"])((function(){})),Object(a["onUpdated"])((function(){})),Object(a["onBeforeUnmount"])((function(){})),Object(a["onUnmounted"])((function(){}));var r=function(e){return e},n=function(t){e.param=t},o=function(e){table.value.reload()};return Object(u["a"])(Object(u["a"])({},Object(a["toRefs"])(e)),{},{fetch:t,onSubmitBefore:r,handleSearch:n,handleReset:o})}};r("1fd6");i.render=o,i.__scopeId="data-v-48e36a38";t["default"]=i},"1fd6":function(e,t,r){"use strict";r("6be9")},"6be9":function(e,t,r){},b368:function(e,t,r){"use strict";r.r(t),r.d(t,"list",(function(){return u}));var a=r("1da1"),n=(r("96cf"),r("b775")),o="manage";function u(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(n["default"])({url:o+"/configure/list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}}}]);