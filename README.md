# react-visible
> React component for visible element.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-visible
```

## update
```shell
npm update @feizheng/react-visible
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
  @import "~@feizheng/react-visible/dist/style.scss";

  // customize your styles:
  $react-visible-options: ()
  ```
2. import js
  ```js
  import ReactVisible, { Generator } from '@feizheng/react-visible';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
          className={`webkit-sassui-backdrop ${className}`}
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
      Generator.init(Backdrop, {
        destroyable: true
      });
    }

    render() {
      return (
        <div className="app-container">
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
              Backdrop.present(() => {
                console.log('after present!');
              });
            }}>
            App backdrop Show
          </button>

          <button
            className="button"
            onClick={(e) => {
              Backdrop.dismiss(() => {
                console.log('after dismiss');
              });
            }}>
            App backdrop Hide
          </button>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-visible/

## license
Code released under [the MIT license](https://github.com/afeiship/react-visible/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-visible
[version-url]: https://npmjs.org/package/@feizheng/react-visible

[license-image]: https://img.shields.io/npm/l/@feizheng/react-visible
[license-url]: https://github.com/afeiship/react-visible/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-visible
[size-url]: https://github.com/afeiship/react-visible/blob/master/dist/react-visible.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-visible
[download-url]: https://www.npmjs.com/package/@feizheng/react-visible
