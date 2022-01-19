import constants from '../../constants'

const { pending } = constants.status
const { FETCH_QUOTE_BY_ID } = constants.type.quotes

export default function quoteById(
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
    case FETCH_QUOTE_BY_ID:
      return action.payload
    default:
      return state
  }
}
