import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_QUOTE_BY_ID } = constants.type.quotes

export default function fetchQuoteById(quoteId) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/quotes/${quoteId}`)
      dispatch({
        type: FETCH_QUOTE_BY_ID,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { quoteId },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_QUOTE_BY_ID,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
