import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneNumberInput = ({label, name, data, setData, placeholder}) => {
    return (
        <div className={"px-2"}>
            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name}</label>
            <PhoneInput
                countries={["VN", "US"]}
                defaultCountry={"VN"}
                className={"border p-2 rounded"}
                placeholder={placeholder}
                value={data[name] || ''}
                onChange={(r) => {
                    setData({...data, [name]: r})
                }}/>
        </div>
    )
}
export default PhoneNumberInput