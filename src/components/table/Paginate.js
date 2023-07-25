const Paginate = ({config, setConfig}) => {
    const pageCss = "bg-blue-300 text-blue-900 rounded-full w-[2rem] h-[2rem] flex justify-center items-center font-bold cursor-pointer mr-2"
    const pageActiveCss = "bg-blue-900 text-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center font-bold cursor-pointer mr-2"
    return (
        <div className={"flex flex-row px-2 items-center justify-between"}>
            {config.currentPage > 3 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: 1
                    })

                }}
                className={pageCss}>
                <i className='bx bx-arrow-to-left font-bold'></i>
            </div> : null
            }
            {config.currentPage > 2 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: config.currentPage - 1
                    })
                }}
                className={pageCss}>{config.currentPage - 2}</div> : null
            }
            {config.currentPage > 1 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: config.currentPage - 1
                    })
                }}
                className={pageCss}>{config.currentPage - 1}</div> : null
            }
            <div className={pageActiveCss}>{config.currentPage}</div>
            {config.totalPage - config.currentPage > 0 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: config.currentPage + 1
                    })
                }}
                className={pageCss}>{config.currentPage + 1}</div> : null
            }
            {config.totalPage - config.currentPage > 1 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: config.currentPage + 2
                    })
                }}
                className={pageCss}>{config.currentPage + 2}</div> : null
            }
            {config.totalPage - config.currentPage > 2 ? <div
                onClick={() => {
                    setConfig({
                        ...config, currentPage: config.totalPage
                    })
                }}
                className={pageCss}>
                <i className='bx bx-arrow-to-right font-bold'></i>
            </div> : null
            }
            <div>({config.totalPage} trang)</div>
        </div>
    )
}
export default Paginate