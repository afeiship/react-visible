// import './style.scss';
import React,{createElement,PureComponent,PropTypes} from 'react';
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
    this._callback = noop;
  }

  show(inCallback){
    const {visible} = this.state;
    this._callback = inCallback || noop;
    !visible && this.setState({ animating:true, hidden:false },()=>{
      setTimeout(()=>{
        this.mounted && this.setState({ visible:true });
      });
    });
  }

  hide(inCallback){
    const {visible} = this.state;
    this._callback = inCallback || noop;
    this.mounted && this.setState({ visible:false });
  }

  _onTransitionEnd = (inEvent) => {
    const {visible}  = this.state;
    this.setState({ animating:false },()=>{
      !visible && this.setState({ hidden:true });
      this._callback();
    });
  };

  render(){
    const { hidden } = this.state;
    const { nodeName,visible,animating,...props } = this.props;
    const options = Object.assign(props,{
      'data-visible':this.state.visible,
      hidden,
      onTransitionEnd:this._onTransitionEnd
    });
    return createElement(nodeName,options);
  }
}
