import { html } from '../utils'

const CHART_OFFSET = 192
const If = (condition, render) => (condition ? render : '')

const getHeight = (value, data) => {
  const maxHeightValue = data.values.find((item) => item.active).value
  const height = (value / maxHeightValue) * 100
  return +height === 0 ? 'auto' : `${height}%`
}

const Chart = (data) => {
  // Можно просто сдвигать к активному бару
  // setTimeout(() => {
  //   const itemAct = document.querySelector('.chart__item--active')
  //   if (itemAct) {
  //     const chartGrid = document.querySelector('.chart__grid')
  //     const offsetLeft = itemAct.offsetLeft
  //     chartGrid.style.transform = `translateX(-${offsetLeft - window.innerWidth + CHART_OFFSET}px)`
  //     // chartInner.scrollLeft = offsetLeft - window.innerWidth + CHART_OFFSET
  //   }
  // }, 400)

  // eсли до acitve всегда есть до 6  элементов, а после него до 2 элементо, то ок, но по хорошему,
  // набо бы делать прокрутку :)

  const values = data.values.sort((a, b) => a.title - b.title)
  const active = values.findIndex((item) => item.active)

  const classesMap = {
    [active - 3]: 'threeBefore',
    [active - 6]: 'sixBefore',
    [active + 2]: 'twoAfter',
    [active]: 'active',
  }

  const chartItemClass = (i) => (classesMap[i] ? `chart__item--${classesMap[i]}` : '')

  return html`
    <div class="story chart">
      <div class="story__container">
        <div class="story__content chart__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption">${data.subtitle}</h2>
          <div class="chart__inner">
            <div class="chart__grid">
              ${values.mapj(
                (item, i) =>
                  html`
                    <div
                      class="chart__item ${chartItemClass(i)}"
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
