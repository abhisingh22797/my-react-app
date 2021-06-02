import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Signup from './components/Signup';

import Cake from './components/Cake';
import { useState } from 'react';

function App() {
  var [login, setLogin] = useState(false);
  var details = {
    name: "Abhishek",
    website: "myCake"
  }

  var islogiedin = () => {
    setLogin(true)
    alert(login)
  }
  return (
    <div>
      <Header data="abhishek" details={details}></Header>
      <Carousel></Carousel>
      <Signup login={islogiedin}></Signup>
      <Cake></Cake>
    </div>
  );
}

export default App;
