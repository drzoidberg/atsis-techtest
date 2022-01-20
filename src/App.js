import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppData } from './store/actions'
import useLocalStorage from './hooks/useLocalStorage'
import Home from './views/Home/Home'
import SwitchLanguageMvp from './components/SwitchLanguageMvp/SwitchLanguageMvp'
import uuidv4 from './lib/helpers/generateUuid'

const LangContext = React.createContext()

function LangProvider(props) {
  const [LSLang, setLSLang] = useLocalStorage('BBAppLang')
  const [langValue, setLangValue] = React.useState(LSLang)
  const lang = [langValue, setLangValue]

  useEffect(() => {
    setLSLang('en')
  }, [setLSLang])

  return <LangContext.Provider value={lang} {...props} />
}

const routesList = [{ exact: true, path: '/', component: Home }]

function App() {
  const dispatch = useDispatch()
  const langStore = useSelector(store => store.appData.data.lang)
  // const [, setBbApplicationLang] = useLocalStorage('bbApplicationLang', langStore)

  React.useEffect(() => {
    dispatch(fetchAppData())
  }, [dispatch])

  // React.useEffect(() => {
  //   setBbApplicationLang(langStore)
  // }, [langStore])

  return (
    <LangProvider>
      <SwitchLanguageMvp />
      <BrowserRouter>
        <Switch>
          {routesList.map(route => (
            <Route key={uuidv4()} exact={route.exact} path={route.path}>
              {route.component()}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
