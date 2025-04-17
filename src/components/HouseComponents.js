import { SuperHostIndicator } from "./SuperHostIndicator";
import { FaHouseCrack, FaStar  } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import '../styles/HouseComponent.css'

export function HouseComponent({name, image, description, numberBedrooms, numberGuests, price, stars, superHost}){
    return(
        <div className="houseComponent">
            <div className="houseComponent-Image" style={{backgroundImage:`url(${image})`}}>
               {superHost && <SuperHostIndicator/>}
            </div>
            <div className="houseComponent-Info">
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="houseComponent-Info-Especifications">
                    <div className="iconInfo">
                        <FaHouseCrack className="iconInfo-Icon"/>
                        {numberBedrooms} BedRoom
                    </div>
                    <div className="iconInfo">
                        <IoPerson className="iconInfo-Icon"/>
                        {numberGuests} Guests
                    
                    </div>
                </div>
                <hr/>
                <div className="houseComponent-Info-AditionalInfo">
                    <p>${price}/night</p>
                    <div className="iconInfo">
                        <FaStar className="starIconOrange"/>
                        {stars}
                    </div>
                </div>
            </div>
        </div>
    )
}