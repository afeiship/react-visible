import Controller from './controller';

const PUBLIC_METHODS = ['create', 'present', 'dismiss', 'destroy'];

export default class {
  static init(inComponent, inProps) {
    const ctx = (inComponent.instance =
      inComponent.instance || new Controller(inComponent, inProps));

    PUBLIC_METHODS.forEach((item) => {
      inComponent[item] = function () {
        ctx[item].apply(ctx, arguments);
      };
    });
  }
}
