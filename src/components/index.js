import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import ReactAppendToDocument from '@feizheng/react-append-to-document';

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
     * The handler when present.
     */
    onPresent: PropTypes.func,
    /**
     * The handler when dismiss.
     */
    onDismiss: PropTypes.func,
    /**
     * If element destroyed when visible to false.
     */
    destroyable: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    onPresent: noop,
    onDismiss: noop,
    destroyable: false
  };

  static create(inComponent, inProps) {
    return ReactAppendToDocument.append(inComponent, inProps, {
      className: 'react-visible-root-container'
    });
  }

  get visibleElementView() {
    // @template: need to implement.
    return null;
  }

  constructor(inProps) {
    const { destroyable, value, onPresent, onDismiss, onChange } = inProps;
    super(inProps);
    this.state = {
      value,
      onPresent,
      onDismiss,
      onChange,
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

  present(inCallback, inOptions) {
    const onPresent = inCallback || this.state.onPresent;
    this.setState({
      destroyValue: true,
      hidden: false,
      value: true,
      onPresent,
      ...inOptions
    });
  }

  dismiss(inCallback, inOptions) {
    const onDismiss = inCallback || this.state.onDismiss;
    this.setState({
      value: false,
      onDismiss,
      ...inOptions
    });
  }

  updateDestroyValue(inValue) {
    const { destroyable } = this.props;
    this.setState({
      destroyValue: destroyable ? inValue : true
    });
  }

  animationEnd() {
    const { value, onPresent, onDismiss, onChange } = this.state;
    !value && this.setState({ hidden: true });
    this.updateDestroyValue(value);
    value && onPresent();
    !value && onDismiss();
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
