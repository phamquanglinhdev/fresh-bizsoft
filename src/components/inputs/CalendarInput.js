import {toast} from "react-toastify";

const CalendarInput = ({name, label, data, setData}) => {
    const dayOfWeek = [
        {value: "mon", label: 'T2'},
        {value: "tue", label: 'T3'},
        {value: "wed", label: 'T4'},
        {value: "thu", label: 'T5'},
        {value: "fri", label: 'T6'},
        {value: "sat", label: 'T7'},
        {value: "sun", label: 'CN'},
    ]
    const addNewItem = () => {
        const newItem = {
            week_day: "",
            start: "",
            end: ""
        }
        setData({...data, [name]: [...data[name], newItem]})
    }
    return (
        <div className={"mx-2"}>
            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div className={"p-3 bg-white  border rounded-lg"}>
                {data[name].map((calendar, key) =>
                    <div key={key} className={"mb-5 border p-3 rounded relative"}>
                        <div
                            onClick={() => {
                                setData({
                                    ...data, [name]: [...data[name].filter((item, k) => {
                                        return k !== key
                                    })]
                                })
                            }}
                            className={"cursor-pointer absolute right-[-0.5rem] top-[-0.5rem]"}>
                            <i className={"bx bx-trash p-1 bg-red-900 hover:bg-red-600 transition-all text-white rounded-full"}></i>
                        </div>
                        <div className={"flex mb-3"}>
                            {dayOfWeek.map((day) =>
                                <div
                                    onClick={() => {
                                        const newState = data[name].map((item, k) => {
                                            if (k === key) {
                                                console.log(key)
                                                return {...item, week_day: day.value}
                                            }
                                            return item
                                        })

                                        setData({...data, [name]: newState})
                                    }}
                                    className={"cursor-pointer hover:bg-blue-900 hover:text-white transition-all flex items-center justify-center rounded-full border mr-3 w-[2rem] h-[2rem]" + (calendar.week_day === day.value ? " bg-blue-900 text-white " : "")}
                                    key={day.value}>{day.label}</div>
                            )}
                        </div>
                        <div className={"flex mb-3"}>
                            <div className={"mr-2"}>
                                <span className={"mr-2 text-blue-900 font-bold"}>Bắt đầu:</span>
                                <input onChange={(r) => {
                                    const newState = data[name].map((item, k) => {
                                        if (k === key) {
                                            return {...item, start: r.target.value}
                                        }
                                        return item
                                    })
                                    setData({...data, [name]: newState})
                                }} className={"p-2 border rounded"} value={calendar.start || ''} type={"time"}/>
                            </div>
                            <div>
                                <span className={"mr-2 text-blue-900 font-bold"}>Kết thúc:</span>
                                <input onChange={(r) => {
                                    const newState = data[name].map((item, k) => {
                                        if (k === key) {
                                            return {...item, end: r.target.value}
                                        }
                                        return item
                                    })
                                    setData({...data, [name]: newState})
                                }} className={"p-2 border rounded"} value={calendar.end || ''} type={"time"}/>
                            </div>
                        </div>
                    </div>
                )}
                <div onClick={addNewItem}
                     className={"cursor-pointer hover:bg-blue-600 transition-all p-2 bg-blue-900 text-white rounded max-w-[5rem] text-center"}>Thêm
                </div>
            </div>
        </div>
    )
}
export default CalendarInput