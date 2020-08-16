import ReactVisible from './index';

export default class {
  constructor(inComponent, inProps) {
    this.component = inComponent;
    ReactVisible.create(inComponent, inProps).then((instance) => {
      this.instance = this.instance || instance;
    });
  }

  present(inCallback, inOptions) {
    this.instance.component.present(inCallback, inOptions);
  }

  dismiss(inCallback, inOptions) {
    this.instance.component.dismiss(inCallback, inOptions);
  }

  destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
