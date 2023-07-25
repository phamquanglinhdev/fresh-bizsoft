import {Link} from "react-router-dom";

const MultiUserInfoCol = ({entity, users, style}) => {
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
                                className={"absolute group-hover:block hidden z-50 top-[-2.5rem] rounded border left-0 shadow-lg w-[18rem] bg-white p-2"}>
                                <div className={"w-full text-sm text-gray-600"}>Họ và tên : {user.name}</div>
                                <div className={"w-full text-sm text-gray-600"}>{user.address}</div>
                                {user.extras !== undefined && user.extras !== null ?
                                    <div>
                                        {user.extras.map((info, key) =>
                                            <div key={key} className={"w-full text-sm text-gray-600"}>{info.label} : {info.value}</div>
                                        )}
                                    </div>
                                    : null}
                            </div>

                        </div>
                    </Link>)
                }
            </span>
        </td>
    )
}
export default MultiUserInfoCol