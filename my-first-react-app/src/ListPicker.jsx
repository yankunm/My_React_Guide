export default function ListPicker({ values }) {
    const randomElement = values[Math.floor(Math.random() * values.length)];
    return <h1>{randomElement}</h1>
}