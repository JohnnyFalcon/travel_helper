import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData, getWeatherData } from "./api";
import { useLoadScript } from "@react-google-maps/api";
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [rating, setRating] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [mapStyle, setMapStyle] = useState(true);
  const [placeLatLng, setPlaceLatLng] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mouseMove, setMouseMove] = useState(true);
  // const [libraries] = useState(["places"]);

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries
  // });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places?.filter(
      (place) => Number(place.rating) > rating
    );

    setFilteredPlaces(filteredPlaces);
  }, [rating, places]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      // getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
      //   setWeatherData(data)
      // );
      getPlacesData(
        type,
        bounds.NElat,
        bounds.SWlng,
        bounds.NElng,
        bounds.SWlat
      ).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
        setFilteredPlaces([]);
      });
    }
  }, [bounds, type, coordinates]);
  //if (isLoaded)
  return (
    <>
      <CssBaseline />
      <Header
        setCoordinates={setCoordinates}
        weatherData={weatherData}
        setMapStyle={setMapStyle}
        coordinates={coordinates}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces?.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            setRating={setRating}
            rating={rating}
            mapLoaded={mapLoaded}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={filteredPlaces?.length ? filteredPlaces : places}
            type={type}
            mapStyle={mapStyle}
            setMapStyle={setMapStyle}
            mapLoaded={mapLoaded}
            setMapLoaded={setMapLoaded}
            setMouseMove={setMouseMove}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
