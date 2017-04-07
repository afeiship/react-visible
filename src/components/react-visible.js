// import './style.scss';
import React,{createElement,PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

export default class ReactVisiable extends PureComponent{
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
    this._callback = null;
  }

  show(inCallback){
    this._callback = inCallback;
    this.setState({ hidden:false, animating:true, visible:false },()=>{
      setTimeout(()=>{
        this.setState({visible:true});
      });
    });
  }

  hide(inCallback){
    this._callback = inCallback;
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
    const { visible, animating, hidden} = this.state;
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
