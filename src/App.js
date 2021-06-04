import Header from './components/header/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Cakedetails from './components/Cakedetails';
import Search from './components/Seach';
import NotFound from './components/NotFound';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  var [login, setLogin] = useState(false);
  var details = {
    name: "Abhishek",
    website: "myCake"
  }


  return (
    <div>
      <Router>
        <Header data="abhishek" details={details}></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/cake/:cakeid" component={Cakedetails}></Route>

          <Route exact path="/*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
