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
              <svg
              fill="none"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  id="arrow-button"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30zm0 2c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm27-32c0 14.912-12.088 27-27 27S5 46.912 5 32 17.088 5 32 5s27 12.088 27 27zm-33.94-4.06a1.5 1.5 0 00-2.12 2.12l8 8a1.5 1.5 0 002.12 0l8-8a1.5 1.5 0 00-2.12-2.12L32 34.878l-6.94-6.94z"
                  fill="currentColor"
                />
            </svg>
              </button>
            </li>
            <li class="vote__button vote__button--2">
              <button
                class="arrow-button arrow-button"
                ${offset !== 0 && 'disabled'}
                data-action="update"
                data-params=${JSON.stringify({ alias: 'vote', data: { offset: USERS_MAX_COUNT } })}
              >
              <svg
              fill="none"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  id="arrow-button"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30zm0 2c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm27-32c0 14.912-12.088 27-27 27S5 46.912 5 32 17.088 5 32 5s27 12.088 27 27zm-33.94-4.06a1.5 1.5 0 00-2.12 2.12l8 8a1.5 1.5 0 002.12 0l8-8a1.5 1.5 0 00-2.12-2.12L32 34.878l-6.94-6.94z"
                  fill="currentColor"
                />
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
