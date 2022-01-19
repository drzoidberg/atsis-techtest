import allCharactersList from './allCharactersList/allCharactersList.reducer'
import fetchAllCharacters from './allCharactersList/fetchAllCharacters.action'

import characterById from './characterById/characterById.reducer'
import fetchCharacterById from './characterById/fetchCharacterById.action'

import charactersByName from './charactersByName/charactersByName.reducer'
import fetchCharactersByName from './charactersByName/fetchCharactersByName.action'

import charactersByCategory from './charactersByCategory/charactersByCategory.reducer'
import fetchCharactersByCategory from './charactersByCategory/fetchCharactersByCategory.action'

import randomCharacter from './randomCharacter/randomCharacter.reducer'
import fetchRandomCharacter from './randomCharacter/fetchRandomCharacter.action'

export {
  allCharactersList,
  fetchAllCharacters,
  characterById,
  fetchCharacterById,
  charactersByName,
  fetchCharactersByName,
  charactersByCategory,
  fetchCharactersByCategory,
  randomCharacter,
  fetchRandomCharacter,
}
