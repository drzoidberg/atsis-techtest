import constants from '../../constants'

const { pending } = constants.status
const { FETCH_DEATH_COUNT_BY_NAME } = constants.type.deaths

export default function deathCountByName(
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
    case FETCH_DEATH_COUNT_BY_NAME:
      return action.payload
    default:
      return state
  }
}
