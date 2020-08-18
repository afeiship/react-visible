import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import ReactAppendToDocument from '@feizheng/react-append-to-document';
import nxUpdateStateValue from '@feizheng/next-update-state-value';

const CLASS_NAME = 'react-visible';
const UNDEFINED = 'undefined';
const VISIBLE_ROOT_CLASS = 'react-visible-root-container';

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
     * If element destroyed when visible to false.
     */
    destroyable: PropTypes.bool,
    /**
     * If attach the visible element to document root or a container.
     */
    rootable: PropTypes.bool,
    /**
     * The handler when visible changed, default is `noop` function, present or dismiss action will trigger.
     */
    onChange: PropTypes.func,
    /**
     * The handler when present.
     */
    onPresent: PropTypes.func,
    /**
     * The handler when dismiss.
     */
    onDismiss: PropTypes.func
  };

  static defaultProps = {
    onChange: noop,
    onPresent: noop,
    onDismiss: noop,
    destroyable: false,
    rootable: false
  };

  static VISIBLE_ROOT_CLASS = VISIBLE_ROOT_CLASS;

  static create(inComponent, inProps) {
    return ReactAppendToDocument.append(inComponent, inProps, {
      className: VISIBLE_ROOT_CLASS
    });
  }

  get root() {
    return document.body;
  }

  get visibleElementView() {
    // @template: need to implement.
    return null;
  }

  constructor(inProps) {
    const {
      destroyable,
      value,
      children,
      onPresent,
      onDismiss,
      onChange
    } = inProps;
    super(inProps);
    this.state = {
      value,
      children,
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
    nxUpdateStateValue(this, 'children', { props: inNextProps });
    nxUpdateStateValue(this, 'value', {
      props: inNextProps,
      callback: (_, val) => {
        if (val) {
          this.setState({ hidden: false });
          this.updateDestroyValue(value);
        }
      }
    });
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
    const { rootable } = this.props;
    const visibleElement = this.visibleElementView;
    if (!destroyValue) return null;
    if (rootable) return ReactDOM.createPortal(visibleElement, this.root);
    return <Fragment>{visibleElement}</Fragment>;
  }
}
