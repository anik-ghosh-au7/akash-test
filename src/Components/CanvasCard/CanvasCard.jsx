import React, { useState } from "react";
import { Box, Paper, Grid, Button } from "@mui/material/";
import SideBar from "../SideBar/SideBar";

const CanvasCard = ({ number, addElementToRow, rowId }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleChange = () => setSideBarOpen(!sideBarOpen);
  const createElement = () => {
    const temp = [];
    const gridCount = Math.abs(12 / number);

    for (let i = 1; i <= number; i++) {
      temp.push(
        <div>
          <Paper
            elevation={1}
            sx={{
              width: number === 1 ? "1000px" : "500px",
              height: "70px",
              marginTop: "2rem",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: number === 1 ? "1.5%" : "3%",
              }}
              onClick={handleChange}
            >
              Add new element
            </Button>
          </Paper>
        </div>
      );
    }
    return temp;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Grid container spacing={1} sx={{ textAlign: "center" }}>
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
