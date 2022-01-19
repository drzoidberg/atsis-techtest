import { combineReducers } from 'redux'

import { allCharactersList, characterById, charactersByName, charactersByCategory, randomCharacter } from './characters'

import { allEpisodesList, episodeById, episodeBySeries } from './episodes'

import { allQuotesList, quoteById, quotesBySeries, quotesByAuthor, randomQuote, randomQuoteByAuthor } from './quotes'

export default combineReducers({
  allCharactersList,
  characterById,
  charactersByName,
  charactersByCategory,
  randomCharacter,
  allEpisodesList,
  episodeById,
  episodeBySeries,
  allQuotesList,
  quoteById,
  quotesBySeries,
  quotesByAuthor,
  randomQuote,
  randomQuoteByAuthor,
})
