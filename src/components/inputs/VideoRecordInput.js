import {useEffect, useState} from "react";
import {tr, ur} from "@faker-js/faker";
import {toast} from "react-toastify";


const VideoRecordInput = ({name, label, data, setData}) => {

    function setVideo({id, url, type}) {
        const video = {id: id, url: url, type: type}
        setData({...data, [name]: video})
    }

    const getIdFromYoutubeVideo = (url) => {

        let id = ""
        if (url !== "") {
            if (url.includes("youtube.be")) {
                const arrUrl = url.split("/")
                id = arrUrl[arrUrl.length - 1]
            }
            if (url.includes("youtube.com")) {
                const urlQuery = new URL(url)
                const urlParams = new URLSearchParams(urlQuery.search)
                id = urlParams.get("v")
            }
            console.log(id)
            if (id === "" || id === null) {
                toast.warning("Nhập sai định dạng link")
            }

        } else {
            toast.warning("Chưa gán link video")
        }
        setVideo({id: id, url: url || "", type: "youtube"})

    }
    const getIdFromDriveVideo = (url) => {
        let id = ""
        if (url !== "") {
            if (url.search("drive.google.com/file/d/")) {
                const urlArr = url.split("/")
                id = urlArr[urlArr.length - 2]
            }
            if (id === "") {
                toast.warning("Nhập sai định dạng link")
            } else {

            }
        } else {
            toast.warning("Chưa gán link video")
        }
        setVideo({id: id, url: url || "", type: "drive"})

    }
    return (
        <div className={"px-2 h-full"}>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>
            <div className={"border h-[calc(100%-2.5rem)] rounded-lg bg-gray-50"}>
                {data[name] !== null ?
                    <div>
                        {data[name].type === "youtube" ?
                            <div className={"w-full p-5"}>
                                {data[name].id !== null && data[name].id !== "" ?
                                    <iframe src={"https://youtube.com/embed/" + data[name].id}
                                            className={"w-full rounded-lg shadow-lg"} style={{aspectRatio: 16 / 9}}>
                                    </iframe>
                                    : null}
                                <input onChange={(r) => {
                                    getIdFromYoutubeVideo(r.target.value)
                                }} className={"mt-2 rounded w-full border p-2"}
                                       value={data[name].url || ""}
                                       placeholder={"Đường dẫn video Youtube"}/>
                            </div>
                            : null}
                        {data[name].type === "drive" ?
                            <div className={"w-full p-5"}>
                                {data[name].id !== null && data[name].id !== "" ?
                                    <iframe src={"https://drive.google.com/file/d/" + data[name].id + "/preview"}
                                            className={"w-full rounded-lg shadow-lg"} style={{aspectRatio: 16 / 9}}>
                                    </iframe>
                                    : null}
                                <input onChange={(r) => {
                                    getIdFromDriveVideo(r.target.value)
                                }} className={"mt-2 rounded w-full border p-2"}
                                       value={data[name].url || ""}
                                       placeholder={"Đường dẫn video từ Google Drive"}/>
                            </div>
                            : null}
                    </div>
                    : null}
                <div className="flex items-center mr-4 px-5">
                    <img
                        onClick={() => {
                            setVideo({type: "youtube", id: "", url: ""})
                        }}
                        className={"transition-all h-[3rem] px-1 cursor-pointer " + (data[name].type === "youtube" ? "" : "opacity-30")}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"}
                        alt={""}/>
                    <img
                        onClick={() => {
                            setVideo({type: "drive", id: "", url: ""})
                        }}
                        className={"transition-all h-[3rem] px-1  cursor-pointer " + (data[name].type === "drive" ? "" : "opacity-30")}
                        src={"https://cdn-icons-png.flaticon.com/512/2913/2913963.png"}
                        alt={""}/>
                </div>
            </div>
        </div>
    )
}
export default VideoRecordInput