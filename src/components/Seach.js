
import QueryString from "query-string";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


function Search(props) {
    var query = QueryString.parse(props.location.search);
    var [cakes, setCakes] = useState([]);
    var [laoder, setloader] = useState(true);


    useEffect(() => {
        let searchUrl
        console.log(query)
        if (query) {
            searchUrl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q
            axios({ url: searchUrl, method: "get" }).then((response) => {
                if (response.data.data) {
                    setloader(false)
                    setCakes(response.data.data)
                }
            }, (error) => { })
        }
    }, [query.q]);



    const passdata = cakes.map((data) => {
        return (
            <div class="col-lg-4 col-xs-12 text-center">
                <div class="box">
                    <Link to={"cake/" + data.cakeid}>     <img src={data.image} class="img-rounded" width="304" height="236" /></Link>
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
            </div >


        )

    })




    return (<div class="social-box">
        <div class="container">
            <div class="row">
                <div className="mb20 col-md-12">
                    <br />
                    <h2 className="lead"><strong className="text-danger">{cakes.length}</strong> Cakes were found for the search <strong className="text-danger">{query && query.q}</strong></h2>
                </div>
                {passdata}
                {laoder && <div class="m-5 p-5">
                    <div class="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>}

            </div>
        </div>
    </div>
    );

}

export default Search