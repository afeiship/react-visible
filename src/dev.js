import './dev.scss';
import ReactVisible from './main';

/*===example start===*/

// install: npm install afeiship/react-visible --save
// import : import ReactVisible from 'react-visible'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-visible">
        <ReactVisible ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
