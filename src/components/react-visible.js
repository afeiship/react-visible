// import './style.scss';
import React,{createElement,PureComponent,PropTypes} from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{
  static propTypes = {
    nodeName:PropTypes.string,
    visible:PropTypes.bool
  }

  static defaultProps = {
    nodeName:'div',
    visible:false,
  }

  constructor(props){
    super(props);
    this.state = {
      animating:false,
      visible:props.visible,
      hidden:!props.visible
    };
    this._callback = noop;
  }

  show(inCallback){
    this._callback = inCallback || noop;
    this.setState({ hidden:false, animating:true, visible:false },()=>{
      setTimeout(()=>{
        this.setState({visible:true});
      });
    });
  }

  hide(inCallback){
    this._callback = inCallback || noop;
    this.setState({ animating:true },()=>{
      setTimeout(()=>{
        this.setState({visible:false});
      });
    });
  }

  _onTransitionEnd = () => {
    const {visible}  = this.state;
    this.setState({
      animating:false
    },()=>{
      !visible && this.setState({hidden:true});
      this._callback();
    });
  };

  render(){
    const { visible, hidden} = this.state;
    const { nodeName,...props} = this.props;
    delete props.visible;
    const options = Object.assign(props,{
      'data-visible':visible,
      hidden,
      onTransitionEnd:this._onTransitionEnd
    });
    return createElement(nodeName,options);
  }
}
