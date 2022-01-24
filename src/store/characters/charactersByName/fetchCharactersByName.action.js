import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_CHARACTERS_BY_NAME } = constants.type.characters

/**
 * set limit & offset to 'none' in order to disable pagination and fetch ALL characters
 */
export default function fetchCharactersByName({ limit, offset, characterName }) {
  return async function (dispatch) {
    try {
      let endpointStr = ''
      if (limit !== 'none' && offset !== 'none') {
        endpointStr = `?limit=${limit}&offset=${offset}&name=${characterName}`
      } else {
        endpointStr = `?name=${characterName}`
      }
      const response = await breakingBadApi.get(`/characters${endpointStr}`)
      dispatch({
        type: FETCH_CHARACTERS_BY_NAME,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { limit, offset, characterName },
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
