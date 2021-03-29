import { chunk } from '../utils'

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
      ...data[item].reduce(
        (acc, item, i, arr) => ((i + 1) % 2 === 0 ? [...acc, item + arr[i - 1]] : acc),
        [],
      ),
    ],
    [],
  )
}

const Activity = (data) => {
  const rangesMap = {
    min: { range: [0] },
    mid: { range: [1, 2] },
    max: { range: [3, 4] },
    extra: { range: [5, 6] },
  }

  const initialData = data.data
  const statsVer = getVerticalStats(initialData)
  const statsHor = getStatsHor(initialData)

  const offsetedStatsVer = chunk(
    statsVer.map((item, i) => i),
    7,
  ).reduce((acc, item, i) => ((i + 1) % 2 === 0 ? acc.concat(item) : acc), [])

  const offsetedStatsHor = chunk(
    statsHor.map((item, i) => i),
    12,
  ).reduce((acc, item, i) => ((i + 1) % 2 === 0 ? acc.concat(item) : acc), [])

  return `
    <div class="story">
      <div class="story__container">
        <div class="story__content activity__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption activity__caption">${data.subtitle}</h2>
          <div class="heatmap activity__heatmap activity__heatmap--ver">
            ${statsVer.mapj((item, i) => {
              const svg = Object.keys(rangesMap).find((el) => rangesMap[el].range.includes(item))
              const isOffseted = offsetedStatsVer.includes(i)
              return `
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
              const svg = Object.keys(rangesMap).find((el) => rangesMap[el].range.includes(item))
              const isOffseted = offsetedStatsHor.includes(i)
              return `
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
          <div class="ranges-wrapper">
            <div class="activity__ranges ranges">
              <div class="ranges__item">
                <div class="ranges__bar"></div>
                <div class="ranges__value"></div>
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
    </div>
  `
}

export default Activity
