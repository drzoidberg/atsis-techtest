import { combineReducers } from 'redux'

import { allCharactersList, characterAttributes } from './characters'

export default combineReducers({
  allCharactersList,
  characterAttributes,
})
