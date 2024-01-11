const button = () => {
  const element = document.createElement('button');
  element.setAttribute('type', 'button');
  return element;
};

export const ClickCounter = class extends HTMLElement {
  #count = 0;
  #ref = button();

  constructor() {
    super();
    this.#updateRef(this.#count);
    this.appendChild(this.#ref);

    this.#ref.addEventListener('click', () => {
      this.setCount((count) => count + 1);
    });
  }

  #updateRef(count) {
    this.#ref.innerHTML = `count is ${count}`;
  }

  setCount(setter) {
    this.#count = setter(this.#count);
    this.#updateRef(this.#count);
  }

  get count() {
    return this.#count;
  }

  set count(count) {
    this.setCount(() => count);
  }
};
