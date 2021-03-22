import Card from '../components/Card'
import { sortUsers, getIndex, html } from './../utils'

const Vote = (data) => {
  const VOTE_COUNT = 8
  const users = data.users.slice(0, VOTE_COUNT)

  return html`
    <div class="story vote">
      <div class="story__container">
        <div class="story__content content">
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
              (user) =>
                html`
                  <li
                    class="vote__item ${getIndex(user, data.users) === 1
                      ? 'vote__item--active'
                      : ''}"
                  >
                    ${Card({ data: user })}
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
