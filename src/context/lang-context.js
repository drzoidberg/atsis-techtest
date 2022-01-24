import * as React from 'react'
import useLocalStorageState from '../hooks/useLocalStorage'
const LanguageContext = React.createContext()

export function LanguageProvider(props) {
  const [LSLang] = useLocalStorageState('BBAppLang')
  const [lang, setLang] = React.useState(LSLang)
  const value = [lang, setLang]

  return <LanguageContext.Provider value={value} {...props} />
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
