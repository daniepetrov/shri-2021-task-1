export const sortUsers = (users, sliceCount) => {
  const sortedUsers = users.sort((a, b) => b.valueText - a.valueText).slice(0, sliceCount)
  const oddReversedUsers = sortedUsers
    .filter((user, i) => (i + 1) % 2 !== 0)
    .slice(1)
    .reverse()

  const evenUsers = sortedUsers.filter((user, i) => (i + 1) % 2 === 0)

  return [...oddReversedUsers, sortedUsers[0], ...evenUsers]
}

export const getIndex = (user, users) => users.findIndex((item) => item === user) + 1

export const html = String.raw

Array.prototype.mapj = function (...args) {
  return this.map(...args).join('')
}

export const chunk = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }

  return chunks
}

export const If = (condition, render) => (condition ? render : '')

export const getVerticalStats = (data) => {
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

export const getHorStats = (data) => {
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

export const getChartHeight = (value, data) => {
  const maxHeightValue = data.values.find((item) => item.active).value
  const height = (value / maxHeightValue) * 100
  return +height === 0 ? 'auto' : `${height}%`
}
