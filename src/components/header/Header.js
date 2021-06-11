import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

    const logout = (e) => {
        e.preventDefault()

        props.dispatch({
            type: "LOGOUT"
        })
        props.dispatch({
            type: "EMPTYCART"
        })
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img _ngcontent-hov-c37="" src="/logo.png" alt="cake-house" class="logo" />
                <Link to="/" className="navbar-brand"><b>{props.details.website}</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 searc" type="search" placeholder="Search" aria-label="Search" onChange={getinputvalue} />

                                <button className="sbutten btn btn-outline-success my-2 my-sm-0" type="button" onClick={getseachdata
                                } >Search</button>


                            </form>
                        </li>
                        <li></li>


                    </ul>
                    <Link to="/cart">   <button className="butstyle btn btn-outline-success my-2 my-sm-0 loginb" type="button" >
                        <i class="fa fa-shopping-cart" style={{ color: "white" }}></i> {props.cartno > 0 && <span style={{ color: "white" }}>({props.cartno})</span>} </button></Link>



                    {props.islogedIn && <button className="butstyle btn btn-danger my-2 my-sm-0 " type="button" onClick={logout}>
                        <i class="fa fa-sign-out" style={{ color: "white" }}></i>logout </button>}
                    {!props.islogedIn && <Link to="/login">   <button className="butstyle btn btn-outline-success my-2 my-sm-0 loginb" type="button" >
                        <i class="fa fa-user" style={{ color: "black" }}></i> Login</button></Link>}




                </div>

            </nav>
        </div >
    );
}

function propstomap(state) {
    return {

        token: state.Authreducer.token,
        cartno: state.CartReducer.cart.length,
        islogedIn: state.Authreducer.islogedIn,
    }
}

export default connect(propstomap)(withRouter(Header));