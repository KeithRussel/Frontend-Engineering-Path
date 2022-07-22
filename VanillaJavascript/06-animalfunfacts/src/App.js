import { animals } from "./data/animals.js";
import ocean from "./ocean.jpg";
import "./App.css";

const title = "";
const background = <img className="background" alt="ocean" src={ocean} />;
const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const showBackground = true;

// function clicked(e){
//   console.log(e.target.alt);
// }

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const optionIndex = Math.floor(
    Math.random() * animals[selectedAnimal].facts.length
  );

  document.getElementById("fact").innerHTML =
    animals[selectedAnimal].facts[optionIndex];
}

function App() {
  return (
    <div>
      <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
      {showBackground && background}
      <div className="animals">
        {images.map((item) => {
          return item;
        })}
      </div>
      <p id="fact"></p>
    </div>
  );
}

export default App;
