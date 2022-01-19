import constants from '../../constants'

const { pending } = constants.status
const { FETCH_TOTAL_DEATH_COUNT_SERIES } = constants.type.deaths

export default function totalCountSeries(
  state = {
    status: pending,
    data: [],
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case FETCH_TOTAL_DEATH_COUNT_SERIES:
      return action.payload
    default:
      return state
  }
}
