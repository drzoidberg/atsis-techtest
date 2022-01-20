import constants from '../constants'
import appData from './appData.json'

const { fulfilled, rejected } = constants.status
const { FETCH_APP_DATA } = constants.type.appData

/**
 * here's where it should be a DB connection. For now it loads a static json file
 */
export default function fetchAppData() {
  return async function (dispatch) {
    try {
      dispatch({
        type: FETCH_APP_DATA,
        payload: {
          status: fulfilled,
          data: appData,
          paramsPassed: 'none',
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_APP_DATA,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later`,
        },
      })
    }
  }
}
