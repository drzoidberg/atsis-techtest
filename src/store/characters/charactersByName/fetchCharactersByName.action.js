import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_CHARACTERS_BY_NAME } = constants.type.characters

export default function fetchCharactersByName(characterName) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/characters/?name=${characterName}`)
      dispatch({
        type: FETCH_CHARACTERS_BY_NAME,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { characterName },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTERS_BY_NAME,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
