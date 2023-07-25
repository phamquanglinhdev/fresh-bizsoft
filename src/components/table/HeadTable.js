const HeadTable = (props) => {
    return (
        <td className={"p-2 px-3 sticky top-0 bg-[#e9ecef] border-[#dee2e6] border-[0.2px] min-w-[10rem] z-10"}
            style={props.style}>
            {props.label}
        </td>
    )
}
export default HeadTable