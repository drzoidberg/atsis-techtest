import React from 'react'

// From Kent C. Dodds Epic React's course
export default function useLocalStorageState(
  key,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
  defaultValue = '',
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
