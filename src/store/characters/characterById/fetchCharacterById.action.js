import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_CHARACTER_BY_ID } = constants.type.characters

export default function fetchCharacterById(characterId) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/characters/${characterId}`)
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: {
          status: fulfilled,
          data: response.data,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: ${error.message})`,
        },
      })
    }
  }
}
