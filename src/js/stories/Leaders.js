import Card from '../components/Card'
import { sortUsers, getIndex, html } from './../utils'

const Leaders = (data) => {
  const LEADERS_COUNT = 5
  const users = sortUsers(data.users, LEADERS_COUNT)

  return html`
    <div class="story leaders">
      <div class="story__container">
        <div class="story__content leaders__content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>
          <ul class="leaders__chart">
            ${users.mapj(
              (user) =>
                html`
                  <li
                    class="leaders__item ${getIndex(user, data.users) === 1
                      ? 'leaders__item--active'
                      : ''}"
                  >
                    ${Card({
                      data: user,
                      emoji: getIndex(user, data.users) === 1 && data.emoji,
                      classes: ['card--blank'],
                    })}
                    <div class="leaders__bar">
                      <div class="bar">
                        <div class="bar__number">${getIndex(user, data.users)}</div>
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
