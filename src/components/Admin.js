
import axios from "axios";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginMiddleware } from "../store/Middlewares";
import { useDispatch } from "react-redux";






const Admin = (props) => {
    const dispatch = useDispatch()
    console.log(".....................>>>>>>>>>>>", props)
    const [cakeName, setCakeName] = useState("");
    const [cakeDesc, setCakeDesc] = useState("");
    const [cakePrice, setCakePrice] = useState("");
    const [cakeWeight, setCakeWeight] = useState("");
    const [cakeEggless, setCakeEggless] = useState(false)
    const [cakeType, setCakeType] = useState('')
    const [cakeImage, setCakeImage] = useState('')
    const [fields, setFields] = useState([{ value: null }])
    const [uploadCakeImage, setUploadCakeImage] = useState('')
    const [cakeFlavour, setCakeFlavour] = useState('')
    const isValid = true;
    let cakeIngredients = []
    // var [cakedata, setcakedata] = useState([]);

    const fileUpload = (event) => {
        setCakeImage(URL.createObjectURL(event.target.files[0]))
        let formData = new FormData()
        formData.append('file', event.target.files[0])
        axios({
            url: 'https://apifromashu.herokuapp.com/api/upload',
            method: 'post',
            headers: {
                authtoken: localStorage.usertoken
            },
            data: formData
        }).then(res => {
            setUploadCakeImage(res.data.imageUrl)
        }, err => { })
    }


    const handleAdd = () => {
        const values = [...fields]
        values.push({ value: null })
        setFields(values)
    }

    const handleChange = (i, event) => {
        const values = [...fields]
        values[i].value = event.target.value
        setFields(values)
    }

    const handleRemove = i => {
        const values = [...fields]
        values.splice(i, 1)
        setFields(values)
    }






    const submitCake = (event) => {
        event.preventDefault()
        fields.map((each, index) => {
            cakeIngredients.push(each.value)
        })
        console.log('cakeIngredients', cakeIngredients)
        dispatch({
            type: 'ADD_CAKE',
            payload: {
                name: cakeName, description: cakeDesc, price: cakePrice, weight: cakeWeight, image: uploadCakeImage,
                type: cakeType, eggless: cakeEggless, flavour: cakeFlavour, ingredients: cakeIngredients
            }
        })
        cakeIngredients = []
    }




    return (
        <div className="container">
            <div className="main">

                <div className="main-center">
                    <center>     <h2>Admin Portal to Add Cake</h2></center>
                    <h3>Welcome,{props.name}({props.email})</h3>

                    <form onSubmit={submitCake} >


                        <div className="form-group">
                            <label for="email">Image</label>
                            <div className="input-group">

                                <input type="file" name='cake_image' onChange={fileUpload} className="form-control" placeholder="Cake Image" /><br />
                                {cakeImage && <img src={cakeImage} alt="Cake" style={{ width: '20%' }} />}

                            </div>

                        </div>


                        <div className="form-group">
                            <label for="email">Cake Name</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="email" placeholder="Enter Cake Name" value={cakeName} onChange={e => setCakeName(e.target.value)} />

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Cake Description</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="email" placeholder="Enter Cake Description" value={cakeDesc} onChange={e => setCakeDesc(e.target.value)} />

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Cake Price</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="email" placeholder="Enter Cake Price" value={cakePrice} onChange={e => setCakePrice(e.target.value)} />

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Cake Weight</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="email" placeholder="Enter Cake Weight" value={cakeWeight} onChange={e => setCakeWeight(e.target.value)} />

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Cake type</label>
                            <div className="input-group">

                                <select name="cake_type" value={cakeType} onChange={e => setCakeType(e.target.value)} className="form-control">
                                    <option value="" disabled>Select Type</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="farewell">Farewell</option>
                                </select>

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Eggless</label>
                            <div className="input-group">

                                <input type="checkbox" value={cakeEggless} name='cake_eggless' onChange={e => setCakeEggless(e.target.checked)} />

                            </div>

                        </div>
                        <div className="form-group">
                            <label for="email">Cake Flavour</label>
                            <div className="input-group">

                                <input value={cakeFlavour} name='cake_flavour' onChange={e => setCakeFlavour(e.target.value)} className="form-control" placeholder="Cake Flavour" />
                            </div>

                        </div>

                        <div className="form-group">
                            <label for="email">Cake ingredients</label>
                            <div className="row">
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-success" onClick={handleAdd}>
                                        <span>
                                            plus
                                        </span>
                                    </button>
                                </div>
                                <div className="col-md-9">

                                    {
                                        fields.map((each, index) => {
                                            return (
                                                <div className="row col-md-12" key={`${each}-${index}`}>
                                                    <div className="col-md-9">
                                                        <input name='cake_ingredients' onChange={e => handleChange(index, e)} className="form-control" placeholder="Cake Ingredients" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="button" className="btn btn-danger" onClick={() => handleRemove(index)}>
                                                            <span>
                                                                minus
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                        </div>



                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>


    )







}
export default connect((state, props) => {
    if (state.Authreducer.email != "ashu.lekhi0540@gmail.com") {
        props.history.push('/')
    } else {
        return {
            email: state.Authreducer.email,
            name: state.Authreducer.username,
        }

    }
})(withRouter(Admin));


