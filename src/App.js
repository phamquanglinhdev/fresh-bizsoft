import './App.css';
// import 'boxicons';
import {Route, Routes} from "react-router-dom";
import LoginScreen from "./sites/authenticate/LoginScreen";
import StudentList from "./sites/students/StudentList";
import DashboardScreen from "./sites/home/DashbroadScreen";
import NotFound from "./sites/NotFound";
import StudentCreate from "./sites/students/StudentCreate";
import TeacherList from "./sites/teacher/TeacherList";
import StudentDetail from "./sites/students/StudentDetail";
import TeacherCreate from "./sites/teacher/TeacherCreate";
import TeacherDetail from "./sites/teacher/TeacherDetail";
import ClassroomList from "./sites/classrooms/ClassroomList";
import ClassroomCreate from "./sites/classrooms/ClassroomCreate";
import ClassroomDetail from "./sites/classrooms/ClassroomDetail";
import LessonList from "./sites/lesson/LessonList";
import LessonCreate from "./sites/lesson/LessonCreate";
import LessonDetail from "./sites/lesson/LessonDetail";
import LessonPreCreate from "./sites/lesson/LessonPreCreate";

function App() {
    return (
        <Routes>
            <Route path={"/"} Component={DashboardScreen}/>
            <Route path={"/login"} Component={LoginScreen}/>
            <Route path={"/student/list"} Component={StudentList}/>
            <Route path={"/student/create"} Component={StudentCreate}/>
            <Route path={"/student/:id/edit"} Component={StudentCreate}/>
            <Route path={"/student/:id/show"} Component={StudentDetail}/>
            <Route path={"/teacher/list"} Component={TeacherList}/>
            <Route path={"/teacher/create"} Component={TeacherCreate}/>
            <Route path={"/teacher/:id/edit"} Component={TeacherCreate}/>
            <Route path={"/teacher/:id/show"} Component={TeacherDetail}/>
            <Route path={"/classroom/list"} Component={ClassroomList}/>
            <Route path={"/classroom/create"} Component={ClassroomCreate}/>
            <Route path={"/classroom/:id/edit"} Component={ClassroomCreate}/>
            <Route path={"/classroom/:id/show"} Component={ClassroomDetail}/>
            <Route path={"/lesson/list"} Component={LessonList}/>
            <Route path={"/lesson/create"} Component={LessonPreCreate}/>
            <Route path={"/lesson/:classroom_id/create"} Component={LessonCreate}/>
            <Route path={"/lesson/:id/edit"} Component={LessonCreate}/>
            <Route path={"/lesson/:id/show"} Component={LessonDetail}/>
            <Route path={"*"} Component={NotFound}/>
        </Routes>
    );
}

export default App;
