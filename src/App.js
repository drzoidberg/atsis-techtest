import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllCharacters,
  fetchCharacterById,
  fetchCharactersByName,
  fetchCharactersByCategory,
  fetchRandomCharacter,
  fetchAllEpisodes,
  fetchEpisodeById,
  fetchEpisodeBySeries,
  fetchAllQuotesList,
  fetchQuoteById,
  fetchQuotesBySeries,
  fetchQuotesByAuthor,
  fetchRandomQuote,
  fetchRandomQuoteByAuthor,
  fetchAllDeathsList,
  fetchDeathByName,
  fetchTotalCountSeries,
  fetchDeathCountByName,
  fetchRandomDeath,
} from './store/actions'

function App() {
  // const allCharacterListData = useSelector(state => state.allCharactersList)
  // const characterAttributesData = useSelector(state => state.characterAttributes)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCharacters({ limit: 'none', offset: 'none' }))
    dispatch(fetchCharacterById(1))
    dispatch(fetchCharactersByName({ limit: 1, offset: 1, characterName: 'Walter' }))
    dispatch(fetchCharactersByCategory({ limit: 3, offset: 1, category: 'Better Call Saul' }))
    dispatch(fetchRandomCharacter())
    dispatch(fetchAllEpisodes())
    dispatch(fetchEpisodeById(1))
    dispatch(fetchEpisodeBySeries('Better Call Saul'))
    dispatch(fetchAllQuotesList())
    dispatch(fetchQuoteById(1))
    dispatch(fetchQuotesBySeries('Better Call Saul'))
    dispatch(fetchQuotesByAuthor('Jesse Pinkman'))
    dispatch(fetchRandomQuote())
    dispatch(fetchRandomQuoteByAuthor('Jesse Pinkman'))
    dispatch(fetchAllDeathsList())
    dispatch(fetchDeathByName('Walter White'))
    dispatch(fetchTotalCountSeries())
    dispatch(fetchDeathCountByName('Jesse Pinkman'))
    dispatch(fetchRandomDeath())
  }, [dispatch])
  console.log(state)

  return <h1>App component works!</h1>
}

export default App
