import { Link } from "react-router-dom";

import { connect } from "react-redux";


function Cart(props) {
    var totalprice = 0;


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

                                                    props.cartdata.map((cakedata) => {
                                                        { totalprice += cakedata.price }
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
                                                                    <button type="button" className="btn btn-danger">
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

    return {

        token: state.Authreducer.token,
        cartdata: state.CartReducer.cart,
        loader: state.CartReducer.isLoading

    }
}
export default connect(mapStateToProps)(Cart);