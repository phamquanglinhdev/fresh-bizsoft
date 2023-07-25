import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import {useContext, useEffect, useState} from "react";
import TextInput from "../../components/inputs/TextInput";
import DateInput from "../../components/inputs/DateInput";
import FetchingAnimation from "../../components/FetchingAnimation";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import appContext from "../../context/AppContext";
import TimeInput from "../../components/inputs/TimeInput";
import NumberInput from "../../components/inputs/NumberInput";
import AttendanceInput from "../../components/inputs/AttendanceInput";
import VideoYoutubeInput from "../../components/inputs/VideoYoutubeInput";

const LessonCreate = () => {
    const app = useContext(appContext)
    const [label, setLabel] = useState("")
    const {id} = useParams()
    const {classroom_id} = useParams()
    useEffect(() => {
        if (id) {
            setLabel("Thêm buổi học mới")
        } else {
            setLabel("Chỉnh sửa buổi học")
        }
    }, [])
    const [init, setInit] = useState({})
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState({
        classroom_id: classroom_id
    })
    const uploadLesson = async () => {
        console.log(data)
        // if (id) {
        //     await app.modifyTeacher({postData: {...data, id: id}, setFetching: setFetching})
        // } else {
        //     await app.modifyTeacher({postData: {...data}, setFetching: setFetching})
        // }
    }
    useEffect(() => {
        document.title = label
    }, [])
    useEffect(() => {
        if (id) {
            setFetching(true)
            app.getTeacherById({
                id: id,
                setData: setData,
                setFetching: setFetching
            }).then()

        }
        if (classroom_id) {
            app.initForLesson({
                classroom_id: classroom_id,
                init: init,
                setInit: setInit,
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
                            label: "Danh sách buổi học",
                            link: "/lesson/list"
                        }
                    }
                    label={label}
                />
            </div>
            {!fetching ?
                <div>
                    <div className={"flex flex-wrap transition-all"}>
                        <div className={"lg:w-3/4 px-1 h-full mb-3"}>
                            <div className={"flex flex-wrap w-full border p-2 rounded bg-gray-50 pt-5 pb-20"}>
                                <div className={"md:w-1/5 w-full mb-3"}>
                                    <TextInput name={'session'} placeholder={init.initSession || 1} label={"Buổi học"}
                                               data={data}
                                               setData={setData}/>
                                </div>
                                <div className={"md:w-4/5 w-full mb-3"}>
                                    <TextInput name={'title'} placeholder={'Unit 1....'} label={"Tiêu đề bài học"}
                                               data={data}
                                               setData={setData}/>
                                </div>
                                <div className={"md:w-1/3 w-full mb-3"}>
                                    <DateInput name={'day'} label={"Ngày"} data={data}
                                               setData={setData}/>
                                </div>
                                <div className={"md:w-1/3 w-full mb-3"}>
                                    <TimeInput name={'start'} label={"Bắt đầu"} data={data}
                                               setData={setData}/>
                                </div>
                                <div className={"md:w-1/3 w-full mb-3"}>
                                    <TimeInput name={'end'} label={"Kết thúc"} data={data}
                                               setData={setData}/>
                                </div>
                                <div className={"md:basis-1/2 basis-full mb-3"}>
                                    <AttendanceInput
                                        name={'attendances'}
                                        data={data}
                                        setData={setData}
                                        label={'Điểm danh'}
                                        defaultValue={init.initStudents}
                                    />
                                </div>
                                <div className={"md:basis-1/2 basis-full "}>
                                    <VideoYoutubeInput
                                        name={'record'}
                                        data={data}
                                        setData={setData}
                                        label={'Video buổi học'}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <NumberInput name={'hour_salary'} label={"Lương theo giờ"} data={data}
                                                 setData={setData}
                                                 suffix={'đ'}
                                    />
                                </div>
                                <div className={"md:w-1/2 w-full mb-3"}>
                                    <TextInput name={'asm'} label={"Nhận xét chung"} data={data}
                                               setData={setData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full mb-3 px-2 mt-5"}>
                        {!id ? <button
                                onClick={uploadLesson}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Tạo buổi
                                học
                                mới
                            </button> :
                            <button
                                onClick={uploadLesson}
                                className={"p-2 cursor-pointer hover:bg-blue-800 rounded bg-blue-900 text-white"}>Chỉnh
                                sửa
                                buổi học
                            </button>
                        }
                    </div>
                </div> :
                <FetchingAnimation/>}

        </MainLayout>
    )
}
export default LessonCreate