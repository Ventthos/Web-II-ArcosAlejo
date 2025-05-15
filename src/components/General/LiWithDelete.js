import { MdDelete } from "react-icons/md";
import '../../styles/LiWithDelete.css'

export function LiWithDelete({text, onDelete}){
    return(
        <li className="liWithDelete">
            <div>
                <p>{text}</p>
                <button onClick={onDelete}>
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}