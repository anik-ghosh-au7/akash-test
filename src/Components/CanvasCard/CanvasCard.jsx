import React, { useState } from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";
import SideBar from "../SideBar/SideBar";

const CanvasCard = ({ number, addElementToRow, rowId }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleChange = () => setSideBarOpen(!sideBarOpen);
  const createElement = () => {
    // console.log("Item", number);
    // console.log("Row ID", rowId);
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
              sx={{
                marginTop: "3%",
              }}
              onClick={handleChange}
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
      {sideBarOpen ? (
        <SideBar
          type="Element"
          handleChange={handleChange}
          addElementToRow={addElementToRow}
          rowId={rowId}
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default CanvasCard;
