import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ cars }) { // destructuring
    return (
        <ul>
            {cars.map(c => ( // for each object in cars, do this
                <ShoppingListItem {...c} /> // spread operator if passing in everything
            ))
            }
        </ul >
    )
}