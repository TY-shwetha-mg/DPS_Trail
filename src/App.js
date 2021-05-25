import Login from './components/Login';
  import './assests/UserLogin.css'
  import './assests/App.css'
 
import Dashbored from './components/dashbored/Dashbored';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
 
  return (
    
    <div className="App">


<Router>
        <Switch>
          <Route exact path="/">
          <Login/>
         </Route>

         <Route path='/dash' component={Dashbored}/>

          </Switch>
          </Router>
    </div>
     
  );
}

export default App;