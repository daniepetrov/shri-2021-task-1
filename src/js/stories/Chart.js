import { html } from '../utils'

const CHART_OFFSET = 192
const If = (condition, render) => (condition ? render : '')

const getHeight = (value, data) => {
  const maxHeightValue = data.values.find((item) => item.active).value
  const height = ((value / maxHeightValue) * 100).toFixed()
  return +height === 0 ? 'auto' : `${height}%`
}

const Chart = (data) => {
  setTimeout(() => {
    const itemAct = document.querySelector('.chart__item--active')
    const chartInner = document.querySelector('.chart__inner')
    const offsetLeft = itemAct.offsetLeft
    chartInner.scrollLeft = offsetLeft - window.innerWidth + CHART_OFFSET
  }, 400)

  return html`
    <div class="story chart">
      <div class="story__container">
        <div class="story__content chart__content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>
          <div class="chart__inner">
            <div class="chart__grid">
              ${data.values.mapj(
                (item) =>
                  html`
                    <div
                      class="chart__item ${If(item.active, 'chart__item--active')}"
                      style="max-height: ${getHeight(item.value, data)}"
                    >
                      ${If(
                        Boolean(item.value),
                        html`<div class="chart__item-top">${item.value}</div>`,
                      )}
                      <div class="chart__item-bar">
                        <div class="bar"></div>
                      </div>
                      <div class="chart__item-bottom">${item.title}</div>
                    </div>
                  `,
              )}
            </div>
          </div>
          <div class="chart__people">
            ${data.users.mapj(
              (user) =>
                html`
                  <li class="chart__people-column">
                    <div class="card card--horizontal">
                      <div class="card__avatar">
                        <img src="/images/1x/${user.avatar}" alt="" class="card__avatar-img" />
                      </div>
                      <div class="card__content">
                        <div class="card__name">${user.name}</div>
                        <div class="card__caption">${user.valueText}</div>
                      </div>
                    </div>
                  </li>
                `,
            )}
          </div>
        </div>
      </div>
    </div>
  `
}

export default Chart
