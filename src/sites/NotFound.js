import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <MainLayout>
            <div className={"flex-1 flex bg-white flex-col items-center justify-center"}>
                <img src={"https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"}
                     className={"max-w-[60rem]"}/>
                <div className={"text-3xl uppercase"}>Không tìm thấy trang , trở về <Link className={"text-blue-900 font-bold"} to={"/"}>Trang chủ</Link>
                </div>
            </div>
        </MainLayout>
    )
}
export default NotFound