import Leaders from './stories/Leaders'
import Vote from './stories/Vote'
import Chart from './stories/Chart'
import Diagram from './stories/Diagram'
import Activity from './stories/Activity'
import Defs from './components/Defs'

const COMPONENT_MAP = {
  leaders: Leaders,
  vote: Vote,
  chart: Chart,
  diagram: Diagram,
  activity: Activity,
}

window.renderTemplate = (alias, data) => {
  return Defs(alias) + COMPONENT_MAP[alias](data)
}
