# react-visible
> React component for visible element.

## installation
```shell
npm install -S @feizheng/react-visible
```

## update
```shell
npm update @feizheng/react-visible
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-visible/dist/style.scss";

  // customize your styles:
  $react-visible-options: ()
  ```
2. import js
  ```js
  import ReactVisible from '@feizheng/react-visible';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactVisible />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-visible/
