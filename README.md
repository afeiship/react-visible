# react-visible
> React component for visible element.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-visible
```

## properties
| Name        | Type   | Required | Default | Description                                                                                           |
| ----------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------------------- |
| className   | string | false    | -       | The extended className for component.                                                                 |
| value       | bool   | false    | -       | Abstract visible value.                                                                               |
| destroyable | bool   | false    | false   | If element destroyed when visible to false.                                                           |
| rootable    | bool   | false    | false   | If attach the visible element to document root or a container.                                        |
| onChange    | func   | false    | noop    | The handler when visible changed, default is `noop` function, present or dismiss action will trigger. |
| onPresent   | func   | false    | noop    | The handler when present.                                                                             |
| onDismiss   | func   | false    | noop    | The handler when dismiss.                                                                             |


## usage
1. import css
  ```scss
  @import "~@jswork/react-visible/dist/style.css";

  // or use sass
  @import "~@jswork/react-visible/dist/style.scss";

  // customize your styles:
  $react-visible-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactVisible, { Controller } from '@jswork/react-visible';
  import './assets/style.scss';

  class Backdrop extends ReactVisible {
    get visibleElementView() {
      const {
        className,
        destroyable,
        rootable,
        value,
        onPresent,
        onDismiss,
        ...props
      } = this.props;
      const { hidden } = this.state;

      return (
        <div
          data-position="absolute"
          data-component={'backdrop'}
          hidden={hidden}
          data-visible={this.state.value}
          hidden={hidden}
          className={`wsui-backdrop ${className}`}
          onAnimationEnd={this.handleAnimationEnd}
          {...props}
        />
      );
    }
  }

  class App extends React.Component {
    state = {
      value: false
    };

    componentDidMount() {
      // console.log(Controller.createInstance);
      Controller.createInstance(Backdrop, { destroyable: true }, true);
    }

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-visible">
          <button
            className="button"
            onClick={(e) => {
              this.el.present();
            }}>
            Button Open
          </button>

          <button
            className="button"
            onClick={(e) => {
              this.el.dismiss();
            }}>
            Button Close
          </button>
          <Backdrop ref={(el) => (this.el = el)} />

          <Backdrop
            value={this.state.value}
            destroyable
            onChange={(e) => {
              console.log('e.target.value:', e.target.value);
              this.setState({ value: e.target.value });
            }}
          />

          <button
            className="button"
            onClick={(e) => {
              this.setState({ value: !this.state.value });
            }}>
            Toggle
          </button>

          <button
            className="button"
            onClick={(e) => {
              Backdrop.toggle((e) => {
                console.log('after present/dismiss!', e);
              });
            }}>
            Singleton backdrop Toggle
          </button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-visible/


## license
Code released under [the MIT license](https://github.com/afeiship/react-visible/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-visible
[version-url]: https://npmjs.org/package/@jswork/react-visible

[license-image]: https://img.shields.io/npm/l/@jswork/react-visible
[license-url]: https://github.com/afeiship/react-visible/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-visible
[size-url]: https://github.com/afeiship/react-visible/blob/master/dist/react-visible.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-visible
[download-url]: https://www.npmjs.com/package/@jswork/react-visible
