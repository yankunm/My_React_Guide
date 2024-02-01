import CarListItem from "./CarListItem";
import "./CarList.css"

function CarList({ cars }) {
    return (
        <div className="CarList">
            {cars.map(c => ( // for each object in cars, do this
                <CarListItem key={c.id} brand={c.brand} /> // spread operator if passing in everything
            ))}
        </div>
    )
}

export default CarList;