import { styled } from "@mui/material/styles";
import { Typography, Card, Modal } from "@mui/material";
const DivStyled = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 }
});
const TypographyStyled = styled(Typography)({
  marginTop: 10,
  display: "flex",
  justifyContent: "flex-end",
  marginRight: 13
});
const CardStyledMap = styled(Card)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  borderRadius: 12
});
const ModalStyled = styled(Modal)({});
export { DivStyled, TypographyStyled, CardStyledMap, ModalStyled };
// paper: {
//   padding: "10px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   width: "100px"
// },
// mapContainer: {
//   height: "85vh",
//   width: "100%"
// },
// markerContainer: {
//   position: "absolute",
//   transform: "translate(-50%, -50%)",
//   zIndex: 1,
//   "&:hover": { zIndex: 2 }
// },
// pointer: {
//   cursor: "pointer"
// }
