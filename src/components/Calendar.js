const Calendar = ({calendars}) => {
    return (
        <div>
            <div className={"text-blue-900 font-bold"}>Lịch học </div>
            <div className={"px-3"}>
                <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-7 px-2">
                    {calendars.map((calendar) =>
                            <li className="mb-[3rem] ml-6 flex items-center">
                    <span
                        className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                        <span className={"text-xs font-semibold text-blue-900"}>{calendar.week_day.toUpperCase()}</span>
                    </span>
                                <time className="block text-md font-normal leading-none text-gray-600 dark:text-gray-500">
                                    {calendar.start} - {calendar.end}
                                </time>
                            </li>
                    )}
                </ol>
            </div>
        </div>
    )
}
export default Calendar