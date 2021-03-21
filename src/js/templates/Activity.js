import { html } from '../utils'

const Activity = (data) => {
  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__subheading">${data.subtitle}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="73" viewBox="0 0 34 73">
            <use xlink:href="#extra-dark"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="73" viewBox="0 0 34 73">
            <use xlink:href="#extra-light"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="57" viewBox="0 0 34 57">
            <use xlink:href="#max-dark"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="57" viewBox="0 0 34 57">
            <use xlink:href="#max-light"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="41" viewBox="0 0 34 41">
            <use xlink:href="#mid-dark"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="41" viewBox="0 0 34 41">
            <use xlink:href="#mid-light"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <use xlink:href="#min-dark"></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <use xlink:href="#min-light"></use>
          </svg>
        </div>
      </div>
    </div>
  `
}

export default Activity
