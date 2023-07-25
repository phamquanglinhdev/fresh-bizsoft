import MainLayout from "../../layouts/MainLayout";
import HeadTable from "../../components/table/HeadTable";
import TextCol from "../../components/table/TextCol";
import {useContext, useEffect, useState} from "react";
import ActionCol from "../../components/table/ActionCol";
import UserInfoCol from "../../components/table/UserInfoCol";
import {Link} from "react-router-dom";
import TextFilter from "../../components/filter/TextFilter";
import SelectFilter from "../../components/filter/SelectFilter";
import Select from "react-select";
import Paginate from "../../components/table/Paginate";
import FetchingAnimation from "../../components/FetchingAnimation";
import {toast} from "react-toastify";
import AppContext from "../../context/AppContext";
import Footable from "../../components/table/Footable";
import EmptyItem from "../../components/EmptyItem";
import MultiClassroom from "../../components/table/MultiClassroomsCol";
import MultiClassroomsCol from "../../components/table/MultiClassroomsCol";

const StudentList = () => {
    const app = useContext(AppContext)
    const [fetching, setFetching] = useState(true)
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
        fetchData()
    }, [1])
    const [filter, setFilter] = useState({})
    const [students, setStudents] = useState([])
    const [config, setConfig] = useState({
        perPage: 10,
        currentPage: 1,
        totalPage: 10,
        totalRecord: 0,
        startRecord: 1,
        endRecord: 10,
    })
    const fetchData = () => {
        setFetching(true)
        const params = {
            postData: {currentPage: config.currentPage ?? 1, perPage: config.perPage ?? 10, ...filter},
            setStudents: setStudents,
            config: config,
            setConfig: setConfig,
            setFetching: setFetching
        }
        app.getStudentListAction(params).then()
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
        app.deleteStudent({id: id, setFetching: setFetching, fetchData: fetchData}).then()
    }
    return (
        <MainLayout>
            <div className={"p-3"}>
                <div className={"text-blue-900 font-bold text-2xl mb-3"}>
                    Danh sách học sinh
                </div>
                <div className={"mb-3 flex flex-wrap"}>
                    <Link to={"/student/create"}
                          className={"bg-blue-900 md:w-auto w-full text-white p-2 rounded hover:bg-blue-800 transition-all mr-2 mb-3"}>
                        <i className='bx bxs-plus-circle mr-2'></i>
                        Thêm học sinh mới
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
                        placeholder={"Tên học sinh"}
                    />
                    <TextFilter
                        setFilter={setFilter}
                        filter={filter}
                        icon={<i className='bx bxs-user-circle'></i>}
                        name={"parent_name"}
                        placeholder={"Phụ huynh"}
                    />
                    <TextFilter
                        setFilter={setFilter}
                        filter={filter}
                        icon={<i className='bx bxs-user-circle'></i>}
                        name={"staff"}
                        placeholder={"Nhân viên quản lý"}
                    />
                    <TextFilter
                        setFilter={setFilter}
                        filter={filter}
                        icon={<i className='bx bxs-phone-call'></i>}
                        name={"phone"}
                        placeholder={"Số điện thoại"}
                    />
                    <SelectFilter
                        setFilter={setFilter}
                        filter={filter}
                        icon={<i className='bx bxs-phone-call'></i>}
                        name={"status"}
                        placeholder={"Tình trạng"}
                    />
                    <button
                        onClick={() => {
                            startFilter()
                        }}
                        className={"h-[2.5rem] w-full md:w-auto bg-blue-900 p-2 text-white rounded px-4 hover:bg-blue-800 transition-all"}>
                        Lọc
                    </button>
                </div>
                <div className={"flex flex-row flex-wrap justify-between mb-3"}>

                    <Paginate config={config} setConfig={setConfig}/>
                    <div className={"flex items-center text-xl md:text-sm "}>
                        <span className={"mr-2 "}>Hiển thị: </span>
                        <Select
                            onChange={(r) => {
                                setConfig({...config, perPage: r.value})
                            }}
                            className={"text-sm p-0 m-0 z-[99]"}
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
                            <HeadTable label={'Mã học sinh'} style={{zIndex: "30", left: 0}}/>
                            <HeadTable label={'Họ và tên'} style={{position: "sticky", zIndex: "30", left: "10rem"}}/>
                            <HeadTable label={'Giới tính'}/>
                            <HeadTable label={'Số điện thoại'}/>
                            <HeadTable label={'Email'}/>
                            <HeadTable label={'Phụ huynh'}/>
                            <HeadTable label={'Nhân viên quản lý'}/>
                            <HeadTable label={'Lớp đang học'}/>
                            {/*<HeadTable label={'Tình trạng đóng học phí'}/>*/}
                            <HeadTable label={'Hành động'}/>
                        </tr>
                        </thead>
                        {!fetching ?
                            <tbody>
                            {students.map((student, key) =>
                                <tr key={key}>
                                    <TextCol value={student.code || ''}
                                             style={{position: "sticky", zIndex: "20", left: 0}}/>
                                    <UserInfoCol
                                        id={student.id || key}
                                        avatar={student.avatar || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}
                                        name={student.name || ''}
                                        address={student.address || ''}
                                        entity={"student"}
                                        style={{position: "sticky", zIndex: "20", left: "10rem"}}/>
                                    <TextCol value={student.gender || 'Không xác định'}/>
                                    <TextCol value={student.phone || ''}/>
                                    <TextCol value={student.email || ''}/>
                                    <TextCol value={student.parent || ''}/>
                                    <TextCol style={{textAlign:"center"}} value={ <i className='bx bx-unlink text-blue-900 opacity-20 text-xl'></i>}/>
                                    <MultiClassroomsCol id={student.id} classrooms={student.classrooms || []}/>
                                    {/*<TextCol value={student.classrooms.done || 'Chưa kết nối lớp'}/>*/}
                                    <ActionCol
                                        confirmDelete={confirmDelete}
                                        entity={'student'}
                                        id={student.id || key}
                                    />
                                </tr>
                            )}
                            </tbody> :
                            null}
                    </table>
                    {students.length === 0 ?
                        <EmptyItem/>
                        : null}
                </div>
                {fetching ? <FetchingAnimation/> : null}
            </div>
        </MainLayout>
    )
}
export default StudentList