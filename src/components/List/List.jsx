import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { DivStyled, FormControlStyled, GridStyled, DivLoading } from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  rating,
  setRating,
  isLoading,
  setType,
  type,
  mapLoaded
}) => {
  return (
    <DivStyled>
      <Typography
        variant="h4"
        style={{ marginLeft: "30px", marginTop: "20px" }}
      >
        Restaurants, Hotels & Attractions around you
      </Typography>

      {isLoading ? (
        <DivLoading>
          <CircularProgress size="5rem" />
        </DivLoading>
      ) : (
        <>
          <FormControlStyled variant="standard">
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
            </Select>
          </FormControlStyled>
          <FormControlStyled variant="standard">
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControlStyled>
          <GridStyled container spacing={3}>
            {!mapLoaded && (
              <Typography
                variant="title2"
                color="textSecondary"
                style={{ marginLeft: "20%", marginTop: "50%" }}
              >
                No places to display. Move map around!
              </Typography>
            )}
            {places?.length < 1 && (
              <Typography
                variant="title2"
                color="textSecondary"
                style={{ marginLeft: "20%", marginTop: "50%" }}
              >
                No places to display. Move map around!
              </Typography>
            )}
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
          </GridStyled>
        </>
      )}
    </DivStyled>
  );
};

export default List;
