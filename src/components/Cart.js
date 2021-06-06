import { Link } from "react-router-dom"

function Cart() {
    return (
        <div className="mt-4 container">
            <h2>Cart</h2>
            <div className=" bd-example bd-example-tabs">
                <div className="cart-row">
                    <div className="col-12   bg-light">
                        <div className="tab-content p-3" id="v-pills-tabContent">
                            Procced To <Link to="/checkout" >Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;