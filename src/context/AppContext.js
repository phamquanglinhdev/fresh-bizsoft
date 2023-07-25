import {createContext, useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import {toast} from "react-toastify";
import {ur} from "@faker-js/faker";
import {useNavigate} from "react-router-dom";

const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const redirectTo = useNavigate()
    const baseUrl = "https://bizsoft.test/api";
    const [cookie, setCookie] = useCookies(["token"])
    const setUserAction = async (setUser) => {
        try {
            const response = await (await axios.get(baseUrl + "/user", getHeader))
            setUser(response.data)
        } catch (e) {
            toast.error("Có lỗi xảy ra,vui lòng đăng nhập lại")
        }
    }
    const getAuth = async () => {
        try {
            await (await axios.get(baseUrl + "/connect", getHeader))
            return true
        } catch (e) {
            return false
        }
    }
    const getHeader = {
        headers: {
            'Authorization': cookie.token,
        }
    }
    const loginAction = async (email, password) => {
        const url = baseUrl + "/login"
        try {
            const response = await (await axios.post(url, {
                email: email, password: password
            }))
            setCookie("token", response.data.token)
            toast.success("Đăng nhập thành công")
            window.location.href = "/"
        } catch (e) {
            const message = e.response.data.message ?? "Lỗi không xác định"
            toast.error(message, {
                autoClose: 1000
            })
        }

    }
    const logout = () => {
        setCookie("token", null)
        window.location.href = "/login"
    }
    const getStudentListAction = async ({postData, setStudents, config, setConfig, setFetching}) => {
        const url = baseUrl + "/student/list"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            const data = response.data
            setConfig({
                ...config,
                totalRecord: data.totalRecord,
                perPage: data.perPage,
                startRecord: data.startRecord,
                endRecord: data.endRecord,
                totalPage: data.totalPage
            })
            setStudents(response.data.students)

        } catch (e) {
            toast.error(e)
        } finally {
            setFetching(false)
        }
    }
    const modifyStudent = async ({postData, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/student/modify"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            redirectTo("/student/list")
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, {
                autoClose: 1000
            })
        } finally {
            setFetching(false)
        }
    }
    const deleteStudent = async ({id, setFetching, fetchData}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/student/" + id + "/delete"
            const response = await (await axios.get(url, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            fetchData()
            // redirectTo("/student/list")
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, {
                autoClose: 1000
            })
        } finally {
            setFetching(false)
        }
    }
    const getStudentById = async ({id, setData, setFetching}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/student/" + id + "/show"
            const response = await (await axios.get(url, getHeader))
            setData(response.data)
        } catch (e) {

        } finally {
            setFetching(false)
        }
    }
    const getTeacherListAction = async ({postData, setTeachers, config, setConfig, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/teacher/list"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            const data = response.data
            setConfig({
                ...config,
                totalRecord: data.totalRecord,
                perPage: data.perPage,
                startRecord: data.startRecord,
                endRecord: data.endRecord,
                totalPage: data.totalPage
            })
            setTeachers(response.data.teachers)

        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const getTeacherById = async ({id, setData, setFetching}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/teacher/" + id + "/show"
            const response = await (await axios.get(url, getHeader))
            setData(response.data)
        } catch (e) {

        } finally {
            setFetching(false)
        }
    }
    const modifyTeacher = async ({postData, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/teacher/modify"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            redirectTo("/teacher/list")
        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const deleteTeacher = async ({id, setFetching, fetchData}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/teacher/" + id + "/delete"
            const response = await (await axios.get(url, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            fetchData()
            // redirectTo("/teacher/list")
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, {
                autoClose: 1000
            })
        } finally {
            setFetching(false)
        }
    }
    const getClassroomListAction = async ({postData, setClassroom, config, setConfig, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/classroom/list"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            const data = response.data
            setConfig({
                ...config,
                totalRecord: data.totalRecord,
                perPage: data.perPage,
                startRecord: data.startRecord,
                endRecord: data.endRecord,
                totalPage: data.totalPage
            })
            setClassroom(response.data.classrooms)

        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const initForClassroom = async ({init, setInit}) => {
        const url = baseUrl + "/classroom/init"
        try {
            const response = await (await axios.get(url, getHeader))
            const data = response.data
            setInit({
                ...init,
                initTeachers: data.initTeachers,
                initSupporters: data.initSupporters,
                initStudents: data.initStudents
            })
        } catch (e) {
            console.log(e)
        } finally {

        }
    }
    const modifyClassroom = async ({postData, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/classroom/modify"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            console.log(response.data)
            toast.success(response.data.message, {
                autoClose: 1000
            })
            redirectTo("/classroom/list")
        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const getClassroomById = async ({id, setData, setFetching}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/classroom/" + id + "/show"
            const response = await (await axios.get(url, getHeader))
            console.log(response.data)
            setData(response.data)
        } catch (e) {

        } finally {
            setFetching(false)
        }
    }
    const deleteClassroom = async ({id, setFetching, fetchData}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/classroom/" + id + "/delete"
            const response = await (await axios.get(url, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            fetchData()
            // redirectTo("/teacher/list")
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, {
                autoClose: 1000
            })
        } finally {
            setFetching(false)
        }
    }
    const getLessonListAction = async ({postData, setLessons, config, setConfig, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/lesson/list"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            const data = response.data
            setConfig({
                ...config,
                totalRecord: data.totalRecord,
                perPage: data.perPage,
                startRecord: data.startRecord,
                endRecord: data.endRecord,
                totalPage: data.totalPage
            })
            setLessons(response.data.lessons)

        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const initForLesson = async ({classroom_id,init, setInit, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/lesson/init"
        try {
            const response = await (await axios.post(url,{classroom_id:classroom_id}, getHeader))
            const data = response.data
            setInit({
                ...init,
                initTeachers: data.initTeachers,
                initSession: data.initSession,
                initStudents: data.initStudents
            })
        } catch (e) {
            console.log(e)
        } finally {
            setFetching(false)
        }
    }
    const preCreateLesson = async ({setClassrooms, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/lesson/pre"
        try {
            const response = await (await axios.get(url, getHeader))
            const data = response.data
            setClassrooms(response.data)
        } catch (e) {
            console.log(e)
        } finally {
            setFetching(false)
        }
    }
    const modifyLesson = async ({postData, setFetching}) => {
        setFetching(true)
        const url = baseUrl + "/lesson/modify"
        try {
            const response = await (await axios.post(url, postData, getHeader))
            console.log(response.data)
            toast.success(response.data.message, {
                autoClose: 1000
            })
            redirectTo("/classroom/list")
        } catch (e) {
            toast.error(e.response.data.message)
        } finally {
            setFetching(false)
        }
    }
    const getLessonById = async ({id, setData, setFetching}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/lesson/" + id + "/show"
            const response = await (await axios.get(url, getHeader))
            console.log(response.data)
            setData(response.data)
        } catch (e) {

        } finally {
            setFetching(false)
        }
    }
    const deleteLesson = async ({id, setFetching, fetchData}) => {
        setFetching(true)
        try {
            const url = baseUrl + "/lesson/" + id + "/delete"
            const response = await (await axios.get(url, getHeader))
            toast.success(response.data.message, {
                autoClose: 1000
            })
            fetchData()
            // redirectTo("/teacher/list")
        } catch (e) {
            console.log(e)
            toast.error(e.response.data.message, {
                autoClose: 1000
            })
        } finally {
            setFetching(false)
        }
    }
    const init = {
        version: "0.0.1-beta",
        appName: "Bizsoft",
        author: "Nguyen Dinh Manh",
        developer: "Pham Quang Linh x Nguyen Thanh Phuong",
        setCookie: setCookie,
        cookie: cookie,
        auth: getAuth,
        setUserAction: setUserAction,
        loginAction: loginAction,
        logoutAction: logout,
        getStudentListAction: getStudentListAction,
        modifyStudent: modifyStudent,
        getStudentById: getStudentById,
        deleteStudent: deleteStudent,
        getTeacherListAction: getTeacherListAction,
        modifyTeacher: modifyTeacher,
        getTeacherById: getTeacherById,
        deleteTeacher: deleteTeacher,
        getClassroomListAction: getClassroomListAction,
        initForClassroom: initForClassroom,
        modifyClassroom: modifyClassroom,
        getClassroomById: getClassroomById,
        deleteClassroom: deleteClassroom,
        getLessonListAction: getLessonListAction,
        initForLesson: initForLesson,
        modifyLesson: modifyLesson,
        getLessonById: getLessonById,
        deleteLesson: deleteLesson,
        preCreateLesson: preCreateLesson,
    }
    return (
        <AppContext.Provider value={init}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext