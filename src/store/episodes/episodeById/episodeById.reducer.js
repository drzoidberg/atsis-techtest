import constants from '../../constants'

const { pending } = constants.status
const { FETCH_EPISODE_BY_ID } = constants.type.episodes

export default function episodeById(
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
    case FETCH_EPISODE_BY_ID:
      return action.payload
    default:
      return state
  }
}
