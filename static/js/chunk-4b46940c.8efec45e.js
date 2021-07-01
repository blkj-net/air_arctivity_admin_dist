/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 14:49:42
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b46940c","chunk-a94d7b12","chunk-2d2165b6"],{"0279":function(e,t,n){},"539d":function(e,t,n){},"7ddb":function(e,t,n){"use strict";n("0279")},8141:function(e,t,n){"use strict";n.r(t);var r=n("f2bf"),c=Object(r["withScopeId"])("data-v-732dda96");Object(r["pushScopeId"])("data-v-732dda96");var a=Object(r["createTextVNode"])("保存");Object(r["popScopeId"])();var o=c((function(e,t,n,o,u,d){var i=Object(r["resolveComponent"])("p-tree"),l=Object(r["resolveComponent"])("a-tab-pane"),s=Object(r["resolveComponent"])("a-tabs"),f=Object(r["resolveComponent"])("a-col"),p=Object(r["resolveComponent"])("a-button"),b=Object(r["resolveComponent"])("permission-tree"),h=Object(r["resolveComponent"])("a-row");return Object(r["openBlock"])(),Object(r["createBlock"])(h,{type:"flex",gutter:20},{default:c((function(){return[Object(r["createVNode"])(f,{flex:"300px"},{default:c((function(){return[Object(r["createVNode"])(s,{type:"card",onTabClick:t[3]||(t[3]=function(){return e.selectIndex=0}),activeKey:e.activeKey,"onUpdate:activeKey":t[4]||(t[4]=function(t){return e.activeKey=t})},{default:c((function(){return[Object(r["createVNode"])(l,{key:"1",tab:"角色列表"},{default:c((function(){return[Object(r["createVNode"])(i,{onSelect:o.onSelectRole,ref:"tree",url:e.roleUrl,"default-expand-all":"",selectedKeys:e.selectedRoleKeys,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.selectedRoleKeys=t})},null,8,["onSelect","url","selectedKeys"])]})),_:1}),Object(r["createVNode"])(l,{key:"2",tab:"部门列表"},{default:c((function(){return[Object(r["createVNode"])(i,{onSelect:o.onSelectDep,ref:"tree",url:e.depUrl,"default-expand-all":"",selectedKeys:e.selectedDepKeys,"onUpdate:selectedKeys":t[2]||(t[2]=function(t){return e.selectedDepKeys=t})},null,8,["onSelect","url","selectedKeys"])]})),_:1})]})),_:1},8,["activeKey"])]})),_:1}),Object(r["createVNode"])(f,{flex:1},{default:c((function(){return[Object(r["createVNode"])(p,{type:"primary",onClick:o.handleSave},{default:c((function(){return[a]})),_:1},8,["onClick"]),e.treeData&&0!=e.selectIndex?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0,data:e.treeData,checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":t[5]||(t[5]=function(t){return e.checkedKeys=t})},null,8,["data","checkedKeys"])):Object(r["createCommentVNode"])("",!0)]})),_:1})]})),_:1})})),u=n("5530"),d=n("1da1"),i=(n("159b"),n("4de4"),n("a15b"),n("d81d"),n("96cf"),n("a1a39")),l=n("c1b4"),s=n("6c02");function f(e){var t=[];for(var n in e){var r=e[n];t.push(r),0!==r.children.length&&p(r.children,t,r.id)}return t}function p(e,t,n){for(var r in e){var c=e[r];t.push(c),c.children&&0!==c.children.length&&p(c.children,t,c.id)}}var b={name:"permission",components:{PermissionTree:i["default"]},setup:function(){var e=Object(s["c"])();Object(r["onBeforeMount"])((function(){})),Object(r["onMounted"])((function(){if(e.query.t)try{c.selectIndex=parseInt(e.query.t),c.activeKey=e.query.t;var t=parseInt(e.query.id);switch(c.selectIndex){case 1:c.selectedRoleKeys.push(t),o(t);break;case 2:c.selectedDepKeys.push(t),p(t);break}}catch(n){}})),Object(r["onBeforeUpdate"])((function(){})),Object(r["onUpdated"])((function(){})),Object(r["onBeforeUnmount"])((function(){})),Object(r["onUnmounted"])((function(){}));var t=Object(r["getCurrentInstance"])(),n=t.proxy,c=Object(r["reactive"])({roleUrl:"manage/role/select",depUrl:"manage/department/select",treeData:[],roleId:"",depId:"",selectIndex:0,activeKey:"1",selectedRoleKeys:[],selectedDepKeys:[],checkedKeys:[]}),a=function(e,t){c.selectIndex=1;t.node,t.node.dataRef;var n=t.node.dataRef.extend;o(n.id)},o=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["roleList"])({id:t});case 2:n=e.sent,c.treeData=n.data,c.roleId=t;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e,t){c.selectIndex=2;t.node,t.node.dataRef;var n=t.node.dataRef.extend;p(n.id)},p=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["depList"])({id:t});case 2:n=e.sent,c.treeData=n.data,c.depId=t;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=f(c.treeData),r={role_id:c.roleId,department_id:c.depId,menus:[]},t.forEach((function(e){var t=e.extend.abilityList.filter((function(e){return 1==e.checkBox}));t.length&&r.menus.push({menu_id:e.extend.id,ability:t.map((function(e){return e.abilityKey})).join(","),parentId:e.parentId})})),r.menus=r.menus.filter((function(e){return e.ability.length>0})),a=null,e.t0=c.selectIndex,e.next=1===e.t0?8:2===e.t0?12:16;break;case 8:return e.next=10,Object(l["roleAuth"])(r);case 10:return a=e.sent,e.abrupt("break",16);case 12:return e.next=14,Object(l["depAuth"])(r);case 14:return a=e.sent,e.abrupt("break",16);case 16:a&&0==a.code&&n.$message.success("保存成功");case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u["a"])(Object(u["a"])({},Object(r["toRefs"])(c)),{},{onSelectRole:a,onSelectDep:i,handleSave:b})}};n("f142");b.render=o,b.__scopeId="data-v-732dda96";t["default"]=b},a1a39:function(e,t,n){"use strict";n.r(t);var r=n("5530"),c=n("f2bf"),a=Object(c["withScopeId"])("data-v-4ba892f2");Object(c["pushScopeId"])("data-v-4ba892f2");var o={class:"action-item"},u={style:{marginRight:"10vh"}};Object(c["popScopeId"])();var d=a((function(e,t,n,d,i,l){var s=Object(c["resolveComponent"])("a-col"),f=Object(c["resolveComponent"])("a-checkbox"),p=Object(c["resolveComponent"])("a-row"),b=Object(c["resolveComponent"])("a-tree");return e.treeData.length?(Object(c["openBlock"])(),Object(c["createBlock"])(b,Object(c["mergeProps"])({key:0,checkable:"","tree-data":e.treeData,defaultExpandAll:!0,onCheck:d.handleCheck},Object(r["a"])({},e.$props)),{custom:a((function(e){var t=e.title,n=e.extend;return[Object(c["createVNode"])("div",o,[Object(c["createVNode"])(p,{type:"flex"},{default:a((function(){return[Object(c["createVNode"])(s,null,{default:a((function(){return[Object(c["createVNode"])("span",u,Object(c["toDisplayString"])(t),1)]})),_:2},1024),Object(c["createVNode"])(s,{flex:1},{default:a((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.abilityList,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:e.abilityKey,checked:e.checkBox,"onUpdate:checked":function(t){return e.checkBox=t},onChange:d.handleCheckChange,onClick:function(t){return d.handleCheckClick(e)}},{default:a((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.abilityValue),1)]})),_:2},1032,["checked","onUpdate:checked","onChange","onClick"])})),128))]})),_:2},1024)]})),_:2},1024)])]})),_:1},16,["tree-data","onCheck"])):Object(c["createCommentVNode"])("",!0)})),i=(n("159b"),n("74eb"),{name:"permission-tree",components:{},props:{data:{type:Array,default:[]}},setup:function(e){Object(c["onBeforeMount"])((function(){})),Object(c["onMounted"])((function(){})),Object(c["onBeforeUpdate"])((function(){})),Object(c["onUpdated"])((function(){})),Object(c["onBeforeUnmount"])((function(){})),Object(c["onUnmounted"])((function(){}));var t=Object(c["reactive"])({treeData:Object(c["computed"])((function(){return e.data}))}),n=function(e,t){t.node,t.node.dataRef,t.node.dataRef.extend},a=function e(t,n){if(t.dataRef){if(t.dataRef.extend.abilityList.forEach((function(e,t){e.checkBox=n})),t.dataRef.children&&t.dataRef.children.length)for(var r=0;r<t.children.length;r++)e(t.dataRef.children[r],n)}else if(t.children)for(var c=0;c<t.children.length;c++)e(t.children[c],n);else t.extend.abilityList.forEach((function(e,t){e.checkBox=n}))},o=function(e,t){var n=t.checked,r=(t.checkedNodes,t.node);t.event,r.dataRef.extend;a(r,n)},u=function(e){},d=function(e){e.checkBox=!e.checkBox};return Object(r["a"])(Object(r["a"])({},Object(c["toRefs"])(t)),{},{onSelect:n,handleCheck:o,handleCheckChange:u,handleCheckClick:d})}});n("7ddb");i.render=d,i.__scopeId="data-v-4ba892f2";t["default"]=i},c1b4:function(e,t,n){"use strict";n.r(t),n.d(t,"roleList",(function(){return o})),n.d(t,"roleAuth",(function(){return d})),n.d(t,"depList",(function(){return l})),n.d(t,"depAuth",(function(){return f}));var r=n("1da1"),c=(n("96cf"),n("b775")),a="manage";function o(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({url:a+"/permisson/role_list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function d(e){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({url:a+"/permisson/role_auth",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function l(e){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({url:a+"/permisson/department_list",method:"get",params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(c["default"])({url:a+"/permisson/department_auth",method:"post",data:t}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},f142:function(e,t,n){"use strict";n("539d")}}]);