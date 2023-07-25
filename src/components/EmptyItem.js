const EmptyItem = () => {
    return (
        <div className={"flex items-center justify-center mt-4 flex-col"}>
            <img
                src={"https://png.pngtree.com/png-clipart/20190924/original/pngtree-empty-box-icon-for-your-project-png-image_4845138.jpg"}
                className={"opacity-40 max-w-[10rem]"}/>
            <div className={"text-gray-600 text-xl"}></div>
        </div>
    )
}
export default EmptyItem