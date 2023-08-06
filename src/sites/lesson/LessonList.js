import MainLayout from "../../layouts/MainLayout";
import HeadTable from "../../components/table/HeadTable";
import TextCol from "../../components/table/TextCol";
import {useContext, useEffect, useState} from "react";
import ActionCol from "../../components/table/ActionCol";
import UserInfoCol from "../../components/table/UserInfoCol";
import {Link} from "react-router-dom";
import TextFilter from "../../components/filter/TextFilter";
import Select from "react-select";
import Paginate from "../../components/table/Paginate";
import FetchingAnimation from "../../components/FetchingAnimation";
import {toast} from "react-toastify";
import AppContext from "../../context/AppContext";
import EmptyItem from "../../components/EmptyItem";
import EntityCol from "../../components/table/EntityCol";
import VideoRecordInput from "../../components/inputs/VideoRecordInput";
import VideoRecordCol from "../../components/table/VideoRecordCol";

const LessonList = () => {
    const app = useContext(AppContext)
    const [fetching, setFetching] = useState(false)
    const perPageSelect = [
        {value: "10", label: "10"},
        {value: "20", label: "20"},
        {value: "50", label: "50"},
        {value: "100", label: "100"},
        {value: "200", label: "200"},
        {value: "500", label: "500"},
        {value: "1000", label: "1000"},
        {value: "-1", label: "Tất cả"},
    ]
    useEffect(() => {
        // fetchData()
    }, [1])
    const [filter, setFilter] = useState({})
    const [lessons, setLessons] = useState([])
    const [config, setConfig] = useState({
        perPage: 10,
        currentPage: 1,
        totalPage: 10,
        totalRecord: 0,
        startRecord: 1,
        endRecord: 10,
    })
    const fetchData = () => {
        const params = {
            postData: {currentPage: config.currentPage ?? 1, perPage: config.perPage ?? 10, ...filter},
            setLessons: setLessons,
            config: config,
            setConfig: setConfig,
            setFetching: setFetching
        }
        app.getLessonListAction(params).then()
    }
    const startFilter = () => {
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [config.currentPage])

    useEffect(() => {
        if (config.currentPage !== 1) {
            setConfig({...config, currentPage: 1})
        } else {
            fetchData()
        }

    }, [config.perPage])
    const confirmDelete = (id) => {
        // app.deleteLesson({id: id, setFetching: setFetching, fetchData: fetchData}).then()
    }
    return (
        <MainLayout>
            <div className={"p-3"}>
                <div className={"text-blue-900 font-bold text-2xl mb-3"}>
                    Danh sách buổi học
                </div>
                <div className={"mb-3 flex flex-wrap"}>
                    <Link to={"/lesson/create"}
                          className={"bg-blue-900 md:w-auto w-full text-white p-2 rounded hover:bg-blue-800 transition-all mr-2 mb-3"}>
                        <i className='bx bxs-plus-circle mr-2'></i>
                        Thêm buổi học mới
                    </Link>
                    <button
                        onClick={() => {
                            toast.success("Xuất dữ liệu thành công", {
                                position: toast.POSITION.BOTTOM_RIGHT,
                                autoClose: 1000,
                            })
                        }}
                        className={"bg-blue-900 md:w-auto w-full text-white p-2 rounded hover:bg-blue-800 transition-all mr-2 mb-3"}>
                        <i className='bx bxs-download mr-2'></i>
                        Xuất dữ liệu
                    </button>
                    <button
                        className={"bg-blue-900 md:w-auto w-full text-white p-2 rounded hover:bg-blue-800 transition-all mb-3"}>
                        <i className='bx bxs-cloud-upload mr-2'></i>
                        Nhập dữ liệu
                    </button>
                </div>
                <div className={"z-50 mb-3 md:flex block flex-wrap w-full"}>
                    <TextFilter
                        setFilter={setFilter}
                        filter={filter}
                        name={"name"}
                        icon={<i className='bx bxs-user-circle'></i>}
                        placeholder={"Tiêu đề buổi học"}
                    />
                    <TextFilter
                        setFilter={setFilter}
                        filter={filter}
                        icon={<i className='bx bx-slider'></i>}
                        name={"email"}
                        placeholder={"Lớp học"}
                    />
                    <button
                        onClick={() => {
                            startFilter()
                        }}
                        className={"h-[2.5rem] w-full md:w-auto bg-blue-900 p-2 text-white rounded px-4 hover:bg-blue-800 transition-all"}>
                        Lọc
                    </button>
                </div>
                <div className={"flex flex-row flex-wrap justify-between mb-3 z-50"}>
                    <Paginate config={config} setConfig={setConfig}/>
                    <div className={"flex items-center text-xl md:text-sm z-50"}>
                        <span className={"mr-2 "}>Hiển thị: </span>
                        <Select
                            onChange={(r) => {
                                setConfig({...config, perPage: r.value})
                            }}
                            className={"text-sm p-0 m-0"}
                            defaultValue={perPageSelect[0]}
                            placeholder={""}
                            options={perPageSelect}/>
                        <span className={"ml-2 text-xl md:text-sm"}>hàng
                        ( Từ hàng
                            <span className={"font-bold mx-1"}>
                                {config.startRecord}
                            </span>
                            đến hàng
                            <span className={"font-bold mx-1"}>
                            {config.endRecord}
                            </span>
                            trên tổng số
                            <span className={"font-bold mx-1"}>
                            {config.totalRecord}
                            </span>
                            hàng)
                        </span>
                    </div>

                </div>
                <div className={"max-h-[65vh] overflow-auto"}>
                    <table className={"table border shadow-lg min-w-max w-full"}
                           style={{borderCollapse: "separate", borderSpacing: 0}}>
                        <thead>
                        <tr>
                            <HeadTable label={'Buổi học'} style={{zIndex: "30", left: 0}}/>
                            <HeadTable label={'Lớp học'}/>
                            <HeadTable label={'Bài học'}/>
                            <HeadTable label={'Ngày học'}/>
                            <HeadTable label={'Bắt đầu'}/>
                            <HeadTable label={'Kết thúc'}/>
                            <HeadTable label={'Lương theo giờ'}/>
                            <HeadTable label={'Lương buổi học'}/>
                            <HeadTable label={'Video Record'}/>
                            <HeadTable label={'Hành động'}/>
                        </tr>
                        </thead>
                        {!fetching ?
                            <tbody>
                            {lessons.map((lesson, key) =>
                                <tr key={lesson.id || key}>
                                    <TextCol value={lesson.session || ''}
                                             style={{position: "sticky", zIndex: "20", left: 0}}/>
                                    {lesson.classroom !== undefined && lesson.classroom !== null ?
                                        <EntityCol
                                            value={lesson.classroom.name || ''}
                                            entity={'classroom'}
                                            id={lesson.classroom.id}
                                        />
                                        :
                                        <div>-</div>
                                    }
                                    <TextCol
                                        value={lesson.title}
                                    />
                                    <TextCol
                                        value={lesson.day}
                                    />
                                    <TextCol
                                        value={lesson.start}
                                    />
                                    <TextCol
                                        value={lesson.end}
                                    />
                                    <TextCol
                                        value={lesson.hourSalary.toLocaleString()}
                                    />
                                    <TextCol
                                        value={lesson.lessonSalary.toLocaleString()}
                                    />
                                    <VideoRecordCol
                                        video={lesson.recordVideo}
                                    />
                                    <ActionCol
                                        confirmDelete={confirmDelete}
                                        entity={'lesson'}
                                        id={lesson.id || key}
                                    />
                                </tr>
                            )}
                            </tbody> :
                            null}
                    </table>
                    {lessons.length === 0 ? <EmptyItem/> : null}
                </div>
                {fetching ? <FetchingAnimation/> : null}
            </div>
        </MainLayout>
    )
}
export default LessonList