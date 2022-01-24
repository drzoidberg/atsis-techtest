import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_QUOTES_BY_AUTHOR } = constants.type.quotes

export default function fetchQuoteByAuthor(authorStr) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/quote?author=${authorStr}`)
      dispatch({
        type: FETCH_QUOTES_BY_AUTHOR,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { authorStr },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_QUOTES_BY_AUTHOR,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
