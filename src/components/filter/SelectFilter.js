import Select from 'react-select'

const SelectFilter = ({icon, filter, setFilter, name, placeholder}) => {
    const options = [
        {value: '0', label: 'Đang học'},
        {value: '1', label: 'Đã ngừng học'},
        {value: '2', label: 'Đang bảo lưu'}
    ]
    return (
        <div className=" w-full md:w-[15rem] mr-2 mb-3 relative z-50">
            <Select
                options={options}
                placeholder={"Tình trạng lớp học ..."}
                defaultValue={filter[name] || null}
                onChange={(r) => {
                    setFilter({...filter, [name]: r})
                }}
            />
            {/*<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
            {/*    {icon}*/}
            {/*</div>*/}
            {/*<input type="text"*/}
            {/*       value={filter[name]}*/}
            {/*       onChange={r => setFilter({...filter, [name]: r.target.value})}*/}
            {/*       className="focus:ring-blue-500 focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"*/}
            {/*       placeholder={placeholder}/>*/}
        </div>
    )
}
export default SelectFilter