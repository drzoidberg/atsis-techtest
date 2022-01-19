import { combineReducers } from 'redux'

import { allCharactersList, characterById, charactersByName, charactersByCategory, randomCharacter } from './characters'

import { allEpisodesList } from './episodes'

export default combineReducers({
  allCharactersList,
  characterById,
  charactersByName,
  charactersByCategory,
  randomCharacter,
  allEpisodesList,
})
