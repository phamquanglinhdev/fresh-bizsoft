import MainLayout from "../../layouts/MainLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import UserInfoCol from "../../components/table/UserInfoCol";
import UserGroup from "../../components/UserGroup";
import HeadTable from "../../components/table/HeadTable";
import TextCol from "../../components/table/TextCol";
import FetchingAnimation from "../../components/FetchingAnimation";
import CheckCol from "../../components/table/CheckCol";
import TextAreaCol from "../../components/table/TextAreaCol";
import AppContext from "../../context/AppContext";
import Calendar from "../../components/Calendar";

const ClassroomDetail = () => {
    const nav = useNavigate()
    const app = useContext(AppContext)
    const {id} = useParams()
    const [fetching, setFetching] = useState(false)
    console.log(id)
    const [data, setData] = useState({
        extra_information: undefined
    })
    const switchToEdit = () => {
        nav("/classroom/" + id + "/edit")
    }
    useEffect(() => {
        app.getClassroomById({
            id: id,
            setData: setData,
            setFetching: setFetching
        }).then(r => {
        })
    }, [])
    return (
        <MainLayout>
            <Breadcrumbs
                label={"Thông tin lớp học"}
                parent={{
                    label: "Danh sách lớp học",
                    link: "/classroom/list"
                }}
            />
            {!fetching ?
                <div className={"p-2"}>
                    <div className={"flex flex-wrap"}>
                        <div className={"md:basis-1/6 lg:block hidden basis-full mb-3"}>
                            <div
                                className={"aspect-square bg-blue-900 rounded-full flex justify-center items-center font-bold h-full"}>
                                <span className={"text-white text-[2rem]"}>
                                    {(data.name || '').substring(0, 3)}
                                </span>
                            </div>
                        </div>
                        <div className={"md:basis-3/12 basis-full mb-3 px-5"}>
                            <div className={"shadow-lg bg-gray-50 border p-2 rounded px-5 h-full pt-5"}>
                                <div className={"text-blue-900 text-2xl font-bold mb-3"}>Lớp {data.name}</div>
                                <div className={"text-gray-600 mb-3"}>
                                    <span className={"mr-2"}>
                                        <i className={"bx bxl-product-hunt"}></i>
                                    </span>
                                    <span>
                                        Chương trình học: {data.program}
                                    </span>
                                </div>
                                <div className={"text-gray-600 mb-3"}>
                                     <span className={"mr-2"}>
                                        <i className={"bx bx-coin-stack"}></i>
                                    </span>
                                    <span>
                                        Học phí: {(data.pricing || '').toLocaleString()} đ
                                    </span>
                                </div>
                                <div className={"text-gray-600 mb-3"}>
                                     <span className={"mr-2"}>
                                        <i className={"bx bx-time"}></i>
                                    </span>
                                    <span>
                                        Tổng thời lượng học: {data.duration} giờ
                                    </span>
                                </div>
                                <div className={"text-gray-600 mb-3"}>
                                     <span className={"mr-2"}>
                                        <i className={"bx bx-play-circle"}></i>
                                    </span>
                                    <span>
                                        Buổi học: {data.session} buổi
                                    </span>
                                </div>
                                {data.status !== undefined ?
                                    <div className={"text-gray-600 mb-3"}>
                                     <span className={"mr-2"}>
                                        {data.status.value === 0 ?
                                            <i className='bx text-green-800 bxs-square-rounded'></i>
                                            : null}
                                         {data.status.value === 1 ?
                                             <i className='bx text-red-900 bxs-square-rounded'></i>
                                             : null}
                                         {data.status.value === 2 ?
                                             <i className='bx text-yellow-600 bxs-square-rounded'></i>
                                             : null}
                                    </span>

                                        <span>
                                     {data.status.label}
                                </span>
                                    </div> : null}
                            </div>
                        </div>
                        <div className={"md:basis-3/12 basis-full mb-3 px-5"}>
                            <div className={"shadow-lg bg-gray-50 border p-2 rounded px-5 h-full pt-5"}>
                                <Calendar calendars={data.schedule || []}/>
                            </div>
                        </div>
                        <div className={"md:basis-2/6 basis-full mb-3 px-5"}>


                        </div>
                    </div>
                    {data.lessons !== undefined && data.lessons.length > 0 ?
                        <div className={"mt-10"}>
                            <div className={"font-bold text-blue-900 text-2xl mb-3"}>Danh sách buổi học</div>
                            <div className={"flex flex-wrap"}>
                                {data.lessons.map((lesson) =>
                                    <div key={lesson.id} className={"lg:basis-1/4 md:basis-1/2 basis-full p-2 mb-3"}>
                                        <div className={"border p-2 pt-4 rounded shadow-lg relative"}>
                                            <div
                                                className={"flex rounded justify-center items-center bg-blue-600 text-white absolute px-2 h-[1.5rem] -top-[0.5rem] -left-[0.5rem]"}>
                                                Buổi {lesson.session}
                                            </div>
                                            <div className={"mb-3 flex justify-between items-center"}>
                                                <div className={"text-xl text-blue-900"}>
                                                    <Link to={"/lesson/" + lesson.id + "/show"}>
                                                        <i className={"bx bx-play-circle mr-2"}></i>
                                                        <span className={'font-semibold'}>
                                                       {lesson.title}
                                                    </span>
                                                    </Link>
                                                </div>
                                                {lesson.teacher !== undefined && lesson.teacher != null ?
                                                    <div className={"flex items-center border px-1 rounded bg-gray-50"}>
                                                        <img src={lesson.teacher.avatar}
                                                             className={"w-[1rem] h-[1rem] rounded-full mr-2"}/>
                                                        <span className={"text-gray-600"}>{lesson.teacher.name}</span>
                                                    </div>
                                                    : "x"}
                                            </div>
                                            <div className={"text-gray-600 flex justify-between"}>
                                                <div>
                                                    <i className={"bx bx-calendar mr-2"}></i>
                                                    <span className={"mr-2"}>{lesson.day}</span>
                                                </div>
                                                <div>
                                                    <i className={"bx bx-time mr-2"}></i>
                                                    <span className={"mr-2"}>{lesson.start} - {lesson.end}</span>
                                                </div>
                                            </div>
                                            <div className={"mt-1 flex justify-between items-center"}>
                                                <div className={"flex"}>
                                                    {lesson.attendances.map((studentAt) =>
                                                        <div key={studentAt.id}>
                                                            <div className={"group relative p-1"}>
                                                                <img
                                                                    className={"cursor-pointer transition-all w-[2rem] h-[2rem] rounded-full opacity-50 hover:opacity-80"}
                                                                    alt={""}
                                                                    src={studentAt.avatar}/>
                                                                <div className={"absolute bottom-[-0.5rem] left-[30%]"}>
                                                                    {studentAt.attendance === 1 ?
                                                                        <i className={"bx bx-check text-white bg-green-800 rounded-full"}></i>
                                                                        :
                                                                        <i className={"bx bx-x text-white bg-red-800 rounded-full"}></i>
                                                                    }
                                                                </div>
                                                                <div
                                                                    className={"text-gray-600 border-gray-50 border shadow-lg rounded z-50 absolute hidden group-hover:block w-[20rem] bg-white p-2 text-sm bottom-[2rem] left-0"}>
                                                                    <div>Học sinh: {studentAt.name}</div>
                                                                    {studentAt.attendance === 1 ?
                                                                        <div>Nhận xét : {studentAt.comment} </div>
                                                                        :
                                                                        <div>Lý do nghỉ : {studentAt.comment}</div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {lesson.record != null ?
                                                    <div className={""}>
                                                        <Link to={lesson.record}>
                                                            <i className='text-xl bg-blue-900 text-white p-2 rounded-full bx bxs-video-recording'></i>
                                                        </Link>
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        : null}
                </div>
                : <FetchingAnimation/>}
        </MainLayout>
    )
}
export default ClassroomDetail