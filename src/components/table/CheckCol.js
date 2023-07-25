const CheckCol = ({value, trueValue = "1", style}) => {
    return (
        <td className={"bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem]"}>
            <div className={"text-center"}>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" checked={value === trueValue}/>
                    <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-800"></div>
                </label>
            </div>
        </td>
    )
}
export default CheckCol