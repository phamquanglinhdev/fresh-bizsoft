const TextAreaCol = ({value, limit = 100, style}) => {
    return (
        <td className={"bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem] max-w-[15rem] m-auto"}
            style={style}>
            <div className="group flex items-center relative transition-all">
                {value.substring(0, limit)}
                {value.length > limit ?
                    <div className={' cursor-pointer'}>
                        <div>...</div>
                        <div
                            className="bg-white border w-full rounded shadow-lg text-sm text-gray-600 group-hover:block transition-all p-4 hidden absolute top-[-4rem] z-[100] left-0">
                            {value}
                        </div>
                    </div>
                    : null}
            </div>

        </td>
    )
}
export default TextAreaCol