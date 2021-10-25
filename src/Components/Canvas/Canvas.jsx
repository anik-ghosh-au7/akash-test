import React, { useState, useEffect } from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";

import CanvasCard from "../CanvasCard/CanvasCard";
import SideBarElement from "../SideBarElement/SideBarElement";

const Canvas = ({
  addCardToCanvas,
  card,
  setCard,
  sideBarElement,
  handleSideBarElementOpen,
  handleSideBarElementClose,
  setCurrElem,
}) => {
  // console.log("Card from canvas", card);
  const item = card?.newCard?.column;
  const createRow = () => {
    return card?.map(({ column }, index) => (
      <CanvasCard
        number={column}
        row={index}
        setCurrElem={setCurrElem}
        handleSideBarElementOpen={handleSideBarElementOpen}
        card={card}
        setCard={setCard}
      />
    ));
  };
  return <div>{createRow()}</div>;
};

export default Canvas;

{
  /* {item === 1 ? (
        <Box>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                sx={{
                  width: "1000px",
                  height: "100px",
                  marginTop: "16px",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={handleSideBarElementOpen}
                  sx={{
                    marginTop: "3%",
                  }}
                >
                  Add new element
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : item === 2 ? (
        <Box>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                sx={{
                  width: "500px",
                  height: "100px",
                  marginTop: "16px",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={handleSideBarElementOpen}
                  sx={{
                    marginTop: "6%",
                  }}
                >
                  Add new element
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  width: "500px",
                  height: "100px",
                  marginTop: "16px",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={handleSideBarElementOpen}
                  sx={{
                    marginTop: "6%",
                  }}
                >
                  Add new element
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        ""
      )} */
}
