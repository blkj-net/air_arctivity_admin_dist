/*!
 *  build: admin-vue-antd 
 *  copyright: AndPHP 417170808@qq.com 
 *  time: 2021-7-1 14:49:42
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a7ef48a"],{"4d6e":function(e,t,o){},ab04:function(e,t,o){"use strict";o("4d6e")},eb9d:function(e,t,o){"use strict";o.r(t);var n=o("f2bf"),c=Object(n["withScopeId"])("data-v-7ccb603d");Object(n["pushScopeId"])("data-v-7ccb603d");var l={class:"slider_verify_code",ref:"slider_wrap"},i={class:"backgroud",ref:"slider_background"},u={class:"content",ref:"slider_content"};Object(n["popScopeId"])();var r=c((function(e,t,o,c,r,s){return Object(n["openBlock"])(),Object(n["createBlock"])("div",l,[Object(n["createVNode"])("div",i,null,512),Object(n["createVNode"])("div",u,null,512),Object(n["createVNode"])("div",{class:"icon",ref:"slider_icon",onTouchstart:t[1]||(t[1]=function(){return c.touchstart&&c.touchstart.apply(c,arguments)}),onTouchmove:t[2]||(t[2]=function(){return c.touchmove&&c.touchmove.apply(c,arguments)}),onTouchend:t[3]||(t[3]=function(){return c.touchend&&c.touchend.apply(c,arguments)})},[Object(n["renderSlot"])(e.$slots,"icon",{},void 0,!0)],544)],512)})),s={name:"slider-verify-code",props:{options:{type:Object,required:!0,default:function(){return{text:"请向右滑动验证",successText:"验证成功",sliderTextColor:"#54e346",sliderBackground:"#54e346",sliderColor:"#fff",height:40,width:"100%",color:"#fff",backgroud:"#cfd3ce",fontSize:12,icon:!1,delay:0}}}},setup:function(e,t){var o,c,l,i,u,r,s,d=t.emit,a=Object(n["ref"])(e.options).value,f=!1,h=Object(n["ref"])(null),p=Object(n["ref"])(null),y=Object(n["ref"])(null),b=Object(n["ref"])(null);function v(e){r=e.touches[0].clientX}function m(e){if(1===e.touches.length){s=e.touches[0].clientX;var t=s-r;t>u?t=u:t<0&&(t=0),o.style.left=t+"px",l.style.width=t+"px",l.style.background=a.sliderBackground,t===u&&(i.innerHTML=a.successText,o.style.color=a.sliderTextColor,!a.icon&&(o.innerHTML="✔"),f=!0,o.onmousedown=null,document.onmousemove=null,setTimeout((function(){d("on-verify",f)}),a.delay))}}function g(){f||(o.style.left="0px",l.style.width="0px")}return Object(n["onMounted"])((function(){o=h.value,c=p.value,l=y.value,i=b.value,c.style.height=a.height+"px",c.style.lineHeight=a.height+"px",c.style.background=a.backgroud,c.style.fontSize=a.fontSize+"px",c.style.width=a.width+"px",o.style.background=a.sliderColor,!a.icon&&(o.innerHTML="&gt;&gt;"),o.style.transition=null,o.style.height=a.height+"px",o.style.width=a.height+"px",o.style.lineHeight=a.height+"px",o.style.left="0px",i.style.color=a.color,i.innerHTML=a.text,l.style.transition=null,l.style.width="0px",u=c.offsetWidth&&o.offsetWidth?c.offsetWidth-o.offsetWidth:0,o.onmousedown=function(e){var t=e.clientX;document.onmousemove=function(e){var n=e.clientX,c=n-t;c>u?c=u:c<0&&(c=0),o.style.left=c+"px",l.style.width=c+"px",l.style.background=a.sliderBackground,c===u&&(i.innerHTML=a.successText,o.style.color=a.sliderTextColor,!a.icon&&(o.innerHTML="✔"),f=!0,o.onmousedown=null,document.onmousemove=null,setTimeout((function(){d("on-verify",f)}),a.delay))},document.onmouseup=function(){f||(o.style.left="0px",l.style.width="0px",document.onmousemove=null,document.onmouseup=null)}}})),{slider_icon:h,slider_wrap:p,slider_content:b,slider_background:y,touchstart:v,touchmove:m,touchend:g}}};o("ab04");s.render=r,s.__scopeId="data-v-7ccb603d";t["default"]=s}}]);