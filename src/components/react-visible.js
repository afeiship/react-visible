import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

const OBJECT = 'object';
const EMPTY_OBJECT = {};

export default class extends React.Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    destroyable: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true,
    destroyable: false
  };
  /*===properties end===*/

  get backdropView() {
    const { backdrop } = this.props;
    const { value, hidden } = this.state;
    const bakcdropProps = typeof backdrop === OBJECT ? backdrop : EMPTY_OBJECT;

    return !!backdrop && (
      <div
        hidden={hidden}
        data-visible={value}
        className="webkit-sassui-backdrop"
        {...bakcdropProps}
      />
    );
  }

  get visibleElementView() {
    return null;
  }

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
    this.state = {
      value,
      hidden: !value,
      destroyValue: true
    };
    this.componentDidInit();
  }

  componentDidInit(){}

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      if (value) {
        this.setState({ hidden: false })
      }
      this.setState({ value });
    }
  }

  present() {
    this.setState({ destroyValue: true, hidden: false, value: true })
  }

  dismiss() {
    this.setState({ value: false });
  }

  updateDestroyValue() {
    const { destroyable } = this.props;
    const { value } = this.state;
    this.setState({
      destroyValue: destroyable ? value : true
    });
  }

  onAnimationEnd() {
    const { value } = this.state;
    const { onChange } = this.props;
    !value && this.setState({ hidden: true });
    this.updateDestroyValue();
    onChange({ target: { value } });
  }

  _onAnimationEnd = (inEvent) =>{
    this.onAnimationEnd();
  };

  render() {
    const { destroyValue } = this.state;
    return (
      destroyValue && <Fragment>
        {this.visibleElementView}
        {this.backdropView}
      </Fragment>
    );
  }
}

