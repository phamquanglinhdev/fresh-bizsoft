import {Link} from "react-router-dom";

const MultiUserInfoWithInvoiceCol = ({entity, users, style}) => {
    return (
        <td className={"transition-all duration-500 bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[10rem] "}
            style={style}>
            <span className={"flex"}>
                {users.map((user, key) =>
                    <Link key={key} to={"/" + entity + "/" + user.id + "/show"}>
                        <div className={"flex items-center group relative"}>
                            <div className={"mr-2 transition-all opacity-50 group-hover:opacity-100"}>
                                <img src={user.avatar} className={"w-[2rem] rounded-full"}/>
                            </div>
                            <div
                                className={"absolute group-hover:block hidden z-50 top-[-2.5rem] rounded border left-0 shadow-lg w-[14rem] bg-white p-2"}>
                                <div className={"w-full text-sm text-gray-600"}>Họ và tên: {user.name}</div>
                                <div className={"w-full text-sm text-gray-600"}>Ngày bắt đầu học: {user.start}</div>
                                {user.done === 1 ?
                                    <div className={"w-full text-sm text-gray-600"}>Đã đóng đủ</div>
                                    :
                                   <div>
                                       <div className={"w-full text-sm text-gray-600"}>Đã đóng : {user.paid.toLocaleString()} đ</div>
                                       <div className={"w-full text-sm text-gray-600"}>Còn thiếu : {user.less.toLocaleString()} đ</div>
                                       <div className={"w-full text-sm text-gray-600"}>Ngày hẹn đóng : {user.apm}</div>
                                   </div>
                                }
                            </div>
                        </div>
                    </Link>)
                }
            </span>
        </td>
    )
}
export default MultiUserInfoWithInvoiceCol