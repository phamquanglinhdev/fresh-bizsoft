import {Link} from "react-router-dom";

const UserGroup = ({id, entity, name, avatar, styles}) => {
    return (
        <Link to={"/" + entity + "/" + id + "/show"}>
            <span className={"flex items-center hover:bg-gray-200 rounded p-1 transition-all"} style={styles}>
                <img alt={name} src={avatar} className={"max-w-[1.5rem] rounded-full"}/>
                <div className={"ml-2"}>{name}</div>
            </span>
        </Link>
    )
}
export default UserGroup