const html = String.raw

const Chart = (data) => {
  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__subheading">${data.subtitle}</h2>
          <div class="chart"></div>
        </div>
      </div>
    </div>
  `
}

export default Chart
