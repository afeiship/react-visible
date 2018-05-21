# react-visible [FOR IMPLEMENT]
> React component for visible element

## properties:
```javascript

  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    onChange: noop,
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-visible --registry=https://registry.npm.taobao.org
```

```js
import ReactVisible from 'react-visible';
```

```scss
// customize your styles:
$react-visible-options:(
);

@import 'node_modules/react-visible/dist/style.scss';
```


## usage:
```jsx

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

```


