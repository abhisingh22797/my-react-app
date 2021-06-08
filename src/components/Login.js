
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';







const Login = (props) => {
    console.log(props)
    var [pass, setpass] = useState("");
    var [email, setemail] = useState("");
    var [passerror, passerrordata] = useState("");
    var [emailerror, emailrrordata] = useState("");
    var isValid = true;
    // var [cakedata, setcakedata] = useState([]);



    const onPassChange = (event) => {


        setpass(event.target.value)


    }


    const onEmailChange = (event) => {



        setemail(event.target.value)

    }


    const valide = (event) => {
        event.preventDefault();




        var emaildata = email;

        var passdata = pass;
        var validRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;




        if (!passdata) {
            isValid = false;


            passerrordata(" Please enter Password!")



        } else {
            isValid = true;

        }

        if (!emaildata) {
            isValid = false;


            emailrrordata(" Please enter email address!")






        } else if (!email.match(validRegex)) {
            isValid = false;


            emailrrordata("Invalid email address!")





        } else {
            isValid = true;
            emailrrordata("")
        }

        if (isValid == true) {


            axios({ url: "https://apibyashu.herokuapp.com/api/login", method: "post", data: { "email": email, "password": pass } }).then((response) => {
                console.log(response)
                if (response.data.email) {

                    props.dispatch({
                        type: "LOGIN",
                        payload: {
                            token: response.data.token,
                            username: response.data.name,
                            email: response.data.email,

                        }
                    })
                    localStorage.setItem("usertoken", response.data.token)
                    localStorage.setItem("username", response.data.username)
                    localStorage.setItem("email", response.data.email)
                    props.history.push("/")
                }
                if (response.data.message) {
                    alert(response.data.message)

                }
            }, (error) => {
                console.log(error)
            })


        }


    }





    return (
        <div className="container">
            <div className="main">

                <div className="main-center">
                    <h3>Log in To CakeHouse</h3>

                    <form onSubmit={valide}>



                        <div className="form-group">
                            <label for="email">Your Email</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="email" placeholder="Enter your Email" onChange={onEmailChange} />

                            </div>
                            <span style={{ color: "#ff4242" }} >{emailerror}</span>
                        </div>



                        <div className="form-group">
                            <label for="password">Password</label>
                            <div className="input-group">

                                <input type="password" className="form-control" name="password" placeholder="Enter your Password" onChange={onPassChange} />
                            </div>
                            <span style={{ color: "#ff4242" }} >{passerror}</span>
                        </div>

                        <Link to="/signup">  <p>New User</p></Link>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>


    )







}
export default connect()(Login);


