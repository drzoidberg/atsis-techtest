import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_ALL_EPISODES } = constants.type.episodes

// the API as of now doesn't offer pagination
export default function allEpisodesList() {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/episodes`)
      dispatch({
        type: FETCH_ALL_EPISODES,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_ALL_EPISODES,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
