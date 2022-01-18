import constants from '../../constants'

const { pending } = constants.status
const { FETCH_CHARACTERS_BY_NAME } = constants.type.characters

export default function charactersByName(
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
    case FETCH_CHARACTERS_BY_NAME:
      return action.payload
    default:
      return state
  }
}
