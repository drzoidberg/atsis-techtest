import React from 'react'
import { Switch, Route } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import uuidv4 from './lib/generateUuid'
import { LanguageProvider } from './context/lang-context'
import Home from './views/Home/Home'
import SwitchLanguage from './components/SwitchLanguage/SwitchLanguage'
import FourOhFour from './views/FourOhFour/FourOhFour'
import CharactersList from './views/CharactersList/CharactersList'
import CharacterDetail from './views/CharacterDetail/CharacterDetail'

// const routesList = [{ exact: true, path: '/', component: Home }] WHY discarded?: conflicts with React.Context

function App() {
  const [LSLang, setLSLang] = useLocalStorage(() => 'BBAppLang')

  React.useEffect(() => {
    setLSLang('Es')
  }, [LSLang, setLSLang])

  return (
    <div>
      <LanguageProvider>
        <SwitchLanguage />
        <Switch>
          <Route key={uuidv4()} exact path={'/'} component={Home} />
          <Route key={uuidv4()} exact path={'/mvp/characters-list'} component={CharactersList} />
          <Route key={uuidv4()} exact path={'/mvp/character-detail/:id'} component={CharacterDetail} />
          <Route key={uuidv4()} path={'*'} component={FourOhFour} />
          {/* {routesList.map(route => (
              <Route key={uuidv4()} exact={route.exact} path={route.path}>
                {route.component()}
              </Route>
            ))} */}
        </Switch>
      </LanguageProvider>
    </div>
  )
}

export default App
