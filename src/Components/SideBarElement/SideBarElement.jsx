import React, { useState } from "react";
import {
  Box,
  Drawer,
  Toolbar,
  Grid,
  Paper,
  Divider,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import TitleIcon from "@mui/icons-material/Title";

const drawerWidth = 280;
const data = [
  {
    type: "Title",
    icon: (
      <TitleIcon
        sx={{
          marginLeft: "40%",
          marginTop: "10%",
        }}
      />
    ),
  },
  {
    type: "Image",
    icon: (
      <ImageIcon
        sx={{
          marginLeft: "40%",
          marginTop: "10%",
        }}
      />
    ),
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SideBarElement = ({
  handleSideBarElementOpen,
  handleSideBarElementClose,
  addElementToCard,
}) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);
  const list = () => (
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
            <CloseIcon onClick={handleSideBarElementClose} />
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
                  key={item}
                  elevation={1}
                  sx={{
                    height: 80,
                    lineHeight: "60px",
                    display: "flex",
                    justifyContent: "space-betweem",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={handleModal}
                >
                  {item.icon}
                  <div
                    style={{
                      marginLeft: "35%",
                      marginTop: "-5%",
                    }}
                  >
                    {item.type}
                  </div>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </Drawer>
    </Box>
  );

  return (
    <div>
      <React.Fragment>{list()}</React.Fragment>
    </div>
  );
};

export default SideBarElement;
