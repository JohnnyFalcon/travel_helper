import { styled } from "@mui/material/styles";
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

const CardStyled = styled(Card)({
  width: "93%",
  borderRadius: 12,
  boxShadow: "5px 4px 8px 2px #BDC9D7",
  marginLeft: 20
});

const TypographyStyled = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

export { CardStyled, TypographyStyled };
// export default makeStyles(() => ({
//   chip: {
//     margin: "5px 5px 5px 0"
//   },
//   subtitle: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: "10px"
//   },
//   spacing: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between"
//   }
// }));
