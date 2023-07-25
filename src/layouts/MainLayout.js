import AuthMiddleware from "../middleware/AuthMiddleware";
import {useContext, useEffect, useState} from "react";
import SideBarMenu from "./Menu";
import AppContext from "../context/AppContext";


const MainLayout = ({children}) => {
    const app = useContext(AppContext)
    const [user, setUser] = useState({})
    const logout = () => {
        app.logoutAction()
    }
    useEffect(() => {
        app.setUserAction(setUser).then()
    }, [])
    const [mode, setMode] = useState("3xl:")
    return (
        <AuthMiddleware>
            <div className={"flex flex-row w-full"}>
                <div
                    className={" " + mode + "min-w-[15rem] min-w-[3.5rem] bg-blue-900 min-h-[calc(100vh)] transition-all duration-100 shadow-lg z-50"}>
                    <div className={"flex justify-between flex-col max-h-100vh sticky top-0"}>
                        <div>
                            <div className={'text-center text-2xl pt-2 font-bold text-white mb-3'}>
                                <span>B</span>
                                <span className={" " + mode + "inline hidden"}>IZSOFT</span>
                            </div>
                            <SideBarMenu mode={mode}/>
                        </div>
                        <div>
                            <ul className={"p-2"}>
                                <li
                                    onClick={logout}
                                    className={"flex"}>
                                    <div
                                        className={"w-full rounded text-white p-2 items-center flex cursor-pointer group-hover:bg-white group-hover:text-blue-900 transition-all"}>
                                        <i className={"bx bx-power-off text-2xl " + mode + "mr-2"}></i>
                                        <span className={"text-md " + " " + mode + "block hidden"}>Đăng xuất</span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => {
                                        if (mode === "3xl:") {
                                            setMode("md:")
                                        } else {
                                            setMode("3xl:")
                                        }
                                    }}
                                    className={"flex"}>
                                    <div
                                        className={"w-full rounded text-white p-2 items-center flex cursor-pointer group-hover:bg-white group-hover:text-blue-900 transition-all"}>
                                        <i className={"bx " + (mode === "3xl:" ? "bx-expand" : "bx-exit-fullscreen") + " text-2xl " + " " + mode + "mr-2"}></i>
                                        <span className={"text-md " + " " + mode + "block hidden"}>Thu gọn menu</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"flex-1 bg-white w-[calc(100%-" + (mode === "3xl:" ? "3.5" : "15") + "rem)]"}>
                    <div className={"w-full py-2 flex justify-between px-5 border-b-[1px] border-gray-300"}>
                        <div className={"justify-center flex items-center"}>
                            <span className={"text-blue-900 font-bold"}>Xin chào, {user.name}</span>
                        </div>
                        <div className={"group flex items-center"}>
                            <img className={"w-[2rem] border-[2px] rounded-full border-white"}
                                 src={user.avatar}/>
                            <i onClick={app.logoutAction}
                               className={"p-1 cursor-pointer hover:bg-blue-800 transition-all bx bx-power-off text-2xl bg-blue-900 rounded-full text-white ml-2"}></i>
                        </div>
                    </div>
                    <div className={"p-5"}>
                        {children}
                    </div>
                </div>
            </div>
        </AuthMiddleware>
    )
}
export default MainLayout