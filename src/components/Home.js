import Carousel from './carousel/Carousel';


import Cake from './Cake';

function Home(props) {
    console.log(props)
    return (
        <div>

            <Carousel></Carousel>

            <Cake></Cake>
        </div>
    )
}
export default Home;