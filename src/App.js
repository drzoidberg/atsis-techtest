import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppData } from './store/actions'
import useLocalStorage from './hooks/useLocalStorage'
import Home from './views/Home/Home'
import SwitchLanguageMvp from './components/SwitchLanguageMvp/SwitchLanguageMvp'
import uuidv4 from './lib/helpers/generateUuid'

const routesList = [{ exact: true, path: '/', component: Home }]

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
    </>
  )
}

export default App
