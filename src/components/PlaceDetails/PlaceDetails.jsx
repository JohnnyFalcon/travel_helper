import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { CardStyled, TypographyStyled } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const PlaceDetails = ({ place }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <CardStyled elevetion={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        {/* <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Distance</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.distance_string}
          </Typography>
        </Box> */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            style={{ margin: "5px 5px 5px 0" }}
          />
        ))}
        {place?.address && (
          <TypographyStyled
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            style={{ marginTop: "10px" }}
          >
            <LocationOnIcon /> {place.address}
          </TypographyStyled>
        )}
        {place?.phone && (
          <TypographyStyled
            variant="body2"
            color="textSecondary"
            style={{ marginBottom: -7 }}
          >
            <PhoneIcon /> {place.phone}
          </TypographyStyled>
        )}
        <CardActions style={{ marginBottom: -22 }}>
          <TypographyStyled variant="subtitle2" color="textSecondary">
            <LanguageIcon style={{ marginLeft: -8 }} />

            {isDesktop ? (
              <Box display="flex" sx={{ pl: 54 }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.website, "_blank")}
                >
                  Website
                </Button>
              </Box>
            ) : (
              <Box display="flex" sx={{ pl: 36 }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.website, "_blank")}
                >
                  Website
                </Button>
              </Box>
            )}
          </TypographyStyled>
        </CardActions>
      </CardContent>
    </CardStyled>
  );
};

export default PlaceDetails;
