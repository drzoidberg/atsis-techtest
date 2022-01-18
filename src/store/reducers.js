import { combineReducers } from 'redux'

import { allCharactersList, characterById } from './characters'

export default combineReducers({
  allCharactersList,
  characterById,
})
