import _ from 'lodash'
import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'
const { fulfilled, rejected } = constants.status
const { FETCH_CHARACTER_BY_ID_AND_RANDOM_QUOTE } = constants.type.characters

export default function fetchCharacterByIdAndRandomQuote(characterId) {
  return _fetchCharacterByIdAndRandomQuote(characterId)
}

function _fetchCharacterByIdAndRandomQuote(characterId) {
  return _.memoize(async function (dispatch) {
    try {
      const characterIdResponse = await breakingBadApi.get(`/characters/${characterId}`)
      const authorStr = characterIdResponse.data[0].name
      const quoteResponse = (await breakingBadApi.get(`/quote/random?author=${authorStr}`)) || '' //axios handles swapping '+' instead of ' ' for me
      const { quote } = quoteResponse.data[0] || ''
      const response = characterIdResponse.data[0]
      response.quote = quote

      dispatch({
        type: FETCH_CHARACTER_BY_ID_AND_RANDOM_QUOTE,
        payload: {
          status: fulfilled,
          data: response,
          paramsPassed: { characterId },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_CHARACTER_BY_ID_AND_RANDOM_QUOTE,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  })
}
