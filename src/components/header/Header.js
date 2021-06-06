import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header(props) {
    var searchString = "";
    const getinputvalue = (e) => {
        searchString = e.target.value;
    };
    const getseachdata = function (e) {
        var url = "/search?q=" + searchString
        console.log(url)
        searchString && props.history.push(url)

    }

    var [login, setLogout] = useState("login");
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img _ngcontent-hov-c37="" src="logo.png" alt="cake-house" class="logo" />
                <Link to="/" className="navbar-brand"><b>{props.details.website}</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item dropdown">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 searc" type="search" placeholder="Search" aria-label="Search" onChange={getinputvalue} />

                                <button className="sbutten btn btn-outline-success my-2 my-sm-0" type="button" onClick={getseachdata
                                } >Search</button>


                            </form>
                        </li>
                        <li></li>


                    </ul>
                    <Link to="/cart">   <button className="btn btn-outline-success my-2 my-sm-0 loginb" type="button" >
                        <i class="fa fa-shopping-cart" style={{ color: "black" }}></i> </button></Link>



                    <Link to="/login">   <button className="btn btn-outline-success my-2 my-sm-0 loginb" type="button" >
                        <i class="fa fa-user" style={{ color: "black" }}></i> {login}</button></Link>




                </div>

            </nav>
        </div >
    );
}
export default withRouter(Header);