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

  execCallback(){
    if(this._callback && typeof this._callback === 'function'){
      this._callback();
    }

    console.log('exec callback',this);
  }

  show(inCallback){
    const {visible} = this.state;
    this._callback = inCallback;
    !visible && this.setState({ animating:true, hidden:false },()=>{
      clearTimeout(this._timer);
      this._timer = setTimeout(()=>{
        this.mounted && this.setState({ visible:true });
      });
    });
  }

  hide(inCallback){
    const {visible} = this.state;
    this._callback = inCallback;
    if(this.mounted){
      this.setState({ visible:false });
    }
  }

  _onTransitionEnd = (inEvent) => {
    const {visible,animating}  = this.state;
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
