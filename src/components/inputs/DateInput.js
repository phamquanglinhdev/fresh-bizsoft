const DateInput = ({label, name, data, setData, placeholder}) => {
    return (
        <div className={"px-2"}>
            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name}</label>
            <input type="date" id={name}
                   value={data[name] || ''}
                   onChange={(r) => {
                       setData({...data, [name]: r.target.value})
                   }}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={placeholder} required/>
        </div>
    )
}
export default DateInput