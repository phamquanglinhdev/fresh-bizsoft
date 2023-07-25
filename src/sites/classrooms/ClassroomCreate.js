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
import * as PropTypes from "prop-types";
import NumberInput from "../../components/inputs/NumberInput";
import CalendarInput from "../../components/inputs/CalendarInput";
import SelectMultiInput from "../../components/inputs/SelectMultiInput";
import ConnectStudent from "../../components/inputs/ConnectStudent";


const ClassroomCreate = () => {
    const app = useContext(appContext)
    const [label, setLabel] = useState("")
    const [init, setInit] = useState({})
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            setLabel("Chỉnh sửa thông tin lớp học")

        } else {
            setLabel("Thêm lớp học mới")
        }
        app.initForClassroom({init: init, setInit: setInit}).then()
        console.log(init)
    }, [])
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState({
        schedule: [{
            week_day: "mon",
            start: "",
            end: "",
        }],
        students: []
    })
    const uploadClassroom = async () => {
        console.log(data)
        if (id) {
            await app.modifyClassroom({postData: {...data, id: id}, setFetching: setFetching})
        } else {
            await app.modifyClassroom({postData: {...data}, setFetching: setFetching})
        }
    }
    useEffect(() => {
        document.title = label
    })
    useEffect(() => {
        if (id) {
            setFetching(true)
            app.getClassroomById({
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
                            label: "lớp học",
                            link: "/classroom/list"
                        }
                    }
                    label={label}
                />
            </div>
            {!fetching ? <div>
                    <div className={"flex flex-wrap h-full transition-all"}>
                        <div className={"lg:w-3/4 px-1 h-full"}>
                            <div className={"font-semibold text-xl mb-1 text-blue-900"}>Thông tin cơ bản *</div>
                            <div className={"flex flex-wrap w-full border p-2 rounded bg-gray-50 pt-5 pb-20"}>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"name"} label={"Tên lớp học"} placeholder={"KET123,.."} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput
                                        name={"program"} label={"Chương trình học"} placeholder={"KET, PET,..."} data={data}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <NumberInput
                                        name={"pricing"} label={"Gói học phí"} data={data}
                                        setData={setData}
                                        suffix={"đ"}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <NumberInput
                                        name={"duration"} label={"Thời lượng học"} placeholder={"180"} data={data}
                                        setData={setData}
                                        suffix={"Giờ"}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <NumberInput
                                        name={"session"} label={"Số buổi học"} placeholder={"40"} data={data}
                                        setData={setData}
                                        suffix={"Buổi"}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <SelectMultiInput
                                        name={"teachers"}
                                        data={data}
                                        setData={setData}
                                        placeholder={"Chọn giáo viên"}
                                        label={"Giáo viên"}
                                        nullable={true}
                                        options={init.initTeachers}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <SelectMultiInput
                                        name={"supporters"}
                                        data={data}
                                        setData={setData}
                                        placeholder={"Chọn trợ giảng"}
                                        label={"Trợ giảng"}
                                        nullable={true}
                                        options={init.initSupporters}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <SelectInput
                                        name={"status"}
                                        data={data}
                                        placeholder={"Chọn"}
                                        label={"Trạng thái lớp"}
                                        options={[
                                            {value: 0, label: "Lớp đang hoạt động"},
                                            {value: 1, label: "Lớp đã kết thúc"},
                                            {value: 2, label: "Lớp đang bảo lưu"}
                                        ]}
                                        nullable={true}
                                        setData={setData}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <CalendarInput
                                        name={"schedule"}
                                        data={data}
                                        setData={setData}
                                        label={"Lịch học"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"lg:w-1/4 px-1 "}>
                            <ConnectStudent name={"students"} init={init.initStudents || []} label={"Kết nối học sinh"}
                                            data={data} setData={setData}/>
                        </div>
                    </div>
                    <div className={"w-full mb-3 px-2 mt-5"}>
                        {!id ? <button
                                onClick={uploadClassroom}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Thêm mới lớp
                                học
                            </button> :
                            <button
                                onClick={uploadClassroom}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Chỉnh sửa
                                lớp học
                            </button>
                        }
                    </div>
                </div> :
                <FetchingAnimation/>}

        </MainLayout>
    )
}
export default ClassroomCreate