import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_EPISODE_BY_ID } = constants.type.episodes

export default function fetchEpisodeById(episodeId) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/episodes/${episodeId}`)
      dispatch({
        type: FETCH_EPISODE_BY_ID,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { episodeId },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_EPISODE_BY_ID,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
