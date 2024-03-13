import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

export function getRandomAnimal() {
  const animals = ["bird", "dog", "cat", "mice", "chick", "pig"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
