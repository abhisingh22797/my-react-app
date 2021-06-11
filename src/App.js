import Header from './components/header/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Cakedetails from './components/Cakedetails';
import Cart from './components/Cart';
import Search from './components/Seach';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {

    if (props.isLoggedin) {
      let apiUrl = "https://apibyashu.herokuapp.com/api/cakecart"
      axios({ url: apiUrl, method: "post", data: {}, headers: { authtoken: props.token } }).then((response) => {
        console.log(response)
        if (response.data.data) {
          props.dispatch({
            type: "UPDATE_CART",
            payload: {
              cart: response.data.data,
            }
          })
        }
      }, (error) => { })
    }
  }, [props.isLoggedin])
  var details = {
    name: "Abhishek",
    website: "myCake"
  }

  console.log('>>>>>>>', process.env.REACT_APP_api_base_url);
  return (
    <div>
      <Router>
        <Header data="abhishek" details={details}></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route exact path="/cake/:cakeid" component={Cakedetails}></Route>

          <Route exact path="/*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(
  function (state) {
    return {
      token: state.Authreducer.token,
      isLoggedin: state.Authreducer.islogedIn
    }
  }
)(App);
