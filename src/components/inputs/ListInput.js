import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const ListInput = ({label, name, data, setData, placeholder}) => {
    const [addField, setAddField] = useState("")
    const [fields, setFields] = useState(data[name] ?? []);
    const addFieldToList = () => {
        if (addField !== "") {
            if (fields.find(v => v.label === addField)) {
                toast.warn("Đã có thông tin này", {
                    autoClose: 1000
                })
            } else {
                const newField = {
                    label: addField,
                    value: "",
                }
                setFields([...fields, newField])
                setAddField("")
            }
        } else {
            toast.warn("Điền tên thông tin muốn thêm")
        }

    }
    const removeFieldFromList = (label) => {
        setFields(fields.filter(v => v.label !== label))
    }
    useEffect(() => {
        setData({...data, [name]: fields})
    }, [fields])
    return (
        <div>
            {fields.map((field, key) =>
                <div className={"px-2 mb-3 "} key={key}>
                    <label htmlFor="first_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label}</label>
                    <div className={"flex"}>
                        <input type="text" id={name + "_" + key}
                               value={field.value || ''}
                               onChange={(r) => {
                                   const newState = fields.map(obj => {
                                       // 👇️ if id equals 2, update country property
                                       if (obj.label === field.label) {
                                           return {...obj, value: r.target.value};
                                       }

                                       // 👇️ otherwise return the object as is
                                       return obj;
                                   });
                                   setFields(newState)
                               }}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder={placeholder} required
                        />
                        <button className={"bg-red-900 text-white px-2 rounded-full ml-2"}
                                onClick={() => removeFieldFromList(field.label)}>
                            <i className={"bx bx-trash"}></i>
                        </button>
                    </div>
                </div>
            )}
            <div className={"flex w-full justify-between flex-wrap flex-row p-2"}>
                <div className={"basis-5/6 h-full"}>
                    <input placeholder={"Thêm thông tin"} value={addField} onChange={r => setAddField(r.target.value)}
                           className={"p-2 border rounded w-full"}/>
                </div>
                <div className={"basis-1/6 px-2 flex"}>
                    <div
                        className={"transition-all bg-green-800 text-white rounded w-full h-full flex flex-wrap flex-row items-center justify-center cursor-pointer hover:bg-green-500"}
                        onClick={addFieldToList}>
                        <i className={"bx bx-add-to-queue text-xl"}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListInput