import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

class BookAbout extends PageViewElement {
  _render() {
    updateMetadata({
      title: 'About - Books',
      description: 'About page'
    });

    return html`
      <style>
        :host {
          padding: 16px;
          text-align: center;
          line-height: 1.5;
        }
      </style>

      <p>Google Books PWA</p>
      <p><a href="http://books.google.com" target="_blank" rel="noopener">Visit the regular Google Books site</a></p>
    `;
  }
}

window.customElements.define('book-about', BookAbout);
