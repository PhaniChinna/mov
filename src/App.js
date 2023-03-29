import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomePage from './components/HomeRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={HomePage} />
  </Switch>
)

export default App
