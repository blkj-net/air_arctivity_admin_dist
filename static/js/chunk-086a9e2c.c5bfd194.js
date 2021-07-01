/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 14:49:42
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-086a9e2c"],{"0054":function(e,n,a){var t={"./components.js":"4db9","./router.js":"74c9","./user.js":"ddda"};function i(e){var n=o(e);return a(n)}function o(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=o,e.exports=i,i.id="0054"},"4db9":function(e,n,a){var t=a("96eb"),i=t.Random;t.setup({timeout:"300-600"});for(var o=[],s=10,c=0;c<s;c++)o.push(t.mock({id:"@id",name:"@cname","phone|1":/^1[0-9]{10}$/,age:"@integer(18, 60)",email:"@email","sex|1":["男","女"],address:"@county(true)"}));for(var r=[],d=1;d<=5;d++)r.push({key:d,value:d,checked:!0});var u=[{key:1,value:1,title:"111",checkable:!0,disableCheckbox:!1,disabled:!1,selectable:!0,isLeaf:!1,extra:{id:1,name:2,actions:r},slots:{title:"custom"},children:[{key:11,value:11,title:"1-1",checkable:!0,disableCheckbox:!1,disabled:!1,selectable:!0,isLeaf:!1,extra:{id:11,name:22,actions:r},slots:{title:"custom"}}]}];e.exports=[{url:"/components/table",type:"get",response:function(){return{code:200,msg:"success",data:{data:o,total:i.integer(60,100)}}}},{url:"/components/tree",type:"get",response:function(){return{code:200,msg:"success",data:u}}}]},"615b":function(e,n,a){"use strict";a.r(n),a.d(n,"mockXHR",(function(){return d}));var t=a("2909"),i=(a("159b"),a("d3b7"),a("ddb0"),a("4d63"),a("ac1f"),a("25f0"),a("96eb")),o=a.n(i),s=a("ed08"),c=[],r=a("0054");function d(){function e(e){return function(n){var a;if(e instanceof Function){var t=n.body,i=n.type,c=n.url;a=e({method:i,body:JSON.parse(t),query:Object(s["paramObj"])(c)})}else a=e;return o.a.mock(a)}}o.a.XHR.prototype.proxy_send=o.a.XHR.prototype.send,o.a.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send.apply(this,arguments)},c.forEach((function(n){new RegExp(n.url),o.a.mock(new RegExp(n.url),n.type||"get",e(n.response))}))}r.keys().forEach((function(e){c.push.apply(c,Object(t["a"])(r(e)))}))},"74c9":function(e,n){var a=[{path:"/",name:"dashboard",component:"Layout",redirect:"/welcome",meta:{title:"仪表盘",icon:"caidanlan-bangong",hidden:!1,alwaysShow:!0},children:[{path:"welcome",name:"welcome",component:"@/views/dashboard/welcome/index",meta:{title:"欢迎页",icon:"caidanlan-bangong",hidden:!1,alwaysShow:!0,affix:!0}}]},{path:"/AeronauticalData",name:"AeronauticalData",component:"Layout",meta:{title:"航空数据",icon:"caidanlan-bangong",hidden:!1,alwaysShow:!0},children:[{path:"AirportManagement",name:"AirportManagement",redirect:"/AeronauticalData/AirportManagement/Airport",component:"@/views/AeronauticalData/AirportManagement/index",meta:{title:"机场管理",description:"机场管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0},children:[{path:"Airport",name:"Airport",component:"@/views/AeronauticalData/AirportManagement/airport",meta:{title:"机场管理",description:"机场管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"Airline",name:"Airline",component:"@/views/AeronauticalData/AirportManagement/airline",meta:{title:"航司管理",description:"航司管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}}]}]},{path:"/system",name:"system",component:"Layout",redirect:"/index",meta:{title:"系统管理",icon:"caidanlan-bangong",hidden:!1,alwaysShow:!1},children:[{path:"meuns",name:"meuns",component:"@/views/system/meuns",meta:{title:"系统管理菜单",description:"系统管理菜单 描述详情",icon:"caidanlan-bangong",hidden:!1,alwaysShow:!0}},{path:"api",name:"apis",component:"@/views/system/apis",meta:{title:"接口管理",description:"接口管理 描述详情",icon:"caidanlan-xiaoshou-xiangmuguanli",hidden:!1,alwaysShow:!0}},{path:"meun",name:"meuns",component:"@/views/system/meuns",meta:{title:"菜单管理",description:"菜单管理 描述详情",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"permission",name:"permission",component:"@/views/system/permission",meta:{title:"权限管理",description:"权限管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"roles",name:"roles",component:"@/views/system/roles",meta:{title:"角色管理",description:"角色管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"departments",name:"departments",component:"@/views/system/departments",meta:{title:"部门管理",description:"部门管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"staff",name:"staff",component:"@/views/system/staff",meta:{title:"员工管理",description:"员工管理",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}},{path:"subject",name:"subject",component:"@/views/system/subject",meta:{title:"收支科目",description:"收支科目",icon:"caidanlan-kucun-kucunchanpinliebiao",hidden:!1,alwaysShow:!0}}]},{path:"/components",name:"components",component:"Layout",redirect:"/components/table",meta:{title:"组件测试",hidden:!1,alwaysShow:!0,icon:"caidanlan-kucun-kucunchanpinliebiao"},children:[{path:"table",name:"table",component:"@/views/components/table",meta:{title:"表格",hidden:!1,alwaysShow:!0,icon:"caidanlan-kucun-kucunchanpinliebiao"}},{path:"tree",name:"tree",component:"@/views/components/tree",meta:{title:"树",hidden:!1,alwaysShow:!0,icon:"caidanlan-kucun-kucunchanpinliebiao"}}]}];e.exports=[{url:"/menu/navigate",type:"get",response:function(){return{code:200,msg:"success",data:a}}}]},ddda:function(e,n){var a={admin:"admin-accessToken",caogang:"admin-accessToken",editor:"editor-accessToken",test:"test-accessToken"};e.exports=[{url:"/publicKey",type:"post",response:function(){return{code:200,msg:"success",data:{mockServer:!0,publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB"}}}},{url:"/sys/sign_in",type:"post",response:function(e){var n=e.body.username,t=a[n];return t?{code:0,data:{user:{ID:1,CreatedAt:"2021-03-04T19:13:37+08:00",UpdatedAt:"2021-03-04T19:13:37+08:00",uuid:"db77d2fe-d799-4565-9380-551e0d4a19b5",userName:"admin",nickName:"超级管理员",headerImg:"http://qmplusimg.henrongyi.top/gva_header.jpg",authority:{CreatedAt:"2021-03-04T19:13:37+08:00",UpdatedAt:"2021-03-04T19:13:37+08:00",DeletedAt:null,authorityId:"888",authorityName:"普通用户",parentId:"0",dataAuthorityId:null,children:null,menus:null,defaultRouter:"dashboard"},authorityId:"888"},accessToken:t,expiresAt:1615462376e3},msg:"登录成功"}:{code:500,msg:"帐户或密码不正确"}}},{url:"/socialLogin",type:"post",response:function(e){var n=e.body.code;return n?{code:200,msg:"success",data:{accessToken:a.admin}}:{code:500,msg:"未成功获取Token"}}},{url:"/register",type:"post",response:function(){return{code:200,msg:"模拟注册成功"}}},{url:"/userInfo",type:"post",response:function(e){var n=e.body.access_token,a=n,t=["admin"],i=["READ"],o="admin";return"admin-accessToken"===a&&(t=["admin"],i=["READ","WRITE","DELETE"],o="admin"),"editor-accessToken"===a&&(t=["editor"],i=["READ","WRITE"],o="editor"),"test-accessToken"===a&&(t=["admin","editor"],i=["READ"],o="test"),{code:200,msg:"success",data:{roles:t,ability:i,username:o,"avatar|1":["https://i.gtimg.cn/club/item/face/img/2/15922_100.gif","https://i.gtimg.cn/club/item/face/img/8/15918_100.gif"]}}}},{url:"/logout",type:"post",response:function(){return{code:200,msg:"success"}}}]}}]);