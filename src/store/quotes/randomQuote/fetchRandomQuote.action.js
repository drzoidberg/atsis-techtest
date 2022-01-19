import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_RANDOM_QUOTE } = constants.type.quotes

export default function fetchRandomQuote() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/quote/random`)
      dispatch({
        type: FETCH_RANDOM_QUOTE,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_RANDOM_QUOTE,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
