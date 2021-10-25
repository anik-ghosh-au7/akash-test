import React from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";

const CanvasCard = ({
  number,
  handleSideBarElementOpen,
  row,
  setCurrElem,
  card,
  setCard,
}) => {
  // card = { card };
  // setCard = { setCard };
  const handleSideBarElement = (col) => {
    setCurrElem({ row, col });

    handleSideBarElementOpen(row, col, "hello world");
  };
  const createElement = () => {
    console.log("Item", number);
    const temp = [];
    const gridCount = Math.abs(12 / number);

    for (let i = 1; i <= number; i++) {
      temp.push(
        <Grid
          item
          xs={gridCount}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            sx={{
              width: number === 1 ? "1000px" : "500px",
              height: "100px",
              marginTop: "16px",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleSideBarElement(i)}
              sx={{
                marginTop: "3%",
              }}
            >
              Add new element
            </Button>
          </Paper>
        </Grid>
      );
    }
    return temp;
  };

  return (
    <div>
      <Box>
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          {createElement()}
        </Grid>
      </Box>
    </div>
  );
};

export default CanvasCard;
