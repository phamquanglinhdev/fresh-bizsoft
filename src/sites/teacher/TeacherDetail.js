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

const TeacherDetail = () => {
    const nav = useNavigate()
    const app = useContext(AppContext)
    const {id} = useParams()
    const [fetching, setFetching] = useState(false)
    console.log(id)
    const [data, setData] = useState({
        extra_information: undefined
    })
    const switchToEdit = () => {
        nav("/teacher/" + id + "/edit")
    }
    useEffect(() => {
        app.getTeacherById({
            id: id,
            setData: setData,
            setFetching: setFetching
        }).then(r => {
        })
        // setData({
        //     // name: "Phạm Quang Linh",
        //     // avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     // code: "HS001",
        //     // email: "Phamquanglinhdev@gmail.com",
        //     // birthday: "07/01/2002",
        //     // address: "Hoàng Mai Hà Nội",
        //     // parent: "Chị Hà",
        //     // phone: "0904.800.240",
        //     // grade: {
        //     //     name: "C001",
        //     //     program: "Mover",
        //     //     minute: 80,
        //     //     teacher: {
        //     //         id: 1,
        //     //         name: "Nguyễn Hoài Phương",
        //     //         avatar: "https://haycafe.vn/wp-content/uploads/2022/01/Anh-avatar-cute.jpg",
        //     //         address: "Hà Nội"
        //     //     },
        //     //     staff: {
        //     //         id: 2,
        //     //         name: "Đỗ Thị Hà",
        //     //         avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //         address: "Hà Nội"
        //     //     },
        //     //     start: "08-05-2023",
        //     //     calendar: [
        //     //         {
        //     //             label: "Thứ năm",
        //     //             start: "19:00",
        //     //             end: "21:00"
        //     //         },
        //     //         {
        //     //             label: "Thứ bảy",
        //     //             start: "19:00",
        //     //             end: "21:00"
        //     //         }
        //     //     ],
        //     //     lessons: [
        //     //         {
        //     //             unit: 1,
        //     //             date: "19-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        //     //         },
        //     //         {
        //     //             unit: 2,
        //     //             date: "21-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //     //         },
        //     //         {
        //     //             unit: 3,
        //     //             date: "30-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "0",
        //     //             teacher_comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
        //     //         },
        //     //         {
        //     //             unit: 1,
        //     //             date: "19-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        //     //         },
        //     //         {
        //     //             unit: 2,
        //     //             date: "21-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //     //         },
        //     //         {
        //     //             unit: 3,
        //     //             date: "30-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "0",
        //     //             teacher_comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
        //     //         },
        //     //         {
        //     //             unit: 1,
        //     //             date: "19-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        //     //         },
        //     //         {
        //     //             unit: 2,
        //     //             date: "21-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //     //         },
        //     //         {
        //     //             unit: 3,
        //     //             date: "30-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "0",
        //     //             teacher_comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
        //     //         },
        //     //         {
        //     //             unit: 1,
        //     //             date: "19-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        //     //         },
        //     //         {
        //     //             unit: 2,
        //     //             date: "21-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //     //         },
        //     //         {
        //     //             unit: 3,
        //     //             date: "30-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "0",
        //     //             teacher_comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
        //     //         },
        //     //         {
        //     //             unit: 1,
        //     //             date: "19-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        //     //         },
        //     //         {
        //     //             unit: 2,
        //     //             date: "21-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "1",
        //     //             teacher_comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        //     //         },
        //     //         {
        //     //             unit: 3,
        //     //             date: "30-10-2023",
        //     //             time: "19:00-21:00",
        //     //             title: "Greeting",
        //     //             teacher: {
        //     //                 id: 1,
        //     //                 name: "Nguyễn Hoài Phương",
        //     //                 avatar: "https://i.pinimg.com/736x/4d/47/59/4d4759f61e13927c5f5b39a4cc66af70.jpg",
        //     //                 address: "Hà Nội"
        //     //             },
        //     //             alive: "0",
        //     //             teacher_comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
        //     //         },
        //     //     ],
        //     //     zoom: "https://daymai.vn/0904800240",
        //     //     meet: "https://meet.google.com/kem-nqpg-gtk",
        //     // },
        //
        // })
    }, [])
    return (
        <MainLayout>
            <Breadcrumbs
                label={"Thông tin giáo viên"}
                parent={{
                    label: "Danh sách giáo viên",
                    link: "/teacher/list"
                }}
            />
            {!fetching ?
                <div>
                    <div className={"flex flex-wrap p-2 h-full"}>
                        <div className={"md:basis-1/6 basis-full p-2"}>
                            <div className={"w-full relative group "}>
                                <img src={data.avatar || ''} className={"w-full shadow rounded-2xl"}/>
                                <div
                                    onClick={switchToEdit}
                                    className={"rounded transition-all duration-500 absolute bottom-0 cursor-pointer right-0 group-hover:opacity-80 opacity-0 p-5 shadow-lg rounded-br-2xl bg-white"}>
                                    <i className={"bx bx-edit text-2xl"}></i>
                                </div>
                            </div>
                        </div>
                        <div className={"md:basis-1/2 basis-full p-2"}>
                            <div className={"border p-5 bg-gray-50 rounded-2xl h-full"}>
                                <div className={"text-blue-900 text-2xl font-bold"}>{data.name || ''}</div>
                                <div className={"mt-2 text-gray-600"}>
                                    <i className='bx bxs-map'></i>
                                    <span className={"ml-2"}>{data.address || ''}</span>
                                </div>
                                <div className={"mt-2 text-gray-600"}>
                                    <i className='bx bxs-barcode'></i>
                                    <span className={"ml-2"}>Mã GV: {data.code || ''}</span>
                                </div>
                                <div className={"mt-2 text-gray-600"}>
                                    <i className='bx bxs-envelope'></i>
                                    <span className={"ml-2"}>{data.email || ''}</span>
                                </div>
                                <div className={"mt-2 text-gray-600"}>
                                    <i className='bx bxs-phone'></i>
                                    <span className={"ml-2"}>{data.phone || ''}</span>
                                </div>
                                <div className={"mt-2 text-gray-600"}>
                                    <i className='bx bxs-cake'></i>
                                    <span className={"ml-2"}>{data.birthday_format || ''}</span>
                                </div>
                                {data.extra_information || false ?
                                    <div>
                                        {data.extra_information.map((information, key) =>
                                            <div key={key} className={"mt-2 text-gray-600"}>
                                                <i className='bx bx-list-ul'></i>
                                                <span
                                                    className={"ml-2"}>{information.label} : {information.value || ''}</span>
                                            </div>
                                        )}
                                    </div>
                                    :
                                    null}
                            </div>
                        </div>
                        <div className={"md:basis-1/3 basis-full p-2"}>
                            {data.grade ?
                                <div className={"border p-5 bg-gray-50 rounded-2xl h-full"}>
                                    <div className={"mt-2 text-gray-600 mb-3"}>
                                        <i className='bx bxs-carousel mr-2'></i>
                                        <span>Lớp đang học: <b>{data.grade.name || ''}</b></span>
                                    </div>
                                    <div className={"mt-2 text-gray-600 mb-3"}>
                                        <i className='bx bx-list-ul'></i>
                                        <span
                                            className={"ml-2"}>Chương trình học: <b>{data.grade.program || ''}</b></span>
                                    </div>
                                    <div className={"mt-2 text-gray-600"}>
                                        <i className='bx bx-time'></i>
                                        <span
                                            className={"ml-2"}>Thời lượng học: <b>{data.grade.minute || ''} phút</b></span>
                                    </div>
                                    <div className={"mt-2 text-gray-600 flex items-center"}>
                                        <i className='bx bx-user mr-2'></i>
                                        <span className={"mr-2"}>
                                    Giáo viên:
                                </span>
                                        <UserGroup
                                            name={data.grade.teacher.name}
                                            avatar={data.grade.teacher.avatar}
                                            entity={'teacher'}
                                            id={data.grade.teacher.id}
                                        />
                                    </div>
                                    <div className={"mt-2 text-gray-600 flex items-center"}>
                                        <i className='bx bxs-user-badge'></i>
                                        <span className={"mr-2"}>
                                    Nhân viên quản lý:
                                </span>
                                        <UserGroup
                                            name={data.grade.staff.name}
                                            avatar={data.grade.staff.avatar}
                                            entity={'staff'}
                                            id={data.grade.staff.id}
                                        />
                                    </div>
                                    <div className={"flex flex-row items-center mt-3"}>
                                        <div className={"mr-2"}>
                                            <i className={"bx bx-link-external mr-2"}>

                                            </i>
                                            <span className={"text-gray-600"}>
                                        Kết nối:
                                    </span>
                                        </div>

                                        {data.grade.zoom ?
                                            <Link to={data.grade.zoom} target={"_blank"}
                                                  className={"p-1 px-2 bg-blue-600 text-white rounded flex items-center hover:bg-blue-900 transition-all mr-2"}>
                                                <i className='bx bxs-video mr-2'></i>
                                                <span className={"font-semibold"}>
                                                    Zoom
                                                </span>
                                            </Link>
                                            : null}
                                        {data.grade.meet ?
                                            <Link to={data.grade.zoom} target={"_blank"}
                                                  className={"p-1 px-2 text-gray-600 border rounded flex items-center hover:shadow-lg transition-all"}>
                                                <img
                                                    src={"https://fonts.gstatic.com/s/i/productlogos/meet_round_2020q4/v1/web-96dp/logo_meet_round_2020q4_color_2x_web_96dp.png"}
                                                    className={"mr-2 w-[1.5rem]"}
                                                />
                                                <span className={"font-semibold"}>
                                                    Meet
                                                </span>
                                            </Link>
                                            : null}
                                    </div>
                                </div>
                                :
                                <div
                                    className={"border p-5 flex justify-center items-center bg-gray-50 rounded-2xl h-full"}>
                                    <div>Chưa kết nối lớp học</div>
                                </div>
                            }

                        </div>
                    </div>
                    {data.grade !== undefined ?
                        <div>
                            <div className={"max-h-[40vh] overflow-auto"}>
                                <table className={"table border shadow-lg min-w-max w-full "}
                                       style={{borderCollapse: "separate", borderSpacing: 0}}>
                                    <thead>
                                    <tr className={"text-center"}>
                                        <HeadTable label={'Buổi học'} style={{zIndex: "90", left: 0}}/>
                                        <HeadTable label={'Ngày học'}/>
                                        <HeadTable label={'Bài học'}/>
                                        <HeadTable label={'Giáo viên'}/>
                                        <HeadTable label={'Điểm danh'}/>
                                        <HeadTable label={'Đánh giá của giáo viên'}/>
                                    </tr>
                                    </thead>
                                    {!fetching ?
                                        <tbody>
                                        {data.grade.lessons.map((lesson, key) =>
                                            <tr key={key}>
                                                <TextCol value={lesson.unit}
                                                         style={{position: "sticky", zIndex: "20", left: 0}}/>
                                                <TextCol value={
                                                    <div className={"flex items-center"}>
                                                        <div className={"mr-2"}>
                                                            <i className={"bx bx-calendar mr-1"}></i>
                                                            <span>{lesson.date}</span>
                                                        </div>
                                                        <div>
                                                            <i className={"bx bx-time mr-1"}></i>
                                                            <span>{lesson.time}</span>
                                                        </div>
                                                    </div>
                                                }/>
                                                <TextCol value={lesson.title}/>
                                                <UserInfoCol
                                                    avatar={lesson.teacher.avatar}
                                                    name={lesson.teacher.name}
                                                    address={lesson.teacher.address}
                                                    entity={"teacher"}
                                                />
                                                <CheckCol
                                                    value={lesson.alive}
                                                />
                                                <TextAreaCol
                                                    value={lesson.teacher_comment}
                                                    limit={40}
                                                />
                                            </tr>
                                        )}
                                        </tbody> :
                                        null}
                                </table>
                            </div>
                            {fetching ? <FetchingAnimation/> : null}
                        </div>
                        :
                        <div>
                            <div
                                className={"max-h-[40vh] overflow-auto p-3 text-center justify-center items-center flex"}>
                                <div> Chưa có thông tin nhật ký buổi học</div>
                            </div>
                        </div>
                    }
                </div>
                : <FetchingAnimation/>}
        </MainLayout>
    )
}
export default TeacherDetail