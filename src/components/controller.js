import ReactVisible from './index';

const CTOR = 'constructor';

export default class {
  static createInstance(inComponent, inProps, inIsSingleton) {
    const methods = Object.getOwnPropertyNames(this.prototype);
    const publicMethods = methods.filter((name) => name !== CTOR);
    const ctrl = new this(inComponent, inProps);
    const target = inIsSingleton ? inComponent : ctrl;

    inIsSingleton &&
      publicMethods.forEach(
        (item) =>
          (inComponent[item] = function () {
            ctrl[item].apply(ctrl, arguments);
          })
      );

    return target;
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

  toggle(inCallback, inOptions) {
    this.component.toggle(inCallback, inOptions);
  }

  destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
