import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const MenuItem = (props) => {
    const [mode, setMode] = useState(props.mode)
    useEffect(() => {
        setMode(props.mode)
    }, [props.mode])
    const nav = useNavigate()
    const sub = props.sub ?? []
    return (
        <li onClick={() => {
            if (props.link) {
                nav(props.link)
            }
        }}
            className={"group " + mode + "block flex"}>
            <div
                className={"w-full rounded text-white p-2 items-center flex cursor-pointer group-hover:bg-white group-hover:text-blue-900 transition-all z-[9999]"}>
                <i className={props.icon + " " + "text-2xl " + " " + mode + "mr-2 block"}></i>
                <span className={"text-md " + " " + mode + "block hidden"}>{props.name}</span>
            </div>
            {sub.length > 0 ? <div className={"hidden group-hover:block mt-2 z-[9999]"}>
                <div className={"top-0 relative z-[9999]"}>
                    <div
                        className={" px-3 " + " " + mode + "relative absolute top-0 z-[9999] " + " " + mode + "min-w-auto min-w-[15rem]"}>
                        <ul className={" " + mode + "text-white " + " " + mode + "list-disc " + " " + mode + "bg-transparent bg-white text-blue-900 shadow-lg " + " " + mode + "shadow-none rounded"}>
                            {sub.map((item, key) =>
                                <li key={key} className={"mb-2 ml-3"}>
                                    <Link className={"text-sm hover:font-bold transition-all"} to={item.url}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div> : null}
        </li>
    )
}
const SideBarMenu = ({mode}) => {
    return (
        <ul className={"p-2"}>
            <MenuItem mode={mode} icon={"bx bx-home"} name={"Trang chủ"} link={"/"}/>
            <MenuItem mode={mode} icon={"bx bxs-user-detail"} name={"Học sinh"} sub={[
                {name: "Danh sách học sinh", url: "/student/list"},
                {name: "Thêm mới học sinh", url: "/student/create"}
            ]}/>
            <MenuItem mode={mode} icon={"bx bx-user-voice"} name={"Giáo viên"} sub={[
                {name: "Danh sách giáo viên", url: "/teacher/list"},
                {name: "Thêm mới giáo viên", url: "/teacher/create"}
            ]}/>
            <MenuItem mode={mode} icon={"bx bx-slideshow"} name={"Lớp học"} sub={[
                {name: "Danh sách lớp học", url: "/classroom/list"},
                {name: "Thêm mới lớp học", url: "/classroom/create"}
            ]}/>
            <MenuItem mode={mode} icon={"bx bx-history"} name={"Buổi học"} sub={[
                {name: "Danh sách buổi học", url: "/lesson/list"},
                {name: "Điểm danh buổi học", url: "/lesson/create"}
            ]}/>


        </ul>
    )
}
export default SideBarMenu