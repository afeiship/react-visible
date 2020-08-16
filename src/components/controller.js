import ReactVisible from './index';

export default class {
  constructor(inComponent, inProps) {
    this.component = inComponent;
    ReactVisible.create(inComponent, inProps).then((instance) => {
      this.instance = this.instance || instance;
    });
  }

  present(inOptions, inCallback) {
    this.instance.component.present(inCallback, inOptions);
  }

  dismiss(inOptions, inCallback) {
    this.instance.component.dismiss(inCallback, inOptions);
  }

  destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
