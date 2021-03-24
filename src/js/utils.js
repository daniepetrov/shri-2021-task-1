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

export function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }

  return chunks
}
