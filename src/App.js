import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Signup from './Signup';
import data from './data';
import Cake from './Cake';


function App() {

  var details = {
    name: "Abhishek",
    website: "myCake"
  }
  return (
    <div>
      <Header data="abhishek" details={details}></Header>
      <Carousel></Carousel>
      <Signup></Signup>
      <Cake></Cake>
    </div>
  );
}

export default App;
