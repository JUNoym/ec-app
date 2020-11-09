import React from "react"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"
import { signInAction } from "../reducks/users/actions"
import { SignIn } from "../reducks/users/operations"


const Login = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => dispatch(SignIn())} >
                ログインする
            </button>
        </div>
    )

}

export default Login