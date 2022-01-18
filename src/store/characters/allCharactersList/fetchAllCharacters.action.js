import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_ALL_CHARACTERS } = constants.type.characters

export default function fetchAllCharacters() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/characters`)
      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: {
          status: fulfilled,
          data: response.data,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: ${error.message})`,
        },
      })
    }
  }
}
