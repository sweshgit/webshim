jQuery.webshims.ready("dom-extend",function(b,e,f,g,l){var k=b.support;if(!(!k.validity||f.noHTMLExtFixes)){var m="value"in g.createElement("output")&&"list"in g.createElement("input"),j=[],i;if(f.addEventListener){var h={timer:l,prevented:false};f.addEventListener("submit",function(a){!h.prevented&&a.target.checkValidity&&b.attr(a.target,"novalidate")==null&&b(a.target).checkValidity()},true);g=function(a){if(b.attr(a.target,"formnovalidate")!=null){h.timer&&clearTimeout(h.timer);h.prevented=true;
h.timer=setTimeout(function(){h.prevented=false},20)}};f.addEventListener("click",g,true);f.addEventListener("touchstart",g,true);f.addEventListener("touchend",g,true)}b(document).bind("firstinvalid",function(a){if(i=a.target.form)(a=b(i).unbind("submit.preventInvalidSubmit").bind("submit.preventInvalidSubmit",function(c){if(b.attr(i,"novalidate")==null){c.stopImmediatePropagation();return false}}).data("events").submit)&&a.length>1&&a.unshift(a.pop())}).bind("invalid",function(a){j.indexOf(a.target)==
-1?j.push(a.target):a.stopImmediatePropagation()}).bind("lastinvalid",function(a,c){var d=c.invalidlist[0];d&&!m&&document.activeElement&&d!==document.activeElement&&!b.data(d,"maybePreventedinvalid")&&e.validityAlert.showFor(d);j=[];i&&b(i).unbind("submit.preventInvalidSubmit")});(function(){if(!(!b.browser.webkit||parseInt(b.browser.version,10)>533)){var a=function(c){var d=(b.attr(c,"validity")||{valid:true}).valid;!d&&c.checkValidity&&c.checkValidity()&&b(c).trigger("invalid");return d};e.defineNodeNamesProperty(["input",
"textarea","select","form"],"checkValidity",{value:function(){if(this.elements||b.nodeName(this,"fieldset")){var c=true;b(this.elements||"input, textarea, select",this).each(function(){a(this)||(c=false)});return c}else if(this.checkValidity)return a(this)}})}})();k.requiredSelect||e.ready("form-extend",function(){e.defineNodeNamesBooleanProperty(["select"],"required",{set:function(a){this.setAttribute("aria-required",a?"true":"false")},content:true},true);e.addValidityRule("valueMissing",function(a,
c,d,n){if(d.nodeName=="select"&&!c&&a.attr("required")&&a[0].size<2){if(!d.type)d.type=a[0].type;if(d.type=="select-one"&&b("> option:first-child:not(:disabled)",a).attr("selected"))return true}return n.valueMissing});e.ready("DOM",function(){b("select[required]").attr("validity")})})}});
