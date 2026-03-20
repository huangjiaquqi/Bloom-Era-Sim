(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();function nr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ir={exports:{}},zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=Symbol.for("react.transitional.element"),o0=Symbol.for("react.fragment");function ur(t,e,l){var a=null;if(l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),"key"in e){l={};for(var n in e)n!=="key"&&(l[n]=e[n])}else l=e;return e=l.ref,{$$typeof:r0,type:t,key:a,ref:e!==void 0?e:null,props:l}}zi.Fragment=o0;zi.jsx=ur;zi.jsxs=ur;ir.exports=zi;var s=ir.exports,cr={exports:{}},C={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=Symbol.for("react.transitional.element"),d0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),b0=Symbol.for("react.consumer"),x0=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),v0=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),S0=Symbol.for("react.activity"),Ns=Symbol.iterator;function j0(t){return t===null||typeof t!="object"?null:(t=Ns&&t[Ns]||t["@@iterator"],typeof t=="function"?t:null)}var fr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rr=Object.assign,or={};function ua(t,e,l){this.props=t,this.context=e,this.refs=or,this.updater=l||fr}ua.prototype.isReactComponent={};ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dr(){}dr.prototype=ua.prototype;function Nc(t,e,l){this.props=t,this.context=e,this.refs=or,this.updater=l||fr}var Ac=Nc.prototype=new dr;Ac.constructor=Nc;rr(Ac,ua.prototype);Ac.isPureReactComponent=!0;var As=Array.isArray;function Eu(){}var W={H:null,A:null,T:null,S:null},mr=Object.prototype.hasOwnProperty;function Fc(t,e,l){var a=l.ref;return{$$typeof:zc,type:t,key:e,ref:a!==void 0?a:null,props:l}}function z0(t,e){return Fc(t.type,e,t.props)}function Ec(t){return typeof t=="object"&&t!==null&&t.$$typeof===zc}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Fs=/\/+/g;function Qi(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function A0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Eu,Eu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function El(t,e,l,a,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case zc:case d0:u=!0;break;case sr:return u=t._init,El(u(t._payload),e,l,a,n)}}if(u)return n=n(t),u=a===""?"."+Qi(t,0):a,As(n)?(l="",u!=null&&(l=u.replace(Fs,"$&/")+"/"),El(n,e,l,"",function(h){return h})):n!=null&&(Ec(n)&&(n=z0(n,l+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(Fs,"$&/")+"/")+u)),e.push(n)),1;u=0;var c=a===""?".":a+":";if(As(t))for(var f=0;f<t.length;f++)a=t[f],i=c+Qi(a,f),u+=El(a,e,l,i,n);else if(f=j0(t),typeof f=="function")for(t=f.call(t),f=0;!(a=t.next()).done;)a=a.value,i=c+Qi(a,f++),u+=El(a,e,l,i,n);else if(i==="object"){if(typeof t.then=="function")return El(A0(t),e,l,a,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function bn(t,e,l){if(t==null)return t;var a=[],n=0;return El(t,a,"","",function(i){return e.call(l,i,n++)}),a}function F0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Es=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},E0={map:bn,forEach:function(t,e,l){bn(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return bn(t,function(){e++}),e},toArray:function(t){return bn(t,function(e){return e})||[]},only:function(t){if(!Ec(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};C.Activity=S0;C.Children=E0;C.Component=ua;C.Fragment=m0;C.Profiler=g0;C.PureComponent=Nc;C.StrictMode=h0;C.Suspense=y0;C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W;C.__COMPILER_RUNTIME={__proto__:null,c:function(t){return W.H.useMemoCache(t)}};C.cache=function(t){return function(){return t.apply(null,arguments)}};C.cacheSignal=function(){return null};C.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=rr({},t.props),n=t.key;if(e!=null)for(i in e.key!==void 0&&(n=""+e.key),e)!mr.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(a[i]=e[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];a.children=u}return Fc(t.type,n,a)};C.createContext=function(t){return t={$$typeof:x0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:b0,_context:t},t};C.createElement=function(t,e,l){var a,n={},i=null;if(e!=null)for(a in e.key!==void 0&&(i=""+e.key),e)mr.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=e[a]);var u=arguments.length-2;if(u===1)n.children=l;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];n.children=c}if(t&&t.defaultProps)for(a in u=t.defaultProps,u)n[a]===void 0&&(n[a]=u[a]);return Fc(t,i,n)};C.createRef=function(){return{current:null}};C.forwardRef=function(t){return{$$typeof:p0,render:t}};C.isValidElement=Ec;C.lazy=function(t){return{$$typeof:sr,_payload:{_status:-1,_result:t},_init:F0}};C.memo=function(t,e){return{$$typeof:v0,type:t,compare:e===void 0?null:e}};C.startTransition=function(t){var e=W.T,l={};W.T=l;try{var a=t(),n=W.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Eu,Es)}catch(i){Es(i)}finally{e!==null&&l.types!==null&&(e.types=l.types),W.T=e}};C.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()};C.use=function(t){return W.H.use(t)};C.useActionState=function(t,e,l){return W.H.useActionState(t,e,l)};C.useCallback=function(t,e){return W.H.useCallback(t,e)};C.useContext=function(t){return W.H.useContext(t)};C.useDebugValue=function(){};C.useDeferredValue=function(t,e){return W.H.useDeferredValue(t,e)};C.useEffect=function(t,e){return W.H.useEffect(t,e)};C.useEffectEvent=function(t){return W.H.useEffectEvent(t)};C.useId=function(){return W.H.useId()};C.useImperativeHandle=function(t,e,l){return W.H.useImperativeHandle(t,e,l)};C.useInsertionEffect=function(t,e){return W.H.useInsertionEffect(t,e)};C.useLayoutEffect=function(t,e){return W.H.useLayoutEffect(t,e)};C.useMemo=function(t,e){return W.H.useMemo(t,e)};C.useOptimistic=function(t,e){return W.H.useOptimistic(t,e)};C.useReducer=function(t,e,l){return W.H.useReducer(t,e,l)};C.useRef=function(t){return W.H.useRef(t)};C.useState=function(t){return W.H.useState(t)};C.useSyncExternalStore=function(t,e,l){return W.H.useSyncExternalStore(t,e,l)};C.useTransition=function(){return W.H.useTransition()};C.version="19.2.4";cr.exports=C;var E=cr.exports;const T0=nr(E);var hr={exports:{}},Ni={},gr={exports:{}},br={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(v,j){var F=v.length;v.push(j);t:for(;0<F;){var w=F-1>>>1,P=v[w];if(0<n(P,j))v[w]=j,v[F]=P,F=w;else break t}}function l(v){return v.length===0?null:v[0]}function a(v){if(v.length===0)return null;var j=v[0],F=v.pop();if(F!==j){v[0]=F;t:for(var w=0,P=v.length,ll=P>>>1;w<ll;){var ce=2*(w+1)-1,Ee=v[ce],Ot=ce+1,Nl=v[Ot];if(0>n(Ee,F))Ot<P&&0>n(Nl,Ee)?(v[w]=Nl,v[Ot]=F,w=Ot):(v[w]=Ee,v[ce]=F,w=ce);else if(Ot<P&&0>n(Nl,F))v[w]=Nl,v[Ot]=F,w=Ot;else break t}}return j}function n(v,j){var F=v.sortIndex-j.sortIndex;return F!==0?F:v.id-j.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}var f=[],h=[],x=1,b=null,o=3,d=!1,S=!1,N=!1,U=!1,m=typeof setTimeout=="function"?setTimeout:null,r=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function p(v){for(var j=l(h);j!==null;){if(j.callback===null)a(h);else if(j.startTime<=v)a(h),j.sortIndex=j.expirationTime,e(f,j);else break;j=l(h)}}function A(v){if(N=!1,p(v),!S)if(l(f)!==null)S=!0,O||(O=!0,Mt());else{var j=l(h);j!==null&&el(A,j.startTime-v)}}var O=!1,z=-1,T=5,D=-1;function _(){return U?!0:!(t.unstable_now()-D<T)}function yt(){if(U=!1,O){var v=t.unstable_now();D=v;var j=!0;try{t:{S=!1,N&&(N=!1,r(z),z=-1),d=!0;var F=o;try{e:{for(p(v),b=l(f);b!==null&&!(b.expirationTime>v&&_());){var w=b.callback;if(typeof w=="function"){b.callback=null,o=b.priorityLevel;var P=w(b.expirationTime<=v);if(v=t.unstable_now(),typeof P=="function"){b.callback=P,p(v),j=!0;break e}b===l(f)&&a(f),p(v)}else a(f);b=l(f)}if(b!==null)j=!0;else{var ll=l(h);ll!==null&&el(A,ll.startTime-v),j=!1}}break t}finally{b=null,o=F,d=!1}j=void 0}}finally{j?Mt():O=!1}}}var Mt;if(typeof g=="function")Mt=function(){g(yt)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,ha=zl.port2;zl.port1.onmessage=yt,Mt=function(){ha.postMessage(null)}}else Mt=function(){m(yt,0)};function el(v,j){z=m(function(){v(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(v){v.callback=null},t.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<v?Math.floor(1e3/v):5},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_next=function(v){switch(o){case 1:case 2:case 3:var j=3;break;default:j=o}var F=o;o=j;try{return v()}finally{o=F}},t.unstable_requestPaint=function(){U=!0},t.unstable_runWithPriority=function(v,j){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var F=o;o=v;try{return j()}finally{o=F}},t.unstable_scheduleCallback=function(v,j,F){var w=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?w+F:w):F=w,v){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,v={id:x++,callback:j,priorityLevel:v,startTime:F,expirationTime:P,sortIndex:-1},F>w?(v.sortIndex=F,e(h,v),l(f)===null&&v===l(h)&&(N?(r(z),z=-1):N=!0,el(A,F-w))):(v.sortIndex=P,e(f,v),S||d||(S=!0,O||(O=!0,Mt()))),v},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(v){var j=o;return function(){var F=o;o=j;try{return v.apply(this,arguments)}finally{o=F}}}})(br);gr.exports=br;var _0=gr.exports,xr={exports:{}},jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=E;function pr(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Te(){}var St={d:{f:Te,r:function(){throw Error(pr(522))},D:Te,C:Te,L:Te,m:Te,X:Te,S:Te,M:Te},p:0,findDOMNode:null},O0=Symbol.for("react.portal");function D0(t,e,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O0,key:a==null?null:""+a,children:t,containerInfo:e,implementation:l}}var Ta=M0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ai(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=St;jt.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(pr(299));return D0(t,e,null,l)};jt.flushSync=function(t){var e=Ta.T,l=St.p;try{if(Ta.T=null,St.p=2,t)return t()}finally{Ta.T=e,St.p=l,St.d.f()}};jt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,St.d.C(t,e))};jt.prefetchDNS=function(t){typeof t=="string"&&St.d.D(t)};jt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,a=Ai(l,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?St.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&St.d.X(t,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};jt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=Ai(e.as,e.crossOrigin);St.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&St.d.M(t)};jt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,a=Ai(l,e.crossOrigin);St.d.L(t,l,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};jt.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=Ai(e.as,e.crossOrigin);St.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else St.d.m(t)};jt.requestFormReset=function(t){St.d.r(t)};jt.unstable_batchedUpdates=function(t,e){return t(e)};jt.useFormState=function(t,e,l){return Ta.H.useFormState(t,e,l)};jt.useFormStatus=function(){return Ta.H.useHostTransitionStatus()};jt.version="19.2.4";function yr(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yr)}catch(t){console.error(t)}}yr(),xr.exports=jt;var C0=xr.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=_0,vr=E,U0=C0;function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sr(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function an(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function jr(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zr(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ts(t){if(an(t)!==t)throw Error(y(188))}function w0(t){var e=t.alternate;if(!e){if(e=an(t),e===null)throw Error(y(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return Ts(n),t;if(i===a)return Ts(n),e;i=i.sibling}throw Error(y(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?t:e}function Nr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Nr(t),e!==null)return e;t=t.sibling}return null}var I=Object.assign,H0=Symbol.for("react.element"),xn=Symbol.for("react.transitional.element"),ja=Symbol.for("react.portal"),Ml=Symbol.for("react.fragment"),Ar=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Fr=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ou=Symbol.for("react.activity"),B0=Symbol.for("react.memo_cache_sentinel"),_s=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=_s&&t[_s]||t["@@iterator"],typeof t=="function"?t:null)}var R0=Symbol.for("react.client.reference");function Du(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ml:return"Fragment";case Tu:return"Profiler";case Ar:return"StrictMode";case _u:return"Suspense";case Mu:return"SuspenseList";case Ou:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ja:return"Portal";case ge:return t.displayName||"Context";case Fr:return(t._context.displayName||"Context")+".Consumer";case Tc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _c:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case _e:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}var za=Array.isArray,M=vr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=U0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sl={pending:!1,data:null,method:null,action:null},Cu=[],Ol=-1;function ie(t){return{current:t}}function mt(t){0>Ol||(t.current=Cu[Ol],Cu[Ol]=null,Ol--)}function K(t,e){Ol++,Cu[Ol]=t.current,t.current=e}var ne=ie(null),Xa=ie(null),Ye=ie(null),Kn=ie(null);function Jn(t,e){switch(K(Ye,e),K(Xa,t),K(ne,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Hf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Hf(e),t=kd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(ne),K(ne,t)}function Jl(){mt(ne),mt(Xa),mt(Ye)}function Uu(t){t.memoizedState!==null&&K(Kn,t);var e=ne.current,l=kd(e,t.type);e!==l&&(K(Xa,t),K(ne,l))}function $n(t){Xa.current===t&&(mt(ne),mt(Xa)),Kn.current===t&&(mt(Kn),tn._currentValue=sl)}var Xi,Ms;function nl(t){if(Xi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",Ms=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+Ms}var Zi=!1;function Li(t,e){if(!t||Zi)return"";Zi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(d){var o=d}Reflect.construct(t,[],b)}else{try{b.call()}catch(d){o=d}t.call(b.prototype)}}else{try{throw Error()}catch(d){o=d}(b=t())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(d){if(d&&o&&typeof d.stack=="string")return[d.stack,o.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),h=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===h.length)for(a=f.length-1,n=h.length-1;1<=a&&0<=n&&f[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==h[n]){var x=`
`+f[a].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=a&&0<=n);break}}}finally{Zi=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?nl(l):""}function q0(t,e){switch(t.tag){case 26:case 27:case 5:return nl(t.type);case 16:return nl("Lazy");case 13:return t.child!==e&&e!==null?nl("Suspense Fallback"):nl("Suspense");case 19:return nl("SuspenseList");case 0:case 15:return Li(t.type,!1);case 11:return Li(t.type.render,!1);case 1:return Li(t.type,!0);case 31:return nl("Activity");default:return""}}function Os(t){try{var e="",l=null;do e+=q0(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wu=Object.prototype.hasOwnProperty,Mc=rt.unstable_scheduleCallback,Vi=rt.unstable_cancelCallback,Y0=rt.unstable_shouldYield,G0=rt.unstable_requestPaint,Ht=rt.unstable_now,Q0=rt.unstable_getCurrentPriorityLevel,Er=rt.unstable_ImmediatePriority,Tr=rt.unstable_UserBlockingPriority,Wn=rt.unstable_NormalPriority,X0=rt.unstable_LowPriority,_r=rt.unstable_IdlePriority,Z0=rt.log,L0=rt.unstable_setDisableYieldValue,nn=null,Bt=null;function we(t){if(typeof Z0=="function"&&L0(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(nn,t)}catch{}}var Rt=Math.clz32?Math.clz32:K0,V0=Math.log,k0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-(V0(t)/k0|0)|0}var pn=256,yn=262144,vn=4194304;function il(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Fi(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=il(a):(u&=c,u!==0?n=il(u):l||(l=c&~t,l!==0&&(n=il(l))))):(c=a&~i,c!==0?n=il(c):u!==0?n=il(u):l||(l=a&~t,l!==0&&(n=il(l)))),n===0?0:e!==0&&e!==n&&!(e&i)&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function un(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function J0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mr(){var t=vn;return vn<<=1,!(vn&62914560)&&(vn=4194304),t}function ki(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function cn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $0(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,h=t.hiddenUpdates;for(l=u&~l;0<l;){var x=31-Rt(l),b=1<<x;c[x]=0,f[x]=-1;var o=h[x];if(o!==null)for(h[x]=null,x=0;x<o.length;x++){var d=o[x];d!==null&&(d.lane&=-536870913)}l&=~b}a!==0&&Or(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Or(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Rt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Dr(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Rt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Cr(t,e){var l=e&-e;return l=l&42?1:Oc(l),l&(t.suspendedLanes|e)?0:l}function Oc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ur(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:n0(t.type))}function Ds(t,e){var l=Q.p;try{return Q.p=t,e()}finally{Q.p=l}}var Pe=Math.random().toString(36).slice(2),gt="__reactFiber$"+Pe,Tt="__reactProps$"+Pe,ca="__reactContainer$"+Pe,Hu="__reactEvents$"+Pe,W0="__reactListeners$"+Pe,I0="__reactHandles$"+Pe,Cs="__reactResources$"+Pe,sn="__reactMarker$"+Pe;function Cc(t){delete t[gt],delete t[Tt],delete t[Hu],delete t[W0],delete t[I0]}function Dl(t){var e=t[gt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ca]||l[gt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Gf(t);t!==null;){if(l=t[gt])return l;t=Gf(t)}return e}t=l,l=t.parentNode}return null}function sa(t){if(t=t[gt]||t[ca]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Na(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Ql(t){var e=t[Cs];return e||(e=t[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function dt(t){t[sn]=!0}var wr=new Set,Hr={};function pl(t,e){$l(t,e),$l(t+"Capture",e)}function $l(t,e){for(Hr[t]=e,t=0;t<e.length;t++)wr.add(e[t])}var P0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Us={},ws={};function tm(t){return wu.call(ws,t)?!0:wu.call(Us,t)?!1:P0.test(t)?ws[t]=!0:(Us[t]=!0,!1)}function Cn(t,e,l){if(tm(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Sn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function se(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Br(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function em(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){if(!t._valueTracker){var e=Br(t)?"checked":"value";t._valueTracker=em(t,e,""+t[e])}}function Rr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Br(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function In(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var lm=/[\n"\\]/g;function Vt(t){return t.replace(lm,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ru(t,e,l,a,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xt(e)):t.value!==""+Xt(e)&&(t.value=""+Xt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?qu(t,u,Xt(e)):l!=null?qu(t,u,Xt(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Xt(c):t.removeAttribute("name")}function qr(t,e,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Bu(t);return}l=l!=null?""+Xt(l):"",e=e!=null?""+Xt(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Bu(t)}function qu(t,e,l){e==="number"&&In(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Xl(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Xt(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Yr(t,e,l){if(e!=null&&(e=""+Xt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Xt(l):""}function Gr(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(y(92));if(za(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Xt(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Bu(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hs(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||am.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Qr(t,e,l){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Hs(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&Hs(t,i,e[i])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),im=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(t){return im.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function be(){}var Yu=null;function wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cl=null,Zl=null;function Bs(t){var e=sa(t);if(e&&(t=e.stateNode)){var l=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ru(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Vt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Tt]||null;if(!n)throw Error(y(90));Ru(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Rr(a)}break t;case"textarea":Yr(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Xl(t,!!l.multiple,e,!1)}}}var Ki=!1;function Xr(t,e,l){if(Ki)return t(e,l);Ki=!0;try{var a=t(e);return a}finally{if(Ki=!1,(Cl!==null||Zl!==null)&&(Ri(),Cl&&(e=Cl,t=Zl,Zl=Cl=null,Bs(e),t)))for(e=0;e<t.length;e++)Bs(t[e])}}function Za(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Tt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(y(231,e,typeof l));return l}var Se=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(Se)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Gu=!1}var He=null,Hc=null,wn=null;function Zr(){if(wn)return wn;var t,e=Hc,l=e.length,a,n="value"in He?He.value:He.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return wn=n.slice(t,1<a?1-a:void 0)}function Hn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jn(){return!0}function Rs(){return!1}function _t(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jn:Rs,this.isPropagationStopped=Rs,this}return I(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),e}var yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=_t(yl),fn=I({},yl,{view:0,detail:0}),um=_t(fn),Ji,$i,xa,Ti=I({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(Ji=t.screenX-xa.screenX,$i=t.screenY-xa.screenY):$i=Ji=0,xa=t),Ji)},movementY:function(t){return"movementY"in t?t.movementY:$i}}),qs=_t(Ti),cm=I({},Ti,{dataTransfer:0}),sm=_t(cm),fm=I({},fn,{relatedTarget:0}),Wi=_t(fm),rm=I({},yl,{animationName:0,elapsedTime:0,pseudoElement:0}),om=_t(rm),dm=I({},yl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mm=_t(dm),hm=I({},yl,{data:0}),Ys=_t(hm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xm[t])?!!e[t]:!1}function Bc(){return pm}var ym=I({},fn,{key:function(t){if(t.key){var e=gm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(t){return t.type==="keypress"?Hn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vm=_t(ym),Sm=I({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=_t(Sm),jm=I({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),zm=_t(jm),Nm=I({},yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=_t(Nm),Fm=I({},Ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=_t(Fm),Tm=I({},yl,{newState:0,oldState:0}),_m=_t(Tm),Mm=[9,13,27,32],Rc=Se&&"CompositionEvent"in window,_a=null;Se&&"documentMode"in document&&(_a=document.documentMode);var Om=Se&&"TextEvent"in window&&!_a,Lr=Se&&(!Rc||_a&&8<_a&&11>=_a),Qs=" ",Xs=!1;function Vr(t,e){switch(t){case"keyup":return Mm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ul=!1;function Dm(t,e){switch(t){case"compositionend":return kr(e);case"keypress":return e.which!==32?null:(Xs=!0,Qs);case"textInput":return t=e.data,t===Qs&&Xs?null:t;default:return null}}function Cm(t,e){if(Ul)return t==="compositionend"||!Rc&&Vr(t,e)?(t=Zr(),wn=Hc=He=null,Ul=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lr&&e.locale!=="ko"?null:e.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Um[t.type]:e==="textarea"}function Kr(t,e,l,a){Cl?Zl?Zl.push(a):Zl=[a]:Cl=a,e=bi(e,"onChange"),0<e.length&&(l=new Ei("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ma=null,La=null;function wm(t){Zd(t,0)}function _i(t){var e=Na(t);if(Rr(e))return t}function Ls(t,e){if(t==="change")return e}var Jr=!1;if(Se){var Ii;if(Se){var Pi="oninput"in document;if(!Pi){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Pi=typeof Vs.oninput=="function"}Ii=Pi}else Ii=!1;Jr=Ii&&(!document.documentMode||9<document.documentMode)}function ks(){Ma&&(Ma.detachEvent("onpropertychange",$r),La=Ma=null)}function $r(t){if(t.propertyName==="value"&&_i(La)){var e=[];Kr(e,La,t,wc(t)),Xr(wm,e)}}function Hm(t,e,l){t==="focusin"?(ks(),Ma=e,La=l,Ma.attachEvent("onpropertychange",$r)):t==="focusout"&&ks()}function Bm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _i(La)}function Rm(t,e){if(t==="click")return _i(e)}function qm(t,e){if(t==="input"||t==="change")return _i(e)}function Ym(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:Ym;function Va(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!wu.call(e,n)||!Yt(t[n],e[n]))return!1}return!0}function Ks(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Js(t,e){var l=Ks(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Ks(l)}}function Wr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ir(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=In(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=In(t.document)}return e}function qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Gm=Se&&"documentMode"in document&&11>=document.documentMode,wl=null,Qu=null,Oa=null,Xu=!1;function $s(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Xu||wl==null||wl!==In(a)||(a=wl,"selectionStart"in a&&qc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Oa&&Va(Oa,a)||(Oa=a,a=bi(Qu,"onSelect"),0<a.length&&(e=new Ei("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=wl)))}function al(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Hl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},tu={},Pr={};Se&&(Pr=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function vl(t){if(tu[t])return tu[t];if(!Hl[t])return t;var e=Hl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Pr)return tu[t]=e[l];return t}var to=vl("animationend"),eo=vl("animationiteration"),lo=vl("animationstart"),Qm=vl("transitionrun"),Xm=vl("transitionstart"),Zm=vl("transitioncancel"),ao=vl("transitionend"),no=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function te(t,e){no.set(t,e),pl(e,[t])}var Pn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qt=[],Bl=0,Yc=0;function Mi(){for(var t=Bl,e=Yc=Bl=0;e<t;){var l=Qt[e];Qt[e++]=null;var a=Qt[e];Qt[e++]=null;var n=Qt[e];Qt[e++]=null;var i=Qt[e];if(Qt[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&io(l,n,i)}}function Oi(t,e,l,a){Qt[Bl++]=t,Qt[Bl++]=e,Qt[Bl++]=l,Qt[Bl++]=a,Yc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Gc(t,e,l,a){return Oi(t,e,l,a),ti(t)}function Sl(t,e){return Oi(t,null,null,e),ti(t)}function io(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Rt(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function ti(t){if(50<Ya)throw Ya=0,oc=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rl={};function Lm(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,l,a){return new Lm(t,e,l,a)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pe(t,e){var l=t.alternate;return l===null?(l=Ut(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function uo(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bn(t,e,l,a,n,i){var u=0;if(a=t,typeof t=="function")Qc(t)&&(u=1);else if(typeof t=="string")u=$h(t,l,ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ou:return t=Ut(31,l,e,n),t.elementType=Ou,t.lanes=i,t;case Ml:return fl(l.children,n,i,e);case Ar:u=8,n|=24;break;case Tu:return t=Ut(12,l,e,n|2),t.elementType=Tu,t.lanes=i,t;case _u:return t=Ut(13,l,e,n),t.elementType=_u,t.lanes=i,t;case Mu:return t=Ut(19,l,e,n),t.elementType=Mu,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:u=10;break t;case Fr:u=9;break t;case Tc:u=11;break t;case _c:u=14;break t;case _e:u=16,a=null;break t}u=29,l=Error(y(130,t===null?"null":typeof t,"")),a=null}return e=Ut(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function fl(t,e,l,a){return t=Ut(7,t,a,e),t.lanes=l,t}function eu(t,e,l){return t=Ut(6,t,null,e),t.lanes=l,t}function co(t){var e=Ut(18,null,null,0);return e.stateNode=t,e}function lu(t,e,l){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ws=new WeakMap;function kt(t,e){if(typeof t=="object"&&t!==null){var l=Ws.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Os(e)},Ws.set(t,e),e)}return{value:t,source:e,stack:Os(e)}}var ql=[],Yl=0,ei=null,ka=0,Zt=[],Lt=0,Je=null,ee=1,le="";function me(t,e){ql[Yl++]=ka,ql[Yl++]=ei,ei=t,ka=e}function so(t,e,l){Zt[Lt++]=ee,Zt[Lt++]=le,Zt[Lt++]=Je,Je=t;var a=ee;t=le;var n=32-Rt(a)-1;a&=~(1<<n),l+=1;var i=32-Rt(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,ee=1<<32-Rt(e)+n|l<<n|a,le=i+t}else ee=1<<i|l<<n|a,le=t}function Xc(t){t.return!==null&&(me(t,1),so(t,1,0))}function Zc(t){for(;t===ei;)ei=ql[--Yl],ql[Yl]=null,ka=ql[--Yl],ql[Yl]=null;for(;t===Je;)Je=Zt[--Lt],Zt[Lt]=null,le=Zt[--Lt],Zt[Lt]=null,ee=Zt[--Lt],Zt[Lt]=null}function fo(t,e){Zt[Lt++]=ee,Zt[Lt++]=le,Zt[Lt++]=Je,ee=e.id,le=e.overflow,Je=t}var bt=null,$=null,Y=!1,Ge=null,Kt=!1,Lu=Error(y(519));function $e(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ka(kt(e,t)),Lu}function Is(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[gt]=t,e[Tt]=a,l){case"dialog":B("cancel",e),B("close",e);break;case"iframe":case"object":case"embed":B("load",e);break;case"video":case"audio":for(l=0;l<Ia.length;l++)B(Ia[l],e);break;case"source":B("error",e);break;case"img":case"image":case"link":B("error",e),B("load",e);break;case"details":B("toggle",e);break;case"input":B("invalid",e),qr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":B("invalid",e);break;case"textarea":B("invalid",e),Gr(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Vd(e.textContent,l)?(a.popover!=null&&(B("beforetoggle",e),B("toggle",e)),a.onScroll!=null&&B("scroll",e),a.onScrollEnd!=null&&B("scrollend",e),a.onClick!=null&&(e.onclick=be),e=!0):e=!1,e||$e(t,!0)}function Ps(t){for(bt=t.return;bt;)switch(bt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:bt=bt.return}}function Al(t){if(t!==bt)return!1;if(!Y)return Ps(t),Y=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||bc(t.type,t.memoizedProps)),l=!l),l&&$&&$e(t),Ps(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));$=Yf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));$=Yf(t)}else e===27?(e=$,tl(t.type)?(t=vc,vc=null,$=t):$=e):$=bt?$t(t.stateNode.nextSibling):null;return!0}function ml(){$=bt=null,Y=!1}function au(){var t=Ge;return t!==null&&(Ft===null?Ft=t:Ft.push.apply(Ft,t),Ge=null),t}function Ka(t){Ge===null?Ge=[t]:Ge.push(t)}var Vu=ie(null),jl=null,xe=null;function Oe(t,e,l){K(Vu,e._currentValue),e._currentValue=l}function ye(t){t._currentValue=Vu.current,mt(Vu)}function ku(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Ku(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var f=0;f<e.length;f++)if(c.context===e[f]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),ku(i.return,l,t),a||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(y(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),ku(u,l,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function fa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(y(387));if(u=u.memoizedProps,u!==null){var c=n.type;Yt(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Kn.current){if(u=n.alternate,u===null)throw Error(y(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(tn):t=[tn])}n=n.return}t!==null&&Ku(e,t,l,a),e.flags|=262144}function li(t){for(t=t.firstContext;t!==null;){if(!Yt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hl(t){jl=t,xe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xt(t){return ro(jl,t)}function zn(t,e){return jl===null&&hl(t),ro(t,e)}function ro(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},xe===null){if(t===null)throw Error(y(308));xe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xe=xe.next=e;return l}var Vm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},km=rt.unstable_scheduleCallback,Km=rt.unstable_NormalPriority,ct={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new Vm,data:new Map,refCount:0}}function rn(t){t.refCount--,t.refCount===0&&km(Km,function(){t.controller.abort()})}var Da=null,Ju=0,Il=0,Ll=null;function Jm(t,e){if(Da===null){var l=Da=[];Ju=0,Il=bs(),Ll={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ju++,e.then(tf,tf),e}function tf(){if(--Ju===0&&Da!==null){Ll!==null&&(Ll.status="fulfilled");var t=Da;Da=null,Il=0,Ll=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function $m(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var ef=M.S;M.S=function(t,e){Ad=Ht(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Jm(t,e),ef!==null&&ef(t,e)};var rl=ie(null);function Vc(){var t=rl.current;return t!==null?t:k.pooledCache}function Rn(t,e){e===null?K(rl,rl.current):K(rl,e.pool)}function oo(){var t=Vc();return t===null?null:{parent:ct._currentValue,pool:t}}var ra=Error(y(460)),kc=Error(y(474)),Di=Error(y(542)),ai={then:function(){}};function lf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mo(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(be,be),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t;default:if(typeof e.status=="string")e.then(be,be);else{if(t=k,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t}throw ol=e,ra}}function ul(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ol=l,ra):l}}var ol=null;function af(){if(ol===null)throw Error(y(459));var t=ol;return ol=null,t}function nf(t){if(t===ra||t===Di)throw Error(y(483))}var Vl=null,Ja=0;function Nn(t){var e=Ja;return Ja+=1,Vl===null&&(Vl=[]),mo(Vl,t,e)}function pa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function An(t,e){throw e.$$typeof===H0?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ho(t){function e(m,r){if(t){var g=m.deletions;g===null?(m.deletions=[r],m.flags|=16):g.push(r)}}function l(m,r){if(!t)return null;for(;r!==null;)e(m,r),r=r.sibling;return null}function a(m){for(var r=new Map;m!==null;)m.key!==null?r.set(m.key,m):r.set(m.index,m),m=m.sibling;return r}function n(m,r){return m=pe(m,r),m.index=0,m.sibling=null,m}function i(m,r,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<r?(m.flags|=67108866,r):g):(m.flags|=67108866,r)):(m.flags|=1048576,r)}function u(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function c(m,r,g,p){return r===null||r.tag!==6?(r=eu(g,m.mode,p),r.return=m,r):(r=n(r,g),r.return=m,r)}function f(m,r,g,p){var A=g.type;return A===Ml?x(m,r,g.props.children,p,g.key):r!==null&&(r.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_e&&ul(A)===r.type)?(r=n(r,g.props),pa(r,g),r.return=m,r):(r=Bn(g.type,g.key,g.props,null,m.mode,p),pa(r,g),r.return=m,r)}function h(m,r,g,p){return r===null||r.tag!==4||r.stateNode.containerInfo!==g.containerInfo||r.stateNode.implementation!==g.implementation?(r=lu(g,m.mode,p),r.return=m,r):(r=n(r,g.children||[]),r.return=m,r)}function x(m,r,g,p,A){return r===null||r.tag!==7?(r=fl(g,m.mode,p,A),r.return=m,r):(r=n(r,g),r.return=m,r)}function b(m,r,g){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=eu(""+r,m.mode,g),r.return=m,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case xn:return g=Bn(r.type,r.key,r.props,null,m.mode,g),pa(g,r),g.return=m,g;case ja:return r=lu(r,m.mode,g),r.return=m,r;case _e:return r=ul(r),b(m,r,g)}if(za(r)||ga(r))return r=fl(r,m.mode,g,null),r.return=m,r;if(typeof r.then=="function")return b(m,Nn(r),g);if(r.$$typeof===ge)return b(m,zn(m,r),g);An(m,r)}return null}function o(m,r,g,p){var A=r!==null?r.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return A!==null?null:c(m,r,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xn:return g.key===A?f(m,r,g,p):null;case ja:return g.key===A?h(m,r,g,p):null;case _e:return g=ul(g),o(m,r,g,p)}if(za(g)||ga(g))return A!==null?null:x(m,r,g,p,null);if(typeof g.then=="function")return o(m,r,Nn(g),p);if(g.$$typeof===ge)return o(m,r,zn(m,g),p);An(m,g)}return null}function d(m,r,g,p,A){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return m=m.get(g)||null,c(r,m,""+p,A);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xn:return m=m.get(p.key===null?g:p.key)||null,f(r,m,p,A);case ja:return m=m.get(p.key===null?g:p.key)||null,h(r,m,p,A);case _e:return p=ul(p),d(m,r,g,p,A)}if(za(p)||ga(p))return m=m.get(g)||null,x(r,m,p,A,null);if(typeof p.then=="function")return d(m,r,g,Nn(p),A);if(p.$$typeof===ge)return d(m,r,g,zn(r,p),A);An(r,p)}return null}function S(m,r,g,p){for(var A=null,O=null,z=r,T=r=0,D=null;z!==null&&T<g.length;T++){z.index>T?(D=z,z=null):D=z.sibling;var _=o(m,z,g[T],p);if(_===null){z===null&&(z=D);break}t&&z&&_.alternate===null&&e(m,z),r=i(_,r,T),O===null?A=_:O.sibling=_,O=_,z=D}if(T===g.length)return l(m,z),Y&&me(m,T),A;if(z===null){for(;T<g.length;T++)z=b(m,g[T],p),z!==null&&(r=i(z,r,T),O===null?A=z:O.sibling=z,O=z);return Y&&me(m,T),A}for(z=a(z);T<g.length;T++)D=d(z,m,T,g[T],p),D!==null&&(t&&D.alternate!==null&&z.delete(D.key===null?T:D.key),r=i(D,r,T),O===null?A=D:O.sibling=D,O=D);return t&&z.forEach(function(yt){return e(m,yt)}),Y&&me(m,T),A}function N(m,r,g,p){if(g==null)throw Error(y(151));for(var A=null,O=null,z=r,T=r=0,D=null,_=g.next();z!==null&&!_.done;T++,_=g.next()){z.index>T?(D=z,z=null):D=z.sibling;var yt=o(m,z,_.value,p);if(yt===null){z===null&&(z=D);break}t&&z&&yt.alternate===null&&e(m,z),r=i(yt,r,T),O===null?A=yt:O.sibling=yt,O=yt,z=D}if(_.done)return l(m,z),Y&&me(m,T),A;if(z===null){for(;!_.done;T++,_=g.next())_=b(m,_.value,p),_!==null&&(r=i(_,r,T),O===null?A=_:O.sibling=_,O=_);return Y&&me(m,T),A}for(z=a(z);!_.done;T++,_=g.next())_=d(z,m,T,_.value,p),_!==null&&(t&&_.alternate!==null&&z.delete(_.key===null?T:_.key),r=i(_,r,T),O===null?A=_:O.sibling=_,O=_);return t&&z.forEach(function(Mt){return e(m,Mt)}),Y&&me(m,T),A}function U(m,r,g,p){if(typeof g=="object"&&g!==null&&g.type===Ml&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case xn:t:{for(var A=g.key;r!==null;){if(r.key===A){if(A=g.type,A===Ml){if(r.tag===7){l(m,r.sibling),p=n(r,g.props.children),p.return=m,m=p;break t}}else if(r.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_e&&ul(A)===r.type){l(m,r.sibling),p=n(r,g.props),pa(p,g),p.return=m,m=p;break t}l(m,r);break}else e(m,r);r=r.sibling}g.type===Ml?(p=fl(g.props.children,m.mode,p,g.key),p.return=m,m=p):(p=Bn(g.type,g.key,g.props,null,m.mode,p),pa(p,g),p.return=m,m=p)}return u(m);case ja:t:{for(A=g.key;r!==null;){if(r.key===A)if(r.tag===4&&r.stateNode.containerInfo===g.containerInfo&&r.stateNode.implementation===g.implementation){l(m,r.sibling),p=n(r,g.children||[]),p.return=m,m=p;break t}else{l(m,r);break}else e(m,r);r=r.sibling}p=lu(g,m.mode,p),p.return=m,m=p}return u(m);case _e:return g=ul(g),U(m,r,g,p)}if(za(g))return S(m,r,g,p);if(ga(g)){if(A=ga(g),typeof A!="function")throw Error(y(150));return g=A.call(g),N(m,r,g,p)}if(typeof g.then=="function")return U(m,r,Nn(g),p);if(g.$$typeof===ge)return U(m,r,zn(m,g),p);An(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,r!==null&&r.tag===6?(l(m,r.sibling),p=n(r,g),p.return=m,m=p):(l(m,r),p=eu(g,m.mode,p),p.return=m,m=p),u(m)):l(m,r)}return function(m,r,g,p){try{Ja=0;var A=U(m,r,g,p);return Vl=null,A}catch(z){if(z===ra||z===Di)throw z;var O=Ut(29,z,null,m.mode);return O.lanes=p,O.return=m,O}finally{}}}var gl=ho(!0),go=ho(!1),Me=!1;function Kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xe(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,G&2){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=ti(t),io(t,null,l),e}return Oi(t,a,e,l),ti(t)}function Ca(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Dr(t,l)}}function nu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Wu=!1;function Ua(){if(Wu){var t=Ll;if(t!==null)throw t}}function wa(t,e,l,a){Wu=!1;var n=t.updateQueue;Me=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,h=f.next;f.next=null,u===null?i=h:u.next=h,u=f;var x=t.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=h:c.next=h,x.lastBaseUpdate=f))}if(i!==null){var b=n.baseState;u=0,x=h=f=null,c=i;do{var o=c.lane&-536870913,d=o!==c.lane;if(d?(q&o)===o:(a&o)===o){o!==0&&o===Il&&(Wu=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var S=t,N=c;o=e;var U=l;switch(N.tag){case 1:if(S=N.payload,typeof S=="function"){b=S.call(U,b,o);break t}b=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,o=typeof S=="function"?S.call(U,b,o):S,o==null)break t;b=I({},b,o);break t;case 2:Me=!0}}o=c.callback,o!==null&&(t.flags|=64,d&&(t.flags|=8192),d=n.callbacks,d===null?n.callbacks=[o]:d.push(o))}else d={lane:o,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(h=x=d,f=b):x=x.next=d,u|=o;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;d=c,c=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);x===null&&(f=b),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),Ie|=u,t.lanes=u,t.memoizedState=b}}function bo(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function xo(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)bo(l[t],e)}var Pl=ie(null),ni=ie(0);function uf(t,e){t=Ae,K(ni,t),K(Pl,e),Ae=t|e.baseLanes}function Iu(){K(ni,Ae),K(Pl,Pl.current)}function Jc(){Ae=ni.current,mt(Pl),mt(ni)}var Gt=ie(null),Jt=null;function De(t){var e=t.alternate;K(at,at.current&1),K(Gt,t),Jt===null&&(e===null||Pl.current!==null||e.memoizedState!==null)&&(Jt=t)}function Pu(t){K(at,at.current),K(Gt,t),Jt===null&&(Jt=t)}function po(t){t.tag===22?(K(at,at.current),K(Gt,t),Jt===null&&(Jt=t)):Ce()}function Ce(){K(at,at.current),K(Gt,Gt.current)}function Ct(t){mt(Gt),Jt===t&&(Jt=null),mt(at)}var at=ie(0);function ii(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||pc(l)||yc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var je=0,H=null,V=null,it=null,ui=!1,kl=!1,bl=!1,ci=0,$a=0,Kl=null,Wm=0;function et(){throw Error(y(321))}function $c(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Yt(t[l],e[l]))return!1;return!0}function Wc(t,e,l,a,n,i){return je=i,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=t===null||t.memoizedState===null?Jo:ss,bl=!1,i=l(a,n),bl=!1,kl&&(i=vo(e,l,a,n)),yo(t),i}function yo(t){M.H=Wa;var e=V!==null&&V.next!==null;if(je=0,it=V=H=null,ui=!1,$a=0,Kl=null,e)throw Error(y(300));t===null||st||(t=t.dependencies,t!==null&&li(t)&&(st=!0))}function vo(t,e,l,a){H=t;var n=0;do{if(kl&&(Kl=null),$a=0,kl=!1,25<=n)throw Error(y(301));if(n+=1,it=V=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=$o,i=e(l,a)}while(kl);return i}function Im(){var t=M.H,e=t.useState()[0];return e=typeof e.then=="function"?on(e):e,t=t.useState()[0],(V!==null?V.memoizedState:null)!==t&&(H.flags|=1024),e}function Ic(){var t=ci!==0;return ci=0,t}function Pc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ts(t){if(ui){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ui=!1}je=0,it=V=H=null,kl=!1,$a=ci=0,Kl=null}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?H.memoizedState=it=t:it=it.next=t,it}function nt(){if(V===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=V.next;var e=it===null?H.memoizedState:it.next;if(e!==null)it=e,V=t;else{if(t===null)throw H.alternate===null?Error(y(467)):Error(y(310));V=t,t={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},it===null?H.memoizedState=it=t:it=it.next=t}return it}function Ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(t){var e=$a;return $a+=1,Kl===null&&(Kl=[]),t=mo(Kl,t,e),e=H,(it===null?e.memoizedState:it.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?Jo:ss),t}function Ui(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return on(t);if(t.$$typeof===ge)return xt(t)}throw Error(y(438,String(t)))}function es(t){var e=null,l=H.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=H.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ci(),H.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=B0;return e.index++,l}function ze(t,e){return typeof e=="function"?e(t):e}function qn(t){var e=nt();return ls(e,V,t)}function ls(t,e,l){var a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=u=null,f=null,h=e,x=!1;do{var b=h.lane&-536870913;if(b!==h.lane?(q&b)===b:(je&b)===b){var o=h.revertLane;if(o===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),b===Il&&(x=!0);else if((je&o)===o){h=h.next,o===Il&&(x=!0);continue}else b={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=b,u=i):f=f.next=b,H.lanes|=o,Ie|=o;b=h.action,bl&&l(i,b),i=h.hasEagerState?h.eagerState:l(i,b)}else o={lane:b,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=o,u=i):f=f.next=o,H.lanes|=b,Ie|=b;h=h.next}while(h!==null&&h!==e);if(f===null?u=i:f.next=c,!Yt(i,t.memoizedState)&&(st=!0,x&&(l=Ll,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function iu(t){var e=nt(),l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Yt(i,e.memoizedState)||(st=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function So(t,e,l){var a=H,n=nt(),i=Y;if(i){if(l===void 0)throw Error(y(407));l=l()}else l=e();var u=!Yt((V||n).memoizedState,l);if(u&&(n.memoizedState=l,st=!0),n=n.queue,as(No.bind(null,a,n,t),[t]),n.getSnapshot!==e||u||it!==null&&it.memoizedState.tag&1){if(a.flags|=2048,ta(9,{destroy:void 0},zo.bind(null,a,n,l,e),null),k===null)throw Error(y(349));i||je&127||jo(a,e,l)}return l}function jo(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=H.updateQueue,e===null?(e=Ci(),H.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function zo(t,e,l,a){e.value=l,e.getSnapshot=a,Ao(e)&&Fo(t)}function No(t,e,l){return l(function(){Ao(e)&&Fo(t)})}function Ao(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Yt(t,l)}catch{return!0}}function Fo(t){var e=Sl(t,2);e!==null&&Et(e,t,2)}function tc(t){var e=vt();if(typeof t=="function"){var l=t;if(t=l(),bl){we(!0);try{l()}finally{we(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:t},e}function Eo(t,e,l,a){return t.baseState=l,ls(t,V,typeof a=="function"?a:ze)}function Pm(t,e,l,a,n){if(Hi(t))throw Error(y(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,To(e,i)):(i.next=l.next,e.pending=l.next=i)}}function To(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=M.T,u={};M.T=u;try{var c=l(n,a),f=M.S;f!==null&&f(u,c),cf(t,e,c)}catch(h){ec(t,e,h)}finally{i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}else try{i=l(n,a),cf(t,e,i)}catch(h){ec(t,e,h)}}function cf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){sf(t,e,a)},function(a){return ec(t,e,a)}):sf(t,e,l)}function sf(t,e,l){e.status="fulfilled",e.value=l,_o(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,To(t,l)))}function ec(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,_o(e),e=e.next;while(e!==a)}t.action=null}function _o(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Mo(t,e){return e}function ff(t,e){if(Y){var l=k.formState;if(l!==null){t:{var a=H;if(Y){if($){e:{for(var n=$,i=Kt;n.nodeType!==8;){if(!i){n=null;break e}if(n=$t(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){$=$t(n.nextSibling),a=n.data==="F!";break t}}$e(a)}a=!1}a&&(e=l[0])}}return l=vt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},l.queue=a,l=Vo.bind(null,H,a),a.dispatch=l,a=tc(!1),i=cs.bind(null,H,!1,a.queue),a=vt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Pm.bind(null,H,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function rf(t){var e=nt();return Oo(e,V,t)}function Oo(t,e,l){if(e=ls(t,e,Mo)[0],t=qn(ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=on(e)}catch(u){throw u===ra?Di:u}else a=e;e=nt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(H.flags|=2048,ta(9,{destroy:void 0},th.bind(null,n,l),null)),[a,i,t]}function th(t,e){t.action=e}function of(t){var e=nt(),l=V;if(l!==null)return Oo(e,l,t);nt(),e=e.memoizedState,l=nt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ta(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=H.updateQueue,e===null&&(e=Ci(),H.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Do(){return nt().memoizedState}function Yn(t,e,l,a){var n=vt();H.flags|=t,n.memoizedState=ta(1|e,{destroy:void 0},l,a===void 0?null:a)}function wi(t,e,l,a){var n=nt();a=a===void 0?null:a;var i=n.memoizedState.inst;V!==null&&a!==null&&$c(a,V.memoizedState.deps)?n.memoizedState=ta(e,i,l,a):(H.flags|=t,n.memoizedState=ta(1|e,i,l,a))}function df(t,e){Yn(8390656,8,t,e)}function as(t,e){wi(2048,8,t,e)}function eh(t){H.flags|=4;var e=H.updateQueue;if(e===null)e=Ci(),H.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Co(t){var e=nt().memoizedState;return eh({ref:e,nextImpl:t}),function(){if(G&2)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function Uo(t,e){return wi(4,2,t,e)}function wo(t,e){return wi(4,4,t,e)}function Ho(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bo(t,e,l){l=l!=null?l.concat([t]):null,wi(4,4,Ho.bind(null,e,t),l)}function ns(){}function Ro(t,e){var l=nt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&$c(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function qo(t,e){var l=nt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&$c(e,a[1]))return a[0];if(a=t(),bl){we(!0);try{t()}finally{we(!1)}}return l.memoizedState=[a,e],a}function is(t,e,l){return l===void 0||je&1073741824&&!(q&261930)?t.memoizedState=e:(t.memoizedState=l,t=Ed(),H.lanes|=t,Ie|=t,l)}function Yo(t,e,l,a){return Yt(l,e)?l:Pl.current!==null?(t=is(t,l,a),Yt(t,e)||(st=!0),t):!(je&42)||je&1073741824&&!(q&261930)?(st=!0,t.memoizedState=l):(t=Ed(),H.lanes|=t,Ie|=t,e)}function Go(t,e,l,a,n){var i=Q.p;Q.p=i!==0&&8>i?i:8;var u=M.T,c={};M.T=c,cs(t,!1,e,l);try{var f=n(),h=M.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=$m(f,a);Ha(t,e,x,qt(t))}else Ha(t,e,a,qt(t))}catch(b){Ha(t,e,{then:function(){},status:"rejected",reason:b},qt())}finally{Q.p=i,u!==null&&c.types!==null&&(u.types=c.types),M.T=u}}function lh(){}function lc(t,e,l,a){if(t.tag!==5)throw Error(y(476));var n=Qo(t).queue;Go(t,n,e,sl,l===null?lh:function(){return Xo(t),l(a)})}function Qo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:sl,baseState:sl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:sl},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Xo(t){var e=Qo(t);e.next===null&&(e=t.alternate.memoizedState),Ha(t,e.next.queue,{},qt())}function us(){return xt(tn)}function Zo(){return nt().memoizedState}function Lo(){return nt().memoizedState}function ah(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=qt();t=Qe(l);var a=Xe(e,t,l);a!==null&&(Et(a,e,l),Ca(a,e,l)),e={cache:Lc()},t.payload=e;return}e=e.return}}function nh(t,e,l){var a=qt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hi(t)?ko(e,l):(l=Gc(t,e,l,a),l!==null&&(Et(l,t,a),Ko(l,e,a)))}function Vo(t,e,l){var a=qt();Ha(t,e,l,a)}function Ha(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hi(t))ko(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Yt(c,u))return Oi(t,e,n,0),k===null&&Mi(),!1}catch{}finally{}if(l=Gc(t,e,n,a),l!==null)return Et(l,t,a),Ko(l,e,a),!0}return!1}function cs(t,e,l,a){if(a={lane:2,revertLane:bs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(t)){if(e)throw Error(y(479))}else e=Gc(t,l,a,2),e!==null&&Et(e,t,2)}function Hi(t){var e=t.alternate;return t===H||e!==null&&e===H}function ko(t,e){kl=ui=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Ko(t,e,l){if(l&4194048){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Dr(t,l)}}var Wa={readContext:xt,use:Ui,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};Wa.useEffectEvent=et;var Jo={readContext:xt,use:Ui,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:df,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Yn(4194308,4,Ho.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Yn(4194308,4,t,e)},useInsertionEffect:function(t,e){Yn(4,2,t,e)},useMemo:function(t,e){var l=vt();e=e===void 0?null:e;var a=t();if(bl){we(!0);try{t()}finally{we(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=vt();if(l!==void 0){var n=l(e);if(bl){we(!0);try{l(e)}finally{we(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=nh.bind(null,H,t),[a.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:function(t){t=tc(t);var e=t.queue,l=Vo.bind(null,H,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:ns,useDeferredValue:function(t,e){var l=vt();return is(l,t,e)},useTransition:function(){var t=tc(!1);return t=Go.bind(null,H,t.queue,!0,!1),vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=H,n=vt();if(Y){if(l===void 0)throw Error(y(407));l=l()}else{if(l=e(),k===null)throw Error(y(349));q&127||jo(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,df(No.bind(null,a,i,t),[t]),a.flags|=2048,ta(9,{destroy:void 0},zo.bind(null,a,i,l,e),null),l},useId:function(){var t=vt(),e=k.identifierPrefix;if(Y){var l=le,a=ee;l=(a&~(1<<32-Rt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=ci++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Wm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:us,useFormState:ff,useActionState:ff,useOptimistic:function(t){var e=vt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=cs.bind(null,H,!0,l),l.dispatch=e,[t,e]},useMemoCache:es,useCacheRefresh:function(){return vt().memoizedState=ah.bind(null,H)},useEffectEvent:function(t){var e=vt(),l={impl:t};return e.memoizedState=l,function(){if(G&2)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},ss={readContext:xt,use:Ui,useCallback:Ro,useContext:xt,useEffect:as,useImperativeHandle:Bo,useInsertionEffect:Uo,useLayoutEffect:wo,useMemo:qo,useReducer:qn,useRef:Do,useState:function(){return qn(ze)},useDebugValue:ns,useDeferredValue:function(t,e){var l=nt();return Yo(l,V.memoizedState,t,e)},useTransition:function(){var t=qn(ze)[0],e=nt().memoizedState;return[typeof t=="boolean"?t:on(t),e]},useSyncExternalStore:So,useId:Zo,useHostTransitionStatus:us,useFormState:rf,useActionState:rf,useOptimistic:function(t,e){var l=nt();return Eo(l,V,t,e)},useMemoCache:es,useCacheRefresh:Lo};ss.useEffectEvent=Co;var $o={readContext:xt,use:Ui,useCallback:Ro,useContext:xt,useEffect:as,useImperativeHandle:Bo,useInsertionEffect:Uo,useLayoutEffect:wo,useMemo:qo,useReducer:iu,useRef:Do,useState:function(){return iu(ze)},useDebugValue:ns,useDeferredValue:function(t,e){var l=nt();return V===null?is(l,t,e):Yo(l,V.memoizedState,t,e)},useTransition:function(){var t=iu(ze)[0],e=nt().memoizedState;return[typeof t=="boolean"?t:on(t),e]},useSyncExternalStore:So,useId:Zo,useHostTransitionStatus:us,useFormState:of,useActionState:of,useOptimistic:function(t,e){var l=nt();return V!==null?Eo(l,V,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:es,useCacheRefresh:Lo};$o.useEffectEvent=Co;function uu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:I({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ac={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=qt(),n=Qe(a);n.payload=e,l!=null&&(n.callback=l),e=Xe(t,n,a),e!==null&&(Et(e,t,a),Ca(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=qt(),n=Qe(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Xe(t,n,a),e!==null&&(Et(e,t,a),Ca(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=qt(),a=Qe(l);a.tag=2,e!=null&&(a.callback=e),e=Xe(t,a,l),e!==null&&(Et(e,t,l),Ca(e,t,l))}};function mf(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Va(l,a)||!Va(n,i):!0}function hf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function xl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=I({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Wo(t){Pn(t)}function Io(t){console.error(t)}function Po(t){Pn(t)}function si(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function gf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nc(t,e,l){return l=Qe(l),l.tag=3,l.payload={element:null},l.callback=function(){si(t,e)},l}function td(t){return t=Qe(t),t.tag=3,t}function ed(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){gf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){gf(e,l,a),typeof n!="function"&&(Ze===null?Ze=new Set([this]):Ze.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function ih(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&fa(e,l,n,!0),l=Gt.current,l!==null){switch(l.tag){case 31:case 13:return Jt===null?mi():l.alternate===null&&lt===0&&(lt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ai?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),xu(t,a,n)),!1;case 22:return l.flags|=65536,a===ai?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),xu(t,a,n)),!1}throw Error(y(435,l.tag))}return xu(t,a,n),mi(),!1}if(Y)return e=Gt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Lu&&(t=Error(y(422),{cause:a}),Ka(kt(t,l)))):(a!==Lu&&(e=Error(y(423),{cause:a}),Ka(kt(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=kt(a,l),n=nc(t.stateNode,a,n),nu(t,n),lt!==4&&(lt=2)),!1;var i=Error(y(520),{cause:a});if(i=kt(i,l),qa===null?qa=[i]:qa.push(i),lt!==4&&(lt=2),e===null)return!0;a=kt(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=nc(l.stateNode,a,t),nu(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ze===null||!Ze.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=td(n),ed(n,t,l,a),nu(l,n),!1}l=l.return}while(l!==null);return!1}var fs=Error(y(461)),st=!1;function ht(t,e,l,a){e.child=t===null?go(e,null,l,a):gl(e,t.child,l,a)}function bf(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return hl(e),a=Wc(t,e,l,u,i,n),c=Ic(),t!==null&&!st?(Pc(t,e,n),Ne(t,e,n)):(Y&&c&&Xc(e),e.flags|=1,ht(t,e,a,n),e.child)}function xf(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Qc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,ld(t,e,i,a,n)):(t=Bn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!rs(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(u,a)&&t.ref===e.ref)return Ne(t,e,n)}return e.flags|=1,t=pe(i,a),t.ref=e.ref,t.return=e,e.child=t}function ld(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Va(i,a)&&t.ref===e.ref)if(st=!1,e.pendingProps=a=i,rs(t,n))t.flags&131072&&(st=!0);else return e.lanes=t.lanes,Ne(t,e,n)}return ic(t,e,l,a,n)}function ad(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(e.flags&128){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return pf(t,e,i,l,a)}if(l&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rn(e,i!==null?i.cachePool:null),i!==null?uf(e,i):Iu(),po(e);else return a=e.lanes=536870912,pf(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Rn(e,i.cachePool),uf(e,i),Ce(),e.memoizedState=null):(t!==null&&Rn(e,null),Iu(),Ce());return ht(t,e,n,l),e.child}function Aa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pf(t,e,l,a,n){var i=Vc();return i=i===null?null:{parent:ct._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Rn(e,null),Iu(),po(e),t!==null&&fa(t,e,a,!0),e.childLanes=n,null}function Gn(t,e){return e=fi({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function yf(t,e,l){return gl(e,t.child,null,l),t=Gn(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function uh(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Y){if(a.mode==="hidden")return t=Gn(e,a),e.lanes=536870912,Aa(null,t);if(Pu(e),(t=$)?(t=Jd(t,Kt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Je!==null?{id:ee,overflow:le}:null,retryLane:536870912,hydrationErrors:null},l=co(t),l.return=e,e.child=l,bt=e,$=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return Gn(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Pu(e),n)if(e.flags&256)e.flags&=-257,e=yf(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(st||fa(t,e,l,!1),n=(l&t.childLanes)!==0,st||n){if(a=k,a!==null&&(u=Cr(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Sl(t,u),Et(a,t,u),fs;mi(),e=yf(t,e,l)}else t=i.treeContext,$=$t(u.nextSibling),bt=e,Y=!0,Ge=null,Kt=!1,t!==null&&fo(e,t),e=Gn(e,a),e.flags|=4096;return e}return t=pe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Qn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function ic(t,e,l,a,n){return hl(e),l=Wc(t,e,l,a,void 0,n),a=Ic(),t!==null&&!st?(Pc(t,e,n),Ne(t,e,n)):(Y&&a&&Xc(e),e.flags|=1,ht(t,e,l,n),e.child)}function vf(t,e,l,a,n,i){return hl(e),e.updateQueue=null,l=vo(e,a,l,n),yo(t),a=Ic(),t!==null&&!st?(Pc(t,e,i),Ne(t,e,i)):(Y&&a&&Xc(e),e.flags|=1,ht(t,e,l,i),e.child)}function Sf(t,e,l,a,n){if(hl(e),e.stateNode===null){var i=Rl,u=l.contextType;typeof u=="object"&&u!==null&&(i=xt(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ac,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Kc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?xt(u):Rl,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(uu(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ac.enqueueReplaceState(i,i.state,null),wa(e,a,i,n),Ua(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,f=xl(l,c);i.props=f;var h=i.context,x=l.contextType;u=Rl,typeof x=="object"&&x!==null&&(u=xt(x));var b=l.getDerivedStateFromProps;x=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||h!==u)&&hf(e,i,a,u),Me=!1;var o=e.memoizedState;i.state=o,wa(e,a,i,n),Ua(),h=e.memoizedState,c||o!==h||Me?(typeof b=="function"&&(uu(e,l,b,a),h=e.memoizedState),(f=Me||mf(e,l,f,a,o,h,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),i.props=a,i.state=h,i.context=u,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,$u(t,e),u=e.memoizedProps,x=xl(l,u),i.props=x,b=e.pendingProps,o=i.context,h=l.contextType,f=Rl,typeof h=="object"&&h!==null&&(f=xt(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||o!==f)&&hf(e,i,a,f),Me=!1,o=e.memoizedState,i.state=o,wa(e,a,i,n),Ua();var d=e.memoizedState;u!==b||o!==d||Me||t!==null&&t.dependencies!==null&&li(t.dependencies)?(typeof c=="function"&&(uu(e,l,c,a),d=e.memoizedState),(x=Me||mf(e,l,x,a,o,d,f)||t!==null&&t.dependencies!==null&&li(t.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,d,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,d,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&o===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&o===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=d),i.props=a,i.state=d,i.context=f,a=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&o===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&o===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Qn(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=gl(e,t.child,null,n),e.child=gl(e,null,l,n)):ht(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Ne(t,e,n),t}function jf(t,e,l,a){return ml(),e.flags|=256,ht(t,e,l,a),e.child}var cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function su(t){return{baseLanes:t,cachePool:oo()}}function fu(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=wt),t}function nd(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(at.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(Y){if(n?De(e):Ce(),(t=$)?(t=Jd(t,Kt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Je!==null?{id:ee,overflow:le}:null,retryLane:536870912,hydrationErrors:null},l=co(t),l.return=e,e.child=l,bt=e,$=null)):t=null,t===null)throw $e(e);return yc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Ce(),n=e.mode,c=fi({mode:"hidden",children:c},n),a=fl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=su(l),a.childLanes=fu(t,u,l),e.memoizedState=cu,Aa(null,a)):(De(e),uc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)e.flags&256?(De(e),e.flags&=-257,e=ru(t,e,l)):e.memoizedState!==null?(Ce(),e.child=t.child,e.flags|=128,e=null):(Ce(),c=a.fallback,n=e.mode,a=fi({mode:"visible",children:a.children},n),c=fl(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,gl(e,t.child,null,l),a=e.child,a.memoizedState=su(l),a.childLanes=fu(t,u,l),e.memoizedState=cu,e=Aa(null,a));else if(De(e),yc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var h=u.dgst;u=h,a=Error(y(419)),a.stack="",a.digest=u,Ka({value:a,source:null,stack:null}),e=ru(t,e,l)}else if(st||fa(t,e,l,!1),u=(l&t.childLanes)!==0,st||u){if(u=k,u!==null&&(a=Cr(u,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Sl(t,a),Et(u,t,a),fs;pc(c)||mi(),e=ru(t,e,l)}else pc(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,$=$t(c.nextSibling),bt=e,Y=!0,Ge=null,Kt=!1,t!==null&&fo(e,t),e=uc(e,a.children),e.flags|=4096);return e}return n?(Ce(),c=a.fallback,n=e.mode,f=t.child,h=f.sibling,a=pe(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,h!==null?c=pe(h,c):(c=fl(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,Aa(null,a),a=e.child,c=t.child.memoizedState,c===null?c=su(l):(n=c.cachePool,n!==null?(f=ct._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=oo(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=fu(t,u,l),e.memoizedState=cu,Aa(t.child,a)):(De(e),l=t.child,t=l.sibling,l=pe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function uc(t,e){return e=fi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function fi(t,e){return t=Ut(22,t,null,e),t.lanes=0,t}function ru(t,e,l){return gl(e,t.child,null,l),t=uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zf(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ku(t.return,e,l)}function ou(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function id(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=at.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,K(at,u),ht(t,e,a,l),a=Y?ka:0,!c&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zf(t,l,e);else if(t.tag===19)zf(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&ii(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),ou(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&ii(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}ou(e,!0,l,null,i,a);break;case"together":ou(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ne(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ie|=e.lanes,!(l&e.childLanes))if(t!==null){if(fa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,l=pe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=pe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function rs(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&li(t)))}function ch(t,e,l){switch(e.tag){case 3:Jn(e,e.stateNode.containerInfo),Oe(e,ct,t.memoizedState.cache),ml();break;case 27:case 5:Uu(e);break;case 4:Jn(e,e.stateNode.containerInfo);break;case 10:Oe(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Pu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(De(e),e.flags|=128,null):l&e.child.childLanes?nd(t,e,l):(De(e),t=Ne(t,e,l),t!==null?t.sibling:null);De(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(fa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return id(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(at,at.current),a)break;return null;case 22:return e.lanes=0,ad(t,e,l,e.pendingProps);case 24:Oe(e,ct,t.memoizedState.cache)}return Ne(t,e,l)}function ud(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)st=!0;else{if(!rs(t,l)&&!(e.flags&128))return st=!1,ch(t,e,l);st=!!(t.flags&131072)}else st=!1,Y&&e.flags&1048576&&so(e,ka,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ul(e.elementType),e.type=t,typeof t=="function")Qc(t)?(a=xl(t,a),e.tag=1,e=Sf(null,e,t,a,l)):(e.tag=0,e=ic(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===Tc){e.tag=11,e=bf(null,e,t,a,l);break t}else if(n===_c){e.tag=14,e=xf(null,e,t,a,l);break t}}throw e=Du(t)||t,Error(y(306,e,""))}}return e;case 0:return ic(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=xl(a,e.pendingProps),Sf(t,e,a,n,l);case 3:t:{if(Jn(e,e.stateNode.containerInfo),t===null)throw Error(y(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,$u(t,e),wa(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Oe(e,ct,a),a!==i.cache&&Ku(e,[ct],l,!0),Ua(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=jf(t,e,a,l);break t}else if(a!==n){n=kt(Error(y(424)),e),Ka(n),e=jf(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($=$t(t.firstChild),bt=e,Y=!0,Ge=null,Kt=!0,l=go(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ml(),a===n){e=Ne(t,e,l);break t}ht(t,e,a,l)}e=e.child}return e;case 26:return Qn(t,e),t===null?(l=Xf(e.type,null,e.pendingProps,null))?e.memoizedState=l:Y||(l=e.type,t=e.pendingProps,a=xi(Ye.current).createElement(l),a[gt]=e,a[Tt]=t,pt(a,l,t),dt(a),e.stateNode=a):e.memoizedState=Xf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Uu(e),t===null&&Y&&(a=e.stateNode=$d(e.type,e.pendingProps,Ye.current),bt=e,Kt=!0,n=$,tl(e.type)?(vc=n,$=$t(a.firstChild)):$=n),ht(t,e,e.pendingProps.children,l),Qn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Y&&((n=a=$)&&(a=Bh(a,e.type,e.pendingProps,Kt),a!==null?(e.stateNode=a,bt=e,$=$t(a.firstChild),Kt=!1,n=!0):n=!1),n||$e(e)),Uu(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,bc(n,i)?a=null:u!==null&&bc(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=Wc(t,e,Im,null,null,l),tn._currentValue=n),Qn(t,e),ht(t,e,a,l),e.child;case 6:return t===null&&Y&&((t=l=$)&&(l=Rh(l,e.pendingProps,Kt),l!==null?(e.stateNode=l,bt=e,$=null,t=!0):t=!1),t||$e(e)),null;case 13:return nd(t,e,l);case 4:return Jn(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=gl(e,null,a,l):ht(t,e,a,l),e.child;case 11:return bf(t,e,e.type,e.pendingProps,l);case 7:return ht(t,e,e.pendingProps,l),e.child;case 8:return ht(t,e,e.pendingProps.children,l),e.child;case 12:return ht(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Oe(e,e.type,a.value),ht(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,hl(e),n=xt(n),a=a(n),e.flags|=1,ht(t,e,a,l),e.child;case 14:return xf(t,e,e.type,e.pendingProps,l);case 15:return ld(t,e,e.type,e.pendingProps,l);case 19:return id(t,e,l);case 31:return uh(t,e,l);case 22:return ad(t,e,l,e.pendingProps);case 24:return hl(e),a=xt(ct),t===null?(n=Vc(),n===null&&(n=k,i=Lc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Kc(e),Oe(e,ct,n)):(t.lanes&l&&($u(t,e),wa(e,null,null,l),Ua()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Oe(e,ct,a)):(a=i.cache,Oe(e,ct,a),a!==n.cache&&Ku(e,[ct],l,!0))),ht(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function fe(t){t.flags|=4}function du(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Md())t.flags|=8192;else throw ol=ai,kc}else t.flags&=-16777217}function Nf(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Pd(e))if(Md())t.flags|=8192;else throw ol=ai,kc}function Fn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Mr():536870912,t.lanes|=e,ea|=e)}function ya(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function J(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function sh(t,e,l){var a=e.pendingProps;switch(Zc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J(e),null;case 1:return J(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ye(ct),Jl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Al(e)?fe(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,au())),J(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(fe(e),i!==null?(J(e),Nf(e,i)):(J(e),du(e,n,null,a,l))):i?i!==t.memoizedState?(fe(e),J(e),Nf(e,i)):(J(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&fe(e),J(e),du(e,n,t,a,l)),null;case 27:if($n(e),l=Ye.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return J(e),null}t=ne.current,Al(e)?Is(e):(t=$d(n,a,l),e.stateNode=t,fe(e))}return J(e),null;case 5:if($n(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return J(e),null}if(i=ne.current,Al(e))Is(e);else{var u=xi(Ye.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[gt]=e,i[Tt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(pt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&fe(e)}}return J(e),du(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&fe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(y(166));if(t=Ye.current,Al(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=bt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[gt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Vd(t.nodeValue,l)),t||$e(e,!0)}else t=xi(t).createTextNode(a),t[gt]=e,e.stateNode=t}return J(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Al(e),l!==null){if(t===null){if(!a)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[gt]=e}else ml(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;J(e),t=!1}else l=au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if(e.flags&128)throw Error(y(558))}return J(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Al(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(y(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[gt]=e}else ml(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;J(e),n=!1}else n=au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),e.flags&128?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Fn(e,e.updateQueue),J(e),null);case 4:return Jl(),t===null&&xs(e.stateNode.containerInfo),J(e),null;case 10:return ye(e.type),J(e),null;case 19:if(mt(at),a=e.memoizedState,a===null)return J(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)ya(a,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=ii(t),i!==null){for(e.flags|=128,ya(a,!1),t=i.updateQueue,e.updateQueue=t,Fn(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)uo(l,t),l=l.sibling;return K(at,at.current&1|2),Y&&me(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Ht()>oi&&(e.flags|=128,n=!0,ya(a,!1),e.lanes=4194304)}else{if(!n)if(t=ii(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Fn(e,t),ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Y)return J(e),null}else 2*Ht()-a.renderingStartTime>oi&&l!==536870912&&(e.flags|=128,n=!0,ya(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ht(),t.sibling=null,l=at.current,K(at,n?l&1|2:l&1),Y&&me(e,a.treeForkCount),t):(J(e),null);case 22:case 23:return Ct(e),Jc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?l&536870912&&!(e.flags&128)&&(J(e),e.subtreeFlags&6&&(e.flags|=8192)):J(e),l=e.updateQueue,l!==null&&Fn(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&mt(rl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ye(ct),J(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function fh(t,e){switch(Zc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ye(ct),Jl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return $n(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(y(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(at),null;case 4:return Jl(),null;case 10:return ye(e.type),null;case 22:case 23:return Ct(e),Jc(),t!==null&&mt(rl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ye(ct),null;case 25:return null;default:return null}}function cd(t,e){switch(Zc(e),e.tag){case 3:ye(ct),Jl();break;case 26:case 27:case 5:$n(e);break;case 4:Jl();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:mt(at);break;case 10:ye(e.type);break;case 22:case 23:Ct(e),Jc(),t!==null&&mt(rl);break;case 24:ye(ct)}}function dn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Z(e,e.return,c)}}function We(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=e;var f=l,h=c;try{h()}catch(x){Z(n,f,x)}}}a=a.next}while(a!==i)}}catch(x){Z(e,e.return,x)}}function sd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{xo(e,l)}catch(a){Z(t,t.return,a)}}}function fd(t,e,l){l.props=xl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Z(t,e,a)}}function Ba(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Z(t,e,n)}}function ae(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Z(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Z(t,e,n)}else l.current=null}function rd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Z(t,t.return,n)}}function mu(t,e,l){try{var a=t.stateNode;Oh(a,t.type,l,e),a[Tt]=e}catch(n){Z(t,t.return,n)}}function od(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tl(t.type)||t.tag===4}function hu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||od(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=be));else if(a!==4&&(a===27&&tl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(cc(t,e,l),t=t.sibling;t!==null;)cc(t,e,l),t=t.sibling}function ri(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&tl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ri(t,e,l),t=t.sibling;t!==null;)ri(t,e,l),t=t.sibling}function dd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pt(e,a,l),e[gt]=t,e[Tt]=l}catch(i){Z(t,t.return,i)}}var he=!1,ut=!1,gu=!1,Af=typeof WeakSet=="function"?WeakSet:Set,ot=null;function rh(t,e){if(t=t.containerInfo,hc=Si,t=Ir(t),qc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var u=0,c=-1,f=-1,h=0,x=0,b=t,o=null;e:for(;;){for(var d;b!==l||n!==0&&b.nodeType!==3||(c=u+n),b!==i||a!==0&&b.nodeType!==3||(f=u+a),b.nodeType===3&&(u+=b.nodeValue.length),(d=b.firstChild)!==null;)o=b,b=d;for(;;){if(b===t)break e;if(o===l&&++h===n&&(c=u),o===i&&++x===a&&(f=u),(d=b.nextSibling)!==null)break;b=o,o=b.parentNode}b=d}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(gc={focusedElem:t,selectionRange:l},Si=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,i=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var S=xl(l.type,n);t=a.getSnapshotBeforeUpdate(S,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(N){Z(l,l.return,N)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)xc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function md(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:oe(t,l),a&4&&dn(5,l);break;case 1:if(oe(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){Z(l,l.return,u)}else{var n=xl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Z(l,l.return,u)}}a&64&&sd(l),a&512&&Ba(l,l.return);break;case 3:if(oe(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{xo(t,e)}catch(u){Z(l,l.return,u)}}break;case 27:e===null&&a&4&&dd(l);case 26:case 5:oe(t,l),e===null&&a&4&&rd(l),a&512&&Ba(l,l.return);break;case 12:oe(t,l);break;case 31:oe(t,l),a&4&&bd(t,l);break;case 13:oe(t,l),a&4&&xd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=yh.bind(null,l),qh(t,l))));break;case 22:if(a=l.memoizedState!==null||he,!a){e=e!==null&&e.memoizedState!==null||ut,n=he;var i=ut;he=a,(ut=e)&&!i?de(t,l,(l.subtreeFlags&8772)!==0):oe(t,l),he=n,ut=i}break;case 30:break;default:oe(t,l)}}function hd(t){var e=t.alternate;e!==null&&(t.alternate=null,hd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Cc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tt=null,At=!1;function re(t,e,l){for(l=l.child;l!==null;)gd(t,e,l),l=l.sibling}function gd(t,e,l){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(nn,l)}catch{}switch(l.tag){case 26:ut||ae(l,e),re(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ut||ae(l,e);var a=tt,n=At;tl(l.type)&&(tt=l.stateNode,At=!1),re(t,e,l),Ga(l.stateNode),tt=a,At=n;break;case 5:ut||ae(l,e);case 6:if(a=tt,n=At,tt=null,re(t,e,l),tt=a,At=n,tt!==null)if(At)try{(tt.nodeType===9?tt.body:tt.nodeName==="HTML"?tt.ownerDocument.body:tt).removeChild(l.stateNode)}catch(i){Z(l,e,i)}else try{tt.removeChild(l.stateNode)}catch(i){Z(l,e,i)}break;case 18:tt!==null&&(At?(t=tt,Rf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ia(t)):Rf(tt,l.stateNode));break;case 4:a=tt,n=At,tt=l.stateNode.containerInfo,At=!0,re(t,e,l),tt=a,At=n;break;case 0:case 11:case 14:case 15:We(2,l,e),ut||We(4,l,e),re(t,e,l);break;case 1:ut||(ae(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&fd(l,e,a)),re(t,e,l);break;case 21:re(t,e,l);break;case 22:ut=(a=ut)||l.memoizedState!==null,re(t,e,l),ut=a;break;default:re(t,e,l)}}function bd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ia(t)}catch(l){Z(e,e.return,l)}}}function xd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ia(t)}catch(l){Z(e,e.return,l)}}function oh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Af),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Af),e;default:throw Error(y(435,t.tag))}}function En(t,e){var l=oh(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=vh.bind(null,t,a);a.then(n,n)}})}function zt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(tl(c.type)){tt=c.stateNode,At=!1;break t}break;case 5:tt=c.stateNode,At=!1;break t;case 3:case 4:tt=c.stateNode.containerInfo,At=!0;break t}c=c.return}if(tt===null)throw Error(y(160));gd(i,u,n),tt=null,At=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)pd(e,t),e=e.sibling}var Pt=null;function pd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zt(e,t),Nt(t),a&4&&(We(3,t,t.return),dn(3,t),We(5,t,t.return));break;case 1:zt(e,t),Nt(t),a&512&&(ut||l===null||ae(l,l.return)),a&64&&he&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Pt;if(zt(e,t),Nt(t),a&512&&(ut||l===null||ae(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[sn]||i[gt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),pt(i,a,l),i[gt]=t,dt(i),a=i;break t;case"link":var u=Lf("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}i=n.createElement(a),pt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Lf("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}i=n.createElement(a),pt(i,a,l),n.head.appendChild(i);break;default:throw Error(y(468,a))}i[gt]=t,dt(i),a=i}t.stateNode=a}else Vf(n,t.type,t.stateNode);else t.stateNode=Zf(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Vf(n,t.type,t.stateNode):Zf(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&mu(t,t.memoizedProps,l.memoizedProps)}break;case 27:zt(e,t),Nt(t),a&512&&(ut||l===null||ae(l,l.return)),l!==null&&a&4&&mu(t,t.memoizedProps,l.memoizedProps);break;case 5:if(zt(e,t),Nt(t),a&512&&(ut||l===null||ae(l,l.return)),t.flags&32){n=t.stateNode;try{Wl(n,"")}catch(S){Z(t,t.return,S)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,mu(t,n,l!==null?l.memoizedProps:n)),a&1024&&(gu=!0);break;case 6:if(zt(e,t),Nt(t),a&4){if(t.stateNode===null)throw Error(y(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(S){Z(t,t.return,S)}}break;case 3:if(Ln=null,n=Pt,Pt=pi(e.containerInfo),zt(e,t),Pt=n,Nt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(S){Z(t,t.return,S)}gu&&(gu=!1,yd(t));break;case 4:a=Pt,Pt=pi(t.stateNode.containerInfo),zt(e,t),Nt(t),Pt=a;break;case 12:zt(e,t),Nt(t);break;case 31:zt(e,t),Nt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,En(t,a)));break;case 13:zt(e,t),Nt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Bi=Ht()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,En(t,a)));break;case 22:n=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,h=he,x=ut;if(he=h||n,ut=x||f,zt(e,t),ut=x,he=h,Nt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||f||he||ut||cl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(i=f.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var b=f.memoizedProps.style,o=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(S){Z(f,f.return,S)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(S){Z(f,f.return,S)}}}else if(e.tag===18){if(l===null){f=e;try{var d=f.stateNode;n?qf(d,!0):qf(f.stateNode,!1)}catch(S){Z(f,f.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,En(t,l))));break;case 19:zt(e,t),Nt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,En(t,a)));break;case 30:break;case 21:break;default:zt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(od(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var n=l.stateNode,i=hu(t);ri(t,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(Wl(u,""),l.flags&=-33);var c=hu(t);ri(t,c,u);break;case 3:case 4:var f=l.stateNode.containerInfo,h=hu(t);cc(t,h,f);break;default:throw Error(y(161))}}catch(x){Z(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;yd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function oe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)md(t,e.alternate,e),e=e.sibling}function cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:We(4,e,e.return),cl(e);break;case 1:ae(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&fd(e,e.return,l),cl(e);break;case 27:Ga(e.stateNode);case 26:case 5:ae(e,e.return),cl(e);break;case 22:e.memoizedState===null&&cl(e);break;case 30:cl(e);break;default:cl(e)}t=t.sibling}}function de(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:de(n,i,l),dn(4,i);break;case 1:if(de(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){Z(a,a.return,h)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)bo(f[n],c)}catch(h){Z(a,a.return,h)}}l&&u&64&&sd(i),Ba(i,i.return);break;case 27:dd(i);case 26:case 5:de(n,i,l),l&&a===null&&u&4&&rd(i),Ba(i,i.return);break;case 12:de(n,i,l);break;case 31:de(n,i,l),l&&u&4&&bd(n,i);break;case 13:de(n,i,l),l&&u&4&&xd(n,i);break;case 22:i.memoizedState===null&&de(n,i,l),Ba(i,i.return);break;case 30:break;default:de(n,i,l)}e=e.sibling}}function os(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&rn(l))}function ds(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&rn(t))}function It(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vd(t,e,l,a),e=e.sibling}function vd(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:It(t,e,l,a),n&2048&&dn(9,e);break;case 1:It(t,e,l,a);break;case 3:It(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&rn(t)));break;case 12:if(n&2048){It(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){Z(e,e.return,f)}}else It(t,e,l,a);break;case 31:It(t,e,l,a);break;case 13:It(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?It(t,e,l,a):Ra(t,e):i._visibility&2?It(t,e,l,a):(i._visibility|=2,Tl(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&os(u,e);break;case 24:It(t,e,l,a),n&2048&&ds(e.alternate,e);break;default:It(t,e,l,a)}}function Tl(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,c=l,f=a,h=u.flags;switch(u.tag){case 0:case 11:case 15:Tl(i,u,c,f,n),dn(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Tl(i,u,c,f,n):Ra(i,u):(x._visibility|=2,Tl(i,u,c,f,n)),n&&h&2048&&os(u.alternate,u);break;case 24:Tl(i,u,c,f,n),n&&h&2048&&ds(u.alternate,u);break;default:Tl(i,u,c,f,n)}e=e.sibling}}function Ra(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Ra(l,a),n&2048&&os(a.alternate,a);break;case 24:Ra(l,a),n&2048&&ds(a.alternate,a);break;default:Ra(l,a)}e=e.sibling}}var Fa=8192;function Fl(t,e,l){if(t.subtreeFlags&Fa)for(t=t.child;t!==null;)Sd(t,e,l),t=t.sibling}function Sd(t,e,l){switch(t.tag){case 26:Fl(t,e,l),t.flags&Fa&&t.memoizedState!==null&&Wh(l,Pt,t.memoizedState,t.memoizedProps);break;case 5:Fl(t,e,l);break;case 3:case 4:var a=Pt;Pt=pi(t.stateNode.containerInfo),Fl(t,e,l),Pt=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Fa,Fa=16777216,Fl(t,e,l),Fa=a):Fl(t,e,l));break;default:Fl(t,e,l)}}function jd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function va(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ot=a,Nd(a,t)}jd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zd(t),t=t.sibling}function zd(t){switch(t.tag){case 0:case 11:case 15:va(t),t.flags&2048&&We(9,t,t.return);break;case 3:va(t);break;case 12:va(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Xn(t)):va(t);break;default:va(t)}}function Xn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ot=a,Nd(a,t)}jd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:We(8,e,e.return),Xn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Xn(e));break;default:Xn(e)}t=t.sibling}}function Nd(t,e){for(;ot!==null;){var l=ot;switch(l.tag){case 0:case 11:case 15:We(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:rn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ot=a;else t:for(l=t;ot!==null;){a=ot;var n=a.sibling,i=a.return;if(hd(a),a===l){ot=null;break t}if(n!==null){n.return=i,ot=n;break t}ot=i}}}var dh={getCacheForType:function(t){var e=xt(ct),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return xt(ct).controller.signal}},mh=typeof WeakMap=="function"?WeakMap:Map,G=0,k=null,R=null,q=0,X=0,Dt=null,Be=!1,oa=!1,ms=!1,Ae=0,lt=0,Ie=0,dl=0,hs=0,wt=0,ea=0,qa=null,Ft=null,sc=!1,Bi=0,Ad=0,oi=1/0,di=null,Ze=null,ft=0,Le=null,la=null,ve=0,fc=0,rc=null,Fd=null,Ya=0,oc=null;function qt(){return G&2&&q!==0?q&-q:M.T!==null?bs():Ur()}function Ed(){if(wt===0)if(!(q&536870912)||Y){var t=yn;yn<<=1,!(yn&3932160)&&(yn=262144),wt=t}else wt=536870912;return t=Gt.current,t!==null&&(t.flags|=32),wt}function Et(t,e,l){(t===k&&(X===2||X===9)||t.cancelPendingCommit!==null)&&(aa(t,0),Re(t,q,wt,!1)),cn(t,l),(!(G&2)||t!==k)&&(t===k&&(!(G&2)&&(dl|=l),lt===4&&Re(t,q,wt,!1)),ue(t))}function Td(t,e,l){if(G&6)throw Error(y(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||un(t,e),n=a?bh(t,e):bu(t,e,!0),i=a;do{if(n===0){oa&&!a&&Re(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!hh(l)){n=bu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;n=qa;var f=c.current.memoizedState.isDehydrated;if(f&&(aa(c,u).flags|=256),u=bu(c,u,!1),u!==2){if(ms&&!f){c.errorRecoveryDisabledLanes|=i,dl|=i,n=4;break t}i=Ft,Ft=n,i!==null&&(Ft===null?Ft=i:Ft.push.apply(Ft,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){aa(t,0),Re(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:Re(a,e,wt,!Be);break t;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(n=Bi+300-Ht(),10<n)){if(Re(a,e,wt,!Be),Fi(a,0,!0)!==0)break t;ve=e,a.timeoutHandle=Kd(Ff.bind(null,a,l,Ft,di,sc,e,wt,dl,ea,Be,i,"Throttled",-0,0),n);break t}Ff(a,l,Ft,di,sc,e,wt,dl,ea,Be,i,null,-0,0)}}break}while(!0);ue(t)}function Ff(t,e,l,a,n,i,u,c,f,h,x,b,o,d){if(t.timeoutHandle=-1,b=e.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:be},Sd(e,i,b);var S=(i&62914560)===i?Bi-Ht():(i&4194048)===i?Ad-Ht():0;if(S=Ih(b,S),S!==null){ve=i,t.cancelPendingCommit=S(Tf.bind(null,t,e,i,l,a,n,u,c,f,x,b,null,o,d)),Re(t,i,u,!h);return}}Tf(t,e,i,l,a,n,u,c,f)}function hh(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Yt(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Re(t,e,l,a){e&=~hs,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Rt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Or(t,l,e)}function Ri(){return G&6?!0:(mn(0),!1)}function gs(){if(R!==null){if(X===0)var t=R.return;else t=R,xe=jl=null,ts(t),Vl=null,Ja=0,t=R;for(;t!==null;)cd(t.alternate,t),t=t.return;R=null}}function aa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Uh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ve=0,gs(),k=t,R=l=pe(t.current,null),q=e,X=0,Dt=null,Be=!1,oa=un(t,e),ms=!1,ea=wt=hs=dl=Ie=lt=0,Ft=qa=null,sc=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Rt(a),i=1<<n;e|=t[n],a&=~i}return Ae=e,Mi(),l}function _d(t,e){H=null,M.H=Wa,e===ra||e===Di?(e=af(),X=3):e===kc?(e=af(),X=4):X=e===fs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dt=e,R===null&&(lt=1,si(t,kt(e,t.current)))}function Md(){var t=Gt.current;return t===null?!0:(q&4194048)===q?Jt===null:(q&62914560)===q||q&536870912?t===Jt:!1}function Od(){var t=M.H;return M.H=Wa,t===null?Wa:t}function Dd(){var t=M.A;return M.A=dh,t}function mi(){lt=4,Be||(q&4194048)!==q&&Gt.current!==null||(oa=!0),!(Ie&134217727)&&!(dl&134217727)||k===null||Re(k,q,wt,!1)}function bu(t,e,l){var a=G;G|=2;var n=Od(),i=Dd();(k!==t||q!==e)&&(di=null,aa(t,e)),e=!1;var u=lt;t:do try{if(X!==0&&R!==null){var c=R,f=Dt;switch(X){case 8:gs(),u=6;break t;case 3:case 2:case 9:case 6:Gt.current===null&&(e=!0);var h=X;if(X=0,Dt=null,Gl(t,c,f,h),l&&oa){u=0;break t}break;default:h=X,X=0,Dt=null,Gl(t,c,f,h)}}gh(),u=lt;break}catch(x){_d(t,x)}while(!0);return e&&t.shellSuspendCounter++,xe=jl=null,G=a,M.H=n,M.A=i,R===null&&(k=null,q=0,Mi()),u}function gh(){for(;R!==null;)Cd(R)}function bh(t,e){var l=G;G|=2;var a=Od(),n=Dd();k!==t||q!==e?(di=null,oi=Ht()+500,aa(t,e)):oa=un(t,e);t:do try{if(X!==0&&R!==null){e=R;var i=Dt;e:switch(X){case 1:X=0,Dt=null,Gl(t,e,i,1);break;case 2:case 9:if(lf(i)){X=0,Dt=null,Ef(e);break}e=function(){X!==2&&X!==9||k!==t||(X=7),ue(t)},i.then(e,e);break t;case 3:X=7;break t;case 4:X=5;break t;case 7:lf(i)?(X=0,Dt=null,Ef(e)):(X=0,Dt=null,Gl(t,e,i,7));break;case 5:var u=null;switch(R.tag){case 26:u=R.memoizedState;case 5:case 27:var c=R;if(u?Pd(u):c.stateNode.complete){X=0,Dt=null;var f=c.sibling;if(f!==null)R=f;else{var h=c.return;h!==null?(R=h,qi(h)):R=null}break e}}X=0,Dt=null,Gl(t,e,i,5);break;case 6:X=0,Dt=null,Gl(t,e,i,6);break;case 8:gs(),lt=6;break t;default:throw Error(y(462))}}xh();break}catch(x){_d(t,x)}while(!0);return xe=jl=null,M.H=a,M.A=n,G=l,R!==null?0:(k=null,q=0,Mi(),lt)}function xh(){for(;R!==null&&!Y0();)Cd(R)}function Cd(t){var e=ud(t.alternate,t,Ae);t.memoizedProps=t.pendingProps,e===null?qi(t):R=e}function Ef(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=vf(l,e,e.pendingProps,e.type,void 0,q);break;case 11:e=vf(l,e,e.pendingProps,e.type.render,e.ref,q);break;case 5:ts(e);default:cd(l,e),e=R=uo(e,Ae),e=ud(l,e,Ae)}t.memoizedProps=t.pendingProps,e===null?qi(t):R=e}function Gl(t,e,l,a){xe=jl=null,ts(e),Vl=null,Ja=0;var n=e.return;try{if(ih(t,n,e,l,q)){lt=1,si(t,kt(l,t.current)),R=null;return}}catch(i){if(n!==null)throw R=n,i;lt=1,si(t,kt(l,t.current)),R=null;return}e.flags&32768?(Y||a===1?t=!0:oa||q&536870912?t=!1:(Be=t=!0,(a===2||a===9||a===3||a===6)&&(a=Gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ud(e,t)):qi(e)}function qi(t){var e=t;do{if(e.flags&32768){Ud(e,Be);return}t=e.return;var l=sh(e.alternate,e,Ae);if(l!==null){R=l;return}if(e=e.sibling,e!==null){R=e;return}R=e=t}while(e!==null);lt===0&&(lt=5)}function Ud(t,e){do{var l=fh(t.alternate,t);if(l!==null){l.flags&=32767,R=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){R=t;return}R=t=l}while(t!==null);lt=6,R=null}function Tf(t,e,l,a,n,i,u,c,f){t.cancelPendingCommit=null;do Yi();while(ft!==0);if(G&6)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(i=e.lanes|e.childLanes,i|=Yc,$0(t,l,i,u,c,f),t===k&&(R=k=null,q=0),la=e,Le=t,ve=l,fc=i,rc=n,Fd=a,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Sh(Wn,function(){return qd(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,e.subtreeFlags&13878||a){a=M.T,M.T=null,n=Q.p,Q.p=2,u=G,G|=4;try{rh(t,e,l)}finally{G=u,Q.p=n,M.T=a}}ft=1,wd(),Hd(),Bd()}}function wd(){if(ft===1){ft=0;var t=Le,e=la,l=(e.flags&13878)!==0;if(e.subtreeFlags&13878||l){l=M.T,M.T=null;var a=Q.p;Q.p=2;var n=G;G|=4;try{pd(e,t);var i=gc,u=Ir(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Wr(c.ownerDocument.documentElement,c)){if(f!==null&&qc(c)){var h=f.start,x=f.end;if(x===void 0&&(x=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(x,c.value.length);else{var b=c.ownerDocument||document,o=b&&b.defaultView||window;if(o.getSelection){var d=o.getSelection(),S=c.textContent.length,N=Math.min(f.start,S),U=f.end===void 0?N:Math.min(f.end,S);!d.extend&&N>U&&(u=U,U=N,N=u);var m=Js(c,N),r=Js(c,U);if(m&&r&&(d.rangeCount!==1||d.anchorNode!==m.node||d.anchorOffset!==m.offset||d.focusNode!==r.node||d.focusOffset!==r.offset)){var g=b.createRange();g.setStart(m.node,m.offset),d.removeAllRanges(),N>U?(d.addRange(g),d.extend(r.node,r.offset)):(g.setEnd(r.node,r.offset),d.addRange(g))}}}}for(b=[],d=c;d=d.parentNode;)d.nodeType===1&&b.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var p=b[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}Si=!!hc,gc=hc=null}finally{G=n,Q.p=a,M.T=l}}t.current=e,ft=2}}function Hd(){if(ft===2){ft=0;var t=Le,e=la,l=(e.flags&8772)!==0;if(e.subtreeFlags&8772||l){l=M.T,M.T=null;var a=Q.p;Q.p=2;var n=G;G|=4;try{md(t,e.alternate,e)}finally{G=n,Q.p=a,M.T=l}}ft=3}}function Bd(){if(ft===4||ft===3){ft=0,G0();var t=Le,e=la,l=ve,a=Fd;e.subtreeFlags&10256||e.flags&10256?ft=5:(ft=0,la=Le=null,Rd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ze=null),Dc(l),e=e.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(nn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=M.T,n=Q.p,Q.p=2,M.T=null;try{for(var i=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{M.T=e,Q.p=n}}ve&3&&Yi(),ue(t),n=t.pendingLanes,l&261930&&n&42?t===oc?Ya++:(Ya=0,oc=t):Ya=0,mn(0)}}function Rd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,rn(e)))}function Yi(){return wd(),Hd(),Bd(),qd()}function qd(){if(ft!==5)return!1;var t=Le,e=fc;fc=0;var l=Dc(ve),a=M.T,n=Q.p;try{Q.p=32>l?32:l,M.T=null,l=rc,rc=null;var i=Le,u=ve;if(ft=0,la=Le=null,ve=0,G&6)throw Error(y(331));var c=G;if(G|=4,zd(i.current),vd(i,i.current,u,l),G=c,mn(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(nn,i)}catch{}return!0}finally{Q.p=n,M.T=a,Rd(t,e)}}function _f(t,e,l){e=kt(l,e),e=nc(t.stateNode,e,2),t=Xe(t,e,2),t!==null&&(cn(t,2),ue(t))}function Z(t,e,l){if(t.tag===3)_f(t,t,l);else for(;e!==null;){if(e.tag===3){_f(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ze===null||!Ze.has(a))){t=kt(l,t),l=td(2),a=Xe(e,l,2),a!==null&&(ed(l,a,e,t),cn(a,2),ue(a));break}}e=e.return}}function xu(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new mh;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(ms=!0,n.add(l),t=ph.bind(null,t,e,l),e.then(t,t))}function ph(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,k===t&&(q&l)===l&&(lt===4||lt===3&&(q&62914560)===q&&300>Ht()-Bi?!(G&2)&&aa(t,0):hs|=l,ea===q&&(ea=0)),ue(t)}function Yd(t,e){e===0&&(e=Mr()),t=Sl(t,e),t!==null&&(cn(t,e),ue(t))}function yh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Yd(t,l)}function vh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(e),Yd(t,l)}function Sh(t,e){return Mc(t,e)}var hi=null,_l=null,dc=!1,gi=!1,pu=!1,qe=0;function ue(t){t!==_l&&t.next===null&&(_l===null?hi=_l=t:_l=_l.next=t),gi=!0,dc||(dc=!0,zh())}function mn(t,e){if(!pu&&gi){pu=!0;do for(var l=!1,a=hi;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Rt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Mf(a,i))}else i=q,i=Fi(a,a===k?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||un(a,i)||(l=!0,Mf(a,i));a=a.next}while(l);pu=!1}}function jh(){Gd()}function Gd(){gi=dc=!1;var t=0;qe!==0&&Ch()&&(t=qe);for(var e=Ht(),l=null,a=hi;a!==null;){var n=a.next,i=Qd(a,e);i===0?(a.next=null,l===null?hi=n:l.next=n,n===null&&(_l=l)):(l=a,(t!==0||i&3)&&(gi=!0)),a=n}ft!==0&&ft!==5||mn(t),qe!==0&&(qe=0)}function Qd(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Rt(i),c=1<<u,f=n[u];f===-1?(!(c&l)||c&a)&&(n[u]=J0(c,e)):f<=e&&(t.expiredLanes|=c),i&=~c}if(e=k,l=q,l=Fi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(X===2||X===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Vi(a),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||un(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Vi(a),Dc(l)){case 2:case 8:l=Tr;break;case 32:l=Wn;break;case 268435456:l=_r;break;default:l=Wn}return a=Xd.bind(null,t),l=Mc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Vi(a),t.callbackPriority=2,t.callbackNode=null,2}function Xd(t,e){if(ft!==0&&ft!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Yi()&&t.callbackNode!==l)return null;var a=q;return a=Fi(t,t===k?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Td(t,a,e),Qd(t,Ht()),t.callbackNode!=null&&t.callbackNode===l?Xd.bind(null,t):null)}function Mf(t,e){if(Yi())return null;Td(t,e,!0)}function zh(){wh(function(){G&6?Mc(Er,jh):Gd()})}function bs(){if(qe===0){var t=Il;t===0&&(t=pn,pn<<=1,!(pn&261888)&&(pn=256)),qe=t}return qe}function Of(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Un(""+t)}function Df(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Nh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=Of((n[Tt]||null).action),u=a.submitter;u&&(e=(e=u[Tt]||null)?Of(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var c=new Ei("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(qe!==0){var f=u?Df(n,u):new FormData(n);lc(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?Df(n,u):new FormData(n),lc(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var yu=0;yu<Zu.length;yu++){var vu=Zu[yu],Ah=vu.toLowerCase(),Fh=vu[0].toUpperCase()+vu.slice(1);te(Ah,"on"+Fh)}te(to,"onAnimationEnd");te(eo,"onAnimationIteration");te(lo,"onAnimationStart");te("dblclick","onDoubleClick");te("focusin","onFocus");te("focusout","onBlur");te(Qm,"onTransitionRun");te(Xm,"onTransitionStart");te(Zm,"onTransitionCancel");te(ao,"onTransitionEnd");$l("onMouseEnter",["mouseout","mouseover"]);$l("onMouseLeave",["mouseout","mouseover"]);$l("onPointerEnter",["pointerout","pointerover"]);$l("onPointerLeave",["pointerout","pointerover"]);pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pl("onBeforeInput",["compositionend","keypress","textInput","paste"]);pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));function Zd(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=h;try{i(n)}catch(x){Pn(x)}n.currentTarget=null,i=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,h=c.currentTarget,c=c.listener,f!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=h;try{i(n)}catch(x){Pn(x)}n.currentTarget=null,i=f}}}}function B(t,e){var l=e[Hu];l===void 0&&(l=e[Hu]=new Set);var a=t+"__bubble";l.has(a)||(Ld(e,t,2,!1),l.add(a))}function Su(t,e,l){var a=0;e&&(a|=4),Ld(l,t,a,e)}var Tn="_reactListening"+Math.random().toString(36).slice(2);function xs(t){if(!t[Tn]){t[Tn]=!0,wr.forEach(function(l){l!=="selectionchange"&&(Eh.has(l)||Su(l,!1,t),Su(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tn]||(e[Tn]=!0,Su("selectionchange",!1,e))}}function Ld(t,e,l,a){switch(n0(e)){case 2:var n=eg;break;case 8:n=lg;break;default:n=Ss}l=n.bind(null,e,l,t),n=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function ju(t,e,l,a,n){var i=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Dl(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=i=u;continue t}c=c.parentNode}}a=a.return}Xr(function(){var h=i,x=wc(l),b=[];t:{var o=no.get(t);if(o!==void 0){var d=Ei,S=t;switch(t){case"keypress":if(Hn(l)===0)break t;case"keydown":case"keyup":d=vm;break;case"focusin":S="focus",d=Wi;break;case"focusout":S="blur",d=Wi;break;case"beforeblur":case"afterblur":d=Wi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=zm;break;case to:case eo:case lo:d=om;break;case ao:d=Am;break;case"scroll":case"scrollend":d=um;break;case"wheel":d=Em;break;case"copy":case"cut":case"paste":d=mm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Gs;break;case"toggle":case"beforetoggle":d=_m}var N=(e&4)!==0,U=!N&&(t==="scroll"||t==="scrollend"),m=N?o!==null?o+"Capture":null:o;N=[];for(var r=h,g;r!==null;){var p=r;if(g=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||g===null||m===null||(p=Za(r,m),p!=null&&N.push(Pa(r,p,g))),U)break;r=r.return}0<N.length&&(o=new d(o,S,null,l,x),b.push({event:o,listeners:N}))}}if(!(e&7)){t:{if(o=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",o&&l!==Yu&&(S=l.relatedTarget||l.fromElement)&&(Dl(S)||S[ca]))break t;if((d||o)&&(o=x.window===x?x:(o=x.ownerDocument)?o.defaultView||o.parentWindow:window,d?(S=l.relatedTarget||l.toElement,d=h,S=S?Dl(S):null,S!==null&&(U=an(S),N=S.tag,S!==U||N!==5&&N!==27&&N!==6)&&(S=null)):(d=null,S=h),d!==S)){if(N=qs,p="onMouseLeave",m="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(N=Gs,p="onPointerLeave",m="onPointerEnter",r="pointer"),U=d==null?o:Na(d),g=S==null?o:Na(S),o=new N(p,r+"leave",d,l,x),o.target=U,o.relatedTarget=g,p=null,Dl(x)===h&&(N=new N(m,r+"enter",S,l,x),N.target=g,N.relatedTarget=U,p=N),U=p,d&&S)e:{for(N=Th,m=d,r=S,g=0,p=m;p;p=N(p))g++;p=0;for(var A=r;A;A=N(A))p++;for(;0<g-p;)m=N(m),g--;for(;0<p-g;)r=N(r),p--;for(;g--;){if(m===r||r!==null&&m===r.alternate){N=m;break e}m=N(m),r=N(r)}N=null}else N=null;d!==null&&Cf(b,o,d,N,!1),S!==null&&U!==null&&Cf(b,U,S,N,!0)}}t:{if(o=h?Na(h):window,d=o.nodeName&&o.nodeName.toLowerCase(),d==="select"||d==="input"&&o.type==="file")var O=Ls;else if(Zs(o))if(Jr)O=qm;else{O=Bm;var z=Hm}else d=o.nodeName,!d||d.toLowerCase()!=="input"||o.type!=="checkbox"&&o.type!=="radio"?h&&Uc(h.elementType)&&(O=Ls):O=Rm;if(O&&(O=O(t,h))){Kr(b,O,l,x);break t}z&&z(t,o,h),t==="focusout"&&h&&o.type==="number"&&h.memoizedProps.value!=null&&qu(o,"number",o.value)}switch(z=h?Na(h):window,t){case"focusin":(Zs(z)||z.contentEditable==="true")&&(wl=z,Qu=h,Oa=null);break;case"focusout":Oa=Qu=wl=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,$s(b,l,x);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":$s(b,l,x)}var T;if(Rc)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Ul?Vr(t,l)&&(D="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(D="onCompositionStart");D&&(Lr&&l.locale!=="ko"&&(Ul||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ul&&(T=Zr()):(He=x,Hc="value"in He?He.value:He.textContent,Ul=!0)),z=bi(h,D),0<z.length&&(D=new Ys(D,t,null,l,x),b.push({event:D,listeners:z}),T?D.data=T:(T=kr(l),T!==null&&(D.data=T)))),(T=Om?Dm(t,l):Cm(t,l))&&(D=bi(h,"onBeforeInput"),0<D.length&&(z=new Ys("onBeforeInput","beforeinput",null,l,x),b.push({event:z,listeners:D}),z.data=T)),Nh(b,t,h,l,x)}Zd(b,e)})}function Pa(t,e,l){return{instance:t,listener:e,currentTarget:l}}function bi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Za(t,l),n!=null&&a.unshift(Pa(t,n,i)),n=Za(t,e),n!=null&&a.push(Pa(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Th(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cf(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var c=l,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||h===null||(f=h,n?(h=Za(l,i),h!=null&&u.unshift(Pa(l,h,f))):n||(h=Za(l,i),h!=null&&u.push(Pa(l,h,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var _h=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Uf(t){return(typeof t=="string"?t:""+t).replace(_h,`
`).replace(Mh,"")}function Vd(t,e){return e=Uf(e),Uf(t)===e}function L(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wl(t,""+a);break;case"className":Sn(t,"class",a);break;case"tabIndex":Sn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Sn(t,l,a);break;case"style":Qr(t,a,i);break;case"data":if(e!=="object"){Sn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&L(t,e,"name",n.name,n,null),L(t,e,"formEncType",n.formEncType,n,null),L(t,e,"formMethod",n.formMethod,n,null),L(t,e,"formTarget",n.formTarget,n,null)):(L(t,e,"encType",n.encType,n,null),L(t,e,"method",n.method,n,null),L(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Un(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=be);break;case"onScroll":a!=null&&B("scroll",t);break;case"onScrollEnd":a!=null&&B("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Un(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":B("beforetoggle",t),B("toggle",t),Cn(t,"popover",a);break;case"xlinkActuate":se(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":se(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":se(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":se(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":se(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":se(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":se(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":se(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":se(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cn(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=nm.get(l)||l,Cn(t,l,a))}}function mc(t,e,l,a,n,i){switch(l){case"style":Qr(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&Wl(t,""+a);break;case"onScroll":a!=null&&B("scroll",t);break;case"onScrollEnd":a!=null&&B("scrollend",t);break;case"onClick":a!=null&&(t.onclick=be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hr.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Tt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Cn(t,l,a)}}}function pt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":B("error",t),B("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:L(t,e,i,u,l,null)}}n&&L(t,e,"srcSet",l.srcSet,l,null),a&&L(t,e,"src",l.src,l,null);return;case"input":B("invalid",t);var c=i=u=n=null,f=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":u=x;break;case"checked":f=x;break;case"defaultChecked":h=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(y(137,e));break;default:L(t,e,a,x,l,null)}}qr(t,i,c,f,h,u,n,!1);return;case"select":B("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:L(t,e,n,c,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Xl(t,!!a,e,!1):l!=null&&Xl(t,!!a,l,!0);return;case"textarea":B("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:L(t,e,u,c,l,null)}Gr(t,a,n,i);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:L(t,e,f,a,l,null)}return;case"dialog":B("beforetoggle",t),B("toggle",t),B("cancel",t),B("close",t);break;case"iframe":case"object":B("load",t);break;case"video":case"audio":for(a=0;a<Ia.length;a++)B(Ia[a],t);break;case"image":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"embed":case"source":case"link":B("error",t),B("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:L(t,e,h,a,l,null)}return;default:if(Uc(e)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&mc(t,e,x,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&L(t,e,c,a,l,null))}function Oh(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,f=null,h=null,x=null;for(d in l){var b=l[d];if(l.hasOwnProperty(d)&&b!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":f=b;default:a.hasOwnProperty(d)||L(t,e,d,null,a,b)}}for(var o in a){var d=a[o];if(b=l[o],a.hasOwnProperty(o)&&(d!=null||b!=null))switch(o){case"type":i=d;break;case"name":n=d;break;case"checked":h=d;break;case"defaultChecked":x=d;break;case"value":u=d;break;case"defaultValue":c=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(137,e));break;default:d!==b&&L(t,e,o,d,a,b)}}Ru(t,u,c,f,h,x,i,n);return;case"select":d=u=c=o=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":d=f;default:a.hasOwnProperty(i)||L(t,e,i,null,a,f)}for(n in a)if(i=a[n],f=l[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":o=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&L(t,e,n,i,a,f)}e=c,l=u,a=d,o!=null?Xl(t,!!l,o,!1):!!a!=!!l&&(e!=null?Xl(t,!!l,e,!0):Xl(t,!!l,l?[]:"",!1));return;case"textarea":d=o=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:L(t,e,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":o=n;break;case"defaultValue":d=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==i&&L(t,e,u,n,a,i)}Yr(t,o,d);return;case"option":for(var S in l)if(o=l[S],l.hasOwnProperty(S)&&o!=null&&!a.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:L(t,e,S,null,a,o)}for(f in a)if(o=a[f],d=l[f],a.hasOwnProperty(f)&&o!==d&&(o!=null||d!=null))switch(f){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:L(t,e,f,o,a,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in l)o=l[N],l.hasOwnProperty(N)&&o!=null&&!a.hasOwnProperty(N)&&L(t,e,N,null,a,o);for(h in a)if(o=a[h],d=l[h],a.hasOwnProperty(h)&&o!==d&&(o!=null||d!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(o!=null)throw Error(y(137,e));break;default:L(t,e,h,o,a,d)}return;default:if(Uc(e)){for(var U in l)o=l[U],l.hasOwnProperty(U)&&o!==void 0&&!a.hasOwnProperty(U)&&mc(t,e,U,void 0,a,o);for(x in a)o=a[x],d=l[x],!a.hasOwnProperty(x)||o===d||o===void 0&&d===void 0||mc(t,e,x,o,a,d);return}}for(var m in l)o=l[m],l.hasOwnProperty(m)&&o!=null&&!a.hasOwnProperty(m)&&L(t,e,m,null,a,o);for(b in a)o=a[b],d=l[b],!a.hasOwnProperty(b)||o===d||o==null&&d==null||L(t,e,b,o,a,d)}function wf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&wf(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],h=f.startTime;if(h>c)break;var x=f.transferSize,b=f.initiatorType;x&&wf(b)&&(f=f.responseEnd,u+=x*(f<c?1:(c-h)/(f-h)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hc=null,gc=null;function xi(t){return t.nodeType===9?t:t.ownerDocument}function Hf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=null;function Ch(){var t=window.event;return t&&t.type==="popstate"?t===zu?!1:(zu=t,!0):(zu=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Uh=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(Hh)}:Kd;function Hh(t){setTimeout(function(){throw t})}function tl(t){return t==="head"}function Rf(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),ia(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ga(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Ga(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[sn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Ga(t.ownerDocument.body);l=n}while(l);ia(e)}function qf(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function xc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":xc(l),Cc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Bh(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[sn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=$t(t.nextSibling),t===null)break}return null}function Rh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=$t(t.nextSibling),t===null))return null;return t}function Jd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$t(t.nextSibling),t===null))return null;return t}function pc(t){return t.data==="$?"||t.data==="$~"}function yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var vc=null;function Yf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return $t(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Gf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function $d(t,e,l){switch(e=xi(l),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function Ga(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Cc(t)}var Wt=new Map,Qf=new Set;function pi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=Q.d;Q.d={f:Yh,r:Gh,D:Qh,C:Xh,L:Zh,m:Lh,X:kh,S:Vh,M:Kh};function Yh(){var t=Fe.f(),e=Ri();return t||e}function Gh(t){var e=sa(t);e!==null&&e.tag===5&&e.type==="form"?Xo(e):Fe.r(t)}var da=typeof document>"u"?null:document;function Wd(t,e,l){var a=da;if(a&&typeof e=="string"&&e){var n=Vt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Qf.has(n)||(Qf.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),pt(e,"link",t),dt(e),a.head.appendChild(e)))}}function Qh(t){Fe.D(t),Wd("dns-prefetch",t,null)}function Xh(t,e){Fe.C(t,e),Wd("preconnect",t,e)}function Zh(t,e,l){Fe.L(t,e,l);var a=da;if(a&&t&&e){var n='link[rel="preload"][as="'+Vt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Vt(l.imageSizes)+'"]')):n+='[href="'+Vt(t)+'"]';var i=n;switch(e){case"style":i=na(t);break;case"script":i=ma(t)}Wt.has(i)||(t=I({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Wt.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(hn(i))||e==="script"&&a.querySelector(gn(i))||(e=a.createElement("link"),pt(e,"link",t),dt(e),a.head.appendChild(e)))}}function Lh(t,e){Fe.m(t,e);var l=da;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Vt(a)+'"][href="'+Vt(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ma(t)}if(!Wt.has(i)&&(t=I({rel:"modulepreload",href:t},e),Wt.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gn(i)))return}a=l.createElement("link"),pt(a,"link",t),dt(a),l.head.appendChild(a)}}}function Vh(t,e,l){Fe.S(t,e,l);var a=da;if(a&&t){var n=Ql(a).hoistableStyles,i=na(t);e=e||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(hn(i)))c.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Wt.get(i))&&ps(t,l);var f=u=a.createElement("link");dt(f),pt(f,"link",t),f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Zn(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function kh(t,e){Fe.X(t,e);var l=da;if(l&&t){var a=Ql(l).hoistableScripts,n=ma(t),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(t=I({src:t,async:!0},e),(e=Wt.get(n))&&ys(t,e),i=l.createElement("script"),dt(i),pt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Kh(t,e){Fe.M(t,e);var l=da;if(l&&t){var a=Ql(l).hoistableScripts,n=ma(t),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(t=I({src:t,async:!0,type:"module"},e),(e=Wt.get(n))&&ys(t,e),i=l.createElement("script"),dt(i),pt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Xf(t,e,l,a){var n=(n=Ye.current)?pi(n):null;if(!n)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=na(l.href),l=Ql(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=na(l.href);var i=Ql(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(hn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),Wt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(t,l),i||Jh(n,t,l,u.state))),e&&a===null)throw Error(y(528,""));return u}if(e&&a!==null)throw Error(y(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ma(l),l=Ql(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function na(t){return'href="'+Vt(t)+'"'}function hn(t){return'link[rel="stylesheet"]['+t+"]"}function Id(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function Jh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),pt(e,"link",l),dt(e),t.head.appendChild(e))}function ma(t){return'[src="'+Vt(t)+'"]'}function gn(t){return"script[async]"+t}function Zf(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Vt(l.href)+'"]');if(a)return e.instance=a,dt(a),a;var n=I({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),dt(a),pt(a,"style",n),Zn(a,l.precedence,t),e.instance=a;case"stylesheet":n=na(l.href);var i=t.querySelector(hn(n));if(i)return e.state.loading|=4,e.instance=i,dt(i),i;a=Id(l),(n=Wt.get(n))&&ps(a,n),i=(t.ownerDocument||t).createElement("link"),dt(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),pt(i,"link",a),e.state.loading|=4,Zn(i,l.precedence,t),e.instance=i;case"script":return i=ma(l.src),(n=t.querySelector(gn(i)))?(e.instance=n,dt(n),n):(a=l,(n=Wt.get(i))&&(a=I({},l),ys(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),dt(n),pt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,Zn(a,l.precedence,t));return e.instance}function Zn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ps(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ln=null;function Lf(t,e,l){if(Ln===null){var a=new Map,n=Ln=new Map;n.set(l,a)}else n=Ln,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[sn]||i[gt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Vf(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function $h(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Pd(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function Wh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var n=na(a.href),i=e.querySelector(hn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=yi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,dt(i);return}i=e.ownerDocument||e,a=Id(a),(n=Wt.get(n))&&ps(a,n),i=i.createElement("link"),dt(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),pt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=yi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Nu=0;function Ih(t,e){return t.stylesheets&&t.count===0&&Vn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Vn(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Nu===0&&(Nu=62500*Dh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vn(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Nu?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function yi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vi=null;function Vn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vi=new Map,e.forEach(Ph,t),vi=null,yi.call(t))}function Ph(t,e){if(!(e.state.loading&4)){var l=vi.get(t);if(l)var a=l.get(null);else{l=new Map,vi.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=yi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var tn={$$typeof:ge,Provider:null,Consumer:null,_currentValue:sl,_currentValue2:sl,_threadCount:0};function tg(t,e,l,a,n,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function t0(t,e,l,a,n,i,u,c,f,h,x,b){return t=new tg(t,e,l,u,f,h,x,b,c),e=1,i===!0&&(e|=24),i=Ut(3,null,null,e),t.current=i,i.stateNode=t,e=Lc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Kc(i),t}function e0(t){return t?(t=Rl,t):Rl}function l0(t,e,l,a,n,i){n=e0(n),a.context===null?a.context=n:a.pendingContext=n,a=Qe(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Xe(t,a,e),l!==null&&(Et(l,t,e),Ca(l,t,e))}function kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function vs(t,e){kf(t,e),(t=t.alternate)&&kf(t,e)}function a0(t){if(t.tag===13||t.tag===31){var e=Sl(t,67108864);e!==null&&Et(e,t,67108864),vs(t,67108864)}}function Kf(t){if(t.tag===13||t.tag===31){var e=qt();e=Oc(e);var l=Sl(t,e);l!==null&&Et(l,t,e),vs(t,e)}}var Si=!0;function eg(t,e,l,a){var n=M.T;M.T=null;var i=Q.p;try{Q.p=2,Ss(t,e,l,a)}finally{Q.p=i,M.T=n}}function lg(t,e,l,a){var n=M.T;M.T=null;var i=Q.p;try{Q.p=8,Ss(t,e,l,a)}finally{Q.p=i,M.T=n}}function Ss(t,e,l,a){if(Si){var n=Sc(a);if(n===null)ju(t,e,a,ji,l),Jf(t,a);else if(ng(n,t,e,l,a))a.stopPropagation();else if(Jf(t,a),e&4&&-1<ag.indexOf(t)){for(;n!==null;){var i=sa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=il(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-Rt(u);c.entanglements[1]|=f,u&=~f}ue(i),!(G&6)&&(oi=Ht()+500,mn(0))}}break;case 31:case 13:c=Sl(i,2),c!==null&&Et(c,i,2),Ri(),vs(i,2)}if(i=Sc(a),i===null&&ju(t,e,a,ji,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ju(t,e,a,null,l)}}function Sc(t){return t=wc(t),js(t)}var ji=null;function js(t){if(ji=null,t=Dl(t),t!==null){var e=an(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=jr(e),t!==null)return t;t=null}else if(l===31){if(t=zr(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ji=t,null}function n0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q0()){case Er:return 2;case Tr:return 8;case Wn:case X0:return 32;case _r:return 268435456;default:return 32}default:return 32}}var jc=!1,Ve=null,ke=null,Ke=null,en=new Map,ln=new Map,Ue=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jf(t,e){switch(t){case"focusin":case"focusout":Ve=null;break;case"dragenter":case"dragleave":ke=null;break;case"mouseover":case"mouseout":Ke=null;break;case"pointerover":case"pointerout":en.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(e.pointerId)}}function Sa(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=sa(e),e!==null&&a0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ng(t,e,l,a,n){switch(e){case"focusin":return Ve=Sa(Ve,t,e,l,a,n),!0;case"dragenter":return ke=Sa(ke,t,e,l,a,n),!0;case"mouseover":return Ke=Sa(Ke,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return en.set(i,Sa(en.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,ln.set(i,Sa(ln.get(i)||null,t,e,l,a,n)),!0}return!1}function i0(t){var e=Dl(t.target);if(e!==null){var l=an(e);if(l!==null){if(e=l.tag,e===13){if(e=jr(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){Kf(l)});return}}else if(e===31){if(e=zr(l),e!==null){t.blockedOn=e,Ds(t.priority,function(){Kf(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Sc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Yu=a,l.target.dispatchEvent(a),Yu=null}else return e=sa(l),e!==null&&a0(e),t.blockedOn=l,!1;e.shift()}return!0}function $f(t,e,l){kn(t)&&l.delete(e)}function ig(){jc=!1,Ve!==null&&kn(Ve)&&(Ve=null),ke!==null&&kn(ke)&&(ke=null),Ke!==null&&kn(Ke)&&(Ke=null),en.forEach($f),ln.forEach($f)}function _n(t,e){t.blockedOn===e&&(t.blockedOn=null,jc||(jc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,ig)))}var Mn=null;function Wf(t){Mn!==t&&(Mn=t,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,function(){Mn===t&&(Mn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(js(a||l)===null)continue;break}var i=sa(l);i!==null&&(t.splice(e,3),e-=3,lc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function ia(t){function e(f){return _n(f,t)}Ve!==null&&_n(Ve,t),ke!==null&&_n(ke,t),Ke!==null&&_n(Ke,t),en.forEach(e),ln.forEach(e);for(var l=0;l<Ue.length;l++){var a=Ue[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Ue.length&&(l=Ue[0],l.blockedOn===null);)i0(l),l.blockedOn===null&&Ue.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[Tt]||null;if(typeof i=="function")u||Wf(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Tt]||null)c=u.formAction;else if(js(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Wf(l)}}}function u0(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function zs(t){this._internalRoot=t}Gi.prototype.render=zs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var l=e.current,a=qt();l0(l,a,t,e,null,null)};Gi.prototype.unmount=zs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;l0(t.current,2,null,t,null,null),Ri(),e[ca]=null}};function Gi(t){this._internalRoot=t}Gi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ur();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Ue.length&&e!==0&&e<Ue[l].priority;l++);Ue.splice(l,0,t),l===0&&i0(t)}};var If=vr.version;if(If!=="19.2.4")throw Error(y(527,If,"19.2.4"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=w0(e),t=t!==null?Nr(t):null,t=t===null?null:t.stateNode,t};var ug={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var On=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!On.isDisabled&&On.supportsFiber)try{nn=On.inject(ug),Bt=On}catch{}}Ni.createRoot=function(t,e){if(!Sr(t))throw Error(y(299));var l=!1,a="",n=Wo,i=Io,u=Po;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=t0(t,1,!1,null,null,l,a,null,n,i,u,u0),t[ca]=e.current,xs(t),new zs(e)};Ni.hydrateRoot=function(t,e,l){if(!Sr(t))throw Error(y(299));var a=!1,n="",i=Wo,u=Io,c=Po,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=t0(t,1,!0,e,l??null,a,n,f,i,u,c,u0),e.context=e0(null),l=e.current,a=qt(),a=Oc(a),n=Qe(a),n.callback=null,Xe(l,n,a),l=a,e.current.lanes=l,cn(e,l),ue(e),t[ca]=e.current,xs(t),new Gi(e)};Ni.version="19.2.4";function c0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0)}catch(t){console.error(t)}}c0(),hr.exports=Ni;var cg=hr.exports;const sg=nr(cg),Pf=({onDifficultySelect:t,onStartGame:e,userName:l,uiStyle:a="default",onOpenModal:n})=>{const[i,u]=E.useState(null),[c,f]=E.useState(null),h=o=>{u(o)},x=o=>{f(o)},b=()=>{i&&c==="快速模式"&&(e(),t(i))};return s.jsxs("div",{className:"home-view",children:[s.jsxs("div",{className:"home-header",children:[s.jsxs("div",{className:"title-container",children:[s.jsx("h1",{className:"animated-title",children:"Bloom Era Sim".split("").map((o,d)=>s.jsx("span",{className:"letter",style:{animationDelay:`${d*.2}s`},children:o===" "?" ":o},d))}),s.jsx("h2",{className:"chinese-title",children:"青春纪元模拟器"})]}),s.jsx("p",{className:"home-subtitle",children:"Made by JasperHuang"}),l&&s.jsxs("div",{className:"user-greeting",children:["你好，",l]})]}),s.jsx("div",{className:"home-content",children:s.jsx("div",{className:"difficulty-selection",children:s.jsxs("div",{className:"layout-container",children:[s.jsx("div",{className:"left-rectangle",children:s.jsxs("div",{className:"side-buttons",children:[s.jsx("button",{className:"side-button achievement-button",onClick:()=>n==null?void 0:n("achievements"),children:"🏆 成就"}),s.jsx("button",{className:"side-button version-button",onClick:()=>n==null?void 0:n("version"),children:"📜 版本"}),s.jsx("button",{className:"side-button settings-button",onClick:()=>n==null?void 0:n("settings"),children:"⚙️ 设置"}),s.jsx("button",{className:"side-button about-button",onClick:()=>n==null?void 0:n("about"),children:"ℹ️ 简介"}),s.jsx("button",{className:"side-button github-button",onClick:()=>window.open("https://github.com/huangjiaquqi/bloom-era-sim","_blank"),children:"</> GitHub"})]})}),s.jsxs("div",{className:"center-content",children:[s.jsxs("div",{className:"difficulty-container",children:[s.jsx("img",{src:"/favicon.svg",alt:"BES Logo",className:"difficulty-logo"}),s.jsx("div",{className:"difficulty-title",children:"难度"}),s.jsxs("div",{className:"difficulty-options",children:[s.jsx("div",{className:`difficulty-option easy ${i==="普通"?"selected":""}`,onClick:()=>h("普通"),children:s.jsx("span",{className:"difficulty-name",children:"🌱 普通"})}),s.jsx("div",{className:`difficulty-option hard ${i==="现实"?"selected":""}`,onClick:()=>h("现实"),children:s.jsx("span",{className:"difficulty-name",children:"🏆 现实"})})]}),i==="普通"&&s.jsx("div",{className:"achievement-note",style:{color:"#FFC107",fontSize:"0.85rem",fontWeight:"bold",marginTop:"0.5rem"},children:"⚠️ 只有现实难度才能解锁成就"}),s.jsx("div",{className:"difficulty-title",children:"模式"}),s.jsxs("div",{className:"difficulty-options",children:[s.jsx("div",{className:`difficulty-option mode-fast ${c==="快速模式"?"selected":""}`,onClick:()=>x("快速模式"),children:s.jsx("span",{className:"difficulty-name",children:"🚀 快速模式"})}),s.jsx("div",{className:`difficulty-option mode-deep disabled ${c==="深度模式"?"selected":""}`,onClick:()=>{},style:{cursor:"not-allowed",opacity:.6},children:s.jsx("span",{className:"difficulty-name",children:"🌊 深度模式"})})]})]}),s.jsx("div",{className:"start-game-container",children:s.jsx("button",{className:"start-button",onClick:b,disabled:!i||c!=="快速模式",children:"开始游戏"})})]})]})})}),s.jsx("div",{className:"home-footer",children:s.jsx("p",{children:"© 2024 Bloom Era Sim"})}),s.jsx("style",{children:`
        .home-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: transparent;
        }
        
        .layout-container {
          display: flex;
          align-items: stretch;
          gap: 2rem;
          width: 100%;
          max-width: 1600px;
          justify-content: center;
        }
        
        .left-rectangle {
          width: 200px;
          border-radius: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          ${a==="liquid-glass"?`
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          `:a==="acrylic"?`
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .side-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1.2rem;
          width: 100%;
        }
        
        .side-button {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .achievement-button {
          background: #ffc107;
          color: white;
        }
        
        .achievement-button:hover {
          transform: translateY(-2px);
          background: #e0a800;
          box-shadow: 0 4px 8px rgba(255, 193, 7, 0.3);
        }
        
        .version-button {
          background: #3498db;
          color: white;
        }
        
        .version-button:hover {
          transform: translateY(-2px);
          background: #2980b9;
          box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
        }
        
        .settings-button {
          background: #343a40;
          color: white;
        }
        
        .settings-button:hover {
          transform: translateY(-2px);
          background: #23272b;
          box-shadow: 0 4px 8px rgba(52, 58, 64, 0.3);
        }
        
        .github-button {
          background: #000000;
          color: white;
        }
        
        .github-button:hover {
          transform: translateY(-2px);
          background: #333333;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .about-button {
          background: #9c27b0;
          color: white;
        }
        
        .about-button:hover {
          transform: translateY(-2px);
          background: #7b1fa2;
          box-shadow: 0 4px 8px rgba(156, 39, 176, 0.3);
        }
        
        .center-content {
          flex: 1;
          min-width: 500px;
          max-width: 800px;
        }
        
        .start-game-container {
          width: 98%;
          max-width: 1300px;
          display: flex;
          justify-content: flex-start;
          margin-top: 1.5rem;
          align-self: center;
        }
        
        .start-button {
          width: 100%;
        }
        
        .home-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .animated-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        
        .chinese-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #000000;
          text-align: center;
        }
        
        .animated-title .letter {
          display: inline-block;
          animation: colorShift 8s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        @keyframes colorShift {
          0% { color: #ff6b6b; text-shadow: 0 0 20px 3px #ff6b6b, 0 0 40px #ff6b6b; }
          20% { color: #4ecdc4; text-shadow: 0 0 20px 3px #4ecdc4, 0 0 40px #4ecdc4; }
          35% { color: #45b7d1; text-shadow: 0 0 20px 3px #45b7d1, 0 0 40px #45b7d1; }
          50% { color: #feca57; text-shadow: 0 0 20px 3px #feca57, 0 0 40px #feca57; }
          65% { color: #1dd1a1; text-shadow: 0 0 20px 3px #1dd1a1, 0 0 40px #1dd1a1; }
          80% { color: #5f27cd; text-shadow: 0 0 20px 3px #5f27cd, 0 0 40px #5f27cd; }
          95% { color: #ff9ff3; text-shadow: 0 0 20px 3px #ff9ff3, 0 0 40px #ff9ff3; }
          100% { color: #ff6b6b; text-shadow: 0 0 20px 3px #ff6b6b, 0 0 40px #ff6b6b; }
        }
        

        
        .home-subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
        }
        
        .user-greeting {
          font-size: 1.2rem;
          color: #3498db;
          font-weight: bold;
          margin-top: 1rem;
        }
        
        .home-content {
          width: 100%;
          max-width: 1600px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .difficulty-selection {
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .difficulty-container {
          width: 100%;
          max-width: 1500px;
          aspect-ratio: 3/2;
          border-radius: 20px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          margin-bottom: 2rem;
          gap: 1.5rem;
          position: relative;
          ${a==="liquid-glass"?`
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          `:a==="acrylic"?`
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .difficulty-logo {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 100px;
          height: 100px;
          border-radius: 24px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .difficulty-logo:hover {
          transform: translateY(-3px) rotate(3deg);
        }
        
        .difficulty-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
          text-align: left;
          width: 100%;
        }
        
        .difficulty-options {
          display: flex;
          gap: 1.5rem;
          width: 100%;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-top: 0;
        }
        
        .difficulty-option {
          flex: 0 0 auto;
          min-width: 80px;
          max-width: 120px;
          padding: 0.8rem 0.6rem;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .difficulty-option:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.easy {
          background: #4CAF50;
          color: white;
        }
        
        .difficulty-option.medium {
          background: #FFC107;
          color: #333;
        }
        
        .difficulty-option.hard {
          background: #F44336;
          color: white;
        }
        
        .difficulty-option.mode-fast {
          background: linear-gradient(135deg, #4CAF50 0%, #4A90E2 100%);
          color: white;
        }
        
        .difficulty-option.mode-deep {
          background: linear-gradient(135deg, #2196F3 0%, #9C27B0 100%);
          color: white;
        }
        
        .difficulty-option.selected {
          transform: translateY(-3px);
        }
        
        .difficulty-option.easy.selected {
          box-shadow: 0 0 20px 3px #4CAF50, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.medium.selected {
          box-shadow: 0 0 20px 3px #FFC107, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.hard.selected {
          box-shadow: 0 0 20px 3px #F44336, 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.mode-fast.selected {
          box-shadow: 0 0 20px 3px rgba(76, 175, 80, 0.7), 0 0 20px 3px rgba(74, 144, 226, 0.7), 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-option.mode-deep.selected {
          box-shadow: 0 0 20px 3px rgba(33, 150, 243, 0.7), 0 0 20px 3px rgba(156, 39, 176, 0.7), 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        
        .difficulty-name {
          font-size: 0.9rem;
          font-weight: bold;
          position: relative;
          z-index: 1;
        }
        
        .start-game-container {
          width: 100%;
          max-width: 1500px;
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
          padding: 0;
        }
        
        .start-button {
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 1rem 0;
          border-radius: 10px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .start-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .start-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .home-footer {
          margin-top: 3rem;
          color: #666;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .home-header h1 {
            font-size: 2.5rem;
          }
          
          .difficulty-cards {
            grid-template-columns: 1fr;
          }
        }
      `})]})},fg=({onBack:t,onContinue:e,onTalentSelect:l,talents:a,availableTalentPoints:n,selectedTalents:i,uiStyle:u="default"})=>{const[c,f]=E.useState(null),h=x=>{const b=a.find(d=>d.id===x);if(!b)return;let o;i.includes(x)?o=i.filter(d=>d!==x):(b.cost<=0||b.cost<=n)&&(o=[...i,x]),o&&l(o)};return s.jsxs("div",{className:"talent-view",children:[s.jsxs("div",{className:"talent-content",children:[s.jsxs("div",{className:"header-section",children:[s.jsx("h1",{children:"天赋选择"}),s.jsxs("div",{className:"talent-points-display",children:[s.jsx("span",{children:"可用天赋点: "}),s.jsx("span",{className:"points-value",children:n})]})]}),s.jsx("div",{className:"talents-grid",children:a.map(x=>{const b=i.includes(x.id),o=!b&&(x.cost<=0||x.cost<=n),d=c===x.id;return s.jsxs("div",{className:`talent-card ${b?"selected":""} ${d?"hovered":""}`,onClick:()=>h(x.id),onMouseEnter:()=>f(x.id),onMouseLeave:()=>f(null),style:{...u==="liquid-glass"&&{background:b?"#4CAF502A":"#FFFFFF2A",border:`1px solid ${b?"#4CAF5080":"#FFFFFF33"}`,backdropFilter:"blur(10px) saturate(1.35)",boxShadow:d?"0 12px 28px #20268844, inset 0px 0px 10px #FFFFFF1A, inset -3px 3px 4px #FFFFFF10, inset -0.5px 0.5px 0px #FFFFFF60":"0 8px 24px #20268833, inset 0px 0px 10px #FFFFFF1A, inset -3px 3px 4px #FFFFFF10, inset -0.5px 0.5px 0px #FFFFFF60"},...u==="acrylic"&&{background:b?"#4CAF5090":"#FFFFFFB0",border:`1px solid ${b?"#4CAF5080":"transparent"}`,backdropFilter:"blur(20px)",boxShadow:d?"0px 4px 16px rgba(0,0,0,.15)":"0px 2px 12px rgba(0,0,0,.1)"},...u==="default"&&{background:b?"#E8F5E9":"white",border:`1px solid ${b?"#4CAF50":"#E0E0E0"}`,boxShadow:d?"0 12px 24px rgba(0, 0, 0, 0.15)":"0 4px 12px rgba(0, 0, 0, 0.08)"}},children:[s.jsxs("div",{className:"talent-header",children:[s.jsx("h3",{className:"talent-name",children:x.name}),s.jsxs("span",{className:"talent-cost",children:[x.cost,"点"]})]}),s.jsx("p",{className:"talent-description",children:x.description}),s.jsxs("div",{className:"talent-effect",children:[s.jsx("span",{className:"effect-label",children:"效果:"}),s.jsx("ul",{className:"effect-list",children:Object.entries(x.effect).map(([S,N])=>{if(N===void 0||N===0)return null;const U={mental:"心态",health:"健康",academic:"学术",social:"社交",money:"金钱",study_efficiency:"学习效率"}[S]||S;return s.jsxs("li",{children:[U,": ",N>0?"+":"",N,S==="study_efficiency"?"%":""]},S)})})]}),s.jsx("div",{className:"talent-status",children:b?s.jsx("span",{className:"status-selected",children:"已选择"}):o?s.jsx("span",{className:"status-affordable",children:"可选择"}):s.jsx("span",{className:"status-unaffordable",children:"点数不足"})})]},x.id)})}),s.jsxs("div",{className:"button-container",children:[s.jsx("button",{className:"back-button",onClick:t,children:"返回主页"}),s.jsx("button",{className:"continue-button",onClick:e,children:"开始游戏"})]})]}),s.jsx("style",{children:`
        .talent-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: transparent;
        }

        .talent-content {
          padding: 3rem;
          border-radius: 20px;
          max-width: 1200px;
          width: 90%;
          max-height: 90vh;
          min-height: 80vh;
          overflow-y: auto;
          scroll-behavior: smooth;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(158, 158, 158, 0.5) rgba(232, 232, 232, 0.5);
          ${u==="liquid-glass"?`
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          `:u==="acrylic"?`
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .talent-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .talent-content::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }
        
        .talent-content::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
        }
        
        .talent-content::-webkit-scrollbar-thumb:hover {
          background: rgba(158, 158, 158, 0.8);
        }

        .header-section {
          margin-bottom: 2rem;
          text-align: center;
        }

        .talent-content h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .talent-points-display {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .points-value {
          color: #4CAF50;
          font-size: 1.4rem;
        }

        .talents-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .talent-card {
          padding: 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          min-height: 200px;
        }

        .talent-card:hover {
          transform: translateY(-5px);
        }

        .talent-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .talent-name {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .talent-cost {
          background: #f0f0f0;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: bold;
          ${u==="liquid-glass"?`
            background: #FFFFFF40;
            backdrop-filter: blur(5px);
          `:u==="acrylic"?`
            background: #FFFFFF60;
            backdrop-filter: blur(5px);
          `:`
            background: #f0f0f0;
          `}
        }

        .talent-description {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .talent-effect {
          margin-bottom: 1rem;
        }

        .effect-label {
          font-weight: bold;
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .effect-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .effect-list li {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0.3rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .effect-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #4CAF50;
          font-weight: bold;
        }

        .talent-status {
          text-align: right;
        }

        .status-selected {
          color: #4CAF50;
          font-weight: bold;
        }

        .status-affordable {
          color: #2196F3;
          font-weight: bold;
        }

        .status-unaffordable {
          color: #F44336;
          font-weight: bold;
        }

        .button-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .back-button {
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          background: #3498db;
          border: none;
        }

        .back-button:hover {
          background: #2980b9;
          transform: scale(1.05);
        }

        .continue-button {
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .continue-button:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .talent-content {
            padding: 1.5rem;
          }

          .talent-content h1 {
            font-size: 2rem;
          }

          .talents-grid {
            grid-template-columns: 1fr;
          }

          .button-container {
            flex-direction: column;
            align-items: center;
          }

          .back-button,
          .continue-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `})]})},rg=({subject:t,difficulty:e,academicLevel:l,studyTime:a,onExamComplete:n,onCancel:i,uiStyle:u="default"})=>{const[c,f]=E.useState(0),[h,x]=E.useState(!1),[b,o]=E.useState(0),[d,S]=E.useState("");E.useEffect(()=>{if(c<100){const m=setTimeout(()=>{f(r=>Math.min(r+5,100))},200);return()=>clearTimeout(m)}else N(),x(!0)},[c]);const N=()=>{let m=60;m+=l*.3,m+=a*.05,e==="medium"&&(m-=5),e==="hard"&&(m-=15);const r=Math.random()*10-5;m+=r;const g=Math.max(0,Math.min(100,Math.round(m)));o(g);let p="";g>=95?p="A+":g>=90?p="A":g>=85?p="A-":g>=80?p="B+":g>=75?p="B":g>=70?p="B-":g>=65?p="C+":g>=60?p="C":p="D",S(p)},U=()=>{n(b,d)};return s.jsxs("div",{className:"exam-view",children:[s.jsxs("div",{className:"exam-header",children:[s.jsxs("h1",{children:[t,"考试"]}),s.jsx("button",{className:"cancel-button",onClick:i,disabled:!h,children:"关闭"})]}),s.jsx("div",{className:"exam-content",children:h?s.jsxs("div",{className:"exam-result",children:[s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:"考试结果"}),s.jsxs("div",{className:"result-rank",children:["等级: ",s.jsx("span",{className:`rank-${d.toLowerCase()}`,children:d})]})]}),s.jsxs("div",{className:"result-score",children:[s.jsx("div",{className:"score-circle",children:s.jsx("span",{className:"score-value",children:b})}),s.jsx("p",{className:"score-label",children:"分数"})]}),s.jsxs("div",{className:"result-details",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"学科水平:"}),s.jsx("span",{className:"detail-value",children:l})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"学习时间:"}),s.jsxs("span",{className:"detail-value",children:[Math.round(a/60),"小时"]})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"难度:"}),s.jsx("span",{className:"detail-value",children:e==="easy"?"简单":e==="medium"?"中等":"困难"})]})]}),s.jsxs("div",{className:"result-message",children:[b>=90&&s.jsx("p",{children:"太棒了！你取得了优异的成绩！"}),b>=70&&b<90&&s.jsx("p",{children:"不错的成绩，继续努力！"}),b>=60&&b<70&&s.jsx("p",{children:"勉强及格，需要更加努力。"}),b<60&&s.jsx("p",{children:"不及格，需要大幅提升你的学习状态。"})]}),s.jsx("button",{className:"complete-button",onClick:U,children:"完成"})]}):s.jsxs("div",{className:"exam-progress",children:[s.jsxs("div",{className:"progress-message",children:[s.jsx("p",{children:"正在考试中..."}),s.jsx("p",{children:"请稍候，系统正在计算你的成绩"})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar",style:{width:`${c}%`}})}),s.jsxs("div",{className:"progress-percentage",children:[c,"%"]})]})}),s.jsx("style",{children:`
        .exam-view {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .exam-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .exam-header h1 {
          font-size: 2.5rem;
          color: #333;
          margin: 0;
        }

        .cancel-button {
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
          background: #e74c3c;
          border: none;
        }

        .cancel-button:hover:not(:disabled) {
          background: #c0392b;
        }

        .cancel-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .exam-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .exam-progress {
          width: 100%;
          max-width: 600px;
          text-align: center;
        }

        .progress-message {
          margin-bottom: 2rem;
        }

        .progress-message p {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .progress-bar-container {
          width: 100%;
          height: 20px;
          background: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3498db, #27ae60);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .progress-percentage {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .exam-result {
          width: 100%;
          max-width: 600px;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          ${u==="liquid-glass"?`
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          `:u==="acrylic"?`
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          `:`
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .result-header {
          margin-bottom: 2rem;
        }

        .result-header h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .result-rank {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .rank-a+ {
          color: #27ae60;
        }

        .rank-a {
          color: #27ae60;
        }

        .rank-a- {
          color: #27ae60;
        }

        .rank-b+ {
          color: #3498db;
        }

        .rank-b {
          color: #3498db;
        }

        .rank-b- {
          color: #3498db;
        }

        .rank-c+ {
          color: #f39c12;
        }

        .rank-c {
          color: #f39c12;
        }

        .rank-d {
          color: #e74c3c;
        }

        .result-score {
          margin-bottom: 2rem;
        }

        .score-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .score-value {
          font-size: 3rem;
          font-weight: bold;
          color: white;
        }

        .score-label {
          font-size: 1.2rem;
          color: #666;
          margin: 0;
        }

        .result-details {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-size: 1.1rem;
          color: #666;
        }

        .detail-value {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
        }

        .result-message {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #e8f4f8;
          border-radius: 12px;
        }

        .result-message p {
          font-size: 1.2rem;
          color: #333;
          margin: 0;
        }

        .complete-button {
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .complete-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .exam-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .exam-header h1 {
            font-size: 2rem;
          }

          .exam-result {
            padding: 2rem;
          }

          .score-circle {
            width: 120px;
            height: 120px;
          }

          .score-value {
            font-size: 2.5rem;
          }
        }
      `})]})},tr={modernReading1:50,modernReading2:50,classicalChinese:50,ancientPoetry:50,famousQuotes:50,languageUse:50,writingChinese:50,singleChoiceMath:50,multipleChoiceMath:50,fillBlankMath:50,problemSolving:50,listeningEnglish:50,readingEnglish:50,sevenChooseFive:50,clozeTest:50,errorCorrection:50,writingEnglish:50,choicePhysics:50,experimentPhysics:50,calculationPhysics:50,choiceScience:50,nonChoiceScience:50,choiceLiberal:50,nonChoiceLiberal:50},er=t=>({chinese:Math.round((17*t.modernReading1+18*t.modernReading2+20*t.classicalChinese+9*t.ancientPoetry+6*t.famousQuotes+20*t.languageUse+60*t.writingChinese)/150),math:Math.round((40*t.singleChoiceMath+20*t.multipleChoiceMath+20*t.fillBlankMath+70*t.problemSolving)/150),english:Math.round((30*t.listeningEnglish+40*t.readingEnglish+10*t.sevenChooseFive+15*t.clozeTest+10*t.errorCorrection+45*t.writingEnglish)/150),physics:Math.round((42*t.choicePhysics+18*t.experimentPhysics+40*t.calculationPhysics)/100),chemistry:Math.round((42*t.choiceScience+58*t.nonChoiceScience)/100),biology:Math.round((40*t.choiceScience+60*t.nonChoiceScience)/100),history:Math.round((48*t.choiceLiberal+52*t.nonChoiceLiberal)/100),politics:Math.round((48*t.choiceLiberal+52*t.nonChoiceLiberal)/100),geography:Math.round((48*t.choiceLiberal+52*t.nonChoiceLiberal)/100)}),og={chinese:"语文",math:"数学",english:"英语",physics:"物理",chemistry:"化学",biology:"生物",history:"历史",politics:"政治",geography:"地理"},lr={dataStructureKnowledge:50,graphTheoryKnowledge:50,stringKnowledge:50,mathKnowledge:50,dpKnowledge:50},dg={dataStructureKnowledge:"数据结构知识",graphTheoryKnowledge:"图论知识",stringKnowledge:"字符串知识",mathKnowledge:"数学知识",dpKnowledge:"动态规划知识"},ar={thinking:50,coding:50,carefulness:50,experience:50,quickness:50,mental:50,determination:50,mood:16,thinkingAbility:50,codingAbility:50,psychologicalQuality:50,pressure:20,comfort:50,sickWeeks:0,burnoutWeeks:0,depressionCount:0,highPressureWeeks:0},mg={thinking:"思维",coding:"代码",carefulness:"细心",experience:"经验",quickness:"迅捷",mental:"心理素质",determination:"决心",mood:"心态",thinkingAbility:"思维能力",codingAbility:"编码能力",psychologicalQuality:"心理素质",pressure:"压力值",comfort:"舒适度",sickWeeks:"生病周数",burnoutWeeks:"倦怠周数",depressionCount:"抑郁次数",highPressureWeeks:"高压周数"},hg=({uiStyle:t="default"})=>{const[e,l]=E.useState(!1),[a,n]=E.useState(!1),[i,u]=E.useState(er(tr)),[c,f]=E.useState(lr),[h,x]=E.useState(ar);E.useEffect(()=>{u(er(tr)),f(lr),x(ar)},[]);const b=o=>o>=80?"#4CAF50":o>=60?"#FFC107":o>=40?"#FF9800":"#F44336";return s.jsxs("div",{className:"game-view",children:[s.jsx("div",{className:"top-rectangle",style:{zIndex:1},children:s.jsx("div",{className:"top-rectangle-content"})}),s.jsx("div",{className:"left-rectangle",style:{zIndex:1},children:s.jsxs("div",{className:"left-rectangle-content",children:[s.jsx("h2",{className:"section-title",children:"学科能力"}),s.jsx("div",{className:"subject-abilities-list",children:Object.entries(i).map(([o,d])=>s.jsxs("div",{className:"subject-ability-item",children:[s.jsxs("div",{className:"subject-ability-header",children:[s.jsx("span",{className:"subject-name",children:og[o]}),s.jsx("span",{className:"subject-value",style:{color:b(d)},children:d})]}),s.jsx("div",{className:"ability-bar-container",children:s.jsx("div",{className:"ability-bar",style:{width:`${d}%`,backgroundColor:b(d)}})})]},o))})]})}),s.jsx("div",{className:"right-rectangle",style:{zIndex:1},children:s.jsxs("div",{className:"right-rectangle-content",children:[s.jsx("h2",{className:"section-title",children:"OI竞赛"}),s.jsx("h3",{className:"subsection-title",children:"知识结构"}),s.jsx("div",{className:"subject-abilities-list",children:Object.entries(c).map(([o,d])=>s.jsxs("div",{className:"subject-ability-item",children:[s.jsxs("div",{className:"subject-ability-header",children:[s.jsx("span",{className:"subject-name",children:dg[o]}),s.jsx("span",{className:"subject-value",style:{color:b(d)},children:d})]}),s.jsx("div",{className:"ability-bar-container",children:s.jsx("div",{className:"ability-bar",style:{width:`${d}%`,backgroundColor:b(d)}})})]},o))}),s.jsx("h3",{className:"subsection-title",children:"常规属性"}),s.jsx("div",{className:"subject-abilities-list",children:Object.entries(h).map(([o,d])=>s.jsxs("div",{className:"subject-ability-item",children:[s.jsxs("div",{className:"subject-ability-header",children:[s.jsx("span",{className:"subject-name",children:mg[o]}),s.jsx("span",{className:"subject-value",style:{color:b(d)},children:d})]}),s.jsx("div",{className:"ability-bar-container",children:s.jsx("div",{className:"ability-bar",style:{width:`${d}%`,backgroundColor:b(d)}})})]},o))})]})}),e&&s.jsx("div",{className:"modal-overlay",style:{zIndex:1e3},children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"文化课详情"}),s.jsx("button",{className:"modal-close",onClick:()=>l(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:s.jsx("p",{children:"文化课详细信息将在此显示"})})]})}),a&&s.jsx("div",{className:"modal-overlay",style:{zIndex:1e3},children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"OI详情"}),s.jsx("button",{className:"modal-close",onClick:()=>n(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:s.jsx("p",{children:"OI详细信息将在此显示"})})]})}),s.jsx("style",{children:`
        .game-view {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: transparent;
          overflow: hidden;
        }

        /* 上方圆角矩形 */
        .top-rectangle {
          position: absolute;
          top: 0;
          left: 260px;
          right: 260px;
          height: 150px;
          margin: 10px;
          border-radius: 20px;
          ${t==="liquid-glass"?`
            background: #FFFFFF2A;
            border: 1px solid #FFFFFF33;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          `:t==="acrylic"?`
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0px 2px 12px rgba(0,0,0,.1);
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .top-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        /* 左侧圆角矩形 */
        .left-rectangle {
          position: absolute;
          top: 0;
          left: 0;
          height: calc(100vh - 20px);
          width: 250px;
          margin: 10px;
          border-radius: 20px;
          overflow-y: auto;
          ${t==="liquid-glass"?`
            background: #FFFFFF2A;
            border: 1px solid #FFFFFF33;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          `:t==="acrylic"?`
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0px 2px 12px rgba(0,0,0,.1);
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .left-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .subsection-title {
          font-size: 0.95rem;
          font-weight: bold;
          color: #555;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .subject-abilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .subject-ability-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .subject-ability-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .subject-name {
          font-size: 0.85rem;
          font-weight: bold;
          color: #555;
        }

        .subject-value {
          font-size: 0.9rem;
          font-weight: bold;
        }

        .ability-bar-container {
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          ${t==="liquid-glass"?`
            background: #FFFFFF40;
          `:t==="acrylic"?`
            background: #FFFFFF60;
          `:`
            background: #e0e0e0;
          `}
        }

        .ability-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .left-rectangle::-webkit-scrollbar {
          width: 6px;
        }

        .left-rectangle::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }

        .left-rectangle::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
        }

        /* 右侧圆角矩形 */
        .right-rectangle {
          position: absolute;
          top: 0;
          right: 0;
          height: calc(100vh - 20px);
          width: 250px;
          margin: 10px;
          border-radius: 20px;
          overflow-y: auto;
          ${t==="liquid-glass"?`
            background: #FFFFFF2A;
            border: 1px solid #FFFFFF33;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          `:t==="acrylic"?`
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0px 2px 12px rgba(0,0,0,.1);
          `:`
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }
        
        .right-rectangle::-webkit-scrollbar {
          width: 6px;
        }
        
        .right-rectangle::-webkit-scrollbar-track {
          background: rgba(232, 232, 232, 0.5);
          border-radius: 3px;
        }
        
        .right-rectangle::-webkit-scrollbar-thumb {
          background: rgba(158, 158, 158, 0.5);
          border-radius: 3px;
        }

        .right-rectangle-content {
          height: 100%;
          padding: 1rem;
        }

        /* 模态窗口样式 */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          width: 80%;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          ${t==="liquid-glass"?`
            background: #FFFFFF2A;
            border: 1px solid #FFFFFF33;
            backdrop-filter: blur(10px) saturate(1.35);
            box-shadow:
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60;
          `:t==="acrylic"?`
            background: #FFFFFFB0;
            backdrop-filter: blur(20px);
            border: none;
            box-shadow: 0px 2px 12px rgba(0,0,0,.1);
          `:`
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          `}
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background-color: #f0f0f0;
          color: #333;
        }

        .modal-body {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
        }

        @media (max-width: 768px) {
          .top-rectangle {
            height: 120px;
            left: 210px;
            right: 210px;
            margin: 8px;
          }
          
          .left-rectangle, .right-rectangle {
            width: 200px;
            height: calc(100vh - 16px);
            margin: 8px;
          }

          .modal-content {
            width: 90%;
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .top-rectangle {
            height: 100px;
            left: 160px;
            right: 160px;
            margin: 6px;
          }
          
          .left-rectangle, .right-rectangle {
            width: 150px;
            height: calc(100vh - 12px);
            margin: 6px;
          }

          .modal-content {
            width: 95%;
            padding: 1rem;
          }
        }
      `})]})},gg=({finalStats:t,achievements:e,examResults:l,playTime:a,onRestart:n,onMainMenu:i,uiStyle:u="default"})=>{const c=e.filter(d=>d.completed).length,f=e.length,h=Math.round(c/f*100),x=d=>{const S=Math.floor(d/60),N=d%60;return`${S}小时${N}分钟`},o=(()=>{const d=(t.academic+t.social+t.mental+t.health)/4;return d>=90?{rank:"S",title:"完美人生",description:"你在各方面都达到了极致，是真正的人生赢家！"}:d>=80?{rank:"A",title:"优秀毕业生",description:"你表现出色，为自己的高中生活交上了满意的答卷。"}:d>=70?{rank:"B",title:"良好学生",description:"你度过了充实的高中生活，有不少收获。"}:d>=60?{rank:"C",title:"合格毕业生",description:"你勉强完成了高中生活，还有很大的提升空间。"}:{rank:"D",title:"有待改进",description:"你的高中生活充满了挑战，需要更加努力。"}})();return s.jsxs("div",{className:"ending-screen",children:[s.jsxs("div",{className:"ending-header",children:[s.jsx("h1",{children:"游戏结束"}),s.jsxs("div",{className:"final-rank",children:[s.jsx("div",{className:`rank-badge rank-${o.rank.toLowerCase()}`,children:o.rank}),s.jsx("h2",{children:o.title}),s.jsx("p",{children:o.description})]})]}),s.jsxs("div",{className:"ending-content",children:[s.jsxs("div",{className:"stats-section",children:[s.jsx("h3",{children:"最终属性"}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"心态"}),s.jsx("div",{className:"stat-bar-container",children:s.jsx("div",{className:"stat-bar mental",style:{width:`${Math.min(t.mental,100)}%`}})}),s.jsx("span",{className:"stat-value",children:t.mental})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"健康"}),s.jsx("div",{className:"stat-bar-container",children:s.jsx("div",{className:"stat-bar health",style:{width:`${Math.min(t.health,100)}%`}})}),s.jsx("span",{className:"stat-value",children:t.health})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"学术"}),s.jsx("div",{className:"stat-bar-container",children:s.jsx("div",{className:"stat-bar academic",style:{width:`${Math.min(t.academic,100)}%`}})}),s.jsx("span",{className:"stat-value",children:t.academic})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"社交"}),s.jsx("div",{className:"stat-bar-container",children:s.jsx("div",{className:"stat-bar social",style:{width:`${Math.min(t.social,100)}%`}})}),s.jsx("span",{className:"stat-value",children:t.social})]})]}),s.jsxs("div",{className:"additional-stats",children:[s.jsxs("div",{className:"additional-stat",children:[s.jsx("span",{className:"stat-label",children:"金钱"}),s.jsxs("span",{className:"stat-value",children:["¥",t.money]})]}),s.jsxs("div",{className:"additional-stat",children:[s.jsx("span",{className:"stat-label",children:"学习时间"}),s.jsxs("span",{className:"stat-value",children:[Math.round(t.study_time/60),"小时"]})]}),s.jsxs("div",{className:"additional-stat",children:[s.jsx("span",{className:"stat-label",children:"游戏时长"}),s.jsx("span",{className:"stat-value",children:x(a)})]})]})]}),s.jsxs("div",{className:"achievements-section",children:[s.jsx("h3",{children:"成就"}),s.jsxs("div",{className:"achievements-summary",children:[s.jsxs("div",{className:"achievement-percentage",children:[s.jsx("div",{className:"percentage-circle",children:s.jsxs("span",{className:"percentage-value",children:[h,"%"]})}),s.jsxs("p",{children:[c,"/",f," 成就"]})]}),s.jsxs("div",{className:"completed-achievements",children:[s.jsx("h4",{children:"已完成的成就"}),s.jsxs("ul",{children:[e.filter(d=>d.completed).map(d=>s.jsxs("li",{children:[s.jsx("span",{className:"achievement-title",children:d.title}),s.jsx("span",{className:"achievement-description",children:d.description})]},d.id)),c===0&&s.jsx("li",{className:"no-achievements",children:"没有完成任何成就"})]})]})]})]}),s.jsxs("div",{className:"exam-results-section",children:[s.jsx("h3",{children:"考试成绩"}),s.jsx("div",{className:"exam-results-list",children:l.length>0?l.map((d,S)=>s.jsxs("div",{className:"exam-result-item",children:[s.jsx("span",{className:"exam-subject",children:d.subject}),s.jsx("span",{className:"exam-score",children:d.score}),s.jsx("span",{className:`exam-rank rank-${d.rank.toLowerCase()}`,children:d.rank})]},S)):s.jsx("p",{className:"no-exams",children:"没有参加任何考试"})})]})]}),s.jsxs("div",{className:"ending-footer",children:[s.jsx("button",{className:"restart-button",onClick:n,children:"重新开始"}),s.jsx("button",{className:"main-menu-button",onClick:i,children:"返回主菜单"})]}),s.jsx("style",{children:`
        .ending-screen {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .ending-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .ending-header h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .final-rank {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .rank-badge {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        .rank-s {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
        }

        .rank-a {
          background: linear-gradient(135deg, #3498db, #5dade2);
        }

        .rank-b {
          background: linear-gradient(135deg, #27ae60, #52be80);
        }

        .rank-c {
          background: linear-gradient(135deg, #f39c12, #f8c471);
        }

        .rank-d {
          background: linear-gradient(135deg, #e74c3c, #ec7063);
        }

        .final-rank h2 {
          font-size: 2rem;
          margin: 0;
          color: #333;
        }

        .final-rank p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0;
        }

        .ending-content {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stats-section,
        .achievements-section,
        .exam-results-section {
          padding: 2rem;
          border-radius: 12px;
          ${u==="liquid-glass"?`
            background: #FFFFFF2A; /* 16.5% 透明度白色 */
            border: 1px solid #FFFFFF33; /* 20% 透明度白色边框 */
            backdrop-filter: blur(10px) saturate(1.35); /* 较浅模糊 + 饱和度增强 */
            box-shadow:
              0 8px 24px #20268833, /* 主阴影：淡蓝色（20%透明度） */
              inset 0px 0px 10px #FFFFFF1A, /* 内发光：白色（10%透明度） */
              inset -3px 3px 4px #FFFFFF10, /* 内阴影：白色（6%透明度）- 模拟玻璃厚度 */
              inset -0.5px 0.5px 0px #FFFFFF60; /* 高光边缘：白色（37.5%透明度）- 模拟玻璃边缘反射 */
          `:u==="acrylic"?`
            background: #FFFFFFB0; /* 69% 透明度白色 */
            backdrop-filter: blur(20px); /* 中度模糊 */
            border: none; /* 无边框 */
            box-shadow: 0px 2px 12px rgba(0,0,0,.1); /* 简洁的黑色阴影 */
          `:`
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          `}
        }

        .stats-section h3,
        .achievements-section h3,
        .exam-results-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: center;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-label {
          width: 60px;
          font-size: 1.1rem;
          color: #666;
        }

        .stat-bar-container {
          flex: 1;
          height: 20px;
          background: #e0e0e0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .stat-bar {
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .stat-bar.mental {
          background: linear-gradient(90deg, #3498db, #2980b9);
        }

        .stat-bar.health {
          background: linear-gradient(90deg, #27ae60, #229954);
        }

        .stat-bar.academic {
          background: linear-gradient(90deg, #f39c12, #d35400);
        }

        .stat-bar.social {
          background: linear-gradient(90deg, #9b59b6, #8e44ad);
        }

        .stat-value {
          width: 40px;
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          text-align: right;
        }

        .additional-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e0e0e0;
        }

        .additional-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .achievements-summary {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .achievement-percentage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .percentage-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .percentage-value {
          font-size: 2rem;
          font-weight: bold;
          color: white;
        }

        .achievement-percentage p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        .completed-achievements h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .completed-achievements ul {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 200px;
          overflow-y: auto;
        }

        .completed-achievements li {
          padding: 0.8rem;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 0.8rem;
        }

        .achievement-title {
          display: block;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.3rem;
        }

        .achievement-description {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }

        .no-achievements {
          text-align: center;
          color: #999;
          font-style: italic;
        }

        .exam-results-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exam-result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .exam-subject {
          font-size: 1.1rem;
          color: #333;
          font-weight: bold;
        }

        .exam-score {
          font-size: 1.1rem;
          color: #666;
        }

        .exam-rank {
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          color: white;
        }

        .no-exams {
          text-align: center;
          color: #999;
          font-style: italic;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .ending-footer {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .restart-button,
        .main-menu-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .restart-button {
          color: white;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .main-menu-button {
          color: white;
          background: #3498db;
          border: none;
        }

        .restart-button:hover,
        .main-menu-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .ending-content {
            grid-template-columns: 1fr;
          }

          .ending-footer {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .restart-button,
          .main-menu-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
      `})]})},bg=({nicknameInput:t,setNicknameInput:e,saveUserName:l,uiStyle:a="default"})=>s.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center","data-tag":"图形",children:[s.jsx("div",{className:"absolute inset-0 bg-transparent backdrop-blur-md","data-tag":"图形"}),s.jsxs("div",{className:`rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md ${a==="liquid-glass"?"bg-white/16.5 border border-white/20 backdrop-blur-sm":a==="acrylic"?"bg-white/69 backdrop-blur-md":"bg-white"}`,style:{...a==="liquid-glass"&&{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `},...a==="acrylic"&&{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 12px rgba(0,0,0,.1)"},...a==="default"&&{background:"white",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)"}},"data-tag":"图形",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900 mb-4","data-tag":"常规文本",children:"欢迎来到青春纪元模拟器"}),s.jsx("p",{className:"text-gray-700 mb-4","data-tag":"常规文本",children:"请输入你的昵称："}),s.jsx("input",{type:"text",className:"w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"输入你的昵称",maxLength:20,"data-tag":"常规文本",autoFocus:!0,value:t,onChange:n=>{e(n.target.value)}}),s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{className:`px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-white ${a==="liquid-glass"?"bg-blue-500/80 backdrop-blur-sm border border-white/30":a==="acrylic"?"bg-blue-500/90 backdrop-blur-md border-none":"bg-blue-500 border-none"}`,style:{...a==="liquid-glass"&&{background:"rgba(59, 130, 246, 0.8)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)"},...a==="acrylic"&&{background:"rgba(59, 130, 246, 0.9)",backdropFilter:"blur(10px)",border:"none"},...a==="default"&&{background:"bg-blue-500",border:"none"}},onClick:()=>{l(t)},"data-tag":"按钮",disabled:!t.trim(),children:"确定"})})]})]}),xg={default:{name:"默认",gradient:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",description:"最初默认"},deep:{name:"深邃",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",description:"蓝色+紫色"},vibrant:{name:"鲜艳",gradient:"linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",description:"红色+橙色"},fresh:{name:"清新",gradient:"linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%)",description:"天蓝色+青翠绿"},energetic:{name:"活力",gradient:"linear-gradient(135deg, #ffa726 0%, #9ccc65 100%)",description:"淡橙色+淡绿色"}},pg=({closeModal:t,uiStyle:e,setUiStyle:l,backgroundTheme:a,setBackgroundTheme:n})=>{const i=c=>{l(c)},u=c=>{n(c)};return s.jsxs("div",{className:"fixed inset-0 z-40 flex items-center justify-center","data-tag":"图形",children:[s.jsx("div",{className:"absolute inset-0 bg-transparent backdrop-blur-md","data-tag":"图形"}),s.jsxs("div",{className:`rounded-xl p-6 shadow-2xl relative z-10 w-full max-w-md ${e==="liquid-glass"?"bg-white/16.5 border border-white/20 backdrop-blur-sm":e==="acrylic"?"bg-white/69 backdrop-blur-md":"bg-white"}`,style:{...e==="liquid-glass"&&{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `},...e==="acrylic"&&{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 12px rgba(0,0,0,.1)"},...e==="default"&&{background:"white",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)"}},"data-tag":"图形",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold text-gray-900","data-tag":"常规文本",children:"设置"}),s.jsx("button",{className:"transition-colors text-gray-500 hover:text-gray-900",onClick:t,"data-tag":"按钮",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-lg font-semibold mb-3","data-tag":"常规文本",children:"UI风格"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:`flex items-center p-3 rounded-lg cursor-pointer transition-all ${e==="default"?"bg-blue-100 border-2 border-blue-500":"bg-gray-50 hover:bg-gray-100 border-2 border-transparent"}`,onClick:()=>i("default"),"data-tag":"按钮",children:[s.jsx("div",{className:`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${e==="default"?"bg-blue-500 text-white":"bg-gray-300"}`,children:e==="default"&&s.jsx("span",{className:"text-xs",children:"✓"})}),s.jsx("span",{className:"text-gray-800","data-tag":"常规文本",children:"默认"})]}),s.jsxs("div",{className:`flex items-center p-3 rounded-lg cursor-pointer transition-all ${e==="liquid-glass"?"bg-blue-100 border-2 border-blue-500":"bg-gray-50 hover:bg-gray-100 border-2 border-transparent"}`,onClick:()=>i("liquid-glass"),"data-tag":"按钮",children:[s.jsx("div",{className:`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${e==="liquid-glass"?"bg-blue-500 text-white":"bg-gray-300"}`,children:e==="liquid-glass"&&s.jsx("span",{className:"text-xs",children:"✓"})}),s.jsx("span",{className:"text-gray-800","data-tag":"常规文本",children:"液态玻璃"})]}),s.jsxs("div",{className:`flex items-center p-3 rounded-lg cursor-pointer transition-all ${e==="acrylic"?"bg-blue-100 border-2 border-blue-500":"bg-gray-50 hover:bg-gray-100 border-2 border-transparent"}`,onClick:()=>i("acrylic"),"data-tag":"按钮",children:[s.jsx("div",{className:`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${e==="acrylic"?"bg-blue-500 text-white":"bg-gray-300"}`,children:e==="acrylic"&&s.jsx("span",{className:"text-xs",children:"✓"})}),s.jsx("span",{className:"text-gray-800","data-tag":"常规文本",children:"亚克力"})]})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-lg font-semibold mb-3","data-tag":"常规文本",children:"背景主题"}),s.jsx("div",{className:"space-y-2",children:Object.entries(xg).map(([c,f])=>s.jsxs("div",{className:`flex items-center p-3 rounded-lg cursor-pointer transition-all ${a===c?"bg-blue-100 border-2 border-blue-500":"bg-gray-50 hover:bg-gray-100 border-2 border-transparent"}`,onClick:()=>u(c),"data-tag":"按钮",children:[s.jsx("div",{className:`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${a===c?"bg-blue-500 text-white":"bg-gray-300"}`,children:a===c&&s.jsx("span",{className:"text-xs",children:"✓"})}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-800 font-medium","data-tag":"常规文本",children:f.name}),s.jsx("span",{className:"text-xs text-gray-500","data-tag":"常规文本",children:f.description})]}),s.jsx("div",{className:"mt-1 h-2 rounded-full",style:{background:f.gradient}})]})]},c))})]}),s.jsx("div",{className:"flex justify-end",children:s.jsx("button",{className:"px-4 py-2 rounded-md transition-colors bg-gray-100 hover:bg-gray-200",style:{background:"#f3f4f6",border:"none",color:"#333"},onClick:t,"data-tag":"按钮",children:"关闭"})})]})]})},Au=[{id:"regular-first",title:"入学!",description:"成功开始学习之旅",completed:!1,icon:"🎓",category:"regular"},{id:"rare-placeholder",title:"稀有成就",description:"稀有品质成就占位",completed:!1,icon:"⭐",category:"rare"},{id:"epic-placeholder",title:"史诗成就",description:"史诗品质成就占位",completed:!1,icon:"🌟",category:"epic"},{id:"legendary-placeholder",title:"传说成就",description:"传说品质成就占位",completed:!1,icon:"💎",category:"legendary"},{id:"mythic-placeholder",title:"神话成就",description:"神话品质成就占位",completed:!1,icon:"👑",category:"mythic"}],s0=t=>`bloomEraSimAchievements_${t}`,Ea=t=>{if(!t)return Au;try{const e=s0(t),l=localStorage.getItem(e);if(l){const a=JSON.parse(l);return Au.map(n=>a.find(u=>u.id===n.id)||n)}}catch(e){console.error("Error loading achievements:",e)}return Au},yg=(t,e)=>{if(t)try{const l=s0(t);localStorage.setItem(l,JSON.stringify(e))}catch(l){console.error("Error saving achievements:",l)}},vg=(t,e,l)=>{if(l!=="现实")return!1;const a=Ea(t),n=a.findIndex(i=>i.id===e);return n!==-1&&!a[n].completed?(a[n].completed=!0,yg(t,a),!0):!1},Sg=()=>["regular","rare","epic","legendary","mythic"],jg=t=>({regular:"常规",rare:"稀有",epic:"史诗",legendary:"传说",mythic:"神话"})[t]||t,zg=t=>({regular:"只要有手就行啦！",rare:"多试几次就能成的！",epic:"悬赏挑战！",legendary:"什么？你就是传奇！",mythic:"别看了，根本不可能"})[t]||"",Ng=({achievements:t,closeModal:e,uiStyle:l="default"})=>{const a=Sg(),n=i=>{switch(i){case"regular":return"#4CAF50";case"rare":return"#2196F3";case"epic":return"#9C27B0";case"legendary":return"#FF9800";case"mythic":return"#F44336";case"hidden":return"#000000";default:return"#666"}};return s.jsxs("div",{className:"fixed inset-0 z-40 flex items-center justify-center","data-tag":"图形",children:[s.jsx("div",{className:"absolute inset-0 bg-transparent backdrop-blur-md","data-tag":"图形"}),s.jsxs("div",{className:`rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[1200px] ${l==="liquid-glass"?"bg-white/16.5 border border-white/20 backdrop-blur-sm":l==="acrylic"?"bg-white/69 backdrop-blur-md":"bg-white"}`,style:{...l==="liquid-glass"&&{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `},...l==="acrylic"&&{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 12px rgba(0,0,0,.1)"},...l==="default"&&{background:"white",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)"}},"data-tag":"图形",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900","data-tag":"常规文本",children:"成就系统"}),s.jsx("button",{className:"text-gray-500 hover:text-gray-900 transition-colors text-xl",onClick:e,"data-tag":"按钮",children:"✕"})]}),s.jsxs("div",{className:"overflow-y-auto h-[calc(100%-80px)] pr-2 scroll-smooth",children:[s.jsx("style",{children:`
            .scroll-smooth {
              scroll-behavior: smooth;
              overscroll-behavior: contain;
              scrollbar-width: thin;
              scrollbar-color: rgba(158, 158, 158, 0.5) rgba(232, 232, 232, 0.5);
              will-change: scroll-position;
              -webkit-overflow-scrolling: touch;
            }
            
            .scroll-smooth::-webkit-scrollbar {
              width: 6px;
            }
            
            .scroll-smooth::-webkit-scrollbar-track {
              background: rgba(232, 232, 232, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb {
              background: rgba(158, 158, 158, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb:hover {
              background: rgba(158, 158, 158, 0.8);
            }
            
            .achievement-card {
              will-change: transform;
              transform: translateZ(0);
              backface-visibility: hidden;
              perspective: 1000px;
            }
          `}),a.map(i=>{const u=t.filter(f=>f.category===i);if(u.length===0)return null;const c=n(i);return s.jsxs("div",{className:"mb-6",children:[s.jsxs("h4",{className:"text-xl font-bold mb-3 flex items-center",style:{color:c},"data-tag":"常规文本",children:[jg(i),s.jsx("span",{className:"ml-2 text-sm font-normal opacity-80",style:{color:c},"data-tag":"常规文本",children:zg(i)})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:u.map(f=>s.jsxs("div",{className:`p-4 rounded-lg achievement-card relative overflow-hidden ${f.completed?"":"achievement-locked"}`,style:{...l==="liquid-glass"?{background:"#FFFFFF2A",border:`1px solid ${c}33`,boxShadow:"0 4px 12px rgba(32, 38, 136, 0.15)",borderRadius:"8px"}:l==="acrylic"?{background:"#FFFFFFB0",border:`1px solid ${c}33`,boxShadow:"0px 2px 8px rgba(0,0,0,.1)",borderRadius:"8px"}:{background:"#f8f9fa",border:`1px solid ${c}33`,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)",borderRadius:"8px"}},"data-tag":"图形",children:[!f.completed&&s.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-50 z-10","data-tag":"图形"}),s.jsxs("div",{className:"flex items-start gap-3",style:{position:"relative",zIndex:f.completed?1:0},children:[s.jsx("div",{className:"text-2xl",children:f.icon}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h5",{className:"font-bold text-gray-900 text-lg","data-tag":"常规文本",children:f.title}),s.jsx("p",{className:"mt-1",style:{...l==="liquid-glass"?{background:`${c}80`,color:"white",padding:"8px",borderRadius:"4px",border:`1px solid ${c}33`,fontWeight:500,fontSize:"0.9rem"}:l==="acrylic"?{background:`${c}90`,color:"white",padding:"8px",borderRadius:"4px",border:`1px solid ${c}33`,fontWeight:500,fontSize:"0.9rem"}:{background:c,color:"white",padding:"8px",borderRadius:"4px",border:`1px solid ${c}33`,fontWeight:500,fontSize:"0.9rem"}},"data-tag":"常规文本",children:f.description}),s.jsx("p",{className:`mt-2 ${f.completed?"text-green-600":"text-gray-400"} font-medium`,"data-tag":"常规文本",children:f.completed?"✓ 已完成":"✗ 未完成"})]})]})]},f.id))})]},i)})]})]})]})},Ag=({achievement:t,onClose:e,uiStyle:l="default"})=>{const n=(i=>{switch(i){case"regular":return"#4CAF50";case"rare":return"#2196F3";case"epic":return"#9C27B0";case"legendary":return"#FF9800";case"hidden":return"#F44336";default:return"#666"}})(t.category);return s.jsxs("div",{className:"achievement-notification","data-tag":"图形",children:[s.jsxs("div",{className:"achievement-notification-content",style:{...l==="liquid-glass"?{background:"#FFFFFF2A",border:`1px solid ${n}33`,backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `,borderRadius:"8px",padding:"12px",display:"flex",alignItems:"center",gap:"12px",maxWidth:"300px"}:l==="acrylic"?{background:"#FFFFFFB0",border:`1px solid ${n}33`,backdropFilter:"blur(20px)",boxShadow:"0px 2px 12px rgba(0,0,0,.1)",borderRadius:"8px",padding:"12px",display:"flex",alignItems:"center",gap:"12px",maxWidth:"300px"}:{background:"#f8f9fa",border:`1px solid ${n}33`,boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",borderRadius:"8px",padding:"12px",display:"flex",alignItems:"center",gap:"12px",maxWidth:"300px"}},"data-tag":"图形",children:[s.jsx("div",{className:"text-2xl",children:t.icon}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h5",{className:"font-bold text-gray-900 text-lg","data-tag":"常规文本",children:t.title}),s.jsx("p",{className:"mt-1",style:{...l==="liquid-glass"?{background:`${n}80`,color:"white",padding:"6px",borderRadius:"4px",border:`1px solid ${n}33`,fontWeight:500,fontSize:"0.85rem",backdropFilter:"blur(5px)"}:l==="acrylic"?{background:`${n}90`,color:"white",padding:"6px",borderRadius:"4px",border:`1px solid ${n}33`,fontWeight:500,fontSize:"0.85rem",backdropFilter:"blur(3px)"}:{background:n,color:"white",padding:"6px",borderRadius:"4px",border:`1px solid ${n}33`,fontWeight:500,fontSize:"0.85rem"}},"data-tag":"常规文本",children:t.description}),s.jsx("p",{className:"mt-2 text-green-600 font-medium","data-tag":"常规文本",children:"✓ 已解锁"})]}),s.jsx("button",{className:"close-button",onClick:e,style:{background:"none",border:"none",cursor:"pointer",color:"#666",fontSize:"1rem"},"data-tag":"按钮",children:"×"})]}),s.jsx("style",{children:`
        .achievement-notification {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 50;
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `})]})},Fg=({versions:t,closeModal:e,uiStyle:l="default"})=>s.jsxs("div",{className:"fixed inset-0 z-40 flex items-center justify-center","data-tag":"图形",children:[s.jsx("div",{className:"absolute inset-0 bg-transparent backdrop-blur-md","data-tag":"图形"}),s.jsxs("div",{className:`rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[800px] ${l==="liquid-glass"?"bg-white/16.5 border border-white/20 backdrop-blur-sm":l==="acrylic"?"bg-white/69 backdrop-blur-md":"bg-white"}`,style:{...l==="liquid-glass"&&{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `},...l==="acrylic"&&{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 12px rgba(0,0,0,.1)"},...l==="default"&&{background:"white",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)"}},"data-tag":"图形",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900","data-tag":"常规文本",children:"版本信息"}),s.jsx("button",{className:"text-gray-500 hover:text-gray-900 transition-colors text-xl",onClick:e,"data-tag":"按钮",children:"✕"})]}),s.jsxs("div",{className:"overflow-y-auto h-[calc(100%-80px)] pr-2 scroll-smooth",children:[s.jsx("style",{children:`
            .scroll-smooth {
              scroll-behavior: smooth;
              overscroll-behavior: contain;
              scrollbar-width: thin;
              scrollbar-color: rgba(158, 158, 158, 0.5) rgba(232, 232, 232, 0.5);
            }
            
            .scroll-smooth::-webkit-scrollbar {
              width: 6px;
            }
            
            .scroll-smooth::-webkit-scrollbar-track {
              background: rgba(232, 232, 232, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb {
              background: rgba(158, 158, 158, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb:hover {
              background: rgba(158, 158, 158, 0.8);
            }
          `}),s.jsx("div",{className:"space-y-6",children:t.map(a=>s.jsxs("div",{className:`p-4 rounded-lg ${l==="liquid-glass"?"bg-white/16.5 border border-white/20 backdrop-blur-sm":l==="acrylic"?"bg-white/69 backdrop-blur-md":"bg-gray-100"}`,style:{...l==="liquid-glass"&&{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
                      0 4px 12px #20268820,
                      inset 0px 0px 5px #FFFFFF1A,
                      inset -1px 1px 2px #FFFFFF10,
                      inset -0.25px 0.25px 0px #FFFFFF60
                    `},...l==="acrylic"&&{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 6px rgba(0,0,0,.1)"},...l==="default"&&{background:"#f3f4f6",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"}},"data-tag":"图形",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("h4",{className:"font-bold text-gray-900 text-lg","data-tag":"常规文本",children:a.version}),s.jsx("span",{className:"text-gray-600","data-tag":"常规文本",children:a.date})]}),s.jsx("ul",{className:"list-disc list-inside text-gray-700 space-y-1",children:a.features.map((n,i)=>s.jsx("li",{"data-tag":"常规文本",children:n},i))})]},a.version))})]})]})]}),Eg=({closeModal:t,uiStyle:e="default"})=>s.jsxs("div",{className:"fixed inset-0 z-40 flex items-center justify-center","data-tag":"图形",children:[s.jsx("div",{className:"absolute inset-0 bg-transparent backdrop-blur-md","data-tag":"图形"}),s.jsxs("div",{className:"rounded-xl p-6 shadow-2xl relative z-10 w-[90vw] h-[90vh] max-w-[800px]",style:{...e==="liquid-glass"?{background:"#FFFFFF2A",border:"1px solid #FFFFFF33",backdropFilter:"blur(10px) saturate(1.35)",boxShadow:`
              0 8px 24px #20268833,
              inset 0px 0px 10px #FFFFFF1A,
              inset -3px 3px 4px #FFFFFF10,
              inset -0.5px 0.5px 0px #FFFFFF60
            `}:e==="acrylic"?{background:"#FFFFFFB0",backdropFilter:"blur(20px)",border:"none",boxShadow:"0px 2px 12px rgba(0,0,0,.1)"}:{background:"white",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.1)"}},"data-tag":"图形",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-2xl font-bold text-gray-900","data-tag":"常规文本",children:"游戏简介"}),s.jsx("button",{className:"text-gray-500 hover:text-gray-900 transition-colors text-xl",onClick:t,"data-tag":"按钮",children:"✕"})]}),s.jsxs("div",{className:"overflow-y-auto h-[calc(100%-80px)] pr-2 scroll-smooth",children:[s.jsx("style",{children:`
            .scroll-smooth {
              scroll-behavior: smooth;
              overscroll-behavior: contain;
              scrollbar-width: thin;
              scrollbar-color: rgba(158, 158, 158, 0.5) rgba(232, 232, 232, 0.5);
            }
            
            .scroll-smooth::-webkit-scrollbar {
              width: 6px;
            }
            
            .scroll-smooth::-webkit-scrollbar-track {
              background: rgba(232, 232, 232, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb {
              background: rgba(158, 158, 158, 0.5);
              border-radius: 3px;
            }
            
            .scroll-smooth::-webkit-scrollbar-thumb:hover {
              background: rgba(158, 158, 158, 0.8);
            }
          `}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"text-xl font-bold text-gray-800 mb-3",children:"关于 Bloom Era Sim"}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:"Bloom Era Simulator 是一款生活模拟游戏，让你重写自己的青少年时代。在这个沉浸式的第二次机会故事中，你将面对学校的压力，在考试中取得优异成绩，建立友谊，并让每一个选择都发挥重要作用。你的时代，由你掌控。"}),s.jsx("p",{className:"text-gray-700 leading-relaxed mt-3",children:"游戏特色："}),s.jsxs("ul",{className:"list-disc list-inside text-gray-700 space-y-1 mt-2",children:[s.jsx("li",{children:"真实的青少年生活模拟"}),s.jsx("li",{children:"多样化的选择和后果"}),s.jsx("li",{children:"学习和考试系统"}),s.jsx("li",{children:"社交关系管理"}),s.jsx("li",{children:"成就系统"}),s.jsx("li",{children:"多种难度设置"}),s.jsx("li",{children:"精美而流畅的用户界面"})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-xl font-bold text-gray-800 mb-3",children:"游戏目标"}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:"在 Bloom Era Sim 中，你的目标是通过明智的选择和努力，创造一个成功而充实的青少年时代。你可以专注于学业，成为一名学术精英；或者发展广泛的社交网络，建立深厚的友谊；或者在各个方面取得平衡，追求全面发展。"}),s.jsx("p",{className:"text-gray-700 leading-relaxed mt-3",children:"每一个决定都会影响你的未来，所以请谨慎选择，创造属于你的完美时代！"})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-xl font-bold text-gray-800 mb-3",children:"鸣谢"}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:"感谢OIerZhang制作的css脚本Smart Hoj 26带来的ui风格设计"})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-xl font-bold text-gray-800 mb-3",children:"许可证"}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:"Bloom Era Sim 是一个开源项目，使用 MIT 许可证。你可以自由地使用、修改和分发这个项目，只要保留原始的许可证和版权声明。"})]})]})]})]})]}),Qa=[{id:"quick_learner",name:"快速学习",description:"学习效率提高20%",effect:{study_efficiency:.2},cost:3},{id:"mental_strength",name:"意志力强",description:"心态下降速度减慢",effect:{mental:10},cost:2},{id:"social_butterfly",name:"社交达人",description:"社交活动效果增强",effect:{social:15},cost:2},{id:"healthy_lifestyle",name:"健康生活",description:"健康值自然恢复速度加快",effect:{health:10},cost:2},{id:"frugal",name:"勤俭节约",description:"花钱更少",effect:{money:50},cost:1},{id:"procrastination",name:"拖延症",description:"学习和社交能力下降，但获得额外天赋点",effect:{academic:-10,social:-10},cost:-2},{id:"laziness",name:"懒惰",description:"健康和心态下降，但获得额外天赋点",effect:{health:-10,mental:-10},cost:-2},{id:"spendthrift",name:"挥霍无度",description:"金钱减少，但获得额外天赋点",effect:{money:-100},cost:-1},{id:"perfectionist",name:"完美主义",description:"心态波动较大，但获得额外天赋点",effect:{mental:-15},cost:-3}],Fu=[{name:"普通",description:"平衡的游戏体验，适合大多数玩家",starting_stats:{mental:80,health:80,academic:60,social:60,money:300},talent_points:10,event_frequency:1,study_efficiency:1,mental_decay:1},{name:"现实",description:"极限挑战，适合经验丰富的玩家",starting_stats:{mental:40,health:40,academic:40,social:40,money:100},talent_points:2,event_frequency:1.5,study_efficiency:.6,mental_decay:1.5}],Tg=()=>{const t=[{subject:"数学",difficulty:"easy"},{subject:"物理",difficulty:"medium"},{subject:"化学",difficulty:"medium"},{subject:"英语",difficulty:"easy"},{subject:"语文",difficulty:"medium"},{subject:"生物",difficulty:"easy"}],e=t[Math.floor(Math.random()*t.length)],l=Math.floor(Math.random()*3)+1;return{id:`study_${e.subject.toLowerCase()}_${Date.now()}`,title:`${e.subject}学习`,description:`你花了${l}小时学习${e.subject}，感觉如何？`,type:"semester",choices:[{id:"focus",text:"全神贯注",effect:{academic:e.difficulty==="easy"?8:12,mental:-l*2,study_time:l*60}},{id:"distracted",text:"分心走神",effect:{academic:e.difficulty==="easy"?3:5,mental:-l,study_time:l*60}},{id:"give_up",text:"半途而废",effect:{academic:1,mental:-l*3}}]}},_g=()=>{const t=[Tg],e=t[Math.floor(Math.random()*t.length)];return e()},Mg=[{id:"placeholder",name:"占位状态",description:"系统占位状态，无实际效果",type:"NEUTRAL",duration:1,icon:"❓",effectDescription:"无效果"},{id:"anxiety",name:"焦虑",description:"持续4周，降低心态和学习效率",type:"DEBUFF",duration:4,icon:"😰",effectDescription:"心态 -10%，学习效率 -20%"},{id:"sleep_compulsion",name:"睡眠强迫",description:"挑战模式特有，强制睡眠需求",type:"NEUTRAL",duration:999,icon:"😴",effectDescription:"每周必须选择睡眠活动"},{id:"debt_level_1",name:"轻微债务",description:"负债程度较低，轻微影响心态",type:"DEBUFF",duration:999,icon:"💸",effectDescription:"心态 -5%"}],Og=t=>Mg.find(e=>e.id===t),Dg=(t,e)=>{const l=Og(t);if(l)return{...l,duration:e||l.duration}},f0=(t,e,l)=>{const a=Dg(e,l);if(!a)return t;const n=t.activeStatuses.findIndex(u=>u.id===a.id);let i;return n>=0?(i=[...t.activeStatuses],i[n]={...i[n],duration:a.duration}):i=[...t.activeStatuses,a],{...t,activeStatuses:i}},Cg=t=>{const e=t.activeStatuses.map(l=>({...l,duration:l.duration-1})).filter(l=>l.duration>0);return{...t,activeStatuses:e}},Ug=t=>{const e=t.money;let l={...t,activeStatuses:t.activeStatuses.filter(a=>!a.id.startsWith("debt_"))};return e<0&&e>=-100&&(l=f0(l,"debt_level_1")),l},wg=(t,e)=>{if(!Qa.find(n=>n.id===e)||t.selected_talents.includes(e))return t;const a=[...t.selected_talents,e];return{...t,selected_talents:a}},Hg=(t,e)=>{const l=t.selected_talents.filter(a=>a!==e);return{...t,selected_talents:l}},Bg=(t,e)=>t.selected_talents.includes(e),Rg=(t,e)=>{const l=Qa.find(a=>a.id===e);return l?t.talent_points>=l.cost:!1},Dn={mental:80,health:80,academic:60,social:60,money:300,study_time:0,talent_points:3,selected_talents:[],joined_clubs:[],activeStatuses:[],game_day:1,play_time:0,difficulty:"普通"},qg=()=>{const[t,e]=E.useState("home"),[l,a]=E.useState(!1),[n,i]=E.useState(null),[u,c]=E.useState(null),[f,h]=E.useState(Dn),[x,b]=E.useState([]),[o,d]=E.useState(!1),S=E.useCallback(v=>{i(v),a(!0)},[]),N=E.useCallback(()=>{a(!1),i(null)},[]),U=E.useCallback(v=>{const j=Fu.find(F=>F.name===v);j&&(h({...Dn,mental:j.starting_stats.mental,health:j.starting_stats.health,academic:j.starting_stats.academic,social:j.starting_stats.social,money:j.starting_stats.money,talent_points:j.talent_points,difficulty:j.name}),e("talent"))},[]),m=E.useCallback(v=>{h(j=>{const F=Fu.find(ce=>ce.name===j.difficulty),w=(F==null?void 0:F.talent_points)||3,P=v.reduce((ce,Ee)=>{const Ot=Qa.find(Nl=>Nl.id===Ee);return ce+((Ot==null?void 0:Ot.cost)||0)},0),ll=w-P;return{...j,selected_talents:v,talent_points:ll}})},[]),r=E.useCallback(v=>{U(v)},[U]),g=E.useCallback(()=>{e("home"),h(Dn),b([]),d(!1),c(null)},[]),p=E.useCallback(v=>{h(j=>({...j,mental:Math.max(0,Math.min(100,j.mental+(v.mental||0))),health:Math.max(0,Math.min(100,j.health+(v.health||0))),academic:Math.max(0,Math.min(200,j.academic+(v.academic||0))),social:Math.max(0,Math.min(100,j.social+(v.social||0))),money:Math.max(0,j.money+(v.money||0)),study_time:j.study_time+(v.study_time||0)}))},[]),A=E.useCallback(v=>{p(v.effect),c(null),T()},[p]),O=E.useCallback((v,j)=>{const F={subject:"综合",score:v,rank:j,date:new Date().toISOString().split("T")[0]};b(w=>[...w,F]),e("game")},[]),z=E.useCallback(()=>{const v={mental:Math.floor(Math.random()*10)-2,health:Math.floor(Math.random()*10)-2,academic:Math.floor(Math.random()*10)-2,social:Math.floor(Math.random()*10)-2,money:Math.floor(Math.random()*50)-20,study_time:Math.floor(Math.random()*120)};p(v),T()},[p]),T=E.useCallback(()=>{h(v=>{const j=v.game_day+1;let F={...v,game_day:j,mental:Math.max(0,Math.min(100,v.mental+2-1)),health:Math.max(0,Math.min(100,v.health+1-.5)),academic:Math.max(0,v.academic-.5),social:Math.max(0,v.social-.5),money:Math.max(0,v.money-5)};if(j%7===0&&(F=Cg(F),F=Ug(F)),j>365&&(d(!0),e("ending")),Math.random()<.3&&!u){const w=_g();c(w)}return j%30===0&&e("exam"),F})},[u]),D=E.useCallback(()=>{e("home"),h(Dn),b([]),d(!1),c(null)},[]),_=E.useCallback(()=>{g()},[g]),yt=E.useCallback((v,j)=>{h(F=>f0(F,v,j))},[]),Mt=E.useCallback(v=>{h(j=>{const F=wg(j,v),w=Qa.find(P=>P.id===v);return w?{...F,talent_points:Math.max(0,F.talent_points-w.cost)}:F})},[]),zl=E.useCallback(v=>{h(j=>Hg(j,v))},[]),ha=E.useCallback(v=>Bg(f,v),[f]),el=E.useCallback(v=>Rg(f,v),[f]);return E.useEffect(()=>{const v=setInterval(()=>{h(j=>({...j,play_time:j.play_time+1}))},6e4);return()=>clearInterval(v)},[]),{currentPage:t,showModal:l,currentModal:n,currentEvent:u,playerState:f,examResults:x,isGameOver:o,setCurrentPage:e,openModal:S,closeModal:N,handleStartGame:r,handleBackToHome:g,handleDifficultySelect:U,handleTalentSelect:m,handleEventChoice:A,handleExamComplete:O,handleWeekendActivity:z,handleRestart:D,handleMainMenu:_,advanceGameDay:T,addStatus:yt,addTalent:Mt,removeTalent:zl,hasTalent:ha,canAffordTalent:el,availableTalents:Qa,availableDifficulties:Fu}},Yg=[{version:"v.0.2",date:"2026-02-08",features:["大幅优化了渲染逻辑","大幅提升流畅度，降低性能开销"]},{version:"v0.1",date:"2026-02-04",features:["完成了主界面搭建"]}];function Gg(){const{currentPage:t,showModal:e,currentModal:l,playerState:a,examResults:n,setCurrentPage:i,openModal:u,closeModal:c,handleDifficultySelect:f,handleTalentSelect:h,handleExamComplete:x,handleRestart:b,handleMainMenu:o,availableTalents:d}=qg(),[S,N]=E.useState(null),[U,m]=E.useState(!1),[r,g]=E.useState(""),[p,A]=E.useState(Ea("")),[O,z]=E.useState(!1),[T,D]=E.useState(null),[_,yt]=E.useState("default"),[Mt,zl]=E.useState("default");E.useEffect(()=>{S&&A(Ea(S))},[S]);const ha=(w,P)=>{if(S&&vg(S,w,P)){A(Ea(S));const Ee=Ea(S).find(Ot=>Ot.id===w);Ee&&(D(Ee),z(!0),setTimeout(()=>{z(!1)},3e3))}};E.useEffect(()=>{t==="game"&&a.difficulty==="现实"&&ha("regular-first",a.difficulty)},[t,a.difficulty]),E.useEffect(()=>{const w=localStorage.getItem("bloomEraSimUserName");w?N(w):m(!0)},[]);const el=w=>{w.trim()&&(N(w.trim()),localStorage.setItem("bloomEraSimUserName",w.trim()),m(!1))},v=()=>{i("game")},j=()=>{switch(t){case"home":return s.jsx(Pf,{onDifficultySelect:f,onLoadGame:v,onStartGame:()=>{},userName:S||"",uiStyle:_,onOpenModal:w=>u(w)});case"talent":return s.jsx(fg,{onBack:()=>i("home"),onContinue:()=>i("game"),onTalentSelect:h,talents:d,availableTalentPoints:a.talent_points,selectedTalents:a.selected_talents,uiStyle:_});case"exam":return s.jsx(rg,{subject:"综合",difficulty:"medium",academicLevel:a.academic,studyTime:a.study_time,onExamComplete:x,onCancel:()=>i("game"),uiStyle:_});case"ending":return s.jsx(gg,{finalStats:a,achievements:p,examResults:n,playTime:a.play_time,onRestart:b,onMainMenu:o,uiStyle:_});case"game":return s.jsx(hg,{onBackToHome:o,uiStyle:_});default:return s.jsx(Pf,{onDifficultySelect:f,onLoadGame:v,onStartGame:()=>{},userName:S||"",uiStyle:_})}},F=()=>{switch(Mt){case"default":return"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";case"deep":return"linear-gradient(135deg, #667eea 0%, #764ba2 100%)";case"vibrant":return"linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)";case"fresh":return"linear-gradient(135deg, #4ecdc4 0%, #45b7d1 100%)";case"energetic":return"linear-gradient(135deg, #ffa726 0%, #9ccc65 100%)";default:return"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"}};return s.jsxs("div",{className:"app-container",style:{position:"relative",minHeight:"100vh",width:"100%",overflow:"hidden",background:F(),transition:"background 0.5s ease"},children:[s.jsx("button",{className:"global-settings-button",onClick:()=>u("settings"),"data-tag":"按钮","aria-label":"设置",style:{position:"fixed",top:"20px",right:"20px",backgroundColor:"transparent",border:"none",zIndex:"10",cursor:"pointer",padding:"8px",transition:"transform 0.3s ease"},children:s.jsx("span",{className:"text-3xl","data-tag":"按钮",style:{fontSize:"1.8rem"},children:"⚙️"})}),j(),U&&s.jsx(bg,{nicknameInput:r,setNicknameInput:g,saveUserName:el,uiStyle:_}),e&&l==="settings"&&s.jsx(pg,{closeModal:c,uiStyle:_,setUiStyle:yt,backgroundTheme:Mt,setBackgroundTheme:zl}),e&&l==="achievements"&&s.jsx(Ng,{achievements:p,closeModal:c,uiStyle:_}),e&&l==="version"&&s.jsx(Fg,{versions:Yg,closeModal:c,uiStyle:_}),e&&l==="about"&&s.jsx(Eg,{closeModal:c,uiStyle:_}),O&&T&&s.jsx(Ag,{achievement:T,onClose:()=>z(!1),uiStyle:_})]})}sg.createRoot(document.getElementById("root")).render(s.jsx(T0.StrictMode,{children:s.jsx(Gg,{})}));
