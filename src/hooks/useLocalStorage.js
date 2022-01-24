import React from 'react'

export default function useLocalStorageState(
  key,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
  defaultValue = 'En',
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
