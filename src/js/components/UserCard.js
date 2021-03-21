import { html } from '../utils'

const UserCard = (data) => {
  const { avatar, name, valueText: caption } = data

  return html`
    <div class="card">
      <div class="card__avatar">
        <img src=${`/images/1x/${avatar}`} alt="" class="card__avatar-img" />
      </div>
      <div class="card__content">
        <div class="card__name">${name}</div>
        <div class="card__caption">${caption}</div>
      </div>
    </div>
  `
}

export default UserCard
