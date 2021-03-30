import { If, getChartHeight } from './../utils'

const Chart = (data) => {
  const values = data.values.sort((a, b) => a.title - b.title)
  const active = values.findIndex((item) => item.active)

  const classesMap = {
    [active - 3]: 'threeBefore',
    [active - 6]: 'sixBefore',
    [active + 2]: 'twoAfter',
    [active]: 'active',
  }

  const chartItemClass = (i) => (classesMap[i] ? ` chart__item--${classesMap[i]}` : '')

  return `
    <div class="story chart">
      <div class="story__container">
        <div class="story__content chart__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption">${data.subtitle}</h2>
          <div class="chart__inner">
            <div class="chart__grid">
              ${values.mapj(
                (item, i) =>
                  `<div
                      class="chart__item${chartItemClass(i)}"
                      style="max-height: ${getChartHeight(item.value, data)}"
                    >
                      ${If(Boolean(item.value), `<div class="chart__item-top">${item.value}</div>`)}
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
                `<li class="chart__people-column">
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
