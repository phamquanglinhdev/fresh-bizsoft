import {Link} from "react-router-dom";

const UserInfoCol = ({entity, id, style, avatar, address, name}) => {
    return (
        <td className={"group hover:bg-green-100 transition-all duration-500 bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[10rem] "}
            style={style}>
            <Link to={"/" + entity + "/" + id + "/show"}>
                <div className={"flex items-center"}>
                    <div className={"mr-2 group-hover:mr-0 group-hover:w-0 group-hover:opacity-0 transition-all"}>
                        <img src={avatar} className={"w-[2rem] rounded-full"}/>
                    </div>
                    <div
                        className={"w-0 group-hover:mr-2 mr-0 opacity-0 group-hover:opacity-100 group-hover:w-auto transition-all"}>
                        <i className='bx bxs-info-circle text-4xl text-green-500'></i>
                    </div>
                    <div>
                        <div>
                            {name}
                        </div>
                        <div className={"text-gray-600 text-xs"}>
                            <i className={"bx bxs-map mr-1"}></i>
                            {address}
                        </div>
                    </div>
                </div>
            </Link>
        </td>
    )
}
export default UserInfoCol