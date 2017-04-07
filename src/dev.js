import './dev.scss';
import ReactVisible from './main';


class App extends React.Component{
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

  render(){
    return (
      <div className="hello-react-visible">
        <button onClick={this._click1}>Show</button>
        <button onClick={this._click2}>Hide</button>
        <ReactVisible className="test-vv" ref='vv' visible={false} />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
