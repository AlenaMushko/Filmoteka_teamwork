function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired76b;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired76b=r);var a=r("krGWQ");var o,s=r("9XIKo"),u=r("1awFj"),l=(a=r("krGWQ"),r("iQIUW")),c=r("f4Y7b"),p=r("7NS3K"),f=(a=r("krGWQ"),{});window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
o=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,r,a,o=Object.prototype.hasOwnProperty;for(r=1,a=arguments.length;r<a;r+=1)for(i in n=arguments[r])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),r=n(17),a=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var r,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,r=n;n>=0&&r<a;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){var i=n(29),r=n(30),a=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=a(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),r=n(7),a=n(0),o=n(1),s=n(20),u=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},c=r({init:function(t,e){this._options=a({},l,e),this._currentPage=0,this._view=new s(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),a=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>r&&(e=Math.max(r-a+1,1),n=r)):(e=(o-1)*a+1,n=o*a,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(c),t.exports=c},function(t,e,n){var i=n(0),r=n(14),a=n(4),o=n(16),s=n(2),u=n(5),l=n(3),c=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(c),l(t,(function(t){i._bindEvent(t,e,n)}))):o(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,a=e===i.context,o=r&&a;return o&&n._forgetContext(i.context),o}},p.prototype._offByEventName=function(t,e){var n=this,i=u(e),r=n._matchHandler(e);t=t.split(c),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),r=n(7),a=n(21),o=n(22),s=n(24),u=n(25),l=n(0),c=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(c(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==r||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,i,r=a(e);s(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),r=n(3),a=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=a(t,e),s=!1;r(o,(function(t){return t.handler!==n||(s=!0,!1)})),s||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,a){i(e)?r(e.split(/\s+/g),(function(e){o(t,e,n,a)})):r(e,(function(e,i){o(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),r=n(8),a=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,u=[];s?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,u)<0&&u.push(t)})),o(t,u))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),r=n(3),a=n(2),o=n(4),s=n(0),u=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,c=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,o=0;return r(e,(function(t,r){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,r)),o=r+1)})),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,o="";return r(i.exps,(function(t,e){return(a=b(t,n))&&(o=x(i.sourcesInsideIf[e],n)),!a})),o},each:function(t,e,n){var i=b(t,n),o=a(i)?"@index":"@key",u={},l="";return r(i,(function(t,i){u[o]=i,u["@this"]=t,s(n,u),l+=x(e.slice(),n)})),l},with:function(t,e,n){var r=i("as",t),a=t[r+1],o=b(t.slice(0,r),n),u={};return u[a]=o,x(e,s(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return r.push(t.slice(a)),r};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):l.test(t)?i=_((n=t.split(c))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,r,a,s,u=v[t],l=1,c=2,p=e[c];l&&o(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=c),p=e[c+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(r=0,a=i,(s=e.splice(r+1,a-r)).pop(),s),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,r,a=1,s=t[a];o(s);)i=(n=s.split(" "))[0],v[i]?(r=y(i,t.splice(a,t.length-a),e),t=t.concat(r)):t[a]=b(n,e),s=t[a+=2];return t.join("")}t.exports=function(t,e){return x(m(t,u),e)}},function(t,e,n){var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},f=o();u=r("1awFj"),c=r("f4Y7b"),p=r("7NS3K"),a=r("krGWQ");var d=r("2shzp"),h=r("dSs1Y");p=r("7NS3K"),a=r("krGWQ");const g=(t,e)=>{try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set error: ",t.message)}},v=t=>{try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get error: ",t.message)}};let m=v("page-value"),_=v("query-pg"),y=v("genre-value"),b=v("year-value");a.refs.filterByGenre.addEventListener("click",(function(t){t&&(h.Loading.pulse("Loading...",{backgroundColor:"rgba(0,0,0,0.8)"}),y=t.target.value,m=1,g("page-value",m),g("genre-value",y),x(m,_,y,b).then((t=>{(0,p.renderFilmCard)(t),w.reset(t.total_results),h.Loading.remove()})))})),a.refs.filterByYear.addEventListener("click",(function(t){h.Loading.pulse("Loading...",{backgroundColor:"rgba(0,0,0,0.8)"}),m=1,g("page-value",m),b=t.target.value,g("year-value",b),x(m,_,y,b).then((t=>{(0,p.renderFilmCard)(t),w.reset(t.total_results),h.Loading.remove()}))})),a.refs.resetButton.addEventListener("click",(function(t){h.Loading.pulse("Loading...",{backgroundColor:"rgba(0,0,0,0.8)"}),y="",b="",m=1,g("genre-value",y),g("year-value",b),g("page-value",m),x(m,_,y,b).then((t=>{(0,p.renderFilmCard)(t),w.reset(t.total_results),function(t){localStorage.setItem("moviesData",JSON.stringify(t.results))}(t),h.Loading.remove()})),g("page-value",m)}));const x=async(t="",e="",n="",i="")=>{let r={year:""!==i?`&primary_release_year=${i}`:"",genre:""!==n?`&with_genres=${n}`:"",queryFetch:`&query=${e}`,discover:"/trending",week:"/week"};""===e&&(r.queryFetch=""),""!==e&&""===n&&(r.discover="/search",r.week=""),""===e&&""!==n&&(r.discover="/discover",r.week=""),""===e&&""!==i&&(r.discover="/discover",r.week="");let{data:a}=await d.default.get(`https://api.themoviedb.org/3${r.discover}/movie${r.week}?api_key=32432509d17cea42104bbb7507a382c7${r.genre}${r.year}&language=en-US${r.queryFetch}&page=${t}`);return g("moviesData",a.results),a};const P=new(0,c.default),w=new(t(f))("pagination",{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});w.on("afterMove",(async function(t){(0,u.onMyButtonClick)();const e=t.page;if(localStorage.getItem("year-value")||localStorage.getItem("genre-value")||localStorage.getItem("input-value"))if(localStorage.getItem("year-value")||localStorage.getItem("genre-value")||!localStorage.getItem("input-value")){const t=await x(e,localStorage.getItem("input-value"),localStorage.getItem("genre-value"),localStorage.getItem("year-value"));(0,p.renderFilmCard)(t)}else{P.query=localStorage.getItem("input-value"),P.pageNum=e;const t=await P.getSearchFilms();(0,p.renderFilmCard)(t)}else{P.pageNum=e;const t=await P.getPopularFilms();(0,p.renderFilmCard)(t)}}));const C=new(0,c.default);async function E(t){if(t.preventDefault(),C.page=1,C.query=a.refs.inputEl?a.refs.inputEl.value.trim():"",localStorage.setItem("input-value",C.query),""===C.query)return;const e=await C.getSearchFilms();C.totalResults=e.total_results;try{if((0,p.renderFilmCard)(e),w.reset(e.total_results),0===C.totalResults)return a.refs.paginationList.innerHTML="",void l.Notify.failure("Sorry, there are no films matching your search query. Please try again.");C.totalResults>=1&&l.Notify.success(`Hooray! We found ${C.totalResults} films.`)}catch(t){console.log(t)}}a.refs.inputEl.addEventListener("click",(function(){if(""!==C.query)return void a.refs.searchForm.reset()})),a.refs.searchForm.addEventListener("submit",E);c=r("f4Y7b"),p=r("7NS3K");const M=new(0,c.default);var I=r("hR8LQ"),L=r("bTcpz");L=r("bTcpz");r("c1QDM"),r("3yZwQ");var B=r("28AT6"),N=r("bMZn5"),S=r("1wH5c");S=r("1wH5c");r("j0pi0");N=r("bMZn5");var k=r("iytAl");!function(){const t=new(0,L.Modal)(".navigation__open--btn",".modal__log-in--close-btn",".overlay__log-in",".modal__log-in");t.openBtn.addEventListener("click",t.openModal.bind(t))}(),(0,B.homeHeaderLinkBntLogic)(),(0,S.onFirstLoadTheme)(),(0,S.getChengeThemeByClick)(),(0,N.authHandler)(),(0,s.sliderRevenueFilms)(),async function(){const t=await M.getPopularFilms();try{(0,p.renderFilmCard)(t),w.reset(t.total_results)}catch(t){console.log(t)}}(),""===M.query||a.refs.searchForm.getNewFilms("submit",E),function(){const t=new(0,L.Modal)(".top-films",".film-modal__close-btn",".film-modal__overlay",".film-modal");t.openBtn.addEventListener("click",t.openFilmCardModal.bind(t))}(),(0,u.scrolToTop)(),a.refs.buttonShowPassword.addEventListener("click",(function(){"password"===a.refs.inputPassword.getAttribute("type")?(a.refs.inputPassword.removeAttribute("type"),a.refs.inputPassword.setAttribute("type","text"),a.refs.iconForShowPassword.classList.add("visually-hidden"),a.refs.iconForUnShowPassword.classList.remove("visually-hidden")):(a.refs.inputPassword.removeAttribute("type"),a.refs.inputPassword.setAttribute("type","password"),a.refs.iconForShowPassword.classList.remove("visually-hidden"),a.refs.iconForUnShowPassword.classList.add("visually-hidden"))})),(0,I.onTeamModal)(),(0,k.firebaseRealtimeDatabase)();
//# sourceMappingURL=index.3e4fb107.js.map
