import axios from "axios";

export const loginMiddleware = (data) => {
    return function (dispatch) {
        axios({ url: "https://apifromashu.herokuapp.com/api/login", method: "post", data: data }).then((response) => {
            console.log(response)
            if (response.data.email) {

                dispatch({
                    type: "LOGIN",
                    payload: {
                        token: response.data.token,
                        username: response.data.name,
                        email: response.data.email,

                    }
                })

                localStorage.setItem("usertoken", response.data.token)
                localStorage.setItem("username", response.data.name)
                localStorage.setItem("email", response.data.email)

            }
            if (response.data.message) {
                alert(response.data.message)

            }
        }, (error) => {
            console.log(error)
        })

    }
}

export const removeCakeFromCartMiddleware = (cakeId, userid) => {
    return function (dispatch) {
        axios({
            url: 'https://apifromashu.herokuapp.com/api/removecakefromcart',
            method: 'post',
            headers: {
                authtoken: userid
            },
            data: { cakeid: cakeId }
        }).then(res => {
            dispatch({
                type: 'REMOVE_ITEM_FROM_CART',
                payload: {
                    data: res.data
                }
            })
        }, err => { })
    }
}