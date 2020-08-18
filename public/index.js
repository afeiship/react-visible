import ReactVisible, { Generator } from '../src/main';
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
