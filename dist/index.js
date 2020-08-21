!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactVisible=t():e.ReactVisible=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@feizheng/noop")},function(e,t){e.exports=require("@feizheng/next-update-state-value")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@feizheng/react-append-to-document")},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";n.r(t),n.d(t,"Controller",(function(){return _}));var r=n(1),o=n.n(r),i=n(4),u=n.n(i),a=n(0),c=n.n(a),s=(n(6),n(2)),l=n.n(s),f=n(5),p=n.n(f),y=n(3),b=n.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(n,e);var t=P(n);function n(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=e.destroyable,i=e.value;return(r=t.call(this,e)).handleAnimationEnd=function(e){r.animationEnd(e)},r.state=v(v({},r.initialState),{},{hidden:!i,destroyValue:!o||i}),r}return O(n,[{key:"root",get:function(){return document.body}},{key:"visibleElementView",get:function(){return null}},{key:"initialState",get:function(){var e=this.props;return{value:e.value,children:e.children,onPresent:e.onPresent,onDismiss:e.onDismiss,onChange:e.onChange}}}],[{key:"create",value:function(e,t){return p.a.append(e,t,{className:"react-visible-root-container"})}}]),O(n,[{key:"shouldComponentUpdate",value:function(e){var t=this,n=e.value;return"undefined"===d(n)||(b()(this,"children",{props:e}),b()(this,"value",{props:e,callback:function(e,r){r&&(t.setState({hidden:!1}),t.updateDestroyValue(n))}})),!0}},{key:"toggle",value:function(){var e=this.state.value,t=e?"dismiss":"present";return this[t].apply(this,arguments)}},{key:"present",value:function(e,t){var n=e||this.state.onPresent;this.setState(v(v({},this.initialState),{},{destroyValue:!0,hidden:!1,value:!0,onPresent:n},t))}},{key:"dismiss",value:function(e,t){var n=e||this.state.onDismiss;this.setState(v({value:!1,onDismiss:n},t))}},{key:"updateDestroyValue",value:function(e){var t=this.props.destroyable;this.setState({destroyValue:!t||e})}},{key:"animationEnd",value:function(){var e=this.state,t=e.value,n=e.onPresent,r=e.onDismiss,o=e.onChange,i={target:{value:t}};!t&&this.setState({hidden:!0}),this.updateDestroyValue(t),t&&n(i),!t&&r(i),o(i)}},{key:"render",value:function(){var e=this.state.destroyValue,t=this.props.rootable,n=this.visibleElementView;return e?t?u.a.createPortal(n,this.root):o.a.createElement(r.Fragment,null,n):null}}]),n}(r.Component);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}k.displayName="react-visible",k.version="1.0.13",k.propTypes={className:c.a.string,value:c.a.bool,destroyable:c.a.bool,rootable:c.a.bool,onChange:c.a.func,onPresent:c.a.func,onDismiss:c.a.func},k.defaultProps={onChange:l.a,onPresent:l.a,onDismiss:l.a,destroyable:!1,rootable:!1},k.VISIBLE_ROOT_CLASS="react-visible-root-container";var _=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k.create(t,n).then((function(e){r.instance=e,r.component=e.component}))}return D(e,null,[{key:"createInstance",value:function(e,t,n){var r=Object.getOwnPropertyNames(this.prototype).filter((function(e){return"constructor"!==e})),o=new this(e,t),i=n?e:o;return n&&r.forEach((function(t){return e[t]=function(){o[t].apply(o,arguments)}})),i}}]),D(e,[{key:"present",value:function(e,t){this.component.present(e,t)}},{key:"dismiss",value:function(e,t){this.component.dismiss(e,t)}},{key:"toggle",value:function(e,t){this.component.toggle(e,t)}},{key:"destroy",value:function(){this.instance.destroy(),this.instance=null}}]),e}();t.default=k}])}));
//# sourceMappingURL=index.js.map