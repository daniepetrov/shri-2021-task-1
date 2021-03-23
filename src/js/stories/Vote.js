import { html } from './../utils'

const Vote = (data) => {
  const VOTE_COUNT = 8
  const users = data.users.slice(0, VOTE_COUNT)
  const selectedUserIndex = data.users.findIndex((user) => user.id === data.selectedUserId) || false
  const selectedUser = selectedUserIndex && data.users[selectedUserIndex]

  const If = (condition, render) => (condition ? render : '')

  return html`
    <div class="story vote">
      <div class="story__container">
        <div class="story__content vote__content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>
          <!-- <button class="arrow-button">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#arrow-button" />
            </svg>
          </button>
          <button class="arrow-button arrow-button--reversed">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#arrow-button"></use>
            </svg>
          </button> -->
          <ul class="vote__grid">
            ${users.mapj(
              (user, i) =>
                html`
                  <li class="vote__item ${i === 1 ? 'vote__item--active' : ''}">
                    <div
                      class="card ${If(selectedUser && i === selectedUserIndex, 'card--active')}"
                    >
                      ${selectedUser && i === selectedUserIndex
                        ? html`<div class="card__emoji">👍</div>`
                        : ''}
                      <div class="card__avatar">
                        <img src=${`/images/1x/${user.avatar}`} alt="" class="card__avatar-img" />
                      </div>
                      <div class="card__content">
                        <div class="card__name">${user.name}</div>
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

export default Vote
