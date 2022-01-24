import constants from '../../constants'

const { pending } = constants.status
const { FETCH_RANDOM_QUOTE } = constants.type.quotes

export default function randomQuote(
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
    case FETCH_RANDOM_QUOTE:
      return action.payload
    default:
      return state
  }
}
