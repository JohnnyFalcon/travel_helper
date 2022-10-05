import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  useMediaQuery,
  Rating,
  Modal,
  Box,
  Button,
  CardContent,
  CardMedia,
  Chip,
  CardActions
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { DivStyled, TypographyStyled } from "./styles";
import icon from "./icon.png";
import retroMap from "./retroMap";
import simpleMap from "./simpleMap";
import { CardStyledMap, ModalStyled } from "./styles";
const Map = ({
  setCoordinates,
  coordinates,
  setBounds,
  places,
  type,
  mapStyle,
  setMapStyle,
  mapLoaded,
  setMapLoaded,
  setMouseMove
}) => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [open, setOpen] = useState(false);
  const [chosenPlace, setChosenPlace] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <GoogleMap
        center={coordinates}
        zoom={16}
        mapContainerStyle={{
          height: "85vh",
          width: "100%",
          boxShadow: "5px 4px 8px 2px #BDC9D7",
          borderRadius: 12,
          marginTop: 15,
          overflow: "visible"
        }}
        margin={[50]}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          styles: mapStyle ? simpleMap : retroMap
        }}
        onLoad={(map) => {
          setMap(map);
          setBounds({
            NElat: map?.getBounds()?.getNorthEast().lat(),
            SWlng: map?.getBounds()?.getSouthWest().lng(),
            NElng: map?.getBounds()?.getNorthEast().lng(),
            SWlat: map?.getBounds()?.getSouthWest().lat()
          });
        }}
        onResize={() => {
          setMap(map);
          setMapLoaded(true);
        }}
        onTilesLoaded={() => {
          setBounds({
            NElat: map?.getBounds().getNorthEast().lat(),
            SWlng: map?.getBounds().getSouthWest().lng(),
            NElng: map?.getBounds().getNorthEast().lng(),
            SWlat: map?.getBounds().getSouthWest().lat()
          });
          setMapLoaded(true);
        }}
      >
        {places?.map((place, i) => (
          <>
            <Marker
              position={{
                lat: Number(place.latitude),
                lng: Number(place.longitude)
              }}
              key={i}
              title={place.name}
              icon={icon}
              onClick={() => {
                handleOpen();
                setChosenPlace(place);
              }}
              // onClick={() => {
              //   setMarkerClicked(place.location_id);
              // }}
            />
          </>
        ))}
      </GoogleMap>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          sx: {
            backdropFilter: " blur(2px)"
          }
        }}
      >
        <CardStyledMap elevetion={6}>
          <CardMedia
            style={{ height: 350 }}
            image={
              chosenPlace.photo
                ? chosenPlace.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            title={chosenPlace.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {chosenPlace.name}
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <Rating value={Number(chosenPlace.rating)} readOnly />
              <Typography gutterBottom variant="subtitle1">
                out of {chosenPlace.num_reviews} reviews
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Ranking</Typography>
              <Typography gutterBottom variant="subtitle1">
                {chosenPlace.ranking}
              </Typography>
            </Box>
            {chosenPlace?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                style={{ margin: "5px 5px 5px 0" }}
              />
            ))}
            {chosenPlace?.address && (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TypographyStyled
                  gutterBottom
                  variant="subtitle2"
                  color="textSecondary"
                  style={{ marginTop: "10px" }}
                >
                  <LocationOnIcon />
                </TypographyStyled>
                <TypographyStyled
                  gutterBottom
                  variant="subtitle2"
                  color="textSecondary"
                >
                  {chosenPlace.address}
                </TypographyStyled>
              </Box>
            )}
            {chosenPlace?.phone && (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TypographyStyled
                  variant="body2"
                  color="textSecondary"
                  style={{ marginBottom: -7 }}
                >
                  <PhoneIcon />
                </TypographyStyled>
                <TypographyStyled variant="body2" color="textSecondary">
                  {chosenPlace.phone}
                </TypographyStyled>
              </Box>
            )}
            <CardActions
              sx={{
                mb: -3,
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <TypographyStyled variant="subtitle2" color="textSecondary">
                <LanguageIcon style={{ marginLeft: -8 }} />
              </TypographyStyled>

              <TypographyStyled variant="subtitle2" color="textSecondary">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(chosenPlace.website, "_blank")}
                >
                  Website
                </Button>
              </TypographyStyled>
            </CardActions>
          </CardContent>
        </CardStyledMap>
      </Modal>
      <TypographyStyled variant="body2" color="textSecondary">
        {`Hover over marker icon to see ${type} name`} or click to see details
      </TypographyStyled>
    </>
  );
};

export default Map;
