import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_EPISODE_BY_SERIES } = constants.type.episodes

/**
 * it can be (for now) either 'Breaking Bad' or 'Better Call Saul'
 */
export default function fetchEpisodeBySeries(seriesStr) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/episodes?series=${seriesStr}`)
      dispatch({
        type: FETCH_EPISODE_BY_SERIES,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { seriesStr },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_EPISODE_BY_SERIES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
