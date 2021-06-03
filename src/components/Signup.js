import React from 'react';
import axios from 'axios';
class Signup extends React.Component {


    state = {
        name: '',
        email: '',
        pass: '',
        email_message: '',
        name_message: '',
        pass_message: '',

        color: '',
        ecolor: ''
    }

    onNameChange = (event) => {

        this.setState({
            name: event.target.value
        });

    }
    onPassChange = (event) => {
        this.setState({
            pass: event.target.value
        });

    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });

    }
    validemail = (event) => {
        event.preventDefault();
        var isValid = true;
        var email = this.state.email;
        var name = this.state.name;
        var pass = this.state.pass;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


        if (!name) {
            isValid = false;
            this.setState({

                name_message: " Please enter name!",
                ecolor: "#ff4242"
            });

        } else {
            isValid = true;
            this.setState({

                name_message: "",
                ecolor: "#ff4242"
            });
        }

        if (!pass) {
            isValid = false;
            this.setState({

                pass_message: " Please enter Password!",
                ecolor: "#ff4242"
            });

        } else {
            isValid = true;
            this.setState({

                pass_message: "",
                ecolor: "#ff4242"
            });
        }
        if (!email) {
            isValid = false;
            this.setState({

                email_message: " Please enter email address!",
                ecolor: "#ff4242"
            });






        } else if (!email.match(validRegex)) {
            isValid = false;
            this.setState({

                email_message: "Invalid email address!",
                ecolor: "#ff4242"

            })




        } else {
            isValid = true;
            this.setState({

                email_message: "",
                ecolor: "#ff4242"

            })
        }

        if (isValid == true) {
            axios({ url: "https://apibyashu.herokuapp.com/api/register", method: "post", data: { "name": this.state.name, "email": this.state.email, "password": this.state.pass } }).then((response) => {
                console.log(response)
                if (response.data.message) {
                    alert(response.data.message)
                }
            }, (error) => { })
        }
    }



    render() {
        return (
            <div className="container">
                <div className="main">

                    <div className="main-center">
                        <h3>Sign up To CakeHouse</h3>

                        <form onSubmit={this.validemail}>

                            <div className="form-group">
                                <label for="name">Your Name</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your Name" value={this.state.name} onChange={this.onNameChange} />
                                </div>
                                <span style={{ color: this.state.ecolor }} >{this.state.name_message}</span>
                            </div>

                            <div className="form-group">
                                <label for="email">Your Email</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.onEmailChange} />

                                </div>
                                <span style={{ color: this.state.ecolor }} >{this.state.email_message}</span>
                            </div>



                            <div className="form-group">
                                <label for="password">Password</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" className="form-control" name="password" placeholder="Enter your Password" value={this.state.pass} onChange={this.onPassChange} />
                                </div>
                                <span style={{ color: this.state.ecolor }} >{this.state.pass_message}</span>
                            </div>



                            <button type="submit" className="btn btn-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;