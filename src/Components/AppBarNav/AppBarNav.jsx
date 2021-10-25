import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CallIcon from "@mui/icons-material/Call";
import Avatar from "@mui/material/Avatar";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", height: "60px" }}
      >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{ backgroundColor: "#fceee1", mr: 1, color: "orange", ml: 0.5 }}
          >
            <FormatListNumberedIcon />
          </IconButton>

          <IconButton
            size="small"
            color="primary"
            edge="start"
            aria-label="menu"
            sx={{ backgroundColor: "#e4e7f7", mr: 1, ml: 0.5 }}
          >
            <InsertLinkIcon />
          </IconButton>

          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{
              backgroundColor: "#c9ffcd",
              mr: 1,
              ml: 0.5,
              color: "#00940a",
            }}
          >
            <CallIcon />
          </IconButton>

          <Avatar
            alt="Remy Sharp"
            src={"https://randomuser.me/api/portraits/thumb/men/1.jpg"}
            sx={{ width: 34, height: 34, ml: 0.5 }}
          />

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
