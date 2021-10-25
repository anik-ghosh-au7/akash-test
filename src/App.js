import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import MenuBar from "./Components/MenuBar/MenuBar";
import Canvas from "./Components/Canvas/Canvas";
import AppBarNav from "./Components/AppBarNav/AppBarNav";
import SideNavBar from "./Components/SideNAVBar/SideNavBar";

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
      elements: new Array(column).fill({
        id: uuid(),
        type: "",
      }),
    };
    setCard([...card, newRow]);
    console.log("cards ==>> ", [...card, newRow]);
  };

  // add a new element to arow
  const addElementToRow = (row, col, type) => {
    console.log("row, col, type ==>> ", row, col, type);
    let tempState = [...card];
    tempState[row].elements[col].type = type;
    setCard(tempState);
    console.log("state ==>> ", tempState);
  };
  return (
    <div className="App">
      <SideNavBar />
      <AppBarNav />
      <MenuBar addRowToCanvas={addRowToCanvas} />
      <Canvas card={card} addElementToRow={addElementToRow} />
    </div>
  );
}

export default App;
