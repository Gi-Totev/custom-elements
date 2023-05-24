if (!customElements.get('accordion-item')) {
  class AccordionItem extends HTMLElement {
    constructor() {
      super();
    }

    /**
     * @param {MouseEvent} event - Click event
     */
    toggle(event) {
      event.preventDefault();
      this.classList.toggle('is-active');
    }

    connectedCallback() {
      /** @type {HTMLElement | null} */
      this.head = this.querySelector('.js-accordion-head');

      if(this.head) this.head.addEventListener('click', this.toggle.bind(this));
    }
  }
  customElements.define('accordion-item', AccordionItem);
}
