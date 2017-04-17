!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","react"],t):"object"==typeof exports?exports.ReactVisible=t(require("classnames"),require("noop"),require("react")):e.ReactVisible=t(e.classnames,e.noop,e.react)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i);t.default=r.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),c=(o(l),n(2)),f=(o(c),n(3)),p=o(f),d=function(e){function t(e){r(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onTransitionEnd=function(){var e=n.state.visible;!e&&n.setState({hidden:!0}),n._callback()},n.state={visible:e.visible,hidden:!e.visible},n._callback=p.default,n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentWillReceiveProps",value:function(e){var t=e.visible;"boolean"==typeof t&&(t?this.show():this.hide())}}]),u(t,[{key:"show",value:function(e){var t=this,n=this.state.visible;this._callback=e||p.default,!n&&this.setState({hidden:!1},function(){setTimeout(function(){t.mounted&&t.setState({visible:!0})})})}},{key:"hide",value:function(e){this.state.visible;this._callback=e||p.default,this.mounted&&this.setState({visible:!1})}},{key:"render",value:function(){var e=this.state.hidden,t=this.props,n=t.nodeName,o=(t.visible,i(t,["nodeName","visible"])),r=Object.assign(o,{"data-visible":this.state.visible,ref:"root",hidden:e,onTransitionEnd:this._onTransitionEnd});return(0,l.createElement)(n,r)}}]),t}(l.PureComponent);d.propTypes={nodeName:l.PropTypes.string,visible:l.PropTypes.bool},d.defaultProps={nodeName:"div",visible:!1},t.default=d},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-visible.js.map