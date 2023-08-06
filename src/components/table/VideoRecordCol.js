import {useEffect, useState} from "react";
import {tr, ur} from "@faker-js/faker";
import {toast} from "react-toastify";


const VideoRecordCol = ({video, style}) => {
    return (
        <td className={"bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem]"} style={style}>
            {video.url !== "" && video.type !== "" ? <div>
                {video.type === "youtube" ?
                    <div>
                        <a href={video.url} target={"_blank"} className={"flex items-center"}>
                            <img alt={""} className={"w-[2rem] cursor-pointer"}
                                 src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"}/>
                            <span className={"ml-2 text-gray-400 text-sm"}>Xem video</span>
                        </a>
                    </div>
                    : null}
                {video.type === "drive" ?
                    <div>
                        <a href={video.url} target={"_blank"} className={"flex items-center"}>
                            <img alt={""} className={"w-[2rem] cursor-pointer"}
                                 src={"https://cdn-icons-png.flaticon.com/512/2913/2913963.png"}/>
                            <span className={"ml-2 text-gray-400 text-sm"}>Xem video</span>
                        </a>
                    </div>
                    : null}
            </div> : ""}
        </td>
    )
}
export default VideoRecordCol