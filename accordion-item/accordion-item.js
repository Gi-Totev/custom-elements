if (!customElements.get('accordion-item')) {
  class AccordionItem extends HTMLElement {
    constructor() {
      super();
    }

    toggle = (event) => {
      event.preventDefault();

      this.classList.toggle('is-active');

      const isActive = this.classList.contains('is-active');
      this.button.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      this.target.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    }

    connectedCallback() {
      this.button = this.querySelector('[js-toggle]');
      this.target = this.querySelector('[js-toggle-target]');

      if(this.button) this.button.addEventListener('click', this.toggle);
    }
  }
  customElements.define('accordion-item', AccordionItem);
}
