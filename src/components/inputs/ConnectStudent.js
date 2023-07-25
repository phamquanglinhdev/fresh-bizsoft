import {useState} from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import {toast} from "react-toastify";


const ConnectStudent = ({label, name, data, setData, init}) => {
    const statusOptions = [
        {value: 0, label: "Đang học"},
        {value: 1, label: "Đã học xong"},
        {value: 2, label: "Đang bảo lưu"},
    ]
    const changeValue = ({param, value, id}) => {
        const newState = data[name].map((item) => {
            if (item.id === id) {
                return {...item, [param]: value}
            }
            return item
        })
        setData({...data, [name]: newState})
    }
    const [addStudent, setAddStudent] = useState({})
    const removeStudent = (id) => {
        Swal.fire({
            title: "Chắc chắn muốn xóa?",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "red",
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy"

        }).then((result) => {
            if (result.isConfirmed) {
                setData({
                    ...data, [name]: data[name].filter(v => {
                        return v.id !== id
                    })
                })
                toast.success("Xóa học sinh khỏi lớp học thành công", {autoClose: 1000})
            }
        })
    }
    const connectNewStudent = ({id, student_name}) => {
        if (data[name].find(v => v.id === id)) {
            toast.warn("Học sinh đã được kết nối từ trước")
        } else if(id===false){
            toast.warn("Chọn học sinh để kết nối")
        }
        else {
            const dateNow = new Date(Date.now())
            const date = dateNow.getDate() >= 10 ? dateNow.getDate() : "0" + dateNow.getDate()
            const month = dateNow.getMonth() >= 10 ? dateNow.getMonth() : "0" + dateNow.getMonth()
            const year = dateNow.getFullYear()
            console.log(dateNow.getDate())
            const newData = {
                id: id,
                name: student_name,
                show: true,
                start: year +"-"+ month + "-" + date,
                done: 1,
                pricing: data.pricing || 0,
                promote: 0,
                total: data.pricing || 0,
                apm: null,
                paid: 0,
                status: statusOptions[0],
            }
            setData({
                ...data, [name]: [...data[name], newData]
            })
            console.log("newData", newData)
            toast.success("Thêm thành công, hãy điền thông tin học phí", {autoClose: 1000})
        }

    }
    return (
        <div className={"px-2"}>
            <label htmlFor={name}
                   className="block mb-1 text-xl font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>
            <div className={"w-full mb-3"}>
                {data[name].map((student) =>
                    <div key={student.id} className={"bg-gray-50 rounded border mb-3 p-2 py-3"}>
                        <div
                            className={"text-sm font-bold text-blue-900 px-2 flex justify-between items-center " + (student.show ? "mb-3" : "")}>
                            <span>
                                Học sinh: {student.name || ''}
                            </span>
                            <div className={"flex"}>
                                <span
                                    onClick={() => {
                                        changeValue({
                                            param: "show",
                                            value: !student.show,
                                            id: student.id
                                        })
                                    }}
                                    className={"hover:bg-blue-600 transition-all cursor-pointer flex items-center justify-center ml-2 bg-blue-900 text-white w-[1.5rem] h-[1.5rem] rounded-full"}>
                                {student.show ?
                                    <i className='bx bx-collapse'></i>
                                    :
                                    <i className='bx bx-expand'></i>
                                }
                            </span>
                                <span onClick={() => {
                                    removeStudent(student.id)
                                }}
                                      className={"hover:bg-red-600 transition-all cursor-pointer flex items-center justify-center ml-2 bg-red-900 text-white w-[1.5rem] h-[1.5rem] rounded-full"}>
                                <i className='bx bx-trash'></i>
                            </span>
                            </div>

                        </div>
                        <div className={(!student.show ? "hidden" : "")}>
                            <div className={"w-full mb-3 px-2"}>
                                <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Ngày
                                    bắt
                                    đầu học</label>
                                <input
                                    onChange={(r) => {
                                        changeValue({
                                            param: "start",
                                            value: r.target.value,
                                            id: student.id
                                        })
                                    }}
                                    value={student.start || ''} type={"date"}
                                    className={"rounded-lg block w-full border p-2"}/>
                            </div>
                            <div className={"w-full px-2 mb-3"}>
                                <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Tình
                                    trạng
                                    học</label>
                                <Select
                                    defaultValue={student.status}
                                    options={statusOptions}
                                    onChange={(r) => {
                                        changeValue({
                                            param: "status",
                                            value: r,
                                            id: student.id
                                        })
                                    }}
                                />
                            </div>
                            <div className={"w-full px-2 mb-3"}>
                                <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Gói
                                    học
                                    phí (đ)
                                    <span className={"bg-blue-200 rounded-lg px-1 mx-2"}>
                                        <span className={""}>
                                            {
                                                parseInt(((student.pricing) ?? "0")).toLocaleString()
                                            }
                                        </span>
                                        <span className={"ml-1"}>đ</span>
                                    </span>
                                </label>
                                <input
                                    onChange={(r) => {
                                        changeValue({
                                            param: "pricing",
                                            value: r.target.value,
                                            id: student.id
                                        })
                                    }}
                                    value={student.pricing || ''} type={"number"}
                                    className={"rounded-lg block w-full border p-2"}/>
                            </div>
                            <div className={"w-full px-2 mb-3"}>
                                <label className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}>Ưu đãi

                                    <span className={"bg-blue-200 rounded-lg px-1 mx-2"}>
                                        <span className={""}>
                                            {
                                                parseInt(((student.promote) ?? "0")).toLocaleString()
                                            }
                                        </span>
                                        <span className={"ml-1"}>đ</span>
                                    </span>
                                </label>
                                <input
                                    onChange={(r) => {
                                        if (parseInt(student.pricing) > parseInt(r.target.value || 0)) {
                                            changeValue({
                                                param: "promote",
                                                value: r.target.value,
                                                id: student.id
                                            })
                                        } else {
                                            toast.warn("Ưu đãi không thể lớn hơn gói học phí", {autoClose: 400})
                                        }
                                    }}
                                    value={student.promote || ''} type={"number"}
                                    className={"rounded-lg block w-full border p-2"}/>
                            </div>
                            <div
                                className={"px-2 mb-3 text-blue-900 font-bold"}>Tổng: {(student.pricing - student.promote).toLocaleString()} đ
                            </div>
                            <div className={"w-full px-3 mb-3"}>
                                <label className="relative inline-flex items-center mb-4 cursor-pointer">
                                    <input type="checkbox" onChange={() => {
                                        changeValue({
                                            param: "done",
                                            value: student.done === 1 ? 0 : 1,
                                            id: student.id
                                        })
                                    }} className="sr-only peer" checked={student.done === 1}/>
                                    <div
                                        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-900"></div>
                                    <span
                                        className="transition-all ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{student.done === 1 ? "Đã đóng đủ" : "Còn thiếu"}</span>
                                </label>
                            </div>
                            {
                                student.done !== 1 ?
                                    <div className={"w-full px-3 mb-3"}>
                                        <label
                                            className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}> Đã
                                            thu (đ)
                                            <span className={"bg-blue-200 rounded-lg px-1 mx-2"}>
                                                <span className={""}>
                                                {
                                                    parseInt(((student.paid) ?? "0")).toLocaleString()
                                                }
                                                </span>
                                        <span className={"ml-1"}>đ</span>
                                    </span>
                                        </label>

                                        <input
                                            onChange={(r) => {
                                                changeValue({
                                                    param: "paid",
                                                    value: r.target.value,
                                                    id: student.id
                                                })
                                            }}
                                            value={student.paid || ''} type={"number"}
                                            className={"rounded-lg block w-full border p-2"}/>
                                    </div>
                                    : null
                            }
                            {student.done !== 1 ?
                                <div
                                    className={"px-2 mb-3 text-blue-900 font-bold"}>Còn
                                    thiếu: {(student.pricing - student.promote - student.paid).toLocaleString()} đ</div> : null}
                            {
                                student.done !== 1 ?
                                    <div className={"w-full px-3 mb-3"}>
                                        <label
                                            className={"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}> Ngày
                                            hẹn đóng </label>
                                        <input
                                            onChange={(r) => {
                                                changeValue({
                                                    param: "apm",
                                                    value: r.target.value,
                                                    id: student.id
                                                })
                                            }}
                                            value={student.apm || 0} type={"date"}
                                            className={"rounded-lg block w-full border p-2"}/>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                )}
            </div>
            <div className={"mb-3 flex w-full"}>
                <Select
                    className={"basis-3/4"}
                    options={init}
                    onChange={(r) => {
                        setAddStudent(r)
                    }}
                />
                <div className={"px-1 basis-1/4 w-full"}>
                    <button
                        onClick={() => {
                            connectNewStudent({
                                id: addStudent.value,
                                student_name: addStudent.label
                            })
                        }}
                        className={"w-full p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-600 transition-all"}>
                        Kết nối
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ConnectStudent