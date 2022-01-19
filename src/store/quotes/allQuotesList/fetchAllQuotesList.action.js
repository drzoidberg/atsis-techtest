import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_ALL_QUOTES } = constants.type.quotes

// the API as of now doesn't offer pagination
export default function fetchAllQuotesList() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/quotes`)
      dispatch({
        type: FETCH_ALL_QUOTES,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_ALL_QUOTES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
