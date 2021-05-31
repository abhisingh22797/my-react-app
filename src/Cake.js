
import data from './data.js';


const Cake = () => {

    const passdata = data.map((dat) => {
        return <div class="col-4" style={{
            width: "18rem"
        }}> <img src={dat.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{dat.name}</h5>
                <p class="card-text">{dat.price}</p>
                <a href="#" class="card-text">{dat.discount}</a>
            </div></div>
    });

    return (<div class="container">
        <div class="row">
            {passdata}</div></div>
    );
}

export default Cake;





