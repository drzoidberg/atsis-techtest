import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_RANDOM_CHARACTER } = constants.type.characters

export default function fetchRandomCharacter(characterName) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/character/random`)
      dispatch({
        type: FETCH_RANDOM_CHARACTER,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_RANDOM_CHARACTER,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
