import React, { useState, useEffect } from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";

import CanvasCard from "../CanvasCard/CanvasCard";

const Canvas = ({ card, addElementToRow }) => {
  console.log("Card from canvas", card);

  const createRow = () => {
    return card?.map((item, index) => (
      <CanvasCard
        key={index}
        rowId={item.id}
        number={item.column}
        addElementToRow={addElementToRow}
      />
    ));
  };
  return <div>{createRow()}</div>;
};

export default Canvas;
