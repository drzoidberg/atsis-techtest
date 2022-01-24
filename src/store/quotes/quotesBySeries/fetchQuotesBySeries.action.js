import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_QUOTES_BY_SERIES } = constants.type.quotes

/**
 * it can be (for now) either 'Breaking Bad' or 'Better Call Saul'
 * it doesn't allow pagination as of now
 */
export default function fetchQuotesBySeries(seriesStr) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/quotes?series=${seriesStr}`)
      dispatch({
        type: FETCH_QUOTES_BY_SERIES,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { seriesStr },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_QUOTES_BY_SERIES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
