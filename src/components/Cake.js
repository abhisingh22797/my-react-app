
import axios from "axios";
import { useState, useEffect } from "react";

const Cake = () => {
    var [cakedata, setcakedata] = useState([]);

    useEffect(() => {
        axios({ method: "get", url: "https://apibyashu.herokuapp.com/api/allcakes", data: JSON }).then((resp) => {
            console.log(resp.data.data)
            setcakedata(resp.data.data);
        });
    }, [])



    const passingdata = cakedata.map((data) => {

        return (
            <div class="col-lg-4 col-xs-12 text-center">
                <div class="box">
                    <img src={data.image} class="img-rounded" width="304" height="236" />
                    <div class="box-title">
                        <h3>{data.name}</h3>
                    </div>
                    {/* <div class="box-text">
                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                    </div> */}
                    <div class="box-btn">
                        <a href="#"> &#8377; {data.price}</a>
                    </div>
                </div>
            </div>


        )

    })


    return (<div class="social-box">
        <div class="container">
            <div class="row">

                {passingdata}

            </div>
        </div>
    </div>
    );


}
export default Cake;


