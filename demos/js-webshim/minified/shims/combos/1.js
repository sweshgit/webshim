var swfmini=function(){function e(){if(!A){try{var e=C.getElementsByTagName("body")[0].appendChild(d("span"));e.parentNode.removeChild(e)}catch(t){return}A=!0;for(var i=T.length,n=0;i>n;n++)T[n]()}}function t(e){A?e():T[T.length]=e}function i(){}function n(){x&&a()}function a(){var e=C.getElementsByTagName("body")[0],t=d(m);t.setAttribute("type",w);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=p){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),O.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=u(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=p)t=i;else{var n=i.getElementsByTagName(m)[0];n&&(t=n)}return t}function s(e,t,i){var n,a=u(i);if(O.wk&&312>O.wk)return n;if(a)if(typeof e.id==p&&(e.id=i),O.ie&&O.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var l="";for(var c in t)t[c]!=Object.prototype[c]&&(l+='<param name="'+c+'" value="'+t[c]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",k[k.length]=e.id,n=u(e.id)}else{var h=d(m);h.setAttribute("type",w);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?h.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&h.setAttribute(f,e[f]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&o(h,v,t[v]);a.parentNode.replaceChild(h,a),n=h}return n}function o(e,t,i){var n=d("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function l(e){var t=u(e);t&&"OBJECT"==t.nodeName&&(O.ie&&O.win?(t.style.display="none",function(){4==t.readyState?c(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function c(e){var t=u(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function u(e){var t=null;try{t=C.getElementById(e)}catch(i){}return t}function d(e){return C.createElement(e)}function h(e){var t=O.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function f(e,t){if(P){var i,n=t?"visible":"hidden";A&&i&&u(e)&&(u(e).style.visibility=n)}}var p="undefined",m="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",w="application/x-shockwave-flash",b=window,C=document,E=navigator,x=!1,T=[n],k=[],S=[],A=!1,P=!0,O=function(){var e=typeof C.getElementById!=p&&typeof C.getElementsByTagName!=p&&typeof C.createElement!=p,t=E.userAgent.toLowerCase(),i=E.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),a=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,o=[0,0,0],l=null;if(typeof E.plugins!=p&&typeof E.plugins[g]==m)l=E.plugins[g].description,!l||typeof E.mimeTypes!=p&&E.mimeTypes[w]&&!E.mimeTypes[w].enabledPlugin||(x=!0,s=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof b.ActiveXObject!=p)try{var c=new ActiveXObject(y);c&&(l=c.GetVariable("$version"),l&&(s=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(u){}return{w3:e,pv:o,wk:r,ie:s,win:n,mac:a}}();return function(){O.ie&&O.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=S.length,t=0;e>t;t++)S[t][0].detachEvent(S[t][1],S[t][2]);for(var i=k.length,n=0;i>n;n++)l(k[n]);for(var a in O)O[a]=null;O=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return O.w3?r(e):void 0},embedSWF:function(e,i,n,a,r,o,l,c,u,d){var v={success:!1,id:i};O.w3&&!(O.wk&&312>O.wk)&&e&&i&&n&&a&&r?(f(i,!1),t(function(){n+="",a+="";var t={};if(u&&typeof u===m)for(var o in u)t[o]=u[o];t.data=e,t.width=n,t.height=a;var g={};if(c&&typeof c===m)for(var y in c)g[y]=c[y];if(l&&typeof l===m)for(var w in l)typeof g.flashvars!=p?g.flashvars+="&"+w+"="+l[w]:g.flashvars=w+"="+l[w];if(h(r)){var b=s(t,g,i);t.id==i&&f(i,!0),v.success=!0,v.ref=b}else f(i,!0);d&&d(v)})):d&&d(v)},switchOffAutoHideShow:function(){P=!1},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:h,createSWF:function(e,t,i){return O.w3?s(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){O.w3&&l(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();(function(e){"use strict";var t="webkitURL"in window,i=window.Modernizr,n=e.webshims,a=n.bugs,r=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(r[0].querySelector)try{a.findRequired=!r[0].querySelector("select:required")}catch(e){a.findRequired=!1}},o=e("input",r).eq(0),l=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};a.findRequired=!1,a.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},!i.formvalidation||a.bustedValidity?s():(n.capturingEvents(["invalid"],!0),(window.opera||window.testGoodWithFix)&&(r.appendTo("head"),s(),a.validationMessage=!o.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),r.remove(),e(function(){l(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(i){var a=n.defineNodeNameProperty(i,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var i=a.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,i}}})})})})),t&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,i=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(i=e.target.form)&&setTimeout(function(){i=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&i&&i==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()),e.webshims.register("form-core",function(e,n,a,r,s,o){var l={checkbox:1,radio:1},c=e([]),u=n.bugs,d=function(t){t=e(t);var i,n,a=c;return"radio"==t[0].type&&(n=t.prop("form"),i=t[0].name,a=i?n?e(n[i]):e(r.getElementsByName(i)).filter(function(){return!e.prop(this,"form")}):t,a=a.filter('[type="radio"]')),a},h=n.getContentValidationMessage=function(t,i,n){var a=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&a[n]&&(a=a[n]),"object"==typeof a&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||e.each(i,function(e,t){return t&&"valid"!=e&&a[e]?(a=a[e],!1):s})),"object"==typeof a&&(a=a.defaultMessage),a||""},f={number:1,range:1,date:1},p=function(t){var i=!1;return e(e.prop(t,"elements")).each(function(){return i=e(this).is(":invalid"),i?!1:s}),i};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!p(t):!(!e.prop(t,"willValidate")||!v(t))},"invalid-element":function(t){return e.nodeName(t,"form")?p(t):!(!e.prop(t,"willValidate")||v(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)},"in-range":function(t){if(!f[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||i.rangeOverflow||i.rangeUnderflow)},"out-of-range":function(t){if(!f[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||!i.rangeOverflow&&!i.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(i){}return!1};var m=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(u.bustedValidity||u.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,s=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,i=function(i){var n=arguments;return n=e.call(n,1,n.length),n.unshift(i.replace(a,s)),t.apply(this,n)};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}(),(!i.prefixed||i.prefixed("matchesSelector",r.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,s),n.call(this,e,t)})}();var g=e.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,i,n){var a=g.apply(this,arguments);return t&&"form"in t&&y[i]&&n!==s&&e(t).hasClass(C)&&v(t)&&(e(t).getShadowElement().removeClass(C),"checked"==i&&n&&d(t).not(t).removeClass(C).removeAttr("aria-invalid")),a};var w=function(t,i){var n;return e.each(t,function(t,a){return a?(n="customError"==t?e.prop(i,"validationMessage"):t,!1):s}),n},b=function(e){var t;try{t=r.activeElement.name===e}catch(i){}return t},C="user-error",E="user-success",x={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},T=function(i){var n,a;if(i.target&&(n=e(i.target).getNativeElement()[0],"submit"!=n.type&&e.prop(n,"willValidate"))){a=e.data(n,"webshimsswitchvalidityclass");var r=function(){if("focusout"!=i.type||"radio"!=n.type||!b(n.name)){var a,r,s,o,c,h=e.prop(n,"validity"),f=e(n).getShadowElement();t&&"change"==i.type&&!u.bustedValidity&&x[f.prop("type")]&&f.is(":focus")||(e(n).trigger("refreshCustomValidityRules"),h.valid?f.hasClass(E)||(a=E,r=C,o="changedvaliditystate",s="changedvalid",l[n.type]&&n.checked&&d(n).not(n).removeClass(r).addClass(a).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(c=w(h,n),e.data(n,"webshimsinvalidcause")!=c&&(e.data(n,"webshimsinvalidcause",c),o="changedvaliditystate"),f.hasClass(C)||(a=C,r=E,l[n.type]&&!n.checked&&d(n).not(n).removeClass(r).addClass(a),s="changedinvalid")),a&&(f.addClass(a).removeClass(r),setTimeout(function(){e(n).trigger(s)},0)),o&&setTimeout(function(){e(n).trigger(o)},0),e.removeData(n,"webshimsswitchvalidityclass"))}};a&&clearTimeout(a),"refreshvalidityui"==i.type?r():e.data(n,"webshimsswitchvalidityclass",setTimeout(r,9))}};e(r).on(o.validityUIEvents||"focusout change refreshvalidityui",T),m.changedvaliditystate=!0,m.refreshCustomValidityRules=!0,m.changedvalid=!0,m.changedinvalid=!0,m.refreshvalidityui=!0,n.triggerInlineForm=function(t,i){e(t).trigger(i)},n.modules["form-core"].getGroupElements=d;var k=function(){n.scrollRoot=t||"BackCompat"==r.compatMode?e(r.body):e(r.documentElement)},S=i.boxSizing||i["display-table"]||e.support.getSetAttribute?"minWidth":"width";k(),n.ready("DOM",k),n.getRelOffset=function(t,i){t=e(t);var n,a=e(i).offset();return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){n=t.offset()}),a.top-=n.top,a.left-=n.left,a},n.wsPopover={_create:function(){this.options=e.extend({},n.cfg.wspopover,this.options),this.id=n.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},isInElement:function(t,i){return t==i||e.contains(t,i)},show:function(t){var i=e.Event("wspopoverbeforeshow");if(this.element.trigger(i),!i.isDefaultPrevented()&&!this.isVisible){this.isVisible=!0,t=e(t||this.options.prepareFor).getNativeElement();var n=this,s=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(t,s),this.position(s),n.timers.show=setTimeout(function(){n.element.css("display",""),n.timers.show=setTimeout(function(){n.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),e(r).on("focusin"+this.eventns+" mousedown"+this.eventns,function(e){!n.options.hideOnBlur||n.stopBlur||n.isInElement(n.lastElement[0]||r.body,e.target)||n.isInElement(t[0]||r.body,e.target)||n.isInElement(n.element[0],e.target)||n.hide()}),e(a).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(n.timers.repos),n.timers.repos=setTimeout(function(){n.position(s)},900)})}},prepareFor:function(t,i){var n,a=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),r=this,s={};this.lastElement=e(t).getShadowFocusElement(),"element"==a.appendTo?this.element.insertAfter(t):this.element.appendTo(a.appendTo),this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),s[S]=a.constrainWidth?i.outerWidth():"",this.element.css(s),a.hideOnBlur&&(n=function(e){r.stopBlur?e.stopImmediatePropagation():r.hide()},r.timers.bindBlur=setTimeout(function(){r.lastElement.off(r.eventns).on("focusout"+r.eventns+" blur"+r.eventns,n),r.lastElement.getNativeElement().off(r.eventns)},10)),this.prepared||e.fn.bgIframe&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(a).off(this.eventns),e(r).off(this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){var t=e.Event("wspopoverbeforehide");if(this.element.trigger(t),!t.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var i=this,n=function(){i.element.css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(i.timers.forcehide)};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),e(a).on("resize"+this.eventns,n),i.timers.forcehide=setTimeout(n,999)}},position:function(e){var t=n.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);t.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(t)}},n.wsPopover.id=0,n.validityAlert=function(){var t=n.objectCreate(n.wsPopover,{},o.messagePopover),i=t.hide.bind(t);return t.element.addClass("validity-alert").attr({role:"alert"}),e.extend(t,{hideDelay:5e3,showFor:function(t,n,a,r){t=e(t).getNativeElement(),this.clear(),this.hide(),r||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(i,this.hideDelay))),a||this.setFocus(t)},setFocus:function(t){var i,r=e(t).getShadowFocusElement(),s=n.scrollRoot.scrollTop(),o=r.offset().top-30;s>o&&(n.scrollRoot.animate({scrollTop:o-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(s-o)),80)}),i=!0);try{r[0].focus()}catch(l){}i&&(n.scrollRoot.scrollTop(s),setTimeout(function(){n.scrollRoot.scrollTop(s)},0)),e(a).triggerHandler("pospopover"+this.eventns)},getMessage:function(e,i){i||(i=h(e[0])||e.prop("customValidationMessage")||e.prop("validationMessage")),i?t.contentElement.text(i):this.hide()}}),t}(),function(){var t,i,n=[];e(r).on("invalid",function(a){if(!a.wrongWebkitInvalid){var s=e(a.target),o=s.getShadowElement();if(o.hasClass(C)||(o.addClass(C).removeClass(E),setTimeout(function(){e(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},0)),!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=a.isDefaultPrevented;var l=e.Event("firstinvalidsystem");e(r).triggerHandler(l,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),s.trigger(t)}t&&t.isDefaultPrevented()&&a.preventDefault(),n.push(a.target),a.extraData="fix",clearTimeout(i),i=setTimeout(function(){var i={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(a.target).trigger(i,i)},9),s=null,o=null}})}(),e.fn.getErrorMessage=function(){var t="",i=this[0];return i&&(t=h(i)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),t},o.replaceValidationUI&&(o.overrideMessages&&(o.customMessages||null==o.customMessages)&&(o.customMessages=!0,o.overrideMessages=!1,n.info("set overrideMessages to false. Use customMessages instead")),n.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})}))})})(jQuery),function(e,t,i){"use strict";var n,a=t.audio&&t.video,r=!1,s=i.bugs,o=function(){i.ready(c,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([c],a))})},l=i.cfg.mediaelement,c=l&&"jwplayer"==l.player?"mediaelement-swf":"mediaelement-jaris";if(!l)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var u=document.createElement("video");t.videoBuffered="buffered"in u,r="loop"in u,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(a&&!l.preferFlash){var d={1:1,2:1},h=function(t){var a,r=t.target.parentNode;!l.preferFlash&&(e(t.target).is("audio, video")||r&&e("source:last",r)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!d[a.prop("error")]&&e(function(){n&&!l.preferFlash?(o(),i.ready("WINDOWLOAD "+c,function(){setTimeout(function(){l.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(l.preferFlash=!0,document.removeEventListener("error",h,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",h,!0)})};document.addEventListener("error",h,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(h({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var n=i.cfg.track,a=function(t){e(t.target).filter("track").each(r)},r=function(){return s.track||!n.override&&3==e.prop(this,"readyState")?(n.override=!0,i.reTest("track"),document.removeEventListener("error",a,!0),this&&e.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support"),!1):void 0},o=function(){document.addEventListener("error",a,!0),s.track?r():e("track").each(r)};n.override||(i.isReady("track")?o():e(o))}(),i.register("mediaelement-core",function(e,i,u,d,h){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var f=i.mediaelement;f.parseRtmp=function(e){var t,n,a,r=e.src.split("://"),s=r[1].split("/");for(e.server=r[0]+"://"+s[0]+"/",e.streamId=[],t=1,n=s.length;n>t;t++)a||-1===s[t].indexOf(":")||(s[t]=s[t].split(":")[1],a=!0),a?e.streamId.push(s[t]):e.server+=s[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var p=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=f.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:f.parseRtmp(a)),a):a},m=!n&&"postMessage"in u&&a,v=function(){v.loaded||(v.loaded=!0,e(function(){i.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&m&&(t=!0,i.loader.loadScript("https://www.youtube.com/player_api"),e(function(){i._polyfill(["mediaelement-yt"])}))}}(),y=function(){n?o():g()};i.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},f.mimeTypes.source=e.extend({},f.mimeTypes.audio,f.mimeTypes.video),f.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(f.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):h}),n},f.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=p(t,n);return a.src?i.push(a):e("source",t).each(function(){a=p(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=d.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==h&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),f.srces(this,t),e(this).mediaLoad()})},f.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],f.canThirdPlaySrces=function(t,i){var a="";return(n||m)&&(t=e(t),i=i||f.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=f.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(a=t,!1):h})),a};var w={};f.canNativePlaySrces=function(t,i){var n="";if(a){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),s=(w[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!s)return n;i=i||f.srces(t),e.each(i,function(e,i){return i.type&&s.call(t[0],i.type)?(n=i,!1):h})}return n},f.setError=function(t,n){n||(n="can't play sources"),e(t).pause().data("mediaerror",n),i.error("mediaelementError: "+n),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var b=function(){var e;return function(t,a,r){e||v(),i.ready(n?c:"mediaelement-yt",function(){f.createSWF?f.createSWF(t,a,r):e||(e=!0,y(),b(t,a,r))}),e||!m||f.createSWF||g()}}(),C=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=f.canThirdPlaySrces(e,n),r?b(e,r,t):a?f.setError(e,!1):C(e,t,!1,n,!0)):(r=f.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&f.setActive(e,"html5",t):a?(f.setError(e,!1),t&&"third"==t.isActive&&f.setActive(e,"html5",t)):C(e,t,!0,n,!0))},E=/^(?:embed|object|datalist)$/i,x=function(t,n){var a=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{}),r=f.srces(t),s=t.parentNode;clearTimeout(a.loadTimer),e.data(t,"mediaerror",!1),r.length&&s&&1==s.nodeType&&!E.test(s.nodeName||"")&&(n=n||i.data(t,"mediaelement"),C(t,n,l.preferFlash||h,r))};f.selectSource=x,e(d).on("ended",function(t){var n=i.data(t.target,"mediaelement");(!r||n&&"html5"!=n.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()},1)}),i.ready("dom-support",function(){r||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var r=i.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");x(this,e),!a||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}});w[t]=i.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(i){var r="";return a&&w[t].prop._supvalue&&(r=w[t].prop._supvalue.call(this,i),"no"==r&&(r="")),!r&&n&&(i=e.trim((i||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(i)&&(r="maybe")),r}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){x(e),e=null},9)}})});var T=function(){var t=function(){if(i.implement(this,"mediaelement")&&(x(this),a)){var t,n,r=this,s=function(){var t=e.prop(r,"buffered");if(t){for(var i="",n=0,a=t.length;a>n;n++)i+=t.end(n);return i}},o=function(){var t=s();t!=n&&(n=t,e(r).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=s()),clearTimeout(t),t=setTimeout(o,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(t)}}),"ActiveXObject"in u&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}},n=!1;i.ready("dom-support",function(){n=!0,i.addReady(function(i,n){var a=e("video, audio",i).add(n.filter("video, audio")).each(t);!v.loaded&&e("track",a).length&&v(),a=null})}),a&&!n&&i.addReady(function(t,i){n||e("video, audio",t).add(i.filter("video, audio")).each(function(){return!f.canNativePlaySrces(this)||!v.loaded&&e("track",this).length?(y(),n=!0,!1):h})})};t.track&&!s.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),a?(i.isReady("mediaelement-core",!0),T(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(c,T),i.ready("WINDOWLOAD mediaelement",v)})}(jQuery,Modernizr,jQuery.webshims);