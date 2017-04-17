import './dev.scss';
import ReactVisible from './main';


class App extends React.Component{
  state  = {
    vv2Visible:false
  };
  _click1 =()=>{
    // console.log('click1');
    const {vv} = this.refs;
    vv.show(()=>{
      console.log('show!!!');
    });
  };

  _click2 =()=>{
    // console.log('click1');
    const {vv} = this.refs;
    vv.hide(()=>{
      console.log('hidden!!!');
    });
  };

  _click3 =()=>{
    // console.log('click1');
    const {vv} = this.refs;
    this.setState({
      vv2Visible: !this.state.vv2Visible
    });
  };

  render(){
    return (
      <div className="hello-react-visible">
        <button onClick={this._click1}>Show</button>
        <button onClick={this._click2}>Hide</button>
        <button onClick={this._click3}>Toggle</button>
        <ReactVisible className="test-vv" ref='vv' visible={this.state.vv2Visible} />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
