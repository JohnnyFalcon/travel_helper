import axios from "axios";

export const getPlacesData = async (type, NElat, SWlng, NElng, SWlat) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: SWlat,
          tr_latitude: NElat,
          bl_longitude: SWlng,
          tr_longitude: NElng
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY
        }
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     const {
//       data: { data }
//     } = await axios.get(
//       "https://community-open-weather-map.p.rapidapi.com/weather",
//       {
//         params: { lat: lat, lon: lng },
//         headers: {
//           "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
//           "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY
//         }
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
