!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactVisible=t(require("classnames"),require("react")):e.ReactVisible=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o);t.default=r.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(3),l=(i(c),n(2)),f=(i(l),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onTransitionEnd=function(){var e=n.state.visible;n.setState({animating:!1},function(){!e&&n.setState({hidden:!0}),n._callback()})},n.state={animating:!1,visible:e.visible,hidden:!e.visible},n._callback=null,n}return s(t,e),u(t,[{key:"show",value:function(e){var t=this;this._callback=e,this.setState({hidden:!1,animating:!0,visible:!1},function(){setTimeout(function(){t.setState({visible:!0})})})}},{key:"hide",value:function(e){var t=this;this._callback=e,this.setState({animating:!0},function(){setTimeout(function(){t.setState({visible:!1})})})}},{key:"render",value:function(){var e=this.state,t=e.visible,n=(e.animating,e.hidden),i=this.props,r=i.nodeName,a=o(i,["nodeName"]);delete a.visible;var s=Object.assign(a,{"data-visible":t,hidden:n,onTransitionEnd:this._onTransitionEnd});return(0,c.createElement)(r,s)}}]),t}(c.PureComponent));f.propTypes={nodeName:c.PropTypes.string,visible:c.PropTypes.bool},f.defaultProps={nodeName:"div",visible:!1},t.default=f},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-visible.js.map