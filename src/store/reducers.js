import { combineReducers } from 'redux'

import { allCharactersList, characterById, charactersByName, charactersByCategory, randomCharacter } from './characters'

import { allEpisodesList, episodeById, episodeBySeries } from './episodes'

export default combineReducers({
  allCharactersList,
  characterById,
  charactersByName,
  charactersByCategory,
  randomCharacter,
  allEpisodesList,
  episodeById,
  episodeBySeries,
})
