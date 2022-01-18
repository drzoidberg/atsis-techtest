import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters, fetchCharacterById, fetchCharactersByName } from './store/actions'

function App() {
  // const allCharacterListData = useSelector(state => state.allCharactersList)
  // const characterAttributesData = useSelector(state => state.characterAttributes)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCharacters())
    dispatch(fetchCharacterById(1))
    dispatch(fetchCharactersByName('Walter'))
  }, [dispatch])
  console.log(state)

  return <h1>App component works!</h1>
}

export default App
