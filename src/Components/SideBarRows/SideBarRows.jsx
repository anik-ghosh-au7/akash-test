import * as React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

const drawerWidth = 280;
const data = [1, 2, 3];

const SideBarRow = ({ handleSideBarRowClose, addCardToCanvas }) => {
  return (
    <div>
      <React.Fragment>
        <Box role="presentation">
          <Drawer
            sx={{
              width: drawerWidth,

              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                boxShadow: "0 10px 25px gainsboro",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Toolbar>
              {" "}
              <IconButton aria-label="delete">
                <CloseIcon onClick={handleSideBarRowClose} />
              </IconButton>
            </Toolbar>
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "white",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  {data.map((item) => (
                    <Paper
                      key={item.id}
                      elevation={1}
                      sx={{
                        height: 80,
                        lineHeight: "60px",
                        display: "flex",
                        justifyContent: "space-betweem",
                        flexDirection: "column",
                        cursor: "pointer",
                      }}
                      onClick={() => addCardToCanvas(item)}
                    >
                      <AutoAwesomeMosaicIcon
                        sx={{
                          marginLeft: "40%",
                          marginTop: "10%",
                        }}
                      />
                      <div
                        style={{
                          marginLeft: "22%",
                          marginTop: "-5%",
                        }}
                      >
                        {item} Column
                      </div>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default SideBarRow;
