import React from 'react';

class Signup extends React.Component {


    state = {
        email: '',
        message: '',
        color: ''
    }



    onInputChange = (event) => {
        this.setState({
            email: event.target.value
        });

    }
    validemail = (event) => {
        event.preventDefault();
        var email = this.state.email;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            this.setState({
                message: " Valid email address!",
                color: "green"
            })






        } else {
            this.setState({
                message: "Invalid email address!",
                color: "red"
            })




        }
    }



    render() {
        return (<div class="container">

            <form onSubmit={this.validemail}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="twxt" class="form-control" placeholder="Enter email" value={this.state.email} onChange={this.onInputChange} />
                    <p style={{ color: this.state.color }} >{this.state.message}</p>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}


export default Signup;