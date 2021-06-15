
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const Cake = () => {
    var [laoder, setloader] = useState(true);
    var [cakedata, setcakedata] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 9
    const pagesVisited = pageNumber * userPerPage

    useEffect(() => {

        axios({ method: "get", url: "https://apifromashu.herokuapp.com/api/allcakes", data: JSON }).then((resp) => {
            console.log(resp.data.data)
            setloader(false)

            setcakedata(resp.data.data);
        });
    }, [])


    const passingdata = cakedata.slice(pagesVisited, pagesVisited + userPerPage).map((data) => {

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

    const pageCount = Math.ceil(cakedata.length / userPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)

    }

    return (<div class="social-box bcc ">
        <div class="container">

            <div class="row">

                {passingdata}{!laoder && <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />}
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
export default Cake;


