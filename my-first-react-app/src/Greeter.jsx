export default function Greeter({ person, from }) {
    console.log(person);
    return (
        <>
            <h1>Hi There, {person}</h1>
            <h2>- {from}</h2>
        </>
    )
}