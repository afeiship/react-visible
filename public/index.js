import ReactVisible from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class Backdrop extends ReactVisible {
  get visibleElementView() {
    const { className, destroyable, value, ...props } = this.props;
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
