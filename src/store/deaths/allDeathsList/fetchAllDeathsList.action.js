import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_ALL_DEATHS } = constants.type.deaths

// the API as of now doesn't offer pagination
export default function fetchAllDeathsList() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/deaths`)
      dispatch({
        type: FETCH_ALL_DEATHS,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_ALL_DEATHS,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
