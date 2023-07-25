import {Link} from "react-router-dom";

const MultiClassroom = ({id, classrooms, style}) => {
    return (
        <td className={"bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem]"} style={style}>
            {classrooms.length > 0 ?
                <div className={"flex flex-wrap justify-center"}>
                    {classrooms.map((classroom) =>
                        <div className={"group relative mr-1"}>
                            <Link to={"/classroom/" + classroom.id + "/edit"} className={"relative"}>
                                {classroom.done === 1 ?
                                    <i className={"bx bx-check text-white bg-green-800 text-xl rounded-full absolute top-[-5px] left-[-5px] z-50"}></i> :
                                    <i className={"bx bx-time text-white bg-yellow-600 text-xl rounded-full absolute top-[-5px] left-[-5px] z-50"}></i>
                                }
                                <div
                                    className={"transition-all cursor-pointer opacity-50 hover:opacity-80 text-sm w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-blue-900 p-1 rounded-full text-white font-bold"}>{classroom.name.substring(0, 3)}</div>
                            </Link>
                            <div
                                className={"z-[1000] p-1 w-[15rem] left-[2rem] text-gray-600 top-[50%] group-hover:block hidden absolute bg-white border shadow-lg rounded"}>
                                <div className={"text-sm"}>Tên lớp: {classroom.name}</div>
                                <div className={"text-sm"}>Ngày bắt đầu học: {classroom.start}</div>
                                {classroom.done !== 1 ?
                                    <div>
                                        <div className={"text-sm"}>Đã đóng: {classroom.paid.toLocaleString()} đ</div>
                                        <div className={"text-sm"}>Còn thiếu: {classroom.missing.toLocaleString()} đ
                                        </div>
                                        <div className={"text-sm"}>Hẹn đóng: {classroom.apm}</div>
                                    </div>
                                    :
                                    <div className={"text-sm"}>Đã đóng đủ</div>
                                }
                            </div>
                        </div>
                    )}
                </div>
                : <div className={"cursor-pointer text-blue-900 opacity-50 text-sm font-thin text-center"}>
                    <Link to={"/student/" + id + "/edit"}>
                        <i className='bx bx-unlink text-2xl'></i>
                    </Link>
                </div>
            }
        </td>
    )
}
export default MultiClassroom