import Chicken from "./Chicken"
import './App.css'
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import Heading from "./Heading"

function App() {
  return (
    <div>
      {/* <Greeter person="Alex" from="Me" />
      <Greeter person="Ling" from="Me" />
      <Greeter person="Grace" from="Me" /> */}
      {/* <Die /> */}
      {/* <ListPicker values={[1, 3, 5, 8, 10]} /> */}
      {/* <DoubleDice /> */}
      {/* <Heading text="Hello World!" fontSize="20px" />*/}
      <ColorList colors={["red", "pink", "purple", "teal"]} />
    </div>
  );
}

export default App;
