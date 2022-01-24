import constants from '../../constants'

const { pending } = constants.status
const { FETCH_QUOTES_BY_AUTHOR } = constants.type.quotes

export default function quoteByAuthor(
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
    case FETCH_QUOTES_BY_AUTHOR:
      return action.payload
    default:
      return state
  }
}
