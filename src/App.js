import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters, fetchCharacterAttributes } from './store/actions'

function App() {
  // const allCharacterListData = useSelector(state => state.allCharactersList)
  // const characterAttributesData = useSelector(state => state.characterAttributes)
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCharacters())
    dispatch(fetchCharacterAttributes(1))
  }, [dispatch])
  console.log(state)

  return <h1>App component works!</h1>
}

export default App
