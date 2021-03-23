import { html } from './../utils'

const Leaders = (data) => {
  const LEADERS_COUNT = 5
  const users = data.users.slice(0, LEADERS_COUNT)
  const selectedUserIndex = data.users.findIndex((user) => user.id === data.selectedUserId) || false
  const selectedUser = selectedUserIndex && data.users[selectedUserIndex]

  const Emoji = (data, i) => {
    if (data.emoji && i === 0) {
      return html`<div class="card__emoji">${data.emoji}</div>`
    }
    if (data.users[i].id === data.selectedUserId) {
      return html`<div class="card__emoji">👍</div>`
    }

    return ''
  }

  const If = (condition, render) => (condition ? render : '')

  return html`
    <div class="story leaders">
      <div class="story__container">
        <div class="story__content leaders__content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>
          <ul class="leaders__chart">
            ${users.mapj(
              (user, i) =>
                html`
                  <li class="leaders__item ${If(i === 0, 'leaders__item--active')}">
                    <div class="card card--blank">
                      ${Emoji(data, i)}
                      <div class="card__avatar">
                        <img src=${`/images/1x/${user.avatar}`} alt="" class="card__avatar-img" />
                      </div>
                      <div class="card__content">
                        <div class="card__name">${user.name}</div>
                        <div class="card__caption">${user.valueText}</div>
                      </div>
                    </div>
                    <div class="leaders__bar">
                      <div class="bar">
                        <div class="bar__number">${i + 1}</div>
                        ${selectedUser && !users.slice(0, 3).includes(selectedUser) && i === 0
                          ? html`
                              <div class="leaders__chosen">
                                <div class="card card--blank">
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
                          : ''}
                      </div>
                    </div>
                  </li>
                `,
            )}
          </ul>
        </div>
      </div>
    </div>
  `
}

export default Leaders
