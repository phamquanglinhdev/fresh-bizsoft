const VideoYoutubeInput = ({name, label, data, setData}) => {
    return (
        <div className={"px-2 h-full"}>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>
            <div className={"border h-[calc(100%-2.5rem)] rounded-lg bg-gray-50"}></div>
        </div>
    )
}
export default VideoYoutubeInput