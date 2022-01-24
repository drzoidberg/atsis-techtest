import constants from '../../constants'

const { pending } = constants.status
const { FETCH_ALL_CHARACTERS } = constants.type.characters

export default function allCharactersList(
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
    case FETCH_ALL_CHARACTERS:
      return action.payload
    default:
      return state
  }
}
