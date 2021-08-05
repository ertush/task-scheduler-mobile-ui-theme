// import './App.css';

import {Switch, Route} from 'react-router-dom'
import WelcomePage from '../Pages/WelcomePage'
import HomePage from '../Pages/HomePage'
import TaskPage from '../Pages/TaskPage'

function App() {

return (
    <Switch>
        <Route path="/" component={WelcomePage} exact/>
        <Route path="/home" component={HomePage}/>
        <Route path="/tasks" component={TaskPage}/>
    </Switch>
  )


}

export default App;
