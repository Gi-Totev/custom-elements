if (!customElements.get('marquee-text')) {
  class MarqueeText extends HTMLElement {
    constructor() {
      super();
      this.containerLeft = this.parentElement.getBoundingClientRect().left;
      this.currentLeft = 0;
      this.stopped = false;
      this.speed = Number(this.dataset.speed) || 1;
      this.enablePause = this.hasAttribute('data-pause-on-hover');
    }

    animationLoop() {
      if (this.enablePause && this.stopped) return window.requestAnimationFrame(() => { this.animationLoop(); });

      const firstListItem = this.querySelector('*:first-child');
      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem <= this.containerLeft) {
        this.currentLeft = -this.speed;
        this.appendChild(firstListItem);
      }

      this.style.marginLeft = `${this.currentLeft}px`;
      this.currentLeft -= this.speed;

      window.requestAnimationFrame(() => { this.animationLoop(); });
    }

    connectedCallback() {
      this.addEventListener('mouseenter', () => this.stopped = true);
      this.addEventListener('mouseleave', () => this.stopped = false);

      this.animationLoop();
    }
  }

  customElements.define('marquee-text', MarqueeText);
}
