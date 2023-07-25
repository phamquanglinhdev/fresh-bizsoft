import {Navigate, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AppContext from "../../context/AppContext";

const LoginScreen = () => {
    const app = useContext(AppContext)
    const login = () => {
        app.loginAction(data.email, data.password).then()
    }
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        app.auth().then(r => {
            setIsLogin(r)
        })
    }, [])
    if (isLogin) {
        return (
            <Navigate to={"/"}/>
        )
    }
    return (
        <div className={"flex items-center justify-center px-5 h-[100vh] w-full"}>
            <div className={"max-w-[25rem] w-full text-center"}>
                <div className={"text-[3rem] text-blue-900 font-bold mb-3 capitalize"}>Bizsoft</div>
                <div className={"p-5 bg-white rounded border py-10"}>
                    <div className="mb-6">
                        <input type="email" id="email"
                               value={data.email}
                               onChange={(r) => setData({...data, email: r.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div className="mb-6">
                        <input type="password" id="password"
                               value={data.password}
                               onChange={(r) => setData({...data, password: r.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                   required/>
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ghi
                            nhớ đăng nhập</label>
                    </div>
                    <button type="button"
                            onClick={login}

                            className={"bg-blue-900 text-white p-2 rounded hover:bg-blue-800 transition-all w-full"}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    )
}
export default LoginScreen