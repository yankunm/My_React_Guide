function ShoppingListItem({ id, car, quantity, completed }) {
    const styles = {
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through" : "None"
    };
    return (
        <li key={id} style={styles}>
            {car} - {quantity}
        </li>
    );
}

export default ShoppingListItem;