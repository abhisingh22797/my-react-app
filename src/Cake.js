
import data from './components/data';
import axios from "axios";
import { useState, useEffect } from "react";

const Cake = () => {
    var [cakedata, setcakedata] = useState([]);

    useEffect(() => {
        axios({ method: "get", url: "http://apibyashu.herokuapp.com/api/allcakes", data: JSON }).then((resp) => {
            console.log(resp.data.data)
            setcakedata(resp.data.data);
        });
    }, [])



    const passdata = cakedata.map((dat) => {
        return <div class="card">
            <img class="card-img-top" src={dat.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{dat.name}</h5>
                <p class="card-text">{dat.name}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{dat.price}</small>
            </div>
        </div>
    });

    return (<div class="card-deck">

        {passdata}</div>
    );
}



export default Cake;


