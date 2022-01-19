import constants from '../../constants'

const { pending } = constants.status
const { FETCH_ALL_EPISODES } = constants.type.episodes

export default function allEpisodesList(
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
    case FETCH_ALL_EPISODES:
      return action.payload
    default:
      return state
  }
}
