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
  return chunk(arr, 28)
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

  const statsHor = getStatsHor(initialData)

  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__subheading">${data.subtitle}</h2>
          <div className="isometric">
            <div class="isometric__inner">
              ${statsVer.mapj(
                (item) =>
                  html`
                    <div class="isometric__map">
                      ${item.mapj((block) => {
                        const svg = Object.keys(heatMap).find((el) =>
                          heatMap[el].range.includes(block),
                        )
                        return html`
                          <div class="isometric__item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 ${heatMap[svg].width} ${heatMap[svg].height}"
                            >
                              <use xlink:href="#${svg}-dark"></use>
                            </svg>
                          </div>
                        `
                      })}
                    </div>
                  `,
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default Activity
