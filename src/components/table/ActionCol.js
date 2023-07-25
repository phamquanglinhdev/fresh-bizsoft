import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'


const ActionCol = ({entity, id, style, confirmDelete}) => {
    const nav = useNavigate()
    const deleteData = () => {
        Swal.fire({
            title: 'Xóa dữ liệu khỏi bảng ?',
            showCancelButton: true,
            cancelButtonText: "Hủy",
            confirmButtonText: 'Xóa',
            confirmButtonColor: "red"
        }).then((result) => {
            if (result.isConfirmed) {
                confirmDelete(id)
            }
        })
    }
    return (
        <td className={"text-xl bg-white shadow-lg p-2 px-3 border-[#dee2e6] border-[0.2px] min-w-[5rem] text-center"}
            style={style}>
            <i onClick={() => {
                nav("/" + entity + "/" + id + "/edit")
            }}
               className={"bx bx-edit mr-2 text-green-400 cursor-pointer hover:font-bold transition-all"}></i>
            <i onClick={deleteData}
               className={"cursor-pointer hover:font-bold transition-all bx bx-trash text-red-400"}></i>
        </td>
    )
}
export default ActionCol