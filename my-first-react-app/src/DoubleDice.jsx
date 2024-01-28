export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const win = (num1 === num2);
    const styles = {
        color: "white",
        backgroundColor: win ? "green" : "red",
        fontSize: "40px"
    }
    return (
        <div style={styles}>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
            {win ? <h2>You WIN!!!</h2> : null}
        </div>
    )
}