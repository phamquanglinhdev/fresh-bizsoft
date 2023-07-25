import {Link} from "react-router-dom";

const EntityCol = ({value, style, entity, id}) => {
    return (
        <td className={"font-bold bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem] text-blue-900 hover:text-blue-600 transition-all"} style={style}>
            <Link to={"/" + entity + "/" + id + "/show"}>
                {value}
            </Link>
        </td>
    )
}
export default EntityCol