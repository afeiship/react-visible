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
      animating:false,
      visible:props.visible,
      hidden:!props.visible
    };
    this._callback = noop;
  }

  show(inCallback){
    const {visible} = this.state;
    this._callback = inCallback || noop;
    !visible && this.setState({ hidden:false, animating:true, visible:false },()=>{
      setTimeout(()=>{
        this.mounted && this.setState({visible:true});
      });
    });
  }

  hide(inCallback){
    const {visible} = this.state;
    this._callback = inCallback || noop;
    visible && this.setState({ animating:true },()=>{
      setTimeout(()=>{
        this.mounted && this.setState({visible:false});
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
      onTransitionEnd:this._onTransitionEnd.bind(this)
    });
    return createElement(nodeName,options);
  }
}
