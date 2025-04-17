import { FaStar } from "react-icons/fa6";
import '../styles/SuperHostIndicator.css'

export function SuperHostIndicator(){
    return(
        <div className="superhost">
            <p><strong>Superhost</strong></p>
            <FaStar className="starIcon"/>
        </div>
    )
}