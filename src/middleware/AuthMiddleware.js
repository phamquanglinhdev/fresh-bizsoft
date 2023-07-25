import {Navigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AppContext from "../context/AppContext";

const AuthMiddleware = ({children}) => {
    const app = useContext(AppContext)
    const [isLogin, setIsLogin] = useState(true)
    useEffect(() => {
        app.auth().then(r => {
            setIsLogin(r)
        })
    }, [])
    if (!isLogin) {
        return <Navigate to={"/login"}/>
    }
    return children
}
export default AuthMiddleware