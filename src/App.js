import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import MenuBar from "./Components/MenuBar/MenuBar";
import Canvas from "./Components/Canvas/Canvas";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(JSON.parse(window.localStorage.getItem("card")) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  // add a new row
  const addRowToCanvas = (column) => {
    const newRowId = uuid();
    const newRow = {
      id: newRowId,
      column,
      elements: [],
    };
    setCard([...card, newRow]);
    console.log("All cards", card);
  };

  // add a new element to arow
  const addElementToRow = (rowId, content) => {
    const newElemId = uuid();
    const newElem = {
      id: newElemId,
      content,
      rowId,
    };
    // setCard()
    console.log("new elem ==>> ", newElem);
    console.log("new elem card==>> ", card);
  };
  return (
    <div className="App">
      <MenuBar addRowToCanvas={addRowToCanvas} />
      <Canvas card={card} addElementToRow={addElementToRow} />;
    </div>
  );
}

export default App;
