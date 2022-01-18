import allCharactersList from './allCharactersList/allCharactersList.reducer'
import fetchAllCharacters from './allCharactersList/fetchAllCharacters.action'

import characterById from './characterById/characterById.reducer'
import fetchCharacterById from './characterById/fetchCharacterById.action'

import charactersByName from './charactersByName/charactersByName.reducer'
import fetchCharactersByName from './charactersByName/fetchCharactersByName.action'

import charactersByCategory from './charactersByCategory/charactersByCategory.reducer'
import fetchCharactersByCategory from './charactersByCategory/fetchCharactersByCategory.action'

export {
  allCharactersList,
  characterById,
  fetchAllCharacters,
  fetchCharacterById,
  charactersByName,
  fetchCharactersByName,
  charactersByCategory,
  fetchCharactersByCategory,
}
