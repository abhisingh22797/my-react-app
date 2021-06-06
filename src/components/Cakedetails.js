
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Cakedetails = () => {

    let query = useParams();
    console.log(">>>>>>>>>", query.cakeid);

    var [laoder, setloader] = useState(true);
    var [cakedata, setcakedata] = useState([]);

    useEffect(() => {
        let searchUrl
        console.log(query)
        if (query) {
            searchUrl = "https://apibyashu.herokuapp.com/api/cake/" + query.cakeid
            axios({ url: searchUrl, method: "get" }).then((response) => {
                if (response.data.message === "Success") {
                    setloader(false)
                    setcakedata(response.data.data)


                }
            }, (error) => { })
        }
    }, []);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', cakedata);


    return (<div>

        { laoder && <div class="m-5 p-5">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>}


        {
            cakedata.name && <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={cakedata.image} /></div>

                                </div>

                            </div>

                            <div class="details col-md-6">
                                <h3 class="product-title">{cakedata.name}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no"><b>Ratings: </b>{cakedata.ratings}</span><br />
                                    <span class="review-no"><b>Type: </b>{cakedata.type}</span><br />
                                    <span class="review-no"><b>Ingredients: </b> <ul>    {cakedata.ingredients.map((value, index) => {
                                        return (
                                            <li key={index}>{value}</li>
                                        )
                                    })}</ul></span><br />

                                </div>
                                <p class="product-description">{cakedata.description}</p>
                                <h4 class="price">current price: <span>{cakedata.price}</span></h4>



                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button">add to cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
    );

}


export default Cakedetails;