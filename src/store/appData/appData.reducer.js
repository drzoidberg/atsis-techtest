import constants from '../constants'

const { pending } = constants.status
const { FETCH_APP_DATA } = constants.type.appData

export default function allCharactersList(
  state = {
    status: pending,
    data: '',
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case FETCH_APP_DATA:
      return action.payload
    default:
      return state
  }
}
