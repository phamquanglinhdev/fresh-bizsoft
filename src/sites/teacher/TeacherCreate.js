import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import {useContext, useEffect, useState} from "react";
import TextInput from "../../components/inputs/TextInput";
import DateInput from "../../components/inputs/DateInput";
import SelectInput from "../../components/inputs/SelectInput";
import PhoneNumberInput from "../../components/inputs/PhoneInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import AvatarInput from "../../components/inputs/AvatarInput";
import FetchingAnimation from "../../components/FetchingAnimation";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import appContext from "../../context/AppContext";
import ListInput from "../../components/inputs/ListInput";

const TeacherCreate = () => {
    const app = useContext(appContext)
    const [label, setLabel] = useState("")
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            setLabel("Chỉnh sửa thông tin giáo viên")
        } else {
            setLabel("Thêm giáo viên mới")
        }
    }, [])
    const nav = useNavigate()
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState({
        active: "0",
    })
    const uploadStudent = async () => {
        if (id) {
            await app.modifyTeacher({postData: {...data, id: id}, setFetching: setFetching})
        } else {
            await app.modifyTeacher({postData: {...data}, setFetching: setFetching})
        }
    }
    useEffect(() => {
        document.title = label
    })
    useEffect(() => {
        if (id) {
            setFetching(true)
            app.getTeacherById({
                id: id,
                setData: setData,
                setFetching: setFetching
            }).then()

        }

    }, [])
    return (
        <MainLayout>
            <div>
                <Breadcrumbs
                    parent={
                        {
                            label: "Giáo viên",
                            link: "/teacher/list"
                        }
                    }
                    label={label}
                />
            </div>
            {!fetching ? <div>
                    <div className={"flex flex-wrap h-full transition-all"}>
                        <div className={"lg:w-3/4 px-1 h-full mb-3"}>
                            <div className={"font-semibold text-xl mb-1 text-blue-900"}>Thông tin cơ bản *</div>
                            <div className={"flex flex-wrap w-full border p-2 rounded bg-gray-50 pt-5 pb-20"}>
                                <div className={"w-full"}>
                                    <AvatarInput data={data} setData={setData} label={"Ảnh giáo viên"}
                                                 placeholder={"Chọn ảnh"}
                                                 name={"avatar"}/>
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"code"} label={"Mã giáo viên"} placeholder={"GV001"} data={data}
                                        setData={setData}
                                    />
                                </div>

                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"name"} label={"Tên giáo viên"} placeholder={"Nguyễn Văn A"} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <DateInput
                                        name={"birthday"} label={"Ngày sinh"} placeholder={"07/01/2002"} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"address"} label={"Địa chỉ"} placeholder={"Thanh xuân - Hà Nội"} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <SelectInput
                                        options={[
                                            {value: 0, label: "Nam"},
                                            {value: 1, label: "Nữ"},
                                        ]}
                                        name={"gender"} label={"Giới tính"} placeholder={"Giới tính"} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <PhoneNumberInput
                                        name={"phone"} label={"Số điện thoại"} placeholder={"+84 012 345 678"} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"email"} label={"Email giáo viên"} placeholder={"nguyenvana@gmail.com"}
                                        data={data}
                                        setData={setData}
                                    />
                                </div>
                                {/*<div className={"md:w-1/2 w-full mb-3"}>*/}
                                {/*    <TextInput*/}
                                {/*        name={"parent"} label={"A"} placeholder={"Chị Hà"} data={data}*/}
                                {/*        setData={setData}*/}
                                {/*    />*/}
                                {/*</div>*/}

                                <div className={"md:w-full w-full mb-3 "}>
                                    {data.active === "1" ?
                                        <div className={"flex flex-row items-end"}>
                                            <div className={"w-full md:w-1/2"}>
                                                <PasswordInput
                                                    name={"password"} label={"Mật khẩu"} placeholder={"*********"}
                                                    data={data}
                                                    setData={setData}
                                                />
                                            </div>
                                            <div className={"w-full md:w-1/2"}>
                                                <PasswordInput
                                                    name={"password_confirmation"} label={"Nhập lại mật khẩu"}
                                                    placeholder={"*********"}
                                                    data={data}
                                                    setData={setData}
                                                />
                                            </div>
                                            <button onClick={() => {
                                                setData({...data, active: "0"})
                                            }}
                                                    className={"p-2 bg-red-900 text-white rounded-xl px-3 hover:bg-red-600 transition-all"}>
                                                <i className='bx bx-block'></i>
                                            </button>

                                        </div> :
                                        <div className={"px-2"}>
                                            <label htmlFor="first_name"
                                                   className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Mật
                                                khẩu</label>
                                            <button
                                                onClick={() => {
                                                    setData({...data, active: "1"})
                                                }}
                                                className={"p-2 bg-green-800 text-white rounded hover:bg-green-600 transition-all"}>
                                                Kích hoạt mật khẩu
                                            </button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={"lg:w-1/4 w-full px-1 "}>
                            <div>
                                <div className={"font-semibold text-xl mb-1"}>Thông tin thêm</div>
                                <div className={"flex flex-wrap w-full border p-2 rounded bg-gray-50 pt-5"}>
                                    <div className={"w-full mb-2"}>
                                        <ListInput
                                            name={"extra_information"} label={"Thông tin thêm"}
                                            data={data} setData={setData}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={"font-semibold text-xl mt-5 mb-1"}>Thông tin lớp học</div>
                                <div className={"flex flex-wrap w-full border p-2 rounded bg-gray-50 pt-5"}>
                                    <div className={"w-full mb-2"}>
                                        <SelectInput
                                            options={[
                                                {id: "1", label: "C001"},
                                                {id: "2", label: "C002"},
                                                {id: "3", label: "C003"},
                                                {id: "4", label: "C004"},
                                            ]}
                                            name={"grade"} label={"Lớp học"} placeholder={"Chọn lớp học"} nullable={true}
                                            data={data} setData={setData}
                                        />
                                    </div>
                                    <div className={"w-full mb-2"}>
                                        <SelectInput
                                            options={
                                                [
                                                    {id: "1", label: "Đô Thị Hà"},
                                                    {id: "2", label: "Trần Thị Hằng"},
                                                    {id: "3", label: "Lê Thị Quý"},
                                                    {id: "4", label: "Nguyễn Đình Mạnh"},
                                                ]
                                            }
                                            name={"staff"}
                                            label={"Nhân viên quản lý lớp"}
                                            placeholder={"Chọn nhân viên"}
                                            data={data}
                                            setData={setData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full mb-3 px-2 mt-5"}>
                        {!id ? <button
                                onClick={uploadStudent}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Thêm mới giáo viên
                            </button> :
                            <button
                                onClick={uploadStudent}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Chỉnh sửa
                                giáo viên
                            </button>
                        }
                    </div>
                </div> :
                <FetchingAnimation/>}

        </MainLayout>
    )
}
export default TeacherCreate