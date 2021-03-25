import { html } from '../utils'

const Diagram = (data) => {
  const circleNames = ['xl', 'lg', 'md', 'sm']
  const circleClass = (i) => (circleNames[i] ? `diagram-row__circle--${circleNames[i]}` : '')

  const stripText = (text) => {
    const reg = /коммиты|коммитов|коммита/gi
    return String(text).replace(reg, '')
  }

  return html`
    <div class="story diagram">
      <div class="story__container">
        <div class="story__content diagram__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption diagram__caption">${data.subtitle}</h2>
          <div class="diagram__inner">
            <div class="diagram__circle">
              <div class="diagram__info">
                <div class="diagram__total">${data.totalText}</div>
                <div class="diagram__total-diff">${data.differenceText}</div>
              </div>
            </div>
            <div class="diagram__table">
              ${data.categories.mapj(
                (category, i) =>
                  html`
                    <div class="diagram-row">
                      <div class="diagram-row__circle ${circleClass(i)}"></div>
                      <div class="diagram-row__title">${category.title}</div>
                      <div class="diagram-row__diff">${stripText(category.differenceText)}</div>
                      <div class="diagram-row__value">${stripText(category.valueText)}</div>
                    </div>
                  `,
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
</div>
    `
}

export default Diagram
