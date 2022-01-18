import constants from '../../constants'

const { pending } = constants.status
const { FETCH_CHARACTER_BY_ID } = constants.type.characters

export default function characterById(
  state = {
    status: pending,
    error: '',
    data: [],
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case FETCH_CHARACTER_BY_ID:
      return action.payload
    default:
      return state
  }
}
