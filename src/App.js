import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAppData } from './store/actions'
import useLocalStorage from './hooks/useLocalStorage'
import Home from './views/Home/Home'
import SwitchLanguageMvp from './components/SwitchLanguageMvp/SwitchLanguageMvp'
import uuidv4 from './lib/helpers/generateUuid'
import { LanguageProvider } from './context/lang-context'

// const routesList = [{ exact: true, path: '/', component: Home }] WHY?: conflicts with React.Context

function App() {
  const dispatch = useDispatch()
  const [LSLang, setLSLang] = useLocalStorage('BBAppLang')

  React.useEffect(() => {
    dispatch(fetchAppData())
  }, [dispatch])

  React.useEffect(() => {
    setLSLang('Es')
  }, [LSLang])

  return (
    <>
      <LanguageProvider>
        <SwitchLanguageMvp />
        <BrowserRouter>
          <Switch>
            <Route key={uuidv4()} exact path={'/'} component={Home} />
            {/* {routesList.map(route => (
              <Route key={uuidv4()} exact={route.exact} path={route.path}>
                {route.component()}
              </Route>
            ))} */}
          </Switch>
        </BrowserRouter>
      </LanguageProvider>
    </>
  )
}

export default App
