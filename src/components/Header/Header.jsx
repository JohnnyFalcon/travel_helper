import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Backdrop,
  Card,
  CardContent
} from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  DivSearchIcon,
  RetroSwitch
} from "./styles.js";
import PlacesAutocomplete from "./PlacesAutocomplete";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const Header = ({ coordinates, setCoordinates, weatherData, setMapStyle }) => {
  const [autoData, setAutoData] = useState(null);

  useEffect(() => {
    setCoordinates(autoData);
  }, [autoData]);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    if (checked) {
      setMapStyle(true);
    } else {
      setMapStyle(false);
    }
    setChecked(event.target.checked);
  };
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography
          variant="h5"
          align="center"
          style={{ marginLeft: 20, letterSpacing: 3 }}
        >
          Travel Helper
        </Typography>
        <Box display="flex">
          <Typography variant="h6">Explore new places</Typography>
          <DivSearchIcon>
            <SearchIcon />
          </DivSearchIcon>
          <PlacesAutocomplete setAutoData={setAutoData} autoData={autoData} />
          <Button onClick={handleToggle} style={{ color: "#f0981d" }}>
            Show the weather
            <WbSunnyIcon style={{ marginLeft: 5, color: "yellow" }} />
          </Button>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <Card>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  style={{ textAlign: "center" }}
                >
                  <WbSunnyIcon style={{ color: "red" }} />
                  Current weather.
                  <WbSunnyIcon style={{ color: "red" }} />
                </Typography>
                <Typography>
                  Feature should be available in future. I'm working on it.{" "}
                  {";)"}
                </Typography>
              </CardContent>
            </Card>
          </Backdrop>
          <div style={{ marginLeft: 30 }}>
            <RetroSwitch checked={checked} onChange={handleChange} />
            <Typography variant="body2">retro</Typography>
          </div>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
