webpackJsonp([3],{Ir4A:function(t,e,r){"use strict";var a=r("Xxa5"),n=r.n(a),s=r("exGp"),i=r.n(s),o=r("mtWM"),c=r.n(o),u=r("0poQ");e.a={asyncData:function(){var t=i()(n.a.mark(function t(e){var r,a;e.params;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5");case 2:return r=t.sent,a=r.data,t.abrupt("return",{title:a.errorMessage});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{title:"user",afterData:""}},methods:{afterGet:function(){var t=this;c.a.get("https://wxk-hotwords.daweixinke.com/hotwords?platform=cct_h5").then(function(e){var r=e.data.values[0].key;t.afterData=r})}},mounted:function(){this.afterGet()},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"}]}},components:{toastDom:u.a}}},JbQw:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"P0F/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Ir4A"),n=r("ZKVZ"),s=!1;var i=function(t){s||r("lSPF")},o=r("VU/8")(a.a,n.a,!1,i,null,null);o.options.__file="pages\\user\\index.vue",e.default=o.exports},ZKVZ:function(t,e,r){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("p",[this._v("是的，我就是user啊")]),e("h1",[this._v(this._s(this.title))]),e("p",[this._v("是的，我就是后来的"+this._s(this.afterData))]),e("toast-dom")],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},lSPF:function(t,e,r){var a=r("JbQw");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("d966da74",a,!1,{sourceMap:!1})}});