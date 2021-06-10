import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

function Cart(props) {
    var [cakedata, setcakedata] = useState([]);
    // useEffect(() => {
    //     {

    //         var cartdata
    //         props.token && axios({
    //             method: "post", url: "https://apibyashu.herokuapp.com/api/cakecart", headers: {
    //                 authtoken: props.token
    //             }
    //         })
    //             .then((response) => {
    //                 console.log(response.data.data);
    //                 cartdata = response.data.data

    //                 props.dispatch({
    //                     type: "ADDTOCART",
    //                     payload: {
    //                         cart: cartdata
    //                     }
    //                 });
    //                 //   props.history.push('/carts')
    //             },
    //                 (error) => {
    //                     console.log(error);
    //                 });
    //     }

    //     console.log("propsdad>>>>", cartdata)

    // }, [])z
    useEffect(() => {

        axios({
            method: "post", url: "https://apibyashu.herokuapp.com/api/cakecart", headers: {
                authtoken: props.token
            }
        }).then((response) => {
            console.log(response.data.data);
            setcakedata(response.data.data);

            props.dispatch({
                type: "ADDTOCART",
                payload: {
                    cartdata: response.data.data
                }
            });
        });
    }, [])

    console.log("propsdad>>>>>", cakedata)



    console.log("?????????", props.cartdata)


    return (<div>
        {props.token && <div className="mt-4 container">
            <h2>Cart</h2>
            <div className=" bd-example bd-example-tabs">
                <div className="cart-row">
                    <div className="col-12   bg-light">
                        <div className="tab-content p-3" id="v-pills-tabContent">

                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12  col-md-offset-1">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Total</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                props.cartdata && props.cartdata.map((cakedata) => {
                                                    return (

                                                        <tr>

                                                            <td className="col-sm-8 col-md-6">
                                                                <div className="media">
                                                                    <a className="thumbnail pull-left" href="#"> <img className="media-object" src="" style={{ width: '72px', height: '72px' }} /> </a>
                                                                    <div className="media-body">
                                                                        <h5 className="media-heading"><a href="#">Product name</a></h5>
                                                                        <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                                                        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                                                    </div>
                                                                </div></td>
                                                            <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={3} />
                                                            </td>
                                                            <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                                                            <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                                                            <td className="col-sm-1 col-md-1">
                                                                <button type="button" className="btn btn-danger">
                                                                    <span className="glyphicon glyphicon-remove" /> Remove
                      </button></td>
                                                        </tr>
                                                    )
                                                })
                                            }



                                            <tr>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td><h5>Subtotal</h5></td>
                                                <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                                            </tr>
                                            <tr>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td><h5>Estimated shipping</h5></td>
                                                <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                                            </tr>
                                            <tr>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td><h3>Total</h3></td>
                                                <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                                            </tr>
                                            <tr>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td> &nbsp; </td>
                                                <td>
                                                    <button type="button" className="btn btn-default">
                                                        <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
              </button></td>
                                                <td>
                                                    <Link to="/checkout" >  <button type="button" className="btn btn-success">
                                                        Checkout <span className="glyphicon glyphicon-play" />
                                                    </button></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>}
    </div>
    );

}
function mapStateToProps(state, props) {

    return {

        token: state.Authreducer.token,
        cartdata: state.CartReducer.cart

    }
}
export default connect(mapStateToProps)(Cart);