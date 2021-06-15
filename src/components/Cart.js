import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { removeCakeFromCartMiddleware } from "../store/Middlewares";

function Cart(props) {
    var totalprice = 0;
    const emptyCart = (e) => {
        e.preventDefault();
        if (props.token) {
            let apiUrl = "https://apifromashu.herokuapp.com/api/clearcart"
            axios({ url: apiUrl, method: "post", data: {}, headers: { authtoken: props.token } }).then((response) => {
                console.log(response)

                props.dispatch({
                    type: "EMPTYCART"
                })


                alert(response.data.message)
            }, (error) => { })
        }
    }



    console.log("????????", props.cartdata)


    return (<div>
        {!props.token && <div className="mt-4 container card">
            <div className="card-body cartlogin">
                You are not loggedin Please <Link to="/login">Login</Link> First .
            </div>
        </div>}

        {
            props.token && <div className="mt-4 container">
                <h2>Cart</h2>
                <button type="button" className="btn btn-danger" onClick={emptyCart}>
                    <span className="glyphiconglyphicon-remove" /> Click to Clear Cart
                </button>
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
                                                    <th className="text-center">Weight</th>
                                                    <th className="text-center">Price</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {!props.loader && <div class="loader">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>}

                                                {props.cartdata.length > 0 &&

                                                    props.cartdata.map((cakedata, index) => {
                                                        console.log("cakeindex>>>>>>>>>>", index)
                                                        {
                                                            totalprice += cakedata.price;

                                                            props.dispatch({
                                                                type: "TOTALPRICE",
                                                                payload: {
                                                                    price: totalprice,

                                                                }
                                                            })

                                                        }
                                                        return (

                                                            <tr>

                                                                <td className="col-sm-8 col-md-6">
                                                                    <div className="media">
                                                                        <a className="thumbnail pull-left" href="#"> <img className="media-object" src={cakedata.image} style={{ width: '72px', height: '72px' }} /> </a>
                                                                        <div className="media-body">
                                                                            <h5 className="media-heading"><Link to={"cake/" + cakedata.cakeid}> {cakedata.name}</Link></h5>

                                                                            <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                                                        </div>
                                                                    </div></td>
                                                                <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                                                                    <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={cakedata.quantity} />
                                                                </td>
                                                                <td className="col-sm-1 col-md-1 text-center"><strong>{cakedata.weight} </strong></td>
                                                                <td className="col-sm-1 col-md-1 text-center"><strong>&#8377;{cakedata.price}
                                                                </strong></td>
                                                                <td className="col-sm-1 col-md-1">
                                                                    <button type="button" className="btn btn-danger"

                                                                        onClick={() => { props.dispatch(removeCakeFromCartMiddleware(cakedata.cakeid, props.token)) }}

                                                                    >
                                                                        <span className="glyphiconglyphicon-remove" /> Remove
                                                                    </button></td>
                                                            </tr>
                                                        )
                                                    })
                                                }



                                                {props.loader && <tr>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td><h5>ITEMS {props.cartdata.length}</h5></td>
                                                    <td className="text-right"><h5><strong>&#8377; {totalprice}</strong></h5></td>
                                                </tr>}
                                                {props.loader && <tr>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td><h5>Estimated shipping</h5></td>
                                                    <td className="text-right"><h5><strong>&#8377; 0</strong></h5></td>
                                                </tr>}
                                                {props.loader && <tr>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td> &nbsp; </td>
                                                    <td><h3>Total</h3></td>
                                                    <td className="text-right"><h3><strong>&#8377; {totalprice}</strong></h3></td>
                                                </tr>}
                                                {props.loader && <tr>
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
                                                </tr>}
                                            </tbody>
                                        </table>
                                    </div>
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
function mapStateToProps(state, props) {
    if (state.CartReducer.removed) {
        state.CartReducer.removed = false
        window.location.reload()
    }

    return {

        token: state.Authreducer.token,
        cartdata: state.CartReducer.cart,
        loader: state.CartReducer.isLoading

    }
}
export default connect(mapStateToProps)(withRouter(Cart));