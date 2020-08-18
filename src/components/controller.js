import ReactVisible from './index';

export default class {
  constructor(inComponent, inProps) {
    ReactVisible.create(inComponent, inProps).then((instance) => {
      this.instance = instance;
      this.component = instance.component;
    });
  }

  create(inComponent, inProps) {
    return new this(inComponent, inProps);
  }

  present(inCallback, inOptions) {
    this.component.present(inCallback, inOptions);
  }

  dismiss(inCallback, inOptions) {
    this.component.dismiss(inCallback, inOptions);
  }

  destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
