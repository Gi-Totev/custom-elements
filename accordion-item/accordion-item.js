if (!customElements.get('accordion-item')) {
  class AccordionItem extends HTMLElement {
    constructor() {
      super();
    }

    toggle(event) {
      event.preventDefault();
      this.classList.toggle('is-active');
    }

    connectedCallback() {
      this.head = this.querySelector('.js-accordion-head');

      this.head.addEventListener('click', this.toggle.bind(this));
    }
  }
  customElements.define('accordion-item', AccordionItem);
}
