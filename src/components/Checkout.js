import { Link, Route, Redirect, withRouter } from "react-router-dom"
import React from "react"
import Summary from "./Summary"
import Address from "./Address"
import { useState } from "react";
import axios from "axios";
import Confirm from "./Confirm"
import { connect } from "react-redux";

function Checkout(props) {

    const data = {}
    let totalPrice = 0;
    const [disableAddressLink, setDisableAddressLink] = useState(true)
    const [disablePaymentLink, setDisablePaymentLink] = useState(true)

    const handleAddressLink = () => {
        setDisableAddressLink(false)
    }

    const handlePaymentLink = () => {
        setDisablePaymentLink(false)
    }

    const handleAddressSubmit = (value) => {
        value = value.split("_")
        data.address = value[0]
        data.city = value[1]
        data.pincode = value[2]
        data.phone = value[3]
        props.cakes.map((each, index) => {
            totalPrice += each.price
            return totalPrice
        })
        //      data.name = (JSON.parse(localStorage.getItem('userData'))).name
        data.price = totalPrice
        data.name = props.username
        data.cakes = props.cakes
        console.log('data final value: ', data)
        axios({
            url: 'https://apifromashu.herokuapp.com/api/addcakeorder',
            method: 'post',
            headers: { authtoken: props.token },
            data: data
        }).then(res => {
            console.log('order place res', res)
            // dispatch({
            //     type: 'PLACE_ORDER',
            //     payload: {
            //         data: res.data
            //     }
            // })
            alert(res.data.message)
        }, err => { })
        //     props.dispatch(placeOrderMiddleware(data))
    }
    return (
        <div className="mt-4 container">
            <div className="row">
                <div className="col-12">
                    <h2>Checkout</h2>
                </div>
            </div>
            <div className=" bd-example bd-example-tabs">
                <div className="row checkout-row">
                    <div className="col-3 bg-primary  text-white">
                        <div className="nav flex-column p-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <Link to="/checkout/summary" className={"text-decoration-none border p-2 text-white " + (disableAddressLink ? "active" : "")}>Summary</Link>
                            {
                                !disableAddressLink
                                    ? <Link to="/checkout/address" className={"text-decoration-none border p-2 text-white" + (disablePaymentLink ? "active" : "")}>Address</Link>
                                    : <Link to="/checkout/address" className="text-decoration-none border p-2 text-white disabled">Address</Link>
                            }

                            <Link to="/checkout/confirm" className="text-decoration-none border p-2 text-white">Confirm</Link>
                        </div>
                    </div>
                    <div className="col-9   bg-light">
                        <div className="tab-content p-3" id="v-pills-tabContent">
                            <Route exact path="/checkout" ><Redirect to="/checkout/summary" /></Route>
                            <Route exact path="/checkout/summary" component={Summary} onChange={handleAddressLink} />
                            <Route exact path="/checkout/address"><Address onChange={handlePaymentLink} onSubmit={handleAddressSubmit} /></Route>
                            {/* <Route exact path="/checkout/address"><Address disablePaymentLink={disablePaymentLink} onChange={handlePaymentLink} onSubmit={handleAddressSubmit} /></Route> */}

                            {/* <Route
                                exact path='/checkout/address'
                                render={(props) => (
                                    <Address {...props} onChange={handlePaymentLink} />
                                )} 
                            /> */}
                            <Route exact path="/checkout/confirm" component={Confirm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state, props) {

    return {

        username: state.Authreducer.username,
        token: state.Authreducer.token,
        cakes: state.CartReducer.cart


    }
}
export default connect(mapStateToProps)(withRouter(Checkout))