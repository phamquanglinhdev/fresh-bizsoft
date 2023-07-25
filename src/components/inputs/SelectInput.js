import Select from "react-select";

const SelectInput = ({label, name, data, setData, placeholder, options, nullable = false}) => {
    return (
        <div className={"px-2"}>
            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name}</label>
            <Select
                defaultValue={!nullable ? options[0] : null}
                options={options}
                value={data[name]}
                onChange={(r) => setData({...data, [name]: r})}
                placeholder={placeholder}
            />
        </div>
    )
}
export default SelectInput