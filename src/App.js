import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'

import uuidv4 from './lib/helpers/generateUuid'

const routesList = [{ exact: true, path: '/', component: Home }]

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routesList.map(route => (
          <Route key={uuidv4()} exact={route.exact} path={route.path}>
            {route.component()}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
