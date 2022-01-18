import constants from '../../constants'

const { pending } = constants.status
const { FETCH_CHARACTERS_BY_CATEGORY } = constants.type.characters

export default function charactersByCategory(
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
    case FETCH_CHARACTERS_BY_CATEGORY:
      return action.payload
    default:
      return state
  }
}
