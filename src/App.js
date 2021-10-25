import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import AppNavBar from "./Components/AppNavBar/AppNavBar";
import MenuBar from "./Components/MenuBar/MenuBar";
import Canvas from "./Components/Canvas/Canvas";
import SideBarElement from "./Components/SideBarElement/SideBarElement";

function App() {
  const [card, setCard] = useState([]);
  const [currElem, setCurrElem] = useState({ row: -1, col: -1 });
  const [sideBarRow, SetSideBarRow] = useState(false);
  const [sideBarElement, SetSideBarElement] = useState(false);

  const handleSideBarRowOpen = () => {
    SetSideBarRow(true);
  };

  const handleSideBarRowClose = () => {
    SetSideBarRow(false);
  };

  const handleSideBarElementOpen = () => {
    SetSideBarElement(true);
  };

  const handleSideBarElementClose = () => {
    SetSideBarElement(false);
  };

  useEffect(() => {
    setCard(JSON.parse(window.localStorage.getItem("card")) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const addCardToCanvas = (column) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      column,
      element: [],
    };
    // console.log("Column => ", column);
    setCard([...card, newCard]);
    // console.log("Card => ", card);
  };

  // const addElementToCard = (type, cardIndex, elementColumn, data) => {
  //   let tempCards = JSON.parse(window.localStorage.getItem("card")) || [];
  //   const tempCard = tempCards[cardIndex];
  //   // const newElement = {};
  //   elementColumn == 1 ? tempCard.shift(data) : tempCard.push(data);
  //   window.localStorage.setItem("card", JSON.stringify(tempCards));
  // };
  console.log("Card after => ", card);
  return (
    <div className="App">
      <AppNavBar />
      <MenuBar
        addCardToCanvas={addCardToCanvas}
        sideBarRow={sideBarRow}
        sideBarElement={sideBarElement}
        handleSideBarRowOpen={handleSideBarRowOpen}
        handleSideBarRowClose={handleSideBarRowClose}
        handleSideBarElementOpen={handleSideBarElementOpen}
        handleSideBarElementClose={handleSideBarElementClose}
        // addElementToCard={addElementToCard}
      />
      <Canvas
        addCardToCanvas={addCardToCanvas}
        card={card}
        setCard={setCard}
        sideBarElement={sideBarElement}
        handleSideBarElementOpen={handleSideBarElementOpen}
        handleSideBarElementClose={handleSideBarElementClose}
        setCurrElem={setCurrElem}
      />
    </div>
  );
}

export default App;
