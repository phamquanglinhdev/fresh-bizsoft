const TextInput = ({label, name, data, setData, placeholder,suffix}) => {
    return (
        <div className={"px-2"}>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>
            <div className="flex">
                <input type="text" id={name}
                       value={data[name] || ''}
                       onChange={(r) => {
                           setData({...data, [name]: r.target.value})
                       }}
                       className={"bg-gray-50  border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " + (suffix ? "rounded-l-lg" : "rounded-lg")}
                       placeholder={placeholder} required/>
                {suffix ? <span
                    className="flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md">
                    <div className={"p-1 border "}>{suffix}</div>
                </span> : null}
            </div>
        </div>
    )
}
export default TextInput