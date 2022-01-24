import constants from '../../constants'

const { pending } = constants.status
const { FETCH_QUOTES_BY_SERIES } = constants.type.quotes

export default function quotesBySeries(
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
    case FETCH_QUOTES_BY_SERIES:
      return action.payload
    default:
      return state
  }
}
