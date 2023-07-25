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

const LessonCreate = () => {
    const app = useContext(appContext)
    const [label, setLabel] = useState("")
    useEffect(() => {
        setLabel("Thêm buổi học mới")
    }, [])
    const nav = useNavigate()
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState({
        classroom: undefined
    })
    const [classrooms, setClassrooms] = useState([])
    const startCreateLesson = async () => {
        console.log(data)
        if (data.classroom === undefined) {
            toast.warn("Chọn lớp trước khi tạo buổi học", {
                autoClose: 1000,
                position: "top-left"
            })
        } else {
            nav("/lesson/" + data.classroom.value + "/create")
        }

    }
    useEffect(() => {
        document.title = label
    })
    useEffect(() => {
        app.preCreateLesson({
            setClassrooms: setClassrooms,
            setFetching: setFetching
        }).then()

    }, [])
    return (
        <MainLayout>
            <div className={""}>
                <div className={"max-w-2xl"}>
                    <div className={"mb-3"}>
                        <SelectInput
                            nullable={true}
                            label={"Chọn lớp"}
                            placeholder={"Chọn lớp"}
                            options={classrooms}
                            name={"classroom"} setData={setData} data={data}/>
                    </div>
                    <div className={"px-2"}>
                        <button onClick={startCreateLesson} disabled={fetching} className={"disabled:bg-blue-300 w-full rounded p-2 bg-blue-900 text-white"}>Tiếp
                            tục tạo
                            buổi học
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default LessonCreate