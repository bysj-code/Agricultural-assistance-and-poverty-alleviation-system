(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nonghu-add-or-update"],{2075:function(r,t,e){"use strict";e.r(t);var i=e("674c"),n=e("a060");for(var o in n)"default"!==o&&function(r){e.d(t,r,(function(){return n[r]}))}(o);e("deff");var a,u=e("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"68fd2771",null,!1,i["a"],a);t["default"]=s.exports},"674c":function(r,t,e){"use strict";var i,n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("农户账号")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nonghuzhanghao,placeholder:"农户账号"},model:{value:r.ruleForm.nonghuzhanghao,callback:function(t){r.$set(r.ruleForm,"nonghuzhanghao",t)},expression:"ruleForm.nonghuzhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("密码")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(t){r.$set(r.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("农户姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.nonghuxingming,placeholder:"农户姓名"},model:{value:r.ruleForm.nonghuxingming,callback:function(t){r.$set(r.ruleForm,"nonghuxingming",t)},expression:"ruleForm.nonghuxingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.touxiangTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("头像")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.touxiang?e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.touxiang,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("性别")]),e("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(t){arguments[0]=t=r.$handleEvent(t),r.xingbieChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("联系方式")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.lianxifangshi,placeholder:"联系方式"},model:{value:r.ruleForm.lianxifangshi,callback:function(t){r.$set(r.ruleForm,"lianxifangshi",t)},expression:"ruleForm.lianxifangshi"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("地址")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.dizhi,placeholder:"地址"},model:{value:r.ruleForm.dizhi,callback:function(t){r.$set(r.ruleForm,"dizhi",t)},expression:"ruleForm.dizhi"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[r._v("邮箱")]),e("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.youxiang,placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(t){r.$set(r.ruleForm,"youxiang",t)},expression:"ruleForm.youxiang"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(51, 153, 153, 1)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},"8e47":function(r,t,e){var i=e("24fb");t=i(!1),t.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-68fd2771]{padding:%?20?%}.content[data-v-68fd2771]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-68fd2771]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-68fd2771]{width:%?180?%}.avator[data-v-68fd2771]{width:%?150?%;height:%?60?%}.right-input[data-v-68fd2771]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-68fd2771]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-68fd2771]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-68fd2771]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-68fd2771]{border:0}.cu-form-group uni-input[data-v-68fd2771]{padding:0 %?30?%}.uni-input[data-v-68fd2771]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-68fd2771]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-68fd2771]::after{line-height:%?88?%}.select .uni-input[data-v-68fd2771]{line-height:%?88?%}.input .right-input[data-v-68fd2771]{line-height:%?88?%}',""]),r.exports=t},a060:function(r,t,e){"use strict";e.r(t);var i=e("bbaf"),n=e.n(i);for(var o in i)"default"!==o&&function(r){e.d(t,r,(function(){return i[r]}))}(o);t["default"]=n.a},aa3e:function(r,t,e){var i=e("8e47");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var n=e("4f06").default;n("1b184dfa",i,!0,{sourceMap:!1,shadowMode:!1})},bbaf:function(r,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac6a"),e("28a5"),e("96cf");var n=i(e("3b8d")),o=i(e("e2b1")),a={data:function(){return{ruleForm:{nonghuzhanghao:"",mima:"",nonghuxingming:"",touxiang:"",xingbie:"",lianxifangshi:"",dizhi:"",youxiang:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{nonghuzhanghao:!1,mima:!1,nonghuxingming:!1,touxiang:!1,xingbie:!1,lianxifangshi:!1,dizhi:!1,youxiang:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(t){var e,i,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(e);case 3:if(i=r.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){r.next=14;break}return this.ruleForm.id=t.id,r.next=12,this.$api.info("nonghu",this.ruleForm.id);case 12:i=r.sent,this.ruleForm=i.data;case 14:if(!t.cross){r.next=53;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 17:if((r.t1=r.t0()).done){r.next=53;break}if(o=r.t1.value,"nonghuzhanghao"!=o){r.next=23;break}return this.ruleForm.nonghuzhanghao=n[o],this.ro.nonghuzhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=o){r.next=27;break}return this.ruleForm.mima=n[o],this.ro.mima=!0,r.abrupt("continue",17);case 27:if("nonghuxingming"!=o){r.next=31;break}return this.ruleForm.nonghuxingming=n[o],this.ro.nonghuxingming=!0,r.abrupt("continue",17);case 31:if("touxiang"!=o){r.next=35;break}return this.ruleForm.touxiang=n[o],this.ro.touxiang=!0,r.abrupt("continue",17);case 35:if("xingbie"!=o){r.next=39;break}return this.ruleForm.xingbie=n[o],this.ro.xingbie=!0,r.abrupt("continue",17);case 39:if("lianxifangshi"!=o){r.next=43;break}return this.ruleForm.lianxifangshi=n[o],this.ro.lianxifangshi=!0,r.abrupt("continue",17);case 43:if("dizhi"!=o){r.next=47;break}return this.ruleForm.dizhi=n[o],this.ro.dizhi=!0,r.abrupt("continue",17);case 47:if("youxiang"!=o){r.next=51;break}return this.ruleForm.youxiang=n[o],this.ro.youxiang=!0,r.abrupt("continue",17);case 51:r.next=17;break;case 53:this.styleChange();case 54:case"end":return r.stop()}}),r,this)})));function t(t){return r.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var r=this;this.$api.upload((function(t){r.ruleForm.touxiang=r.$base.url+"upload/"+t.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.nonghuzhanghao){r.next=3;break}return this.$utils.msg("农户账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(this.ruleForm.nonghuxingming){r.next=9;break}return this.$utils.msg("农户姓名不能为空"),r.abrupt("return");case 9:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 12:if(!this.ruleForm.id){r.next=17;break}return r.next=15,this.$api.update("nonghu",this.ruleForm);case 15:r.next=19;break;case 17:return r.next=19,this.$api.add("nonghu",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return r.stop()}}),r,this)})));function t(){return r.apply(this,arguments)}return t}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===r?e-=60:"end"===r&&(e+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(e,"-").concat(i,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};t.default=a},deff:function(r,t,e){"use strict";var i=e("aa3e"),n=e.n(i);n.a}}]);