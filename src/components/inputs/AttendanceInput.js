import {useEffect} from "react";

const AttendanceInput = ({label, name, data, setData, defaultValue}) => {
    useEffect(() => {
        if (data[name] === undefined) {
            setData({...data, [name]: defaultValue})
            console.log(data[name])
        }
    }, [])

    function changeValue({param, value, id}) {
        setData({
            ...data, [name]: data[name].map(v => {
                if (v.id === id) {
                    return {...v, [param]: value}
                }
                return v
            })
        })
    }

    return (
        <div className={" px-2 "}>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label ?? name ?? ""}</label>
            {data[name] !== undefined ?
                <div className={"border p-5 rounded-lg bg-gray-50"}>
                    {data[name].map((item) =>
                        <div key={item.id} className={"mb-3"}>
                            <div className={"flex items-center justify-between"}>
                               <div className={"flex items-center"}>
                                   <div className={"mr-2"}>
                                       <img alt={""} src={item.avatar} className={"w-[2rem] h-[2rem] rounded-full"}/>
                                   </div>
                                   <div>
                                       {item.name}
                                   </div>
                               </div>
                                <label className="ml-2 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" onChange={() => {
                                        changeValue({
                                            param: "attendance",
                                            value: item.attendance === 1 ? 0 : 1,
                                            id: item.id
                                        })
                                    }} className="sr-only peer" checked={item.attendance === 1}/>
                                    <div
                                        className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-900"></div>
                                    <span
                                        className="transition-all ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{item.attendance === 1 ? "Có mặt" : "Vắng mặt"}</span>
                                </label>
                            </div>
                            <div className={"mt-3"}>
                                <textarea
                                    onChange={(r) => {
                                        changeValue({
                                            param: "comment",
                                            value: r.target.value,
                                            id: item.id
                                        })
                                    }}
                                    value={item.comment} className={"w-full border p-2 rounded-lg"}
                                    placeholder={item.attendance === 1 ? "Nhận xét" : "Lý do vắng mặt"}>

                                </textarea>
                            </div>

                        </div>
                    )}
                </div>
                : null}
        </div>
    )
}
export default AttendanceInput