!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","noop","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactVisible=t(require("classnames"),require("noop"),require("prop-types"),require("react"),require("react-dom")):e.ReactVisible=t(e.classnames,e.noop,e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,o,n,r){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),a=n(r);t.default=a.default},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(5),d=n(p),y=o(6),b=(n(y),o(4)),v=n(b),h=o(2),m=(n(h),o(3)),_=n(m),k="object",j={},x=(s=i=function(e){function t(e){r(this,t);var o=e.value,n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onAnimationEnd=function(e){n.onAnimationEnd()},n.state={value:o,hidden:!o,destroyValue:!0},n}return u(t,e),f(t,[{key:"backdropView",get:function(){var e=this.props.backdrop,t=this.state,o=t.value,n=t.hidden,r=("undefined"==typeof e?"undefined":c(e))===k?e:j;return!!e&&d.default.createElement("div",l({hidden:n,"data-visible":o,className:"webkit-sassui-backdrop"},r))}},{key:"visibleElementView",get:function(){return null}}]),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&(t&&this.setState({hidden:!1}),this.setState({value:t}))}},{key:"present",value:function(){this.setState({destroyValue:!0,hidden:!1,value:!0})}},{key:"dismiss",value:function(){this.setState({value:!1})}},{key:"updateDestroyValue",value:function(){var e=this.props.destroyable,t=this.state.value;this.setState({destroyValue:!e||t})}},{key:"onAnimationEnd",value:function(){var e=this.state.value,t=this.props.onChange;!e&&this.setState({hidden:!0}),this.updateDestroyValue(),t({target:{value:e}})}},{key:"render",value:function(){var e=this.state.destroyValue;return e&&d.default.createElement(p.Fragment,null,this.visibleElementView,this.backdropView)}}]),t}(d.default.Component),i.propTypes={className:v.default.string,value:v.default.bool,onChange:v.default.func,destroyable:v.default.bool,backdrop:v.default.oneOfType([v.default.bool,v.default.object])},i.defaultProps={className:"",value:!1,onChange:_.default,backdrop:!0,destroyable:!1},s);t.default=x},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-visible.js.map