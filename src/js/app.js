import Leaders from './stories/Leaders'
import Vote from './stories/Vote'
import Chart from './stories/Chart'
import Activity from './stories/Activity'
import Defs from './components/Defs'

const DEFAULT_THEME = 'dark'
const COMPONENT_MAP = {
  leaders: Leaders,
  vote: Vote,
  chart: Chart,
  activity: Activity,
}

window.renderTemplate = (alias, data) => {
  return Defs(alias) + COMPONENT_MAP[alias](data)
}

const body = document.querySelector('body')
const params = new URLSearchParams(window.location.search)
const theme = params.get('theme') === 'light' ? 'light' : DEFAULT_THEME
const slide = Number(params.get('slide')) || 0

body.classList.add(`theme_${theme}`)

fetch('/data/data.json')
  .then((res) => res.json())
  .then((data) => {
    const alias = Boolean(data[slide - 1]) ? data[slide - 1].alias : data[0].alias
    const storyData = data.find((item) => item.alias === alias).data
    body.innerHTML = window.renderTemplate(alias, storyData)
  })
