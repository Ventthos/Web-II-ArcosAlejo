import { useEffect, useState } from "react";
import { HouseComponent } from "../components/HouseComponents";
import "../styles/SearchPage.css";

export function SearchPage() {
  const [houses, setHouses] = useState(null);

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
    };
    setHousesInState();
  }, []);

  return (
    <div className="searchPage">
      <div>
        <p></p>
        <input />
      </div>
      <main className="housesGrid">
        {houses?.map((house) => {
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
        })}
      </main>
    </div>
  );
}
