import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, ButtonGroup } from "@mui/material/";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PowerIcon from "@mui/icons-material/Power";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import CropFreeIcon from "@mui/icons-material/CropFree";
import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

// imported component
import SideBarRow from "../SideBarRows/SideBarRows";
import SideBarElement from "../SideBarElement/SideBarElement";

const MenuBar = ({
  addCardToCanvas,
  addElementToCard,
  handleSideBarRowOpen,
  handleSideBarRowClose,
  handleSideBarElementOpen,
  handleSideBarElementClose,
  sideBarRow,
  sideBarElement,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#b7e4f7", boxShadow: "0 0 0 gainsboro" }}
      >
        <Toolbar>
          {/* Button group 0 */}
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "white",
              marginLeft: "1rem",
            }}
          >
            <Button size="small">
              <ArrowBackIcon
                sx={{
                  fontSize: 17,
                  color: "#a6a6a6",
                  height: "1.5rem",
                  border: " white",
                }}
              />
            </Button>
          </ButtonGroup>
          {/* Button group 1 */}
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "white",
              marginLeft: "1rem",
            }}
          >
            <Button size="small">
              <DesktopMacIcon
                sx={{
                  fontSize: 17,
                  color: "#a6a6a6",
                  height: "1.5rem",
                }}
              />
            </Button>
            <Button size="small">
              {" "}
              <PhoneAndroidIcon
                sx={{
                  fontSize: 17,
                  color: "#a6a6a6",
                  height: "1.5rem",
                }}
              />
            </Button>
          </ButtonGroup>
          {/* Button group 2 */}
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "white",
              marginLeft: "1rem",
            }}
          >
            <Button size="small">
              <PowerIcon
                sx={{
                  fontSize: 17,
                  color: "#a6a6a6",
                  height: "1.5rem",
                }}
              />
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={
                <SettingsIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Settings
            </Button>

            <Button
              variant="text"
              size="small"
              startIcon={
                <ExitToAppIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Pop up
            </Button>
            <Button size="small">
              <RotateLeftIcon
                sx={{
                  fontSize: 20,
                  color: "#a6a6a6",
                  height: "1.5rem",
                }}
              />
            </Button>
            <Button size="small">
              <RotateRightIcon
                sx={{
                  fontSize: 20,
                  color: "#a6a6a6",
                  height: "1.5rem",
                }}
              />
            </Button>
          </ButtonGroup>
          {/* Button group 3 */}
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "white",
              marginLeft: "auto",
            }}
          >
            <Button
              variant="text"
              size="small"
              startIcon={
                <CropFreeIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Section
            </Button>

            <Button
              variant="text"
              size="small"
              startIcon={
                <MenuIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
              onClick={handleSideBarRowOpen}
            >
              Row
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={
                <AutoAwesomeMosaicIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Column
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={
                <CodeOffIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
              onClick={handleSideBarElementOpen}
            >
              Element
            </Button>
          </ButtonGroup>
          {/* Button group 4 */}
          <ButtonGroup
            variant="text"
            aria-label="outlined button group"
            sx={{
              backgroundColor: "white",
              marginLeft: "1rem",
            }}
          >
            <Button
              variant="text"
              size="small"
              startIcon={
                <RemoveRedEyeIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Preview
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={
                <SaveOutlinedIcon
                  sx={{
                    fontSize: 17,
                    color: "#a6a6a6",
                    height: "1.5rem",
                  }}
                />
              }
              sx={{
                color: "#a6a6a6",
              }}
            >
              Save
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div>
        {sideBarRow ? (
          <SideBarRow
            handleSideBarRowOpen={handleSideBarRowOpen}
            handleSideBarRowClose={handleSideBarRowClose}
            addCardToCanvas={addCardToCanvas}
          />
        ) : (
          " "
        )}
        {sideBarElement ? (
          <SideBarElement
            handleSideBarElementOpen={handleSideBarElementOpen}
            handleSideBarElementClose={handleSideBarElementClose}
            addElementToCard={addElementToCard}
          />
        ) : (
          " "
        )}
      </div>
    </Box>
  );
};
export default MenuBar;
