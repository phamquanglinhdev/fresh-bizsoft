const TextCol = ({value, style}) => {
    return (
        <td className={"bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem]"} style={style}>
            {value}
        </td>
    )
}
export default TextCol