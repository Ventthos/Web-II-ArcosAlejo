import { HouseComponent } from "../components/HouseComponents";
import '../styles/SearchPage.css';

export function SearchPage(){
    return(
        <div className="searchPage">
            <div>
                <p></p>
                <input/>
            </div>
            <main className="housesGrid">
                <HouseComponent/>
                <HouseComponent/>
                <HouseComponent/>
            </main>
        </div>
    )

}