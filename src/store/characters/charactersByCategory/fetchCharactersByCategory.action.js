import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_CHARACTERS_BY_CATEGORY } = constants.type.characters

export default function fetchCharactersByName(category) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/characters/?category=${category}`)
      dispatch({
        type: FETCH_CHARACTERS_BY_CATEGORY,
        payload: {
          status: fulfilled,
          data: response.data,
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTERS_BY_CATEGORY,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: ${error.message})`,
        },
      })
    }
  }
}
