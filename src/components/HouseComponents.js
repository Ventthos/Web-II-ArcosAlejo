import { SuperHostIndicator } from "./SuperHostIndicator";
import { FaHouseCrack, FaStar  } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import '../styles/HouseComponent.css'

export function HouseComponent({name, image, description, numberBedrooms, numberGuests, price, stars}){
    return(
        <div className="houseComponent">
            <div className="houseComponent-Image">
               <SuperHostIndicator/>
            </div>
            <div className="houseComponent-Info">
                <h1>Nordic Retreat with Stuning Views</h1>
                <p>Immerse yourself in the beauty of the Nordic landscape at this sleek and stylish cabin. With floor-to-ceiling windows and a spacious deck, you'll have breathtaking views of the surrounding mountains.</p>
                <div className="houseComponent-Info-Especifications">
                    <div className="iconInfo">
                        <FaHouseCrack className="iconInfo-Icon"/>
                        2 BedRoom
                    </div>
                    <div className="iconInfo">
                        <IoPerson className="iconInfo-Icon"/>
                        3 Guests
                    
                    </div>
                </div>
                <hr/>
                <div className="houseComponent-Info-AditionalInfo">
                    <p>$250/night</p>
                    <div className="iconInfo">
                        <FaStar className="starIconOrange"/>
                        4.9
                    </div>
                </div>
            </div>
        </div>
    )
}