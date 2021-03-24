import { html, chunk } from '../utils'

const getVerticalStats = (data) => {
  const keys = Object.keys(data)
  const length = data[keys[0]].length

  let i = 0
  const arr = []

  while (i < length) {
    for (let j = 0; j < keys.length; j++) {
      arr.push(data[keys[j]][i])
    }
    i++
  }
  return arr
}

const getStatsHor = (data) => {
  return Object.keys(data).reduce(
    (acc, item) => [
      ...acc,
      data[item].reduce(
        (acc, item, i, arr) => ((i + 1) % 2 === 0 ? [...acc, item + arr[i - 1]] : acc),
        [],
      ),
    ],
    [],
  )
}

const Activity = (data) => {
  const heatMap = {
    min: { range: [0], width: 34, height: 32 },
    mid: { range: [1, 2], width: 34, height: 40 },
    max: { range: [3, 4], width: 34, height: 56 },
    extra: { range: [5, 6], width: 34, height: 72 },
  }

  const initialData = data.data
  const statsVer = getVerticalStats(initialData)
  const offsetedStats = chunk(
    statsVer.map((item, i) => i),
    7,
  ).reduce((acc, item, i) => ((i + 1) % 2 === 0 ? acc.concat(item) : acc), [])
  const statsHor = getStatsHor(initialData)

  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content activity__content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>
          <div class="heatmap activity__heatmap activity__heatmap--ver">
            ${statsVer.mapj((item, i) => {
              const svg = Object.keys(heatMap).find((el) => heatMap[el].range.includes(item))
              const isOffseted = offsetedStats.includes(i)
              return html`
                <div
                  class="heatmap__item heatmap__item--${svg} ${isOffseted
                    ? `heatmap__item--offseted`
                    : ''}"
                >
                  <div class="heatmap__item-bar"></div>
                </div>
              `
            })}
          </div>
          <div class="heatmap activity__heatmap activity__heatmap--hor">
            ${statsHor.mapj((item, i) => {
              const svg = Object.keys(heatMap).find((el) => heatMap[el].range.includes(item))
              console.log(svg)
              // const isOffseted = offsetedStats.includes(i)
              return html`
                <div class="heatmap__item heatmap__item--${svg}">
                  <div class="heatmap__item-bar"></div>
                </div>
              `
            })}
          </div>
          <div class="activity__ranges ranges">
            <div class="ranges__item">
              <div class="ranges__bar"></div>
              <div class="ranges__value">1 час</div>
            </div>
            <div class="ranges__item">
              <div class="ranges__bar"></div>
              <div class="ranges__value">0</div>
            </div>
            <div class="ranges__item">
              <div class="ranges__bar"></div>
              <div class="ranges__value">1 — 2</div>
            </div>
            <div class="ranges__item">
              <div class="ranges__bar"></div>
              <div class="ranges__value">3 — 4</div>
            </div>
            <div class="ranges__item">
              <div class="ranges__bar"></div>
              <div class="ranges__value">5 — 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default Activity
