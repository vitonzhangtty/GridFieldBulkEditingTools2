!function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}({"./client/src/js/manager.js":function(n,t,e){(function(n){!function(n){n.entwine("ss",function(n){n.entwine("colymba",function(n){n(".bulkManagerOptions").entwine({onmatch:function(){var t=this.parents("thead"),e=t.find("tr"),i=[".filter-header",".sortable-header"],o=t.find(i.join(",")),a=e.index(this),c=e.length-1;o.each(function(n,t){var i=e.index(t);i<c&&(c=i)}),a>c&&e.eq(c).insertAfter(n(this))},onunmatch:function(){}}),n("td.col-bulkSelect").entwine({onmatch:function(){},onunmatch:function(){},onmouseover:function(){n(this).parents(".ss-gridfield-item").find(".edit-link").removeClass("edit-link").addClass("tempDisabledEditLink")},onmouseout:function(){n(this).parents(".ss-gridfield-item").find(".tempDisabledEditLink").addClass("edit-link").removeClass("tempDisabledEditLink")},onclick:function(t){var e=n(t.target).find("input");n(e).prop("checked")?n(e).prop("checked",!1):n(e).prop("checked",!0)}}),n("td.col-bulkSelect input").entwine({onmatch:function(){},onunmatch:function(){},onclick:function(t){n(this).parents(".grid-field__table").find("input.bulkSelectAll").prop("checked","")}}),n("input.bulkSelectAll").entwine({onmatch:function(){},onunmatch:function(){},onclick:function(){var t=n(this).prop("checked");n(this).parents(".grid-field__table").find("td.col-bulkSelect input").prop("checked",t).trigger("change")},getSelectRecordsID:function(){return n(this).parents(".grid-field__table").find("td.col-bulkSelect input:checked").map(function(){return parseInt(n(this).data("record"))}).get()}}),n("select.bulkActionName").entwine({onmatch:function(){},onunmatch:function(){},onchange:function(t){var e=n(this).val(),i=n(this).parents(".bulkManagerOptions"),o=i.find(".doBulkActionButton"),a=o.data("config");if(n.each(a,function(n,t){n!=e&&o.removeClass(t.buttonClasses)}),!e)return void o.addClass("disabled");if(o.removeClass("disabled"),o.addClass(a[e].buttonClasses).addClass("btn-outline-secondary"),a[e].icon){var c=o.find("img");c.length?c.attr("src",a[e].icon):o.prepend('<img src="'+a[e].icon+'" alt="" />')}else o.find("img").remove();a[e].destructive?o.addClass("btn-outline-danger"):o.removeClass("btn-outline-danger")}}),n(".doBulkActionButton").entwine({onmatch:function(){},onunmatch:function(){},getActionURL:function(n,t){var e=(new Date).getTime();return t=t.split("?"),n=n?"/"+n:"",t=t[1]?t[0]+n+"?"+t[1]+"&cacheBuster="+e:t[0]+n+"?cacheBuster="+e},onclick:function(t){var e=n(this).parents(".bulkManagerOptions"),i=e.find("select.bulkActionName").val(),o=n(this).parents(".bulkManagerOptions").find("input.bulkSelectAll:first").getSelectRecordsID();this.doBulkAction(i,o)},doBulkAction:function(t,e,i,o){var a=n(this).parents(".bulkManagerOptions"),c=a.find("a.doBulkActionButton"),s=c.data("config"),r=this.getActionURL(t,n(this).data("url")),l={records:e};return e.length<=0?void alert(ss.i18n._t("GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT")):s[t].destructive&&!confirm(ss.i18n._t("GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION"))?(i&&o&&i.call(o,!1),!1):(c.addClass("loading"),void(s[t].xhr?n.ajax({url:r,data:l,type:"POST",context:n(this)}).done(function(t,e,a){c.removeClass("loading"),i&&o?i.call(o,t):n(this).parents(".ss-gridfield").entwine(".").entwine("ss").reload()}):(r=r+"&records[]="+e.join("&records[]="),window.location.href=r)))}})})})}(n)}).call(t,e("jquery"))},"./client/src/js/managerBulkEditingForm.js":function(n,t,e){(function(n){!function(n){n.entwine("colymba",function(n){n("#bulkEditToggle").entwine({onmatch:function(){},onunmatch:function(){},onclick:function(t){var e=this.parents("form").find(".ss-toggle .ui-accordion-header"),i=this.data("state");i=i&&"close"!==i?"close":"open",e.each(function(){var t=n(this);"open"!==i||t.hasClass("ui-state-active")||t.click(),"close"===i&&t.hasClass("ui-state-active")&&t.click()}),this.data("state",i)}}),n(".bulkEditingFieldHolder").entwine({onmatch:function(){},onunmatch:function(){},onchange:function(){this.removeClass("updated"),this.hasClass("hasUpdate")||this.addClass("hasUpdate")}})})}(n)}).call(t,e("jquery"))},"./client/src/js/uploader.js":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(n){var t=e("lib/Injector"),i=function(t){var e=n("#"+t.fieldId).data("schema");n.ajax(e.data.attachFileEndpoint.url,{method:e.data.attachFileEndpoint.method,data:{fileID:t.file.id}}).done(function(n,t,e){})},o=function(n){return function(t){return function(t,e){var o=e.type,a=e.payload;switch(o){case"UPLOADFIELD_ADD_FILE":return-1!==a.fieldId.indexOf("_BU")&&a.file.id&&i(a),n(t,{type:o,payload:a});default:return n(t,{type:o,payload:a})}}}};e.n(t).a.transform("bulkUploaderCustom",function(n){n.reducer("assetAdmin",o)})}.call(t,e("jquery"))},0:function(n,t,e){e("./client/src/js/manager.js"),e("./client/src/js/managerBulkEditingForm.js"),n.exports=e("./client/src/js/uploader.js")},jquery:function(n,t){n.exports=jQuery},"lib/Injector":function(n,t){n.exports=Injector}});