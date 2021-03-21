import UserCard from '../components/UserCard'
import { sortUsers, html } from './../utils'

Array.prototype.mapr = function (...args) {
  return this.map(...args).join('')
}

const Leaders = (data) => {
  const LEADERS_COUNT = 5
  const users = sortUsers(data.users, LEADERS_COUNT)

  return html`
    <div class="story">
      <div class="story__container">
        <div class="story__content content">
          <div class="story__heading">${data.title}</div>
          <h2 class="story__caption">${data.subtitle}</h2>

          <ul class="chart">
            ${users.mapr((user) => html`<li className="chart__item">${UserCard(user)}</li>`)}
          </ul>
        </div>
      </div>
    </div>
  `
}

export default Leaders
