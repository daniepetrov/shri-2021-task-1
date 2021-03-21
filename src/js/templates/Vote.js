import { html } from '../utils'

const Vote = (data) => {
  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__subheading">${data.subtitle}</h2>
          <button class="arrow-button">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#arrow-button" />
            </svg>
          </button>
          <button class="arrow-button arrow-button--reversed">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#arrow-button"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

export default Vote
