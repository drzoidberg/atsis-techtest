import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_TOTAL_DEATH_COUNT_SERIES } = constants.type.deaths

export default function fetchTotalCountSeries() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/death-count`)
      dispatch({
        type: FETCH_TOTAL_DEATH_COUNT_SERIES,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_TOTAL_DEATH_COUNT_SERIES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
