import { combineReducers } from 'redux'

import { allCharactersList, characterById, charactersByName } from './characters'

export default combineReducers({
  allCharactersList,
  characterById,
  charactersByName,
})
