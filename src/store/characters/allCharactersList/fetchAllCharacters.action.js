import _ from 'lodash'
import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_ALL_CHARACTERS } = constants.type.characters

export default function fetchAllCharacters({ limit, offset }) {
  return _fetchAllCharacters({ limit, offset })
}

/**
 * set limit & offset to 'none' in order to disable pagination and fetch ALL characters
 */
function _fetchAllCharacters({ limit, offset }) {
  return _.memoize(async function (dispatch) {
    try {
      let endpointStr = ''
      if (limit !== 'none' || offset !== 'none') {
        endpointStr = `?limit=${limit}&offset=${offset}`
      }
      const response = await breakingBadApi.get(`/characters${endpointStr}`)
      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { limit, offset },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_ALL_CHARACTERS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  })
}
