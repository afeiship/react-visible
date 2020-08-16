import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';

const CLASS_NAME = 'react-visible';
const UNDEFINED = 'undefined';

export default class ReactVisible extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Abstract visible value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If element destroyed when visible to false.
     */
    destroyable: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    destroyable: false
  };

  get visibleElementView() {
    // @template: need to implement.
    return null;
  }

  constructor(inProps) {
    const { destroyable, value } = inProps;
    super(inProps);
    this.state = {
      value,
      hidden: !value,
      destroyValue: destroyable ? value : true
    };
  }

  shouldComponentUpdate(inNextProps) {
    const { value } = inNextProps;
    if (typeof value === UNDEFINED) return true;
    if (value !== this.state.value) {
      if (value) {
        this.setState({ hidden: false });
        this.updateDestroyValue(value);
      }
      this.setState({ value });
    }
    return true;
  }

  present() {
    this.setState({ destroyValue: true, hidden: false, value: true });
  }

  dismiss() {
    this.setState({ value: false });
  }

  updateDestroyValue(inValue) {
    const { destroyable } = this.props;
    this.setState({
      destroyValue: destroyable ? inValue : true
    });
  }

  animationEnd() {
    const { value } = this.state;
    const { onChange } = this.props;
    !value && this.setState({ hidden: true });
    this.updateDestroyValue(value);
    onChange({ target: { value } });
  }

  handleAnimationEnd = (inEvent) => {
    this.animationEnd(inEvent);
  };

  render() {
    const { destroyValue } = this.state;
    if (!destroyValue) return null;
    return <Fragment>{this.visibleElementView}</Fragment>;
  }
}
