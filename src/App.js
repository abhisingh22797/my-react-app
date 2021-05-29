import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Signup from './Signup';
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
    </div>
  );
}

export default App;
