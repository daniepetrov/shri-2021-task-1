const Leaders = (data) => {
  const LEADERS_COUNT = 5
  const users = data.users.slice(0, LEADERS_COUNT)
  const firstUser = data.users[0]
  const selectedUserIndex = data.users.findIndex((user) => user.id === data.selectedUserId) || null
  const selectedUser = selectedUserIndex ? data.users[selectedUserIndex] : null

  const Emoji = (data, i) => {
    if (data.emoji && i === 0) {
      return `<div class="card__emoji">${data.emoji}</div>`
    }
    if (data.users[i].id === data.selectedUserId) {
      return `<div class="card__emoji">👍</div>`
    }
    if (i === 4 && selectedUser && !data.users.slice(0, 5).includes(selectedUser)) {
      return `<div class="card__emoji">👍</div>`
    }
    return ''
  }

  const If = (condition, render) => (condition ? render : '')

  return `
    <div class="story leaders">
      <div class="story__container">
        <div class="story__content leaders__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption">${data.subtitle}</h2>
          <ul class="leaders__chart">
            ${users.mapj((user, i) => {
              const newUser =
                i === 4 && selectedUser && !data.users.slice(0, 5).includes(selectedUser)
                  ? selectedUser
                  : user
              const newUserIndex = data.users.findIndex((user) => user.id === newUser.id)

              return `
                <li class="leaders__item ${If(newUser === firstUser, 'leaders__item--active')}">
                  <div class="card">
                    ${Emoji(data, i)}
                    <div class="card__avatar">
                      <img src=${`/images/1x/${newUser.avatar}`} alt="" class="card__avatar-img" />
                    </div>
                    <div class="card__content">
                      <div class="card__name">${newUser.name}</div>
                      <div class="card__caption">${newUser.valueText}</div>
                    </div>
                  </div>
                  <div class="leaders__bar">
                    <div class="bar">
                      <div class="bar__number">${newUserIndex + 1}</div>
                      ${
                        i === 0 && selectedUser && !data.users.slice(0, 3).includes(selectedUser)
                          ? `
                              <div class="leaders__chosen">
                                <div class="card">
                                  <div class="card__emoji">👍</div>
                                  <div class="card__avatar">
                                    <img
                                      src=${`/images/1x/${selectedUser.avatar}`}
                                      alt=""
                                      class="card__avatar-img"
                                    />
                                  </div>
                                  <div class="card__content">
                                    <div class="card__name">${selectedUser.name}</div>
                                    <div class="card__caption">${selectedUser.valueText}</div>
                                  </div>
                                </div>
                                <div class="bar__number bar__number--bordered">
                                  ${selectedUserIndex + 1}
                                </div>
                              </div>
                            `
                          : ''
                      }
                    </div>
                  </div>
                </li>
              `
            })}
          </ul>
        </div>
      </div>
    </div>
  `
}

export default Leaders
