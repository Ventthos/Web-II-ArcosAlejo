import { CiSearch } from "react-icons/ci";
import '../../styles/SearchInput.css'

export function SearchInput({placeholder, type, onChange}){
    return(
        <div className="searchInput">
            <CiSearch className="icon"/>
            <input placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}