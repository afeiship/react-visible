import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import 'next-return-event';

const IMPL_ERROR_MSG = 'Render method must be implement!';

export default class ReactBackdrop extends Component {
  /*===properties start===*/
  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    onChange: noop,
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value,
      hidden: !value
    };
    this._callback = noop;
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.visible(value);
    }
  }

  componentWillUnmount() {
    this._callback = null;
  }

  then(inCallback) {
    this._callback = inCallback;
  }

  show() {
    this.setState({ hidden: false, value: true });
    return this;
  }

  hide() {
    this.setState({ value: false });
    return this;
  }

  visible(inValue) {
    return inValue ? this.show() : this.hide();
  }

  toggle() {
    const { value } = this.state;
    return this.visible(!value);
  }

  onAnimationEnd = e => {
    const { value } = this.state;
    const target = nx.returnEventTarget(value);
    !value && this.setState({ hidden: true });
    this.props.onChange(target);
    this._callback(target);
  };

  render() {
    throw new Error(IMPL_ERROR_MSG);
    return null;
  }
}
