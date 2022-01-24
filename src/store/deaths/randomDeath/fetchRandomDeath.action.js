import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_RANDOM_DEATH } = constants.type.deaths

/**
 * ATTENTION: AS OF NOW THIS ENDPOINT DOESN'T WORK, the very API returns error in the 'Playground' section
 */
export default function fetchRandomDeath() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/random-death`)
      dispatch({
        type: FETCH_RANDOM_DEATH,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_RANDOM_DEATH,
        payload: {
          status: rejected,
          error: `ATTENTION: AS OF NOW THIS ENDPOINT DOESN'T ALWAYS WORK. The very API returns error in the 'Playground' section. Please check: https://breakingbadapi.com/playground and https://breakingbadapi.com/documentation, for updates in endpoint status (API returned: "${error.message}")`,
        },
      })
    }
  }
}
