import { combineReducers } from 'redux'

import {
  allCharactersList,
  characterById,
  characterByIdAndRandomQuote,
  charactersByName,
  charactersByCategory,
  randomCharacter,
} from './characters'

import { allEpisodesList, episodeById, episodeBySeries } from './episodes'

import { allQuotesList, quoteById, quotesBySeries, quotesByAuthor, randomQuote, randomQuoteByAuthor } from './quotes'

import { allDeathsList, deathByName, totalCountSeries, deathCountByName, randomDeath } from './deaths'

// import { appData } from './appData'

export default combineReducers({
  allCharactersList,
  characterById,
  characterByIdAndRandomQuote,
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
  allDeathsList,
  deathByName,
  totalCountSeries,
  deathCountByName,
  randomDeath,
  // appData,
})
