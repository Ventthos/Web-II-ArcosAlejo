import { useEffect, useState } from "react";
import { HouseComponent } from "../components/HouseComponents";
import "../styles/SearchPage.css";

export function SearchPage() {
  const [houses, setHouses] = useState(null);
  const [filteredHouses, setFilteredHouses] = useState(null);   

  async function getHouses() {
    const response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const setHousesInState = async () => {
      const data = await getHouses();
      setHouses(data);
      setFilteredHouses(data);
    };
    setHousesInState();
  }, []);

  function handleFilter(e) {
    const filteredHouses = houses.filter((house) => {
      return house.description.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredHouses(filteredHouses);
  }

  return (
    <div className="searchPage">
      <div className="searchPage-heroImage backgroundImageCentered">
        <div className="searchPage-heroImage-Input">
            <p>Book unique places to stay and things to do.</p>
            <p>Unforgettable trips start with Airbnb.</p>
            <input placeholder="Search" onChange={handleFilter}/>
        </div>
      </div>
      <main className="housesGrid">
        {
            !filteredHouses || filteredHouses.length == 0 ? <h1 className="noResults">No results found</h1> 
            :
            filteredHouses?.map((house) => {
            return (
                <HouseComponent
                key={house.id}
                name={house.title}
                image={house.image}
                description={house.description}
                numberBedrooms={house.capacity.bedroom}
                numberGuests={house.capacity.people}
                price={house.price}
                stars={house.rating}
                superHost={house.superhost}
                />
            );
            })
        }
      </main>
    </div>
  );
}
