import { AppBar, Toolbar, InputBase, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Combobox, ComboboxInput } from "@reach/combobox";
import "@reach/combobox/styles.css";

const StyledComboboxInput = styled(ComboboxInput)({
  position: "relative",
  borderRadius: 4,
  backgroundColor: "white",
  "&:hover": { backgroundColor: "#e9f5eb" },
  marginRight: 15,
  marginLeft: 3,
  paddingLeft: 8,
  paddingTop: 8,
  paddingBottom: 8,
  paddingRight: 25
});

const StyledAppBar = styled(AppBar)({
  position: "static",
  paddingRight: 7,
  background:
    "linear-gradient(113deg, rgba(39,35,112,1) 0%, rgba(0,0,0,1) 0%, rgba(33,175,109,1) 100%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  marginBottom: "15px"
});
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const StyledInputBase = styled(InputBase)({
  paddingLeft: 35
});

const DivSearch = styled("div")({
  position: "relative",
  backgroundColor: "#93faad",
  "&:hover": { backgroundColor: "#b1fcc4" },
  marginRight: 20,
  marginLeft: 15,
  paddingLeft: 5
});

const DivSearchIcon = styled("div")({
  padding: (0, 6),
  height: "60%",
  position: "relative",
  pointerEvents: "none",
  display: "flex"
});
const RetroSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#ae9e90"
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));
export {
  StyledAppBar,
  StyledToolbar,
  StyledInputBase,
  DivSearch,
  DivSearchIcon,
  StyledComboboxInput,
  RetroSwitch
};
