import React from 'react'
import { Switch, Route } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import Home from './views/Home/Home'
import SwitchLanguageMvp from './components/SwitchLanguageMvp/SwitchLanguageMvp'
import FourOhFour from './views/Mvp/FourOhFour/FourOhFour'
import uuidv4 from './lib/helpers/generateUuid'
import { LanguageProvider } from './context/lang-context'

// const routesList = [{ exact: true, path: '/', component: Home }] WHY?: conflicts with React.Context

function App() {
  const [LSLang, setLSLang] = useLocalStorage(() => 'BBAppLang')

  React.useEffect(() => {
    setLSLang('Es')
  }, [LSLang, setLSLang])

  return (
    <>
      <LanguageProvider>
        <SwitchLanguageMvp />
        <Switch>
          <Route key={uuidv4()} exact path={'/'} component={Home} />
          <Route key={uuidv4()} exact path={'*'} component={FourOhFour} />
          {/* {routesList.map(route => (
              <Route key={uuidv4()} exact={route.exact} path={route.path}>
                {route.component()}
              </Route>
            ))} */}
        </Switch>
      </LanguageProvider>
    </>
  )
}

export default App
