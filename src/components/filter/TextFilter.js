const TextFilter = ({setFilter, filter, name, icon, placeholder = ""}) => {
    return (
        <div className="relative w-[15rem] mr-2 mb-3 w-full md:w-[15rem]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {icon}
            </div>
            <input type="text"
                   value={filter[name] || ''}
                   onChange={r => setFilter({...filter, [name]: r.target.value})}
                   className="focus:ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                   placeholder={placeholder}/>
        </div>
    )
}
export default TextFilter