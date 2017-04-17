!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","react"],t):"object"==typeof exports?exports.ReactVisible=t(require("classnames"),require("noop"),require("react")):e.ReactVisible=t(e.classnames,e.noop,e.react)}(this,function(e,t,n){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o);t.default=r.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f=n(4),p=(i(f),n(2)),d=(i(p),n(3)),b=(i(d),c=u=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onTransitionEnd=function(e){var t=n.state.visible;n.setState({animating:!1},function(){!t&&n.setState({hidden:!0}),n._callback&&n._callback()})},n.state={visible:e.visible,hidden:!e.visible,animating:!1},n._callback=null,n}return s(t,e),l(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentWillReceiveProps",value:function(e){var t=e.visible;"boolean"==typeof t&&(t?this.show():this.hide())}}]),l(t,[{key:"show",value:function(e){var t=this,n=this.state.visible;this._callback=e,!n&&this.setState({animating:!0,hidden:!1},function(){setTimeout(function(){t.mounted&&t.setState({visible:!0})})})}},{key:"hide",value:function(e){this.state.visible;this._callback=e,this.mounted&&this.setState({visible:!1})}},{key:"render",value:function(){var e=this.state.hidden,t=this.props,n=t.nodeName,i=(t.visible,t.animating,o(t,["nodeName","visible","animating"])),r=Object.assign(i,{"data-visible":this.state.visible,hidden:e,onTransitionEnd:this._onTransitionEnd});return(0,f.createElement)(n,r)}}]),t}(f.PureComponent),u.propTypes={nodeName:f.PropTypes.string,visible:f.PropTypes.bool},u.defaultProps={nodeName:"div",visible:!1,animating:!1},c);t.default=b},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-visible.js.map