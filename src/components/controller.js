import ReactVisible from './index';

const CTOR = 'constructor';

export default class {
  static singleton(inComponent, inProps) {
    const methods = Object.getOwnPropertyNames(this.prototype);
    const publicMethods = methods.filter((name) => name !== CTOR);
    const ctrl = new this(inComponent, inProps);

    publicMethods.forEach((item) => {
      inComponent[item] = function () {
        ctrl[item].apply(ctrl, arguments);
      };
    });
  }

  constructor(inComponent, inProps) {
    ReactVisible.create(inComponent, inProps).then((instance) => {
      this.instance = instance;
      this.component = instance.component;
    });
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
