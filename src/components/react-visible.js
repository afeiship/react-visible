import React,{PureComponent, createElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class ReactVisible extends PureComponent{
  static propTypes = {
    nodeName:PropTypes.string,
    visible:PropTypes.bool
  }

  static defaultProps = {
    nodeName:'div',
    visible:false,
    animating:false
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentWillReceiveProps(nextProps){
    const visible = nextProps.visible;
    const hidden = nextProps.hidden;
    if(typeof visible === 'boolean'){
      visible ? this.show() : this.hide();
    }
  }

  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      hidden:!props.visible,
      animating:false
    };
    this._callback = null;
  }

  show(inCallback){
    const {visible} = this.state;
    this._callback = inCallback;
    !visible && this.setState({ animating:true, hidden:false },()=>{
      setTimeout(()=>{
        this.mounted && this.setState({ visible:true });
      });
    });
  }

  execCallback(){
    if(this._callback && typeof this._callback === 'function'){
      this._callback();
    }
  }

  hide(inCallback){
    const {visible,animating} = this.state;
    this._callback = inCallback;
    if(this.mounted){
      this.setState({ visible:false },()=>{
        animating && this.setState({hidden:true , animating: false},()=>{
          this.execCallback();
        });
      });
    }
  }

  _onTransitionEnd = (inEvent) => {
    const {visible}  = this.state;
    this.setState({ animating:false },()=>{
      !visible && this.setState({ hidden:true });
      this.execCallback();
    });
  };

  render(){
    const { hidden } = this.state;
    const { nodeName,visible,animating,...props } = this.props;
    const options = {
      'data-visible':this.state.visible,
      hidden,
      onTransitionEnd:this._onTransitionEnd,
      ...props
    };
    return createElement(nodeName,options);
  }
}
