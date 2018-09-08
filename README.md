# react-visible
> React component for visible element. [FOR IMPLEMENT]

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    destroyable: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  };

  static defaultProps = {
    className: '',
    value: false,
    onChange: noop,
    backdrop: true,
    destroyable: false
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
