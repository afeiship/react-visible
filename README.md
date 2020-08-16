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
| Name        | Type   | Required | Default | Description                                 |
| ----------- | ------ | -------- | ------- | ------------------------------------------- |
| className   | string | false    | -       | The extended className for component.       |
| value       | bool   | false    | -       | Abstract visible value.                     |
| onChange    | func   | false    | noop    | The change handler.                         |
| onPresent   | func   | false    | noop    | The handler when present.                   |
| onDismiss   | func   | false    | noop    | The handler when dismiss.                   |
| destroyable | bool   | false    | false   | If element destroyed when visible to false. |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-visible/dist/style.scss";

  // customize your styles:
  $react-visible-options: ()
  ```
2. import js
  ```js
  import ReactVisible, { ReactVisibleController } from '@feizheng/react-visible';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class Backdrop extends ReactVisible {
    get visibleElementView() {
      const {
        className,
        destroyable,
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
      this.appBackdrop = new ReactVisibleController(Backdrop, {
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
              this.appBackdrop.present(null, () => {
                console.log('after present!');
              });
            }}>
            App backdrop Show
          </button>

          <button
            className="button"
            onClick={(e) => {
              this.appBackdrop.dismiss(null, () => {
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
