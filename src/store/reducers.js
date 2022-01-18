import { combineReducers } from 'redux'

import { allCharactersList, characterById, charactersByName, charactersByCategory } from './characters'

export default combineReducers({
  allCharactersList,
  characterById,
  charactersByName,
  charactersByCategory,
})
