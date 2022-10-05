import { styled } from "@mui/material/styles";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
const DivStyled = styled("div")({
  container: {
    padding: "25px"
  }
});
const FormControlStyled = styled(FormControl)({
  minWidth: 120,
  marginBottom: "30px",
  marginTop: "20px",
  marginLeft: "20px"
});
const GridStyled = styled(Grid)({
  height: "75vh",
  overflow: "auto"
});

const DivLoading = styled("div")({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
export { DivStyled, FormControlStyled, GridStyled, DivLoading };
