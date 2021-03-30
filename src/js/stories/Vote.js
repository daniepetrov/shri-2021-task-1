import { If } from './../utils'

const Vote = (data) => {
  const USERS_MAX_COUNT = 8
  const offset = data.offset || 0
  const sliceCount = offset + USERS_MAX_COUNT
  const users = data.users.slice(offset, sliceCount)

  return `
    <div class="story vote">
      <div class="story__container">
        <div class="story__content vote__content">
          <h1 class="story__heading">${data.title}</h1>
          <h2 class="story__caption vote__caption">${data.subtitle}</h2>
          <ul class="vote__grid">
            ${users.mapj(
              (user, i) =>
                `
                  <li class="vote__item vote__item--${i + 1} ${If(
                  user.id === data.selectedUserId,
                  'vote__item--active',
                )}">
                    <div
                      data-action="update"
                      data-params=${JSON.stringify({
                        alias: 'leaders',
                        data: { selectedUserId: user.id },
                      })}
                      class="card card--normal"
                    >
                    ${If(user.id === data.selectedUserId, `<div class="card__emoji">👍</div>`)}
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
            <li class="vote__button vote__button--1">
              <button
                class="arrow-button arrow-button--reversed"
                ${offset === 0 && 'disabled'}
                data-action="update"
                data-params=${JSON.stringify({ alias: 'vote', data: { offset: 0 } })}
              >
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#arrow-button" />
                </svg>
              </button>
            </li>
            <li class="vote__button vote__button--2">
              <button
                class="arrow-button arrow-button"
                ${offset !== 0 && 'disabled'}
                data-action="update"
                data-params=${JSON.stringify({ alias: 'vote', data: { offset: data.offset || 0 } })}
              >
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use xlink:href="#arrow-button" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
}

export default Vote
