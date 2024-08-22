import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  useTheme,
  styled,
} from "@mui/material/styles";
import {
  Paper,
  TextField,
  Collapse,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  ButtonBase,
  Container,
  Switch,
  FormGroup,
  FormControlLabel,
  Autocomplete,
  useMediaQuery,
} from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
import { ExpandMore, HelpOutline, ExpandLess } from "@mui/icons-material";
// import {
//   hatLines,
//   topLines,
//   bottomLines,
//   shoeLines,
//   gloveLines,
//   capeShoulderBeltLines,
//   accessoryLines,
//   heartLines,
//   weaponLines,
//   secondaryLines,
//   emblemLines,
// } from "./lines";
// import {
//   hatSubLines,
//   topSubLines,
//   bottomShoeSubLines,
//   gloveSubLines,
//   capeShoulderBeltSubLines,
//   accessorySubLines,
//   weaponSubLines,
//   secondarySubLines,
//   emblemSubLines,
// } from "./subLines";
import {
  legendHatLines,
  legendTopLines,
  legendBottomLines,
  legendShoeLines,
  legendGloveLines,
  legendCapeShoulderBeltLines,
  legendAccessoryLines,
  legendHeartLines,
  legendWeaponLines,
  legendSecondaryLines,
  legendEmblemLines,
} from "./legendLines";
import {
  uniqueHatLines,
  uniqueTopLines,
  uniquebottomShoeLines,
  uniqueGloveLines,
  uniqueCapeShoulderBeltLines,
  uniqueAccessoryLines,
  uniqueWeaponLines,
  uniqueSecondaryLines,
  uniqueEmblemLines,
} from "./uniqueLines";
import {
  pclegendHatLines,
  pclegendTopLines,
  pclegendBottomLines,
  pclegendShoeLines,
  pclegendGloveLines,
  pclegendCapeShoulderBeltLines,
  pclegendAccessoryLines,
  pcpclegendHeartLines,
  pclegendWeaponLines,
  pclegendSecondaryLines,
  pclegendEmblemLines,
  pclegendHeartLines,
} from "./pclegendLines";
import {
  pcuniqueHatLines,
  pcuniqueTopLines,
  pcuniquebottomShoeLines,
  pcuniqueGloveLines,
  pcuniqueCapeShoulderBeltLines,
  pcuniqueAccessoryLines,
  pcuniqueWeaponLines,
  pcuniqueSecondaryLines,
  pcuniqueEmblemLines,
} from "./pcuniqueLines";

import purpleCubeIcon from "./icons/purple_clean.png";
import blackCubeIcon from "./icons/black_clean.png";
import choiceCubeIcon from "./icons/choice_clean.png";
import redCubeIcon from "./icons/red_clean.png";
import regularCubeIcon from "./icons/regular_clean.png";
import equalityCubeIcon from "./icons/equality_clean.png";
import hexaCubeIcon from "./icons/hexa_clean.png";

//CSS
const DECIMAL_PRECISION = 5; // for % display
const CUBE_DECIMAL = 1; // for one in x cubes display

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// const StyledPaper = styled(Paper)({
//   // padding: theme.spacing(0.5),
//   margin: "0 5px",
//   textAlign: "center",
//   backgroundColor: "#D6E4FF",
//   height: "90%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// });

// const StyledContainer = styled(Container)({
//   padding: 0,
//   display: "flex",
//   justifyContent: "space-between",
// });

// const CustomContainer = styled(Container)(({ theme }) => ({
//   padding: 0,
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("sm")]: {
//     flexWrap: "wrap",
//   },
// }));

// const StyledBox = styled(Box)({
//   padding: "10px",
//   boxSizing: "border-box",
//   sx={{ flex: (theme) => theme.breakpoints.up('sm') "0 1 50%" ? : "0 0 100%" }},
// });

// const StyledBox = styled(Box)(({ theme }) => ({
//   // padding: "10px",
//   // boxSizing: "border-box",
//   sx: { padding: "10px", boxSizing: "border-box" },
//   flex: theme.breakpoints.up("sm") ? "0 1 50%" : "0 0 100%",
// }));

const StyledTable = styled(Table)({
  width: "100%",
});

const StyledTableCell = styled(TableCell)({
  textAlign: "center",
});

const StyledTableCellContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledTableCellContentWord = styled("div")({
  color: "magenta",
  fontWeight: "bold",
});

const WhiteTextTypography = styled(Typography)({
  color: "#FFFFFF",
});

// const TextBufferTypography = styled(Typography)({
//   marginTop: "0px",
//   marginRight: "0px",
//   marginBottom: "0px",
//   marginLeft: "15px",
// });

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF",
//   },
// })(Typography);

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     margin: theme.spacing(1),
//   },
//   title: {
//     color: "tomato",
//   },
//   subtitle: {
//     color: "tan",
//     marginBottom: "3rem",
//   },
//   typedContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     width: "100vw",
//     textAlign: "center",
//     zIndex: 1,
//   },
//   flex: {
//     display: "flex",
//   },
//   cubesAccordion: {
//     width: "100%",
//   },
//   buffer: {
//     marginTop: "10px",
//     marginRight: "0px",
//     marginBottom: "10px",
//     marginLeft: "0px",
//   },
//   textBuffer: {
//     marginTop: "0px",
//     marginRight: "0px",
//     marginBottom: "0px",
//     marginLeft: "15px",
//   },
//   button: {
//     width: 24,
//     height: 24,
//     padding: 0,
//   },
//   parent: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   boxes: {
//     flex: "1 1 150px" /*  Stretching: */,
//     margin: "5px",
//   },
//   paper: {
//     padding: theme.spacing(0.5),
//     margin: "0 5px",
//     textAlign: "center",
//     backgroundColor: "#D6E4FF",
//     height: "90%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   boldText: {
//     color: "magenta",
//     fontWeight: "bold",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "0",
//   },
//   table: {
//     width: "100%",
//   },
//   cellContent: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   tableCell: {
//     textAlign: "center",
//   },
//   "@media (max-width: 768px)": {
//     cellContent: {
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     container: {
//       overflowX: "auto",
//     },
//     table: {
//       tableLayout: "auto",
//     },
//     tableCell: {
//       padding: theme.spacing(1.3),
//       textAlign: "center",
//     },
//   },
// }));

// For one in x cubes formatting
const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const gearType = [
  { title: "Hat", type: "Armor" },
  { title: "Top", type: "Armor" },
  { title: "Bottom", type: "Armor" },
  { title: "Overall", type: "Armor" },
  { title: "Shoe", type: "Armor" },
  { title: "Cape", type: "Armor" },
  { title: "Glove", type: "Armor" },
  { title: "Shoulder", type: "Armor" },
  { title: "Ring", type: "Accessory" },
  { title: "Earring", type: "Accessory" },
  { title: "Pendant", type: "Accessory" },
  { title: "Belt", type: "Accessory" },
  { title: "Heart", type: "Accessory" },
  { title: "Face", type: "Accessory" },
  { title: "Eye", type: "Accessory" },
  { title: "Weapon", type: "WSE" },
  { title: "Emblem", type: "WSE" },
  { title: "Secondary", type: "WSE" },
];

const gearOptions = gearType.map((option) => {
  const type = option.type;
  return {
    type: /[0-9]/.test(type) ? "0-9" : type,
    ...option,
  };
});

export default function PotentialTable() {
  // CSS
  const styles = {
    paper: {
      padding: theme.spacing(0.5),
      margin: "0 5px",
      textAlign: "center",
      backgroundColor: "#D6E4FF",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    box: {
      padding: "10px",
      boxSizing: "border-box",
      [theme.breakpoints.down("sm")]: {
        flex: "0 0 100%",
      },
      [theme.breakpoints.up("sm")]: {
        flex: "0 1 50%",
      },
    },
    container_wrap: {
      padding: "0px",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
      // [theme.breakpoints.up("sm")]: {},
    },
    container: {
      padding: "0px",
      display: "flex",
      justifyContent: "space-between",
      // [theme.breakpoints.down("sm")]: {
      //   flexWrap: "wrap",
      // },
      // [theme.breakpoints.up("sm")]: {},
    },
    textBuffer: {
      marginTop: "0px",
      marginRight: "0px",
      marginBottom: "0px",
      marginLeft: "15px",
      textAlign: "left",
    },
    table: {
      width: "100%",
    },
    tableCell: {
      textAlign: "center",
    },
    cellContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cellContentHighlight: {
      color: "magenta",
      fontWeight: "bold",
    },
  };

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState("");
  const [lineOneInputValue, setLineOneInputValue] = React.useState("");
  const [lineTwoInputValue, setLineTwoInputValue] = React.useState("");
  const [lineThreeInputValue, setLineThreeInputValue] = React.useState("");

  const [xOneInputValue, setXOneInputValue] = React.useState(0);
  const [typeOneInputValue, setTypeOneInputValue] = React.useState("");
  const [xTwoInputValue, setXTwoInputValue] = React.useState(0);
  const [typeTwoInputValue, setTypeTwoInputValue] = React.useState("");
  const [both, setBoth] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const [secondExpanded, setSecondExpanded] = React.useState(false);
  const [lineOptions, setLineOptions] = React.useState([]);
  const [subLineOptions, setSubLineOptions] = React.useState([]);
  const [typeOptions, setTypeOptions] = React.useState([]);
  const [typeOptionsTwo, setTypeOptionsTwo] = React.useState([]);
  const [checkSecondCriterion, setCheckSecondCombination] = useState(false);

  const [legendLineOp, setLegendLineOp] = useState([]);
  const [uniqueLineOp, setUniqueLineOp] = useState([]);
  const [pcLegendLineOp, setPcLegendLineOp] = useState([]);
  const [pcUniqueLineOp, setPcUniqueLineOp] = useState([]);
  const [acceptAS1, setAcceptAS1] = useState(false);
  const [acceptAS2, setAcceptAS2] = useState(false);

  //line percentages
  const [lineOneRedPercentage, setLineOneRedPercentage] = React.useState(0);
  const [lineOneBlackPercentage, setLineOneBlackPercentage] = React.useState(0);
  const [lineOneEqualityPercentage, setLineOneEqualityPercentage] =
    React.useState(0);
  const [lineOneHexaPercentage, setLineOneHexaPercentage] = React.useState(0);

  const [lineTwoRedPercentage, setLineTwoRedPercentage] = React.useState(0);
  const [lineTwoBlackPercentage, setLineTwoBlackPercentage] = React.useState(0);
  const [lineTwoEqualityPercentage, setLineTwoEqualityPercentage] =
    React.useState(0);
  const [lineTwoHexaPercentage, setLineTwoHexaPercentage] = React.useState(0);

  const [lineThreeRedPercentage, setLineThreeRedPercentage] = React.useState(0);
  const [lineThreeBlackPercentage, setLineThreeBlackPercentage] =
    React.useState(0);
  const [lineThreeEqualityPercentage, setLineThreeEqualityPercentage] =
    React.useState(0);
  const [lineThreeHexaPercentage, setLineThreeHexaPercentage] =
    React.useState(0);

  const [curRedPercentage, setCurRedPercentage] = React.useState(0);
  const [curBlackPercentage, setCurBlackPercentage] = React.useState(0);
  const [curEqualityPercentage, setCurEqualityPercentage] = React.useState(0);
  const [curHexaPercentage, setCurHexaPercentage] = React.useState(0);

  // Final probability calculated by hehai
  const [hexaProbability, setHexaProbability] = useState(0);
  const [blackProbability, setBlackProbability] = useState(0);
  const [redProbability, setRedProbability] = useState(0);
  const [equalityProbability, setEqualityProbability] = useState(0);
  const [purpleProbability, setPurpleProbability] = useState(0);

  const [hexaCubeNumber, setHexaCubeNumber] = useState(0);
  const [blackCubeNumber, setBlackCubeNumber] = useState(0);
  const [redCubeNumber, setRedCubeNumber] = useState(0);
  const [equalityCubeNumber, setEqualityCubeNumber] = useState(0);
  const [purpleCubeNumber, setPurpleCubeNumber] = useState(0);

  //table
  const [rows, setRows] = React.useState([]);
  // const [curRowId, setCurRowId] = React.useState(0);

  //readMe
  const [helpOpen, setHelpOpen] = React.useState(false);
  const handleHelpOpen = () => {
    setHelpOpen(true);
  };

  const handleHelpClose = (value) => {
    setHelpOpen(false);
  };

  // Optional stats filter show or hide
  const [secondOptionExpand, setSecondOptionExpand] = useState(true);
  const handleToggleExpand = () => {
    setSecondOptionExpand((secondOptionExpand) => !secondOptionExpand);
  };

  const [switchChecked, setSwitchChecked] = useState(true);

  const safeParseInt = (value) => {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
  };

  function updateLineOptions(title) {
    var curLines = [];
    var curSubLines = [];

    switch (title) {
      case "Hat":
        curLines = legendHatLines.concat(pclegendHatLines);
        curSubLines = uniqueHatLines.concat(pcuniqueHatLines);
        break;
      case "Top":
      case "Overall":
        curLines = legendTopLines.concat(pclegendTopLines);
        curSubLines = uniqueTopLines.concat(pcuniqueTopLines);
        break;
      case "Bottom":
        curLines = legendBottomLines.concat(pclegendBottomLines);
        curSubLines = uniquebottomShoeLines.concat(pcuniquebottomShoeLines);
        break;
      case "Shoe":
        curLines = legendShoeLines.concat(pclegendShoeLines);
        curSubLines = uniquebottomShoeLines.concat(pcuniquebottomShoeLines);
        break;
      case "Glove":
        curLines = legendGloveLines.concat(pclegendGloveLines);
        curSubLines = uniqueGloveLines.concat(pcuniqueGloveLines);
        break;
      case "Cape":
      case "Shoulder":
      case "Belt":
        curLines = legendCapeShoulderBeltLines.concat(pclegendCapeShoulderBeltLines);
        curSubLines = uniqueCapeShoulderBeltLines.concat(pcuniqueCapeShoulderBeltLines);
        break;
      case "Ring":
      case "Earring":
      case "Pendant":
      case "Face":
      case "Eye":
        curLines = legendAccessoryLines.concat(pclegendAccessoryLines);
        curSubLines = uniqueAccessoryLines.concat(pcuniqueAccessoryLines);
        break;
      case "Heart":
        curLines = legendHeartLines.concat(pclegendHeartLines);
        curSubLines = uniqueAccessoryLines.concat(pcuniqueAccessoryLines);
        break;
      case "Weapon":
        curLines = legendWeaponLines.concat(pclegendWeaponLines);
        curSubLines = uniqueWeaponLines.concat(pcuniqueWeaponLines);
        break;
      case "Secondary":
        curLines = legendSecondaryLines.concat(pclegendSecondaryLines);
        curSubLines = uniqueSecondaryLines.concat(pcuniqueSecondaryLines);
        break;
      case "Emblem":
        curLines = legendEmblemLines.concat(pclegendEmblemLines);
        curSubLines = uniqueEmblemLines.concat(pcuniqueEmblemLines);
        break;
      default:
        curLines = legendHatLines;
        curSubLines = uniqueHatLines
        break;
    }

    let types = curLines
      .concat(curSubLines)
      .map((option) => {
        const type = option.type;

        return {
          type: type,
        };
      })
      .filter((option) => !switchChecked || option.type !== "DEF");

      // Get unique types
      const result = Array.from(new Set(types.map(item => item.type))).map(type => types.find(item => item.type === type));

    setTypeOptions(result);
  }

  function updateTypeOptionsTwo() {
    let options = JSON.parse(JSON.stringify(typeOptions));
    let selectedField = typeOneInputValue;

    options = options.filter(function (item) {
      return item.type !== selectedField;
    });

    setTypeOptionsTwo(options);
  }

  /*
  function getTotalRedPercentages() {
    var totalRedPercentage = 0;
    rows.map((row) => (totalRedPercentage = totalRedPercentage + row.red));
    return totalRedPercentage;
  }

  function getTotalBlackPercentages() {
    var totalBlackPercentage = 0;
    rows.map(
      (row) => (totalBlackPercentage = totalBlackPercentage + row.black)
    );
    return totalBlackPercentage;
  }

  function getTotalEqualityPercentages() {
    var totalEqualityPercentage = 0;
    rows.map(
      (row) =>
        (totalEqualityPercentage = totalEqualityPercentage + row.equality)
    );
    return totalEqualityPercentage;
  }

  function getTotalHexaPercentages() {
    var totalHexaPercentage = 0;
    rows.map((row) => (totalHexaPercentage = totalHexaPercentage + row.hexa));
    return totalHexaPercentage;
  }

  function hexaCalc(line1, line2, line3) {
    //123 124 126 135 145 156
    const perm1 = line1 * line2 * line3;
    //125
    const perm2 = line1 * line2 * line2;
    //134 136 146
    const perm3 = line1 * line3 * line3;

    return perm1 * 6 + perm2 + perm3 * 3;
  }
  */

  //============================================================= July 2023 ================================================================

  // Sort the array of lines by descedning value and type
  const lineSorter = (lines) => {
    lines.sort((a, b) => {
      if (b.value !== a.value) {
        return b.value - a.value; // Sort by descending value
      } else {
        return a.type.localeCompare(b.type); // Sort alphabetically by type
      }
    });
  };

  // Sort key by descending value and by type
  const keySorter = (keyFormat) => {
    keyFormat.sort(function (a, b) {
      // Extract the numeric values and the string parts from the strings
      let valueA = parseFloat(a);
      let valueB = parseFloat(b);
      let stringA = a.split(" ")[1];
      let stringB = b.split(" ")[1];

      // Compare the values in descending order
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      } else {
        // If the values are equal, compare the string parts
        return stringA.localeCompare(stringB);
      }
    });

    return keyFormat;
  };

  const lineWeightSum = (line) => {
    return line.reduce((total, item) => total + item.weight, 0);
  };

  const usefulLineWeightSum = (line, filteredArray) => {
    return line.reduce((accumulator, line) => {
      if (
        line.type === typeOneInputValue ||
        (line.type === "AS" && acceptAS1) ||
        (checkSecondCriterion &&
          (line.type === typeTwoInputValue ||
            (line.type === "AS" && acceptAS2))) ||
        filteredArray.includes(line.type)
      ) {
        return accumulator + line.weight;
      }
      return accumulator;
    }, 0);
  };

  const lineCounter = (array, type) => {
    return array.reduce((accumulator, line) => {
      if (line === type) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
  };

  const potentialLineFormat = (array, cubeType, lineNumber) => {
    const tempLines = [];
    const tempLines2 = [];
    const mappedLines = [];
    const red2 = 10; // 1 in 10 chance of being a legendary line for red cube 2nd line
    const red3 = 100; // 1 in 100 chance of being a legendary line for red cube 3rd line
    const black2 = 5;
    const black3 = 20;
    const purple2 = 501;
    const specialLines = [
      "DR",
      "IED",
      "BOSS",
      "Decent Skill",
      "Invincibility Time",
      "Chance to Ignore DMG",
      "Chance of being invincibile",
    ];
    const specialLinesFiltered = [
      "DR",
      "IED",
      "BOSS",
      "Decent Skill",
      "Invincibility Time",
      "Chance to Ignore DMG",
      "Chance of being invincibile",
    ];
    const specialLinesToRemove = [];

    const dRCount = lineCounter(array, "DR");
    const iedCount = lineCounter(array, "IED");
    const bossCount = lineCounter(array, "BOSS");
    const decentCount = lineCounter(array, "Decent Skill");
    const invincibilityCount = lineCounter(array, "Invincibility Time");
    const ignoreCount = lineCounter(array, "Chance to Ignore DMG");
    const invincibileCount = lineCounter(array, "Chance of being invincibile");

    if (decentCount === 1) {
      specialLinesFiltered.splice(
        specialLinesFiltered.indexOf("Decent Skill"),
        1
      );
      specialLinesToRemove.push("Decent Skill");
    }
    // if (dRCount === 2) {
    //   specialLinesFiltered.splice(specialLinesFiltered.indexOf("DR"), 1);
    //   specialLinesToRemove.push("DR");
    // }
    // if (iedCount === 2) {
    //   specialLinesFiltered.splice(specialLinesFiltered.indexOf("IED"), 1);
    //   specialLinesToRemove.push("IED");
    // }
    // if (bossCount === 2) {
    //   specialLinesFiltered.splice(specialLinesFiltered.indexOf("BOSS"), 1);
    //   specialLinesToRemove.push("BOSS");
    // }
    if (invincibilityCount === 1) {
      specialLinesFiltered.splice(
        specialLinesFiltered.indexOf("Invincibility Time"),
        1
      );
      specialLinesToRemove.push("Invincibility Time");
    }
    if (ignoreCount === 2) {
      specialLinesFiltered.splice(
        specialLinesFiltered.indexOf("Chance to Ignore DMG"),
        1
      );
      specialLinesToRemove.push("Chance to Ignore DMG");
    }
    if (invincibileCount === 2) {
      specialLinesFiltered.splice(
        specialLinesFiltered.indexOf("Chance of being invincibile"),
        1
      );
      specialLinesToRemove.push("Chance of being invincibile");
    }
    if (switchChecked) {
      specialLinesToRemove.push("DEF");
    }

    // Remove line options if option limit is reached
    if (cubeType === "Purple") {
      pcLegendLineOp.forEach((line) => {
        if (specialLinesToRemove.includes(line.type)) {
          return;
        }
        tempLines.push({ ...line });
      });
    }
    else {
      legendLineOp.forEach((line) => {
        if (specialLinesToRemove.includes(line.type)) {
          return;
        }
        tempLines.push({ ...line });
      });
    }

    if (lineNumber === 2 || lineNumber === 3) {
      if (cubeType === "Purple") {
        pcUniqueLineOp.forEach((line) => {
          if (specialLinesToRemove.includes(line.type)) {
            return;
          }
          tempLines2.push({ ...line });
        });
      }
      else {
        uniqueLineOp.forEach((line) => {
          if (specialLinesToRemove.includes(line.type)) {
            return;
          }
          tempLines2.push({ ...line });
        });
      }
    }

    // Remove def lines if toggle v225 is on

    const totalWeights = lineWeightSum(tempLines);
    const usefulWeight = usefulLineWeightSum(tempLines, specialLinesFiltered);
    const totalWeights2 = lineWeightSum(tempLines2);
    const usefulWeight2 = usefulLineWeightSum(tempLines2, specialLinesFiltered);

    // Make a list of useful lines to check for
    // Example: str, dex, int, luk, hp, mp, def becomes only str and junk if filtered for str
    // Legend line options
    tempLines.forEach((line) => {
      if (
        line.type === typeOneInputValue ||
        (line.type === "AS" && acceptAS1) ||
        (checkSecondCriterion &&
          (line.type === typeTwoInputValue ||
            (line.type === "AS" && acceptAS2))) ||
        specialLines.includes(line.type)
      ) {
        if (lineNumber === 1) {
          mappedLines.push({ ...line, totalWeight: totalWeights });
        } else if (lineNumber === 2) {
          if (cubeType === "Red") {
            mappedLines.push({ ...line, totalWeight: totalWeights * red2 });
          } else if (cubeType === "Black") {
            mappedLines.push({ ...line, totalWeight: totalWeights * black2 });
          } else if (cubeType === "Purple") {
            mappedLines.push({ ...line, totalWeight: totalWeights * purple2 });
          } 
        } else if (lineNumber === 3) {
          if (cubeType === "Red") {
            mappedLines.push({ ...line, totalWeight: totalWeights * red3 });
          } else if (cubeType === "Black") {
            mappedLines.push({ ...line, totalWeight: totalWeights * black3 });
          } else if (cubeType === "Purple") {
            mappedLines.push({ ...line, totalWeight: totalWeights * purple2 });
          }
        }
      }
    });

    // Unique line options
    if (lineNumber !== 1) {
      tempLines2.forEach((line) => {
        if (
          line.type === typeOneInputValue ||
          (line.type === "AS" && acceptAS1) ||
          (checkSecondCriterion &&
            (line.type === typeTwoInputValue ||
              (line.type === "AS" && acceptAS2))) ||
          specialLines.includes(line.type)
        ) {
          if (lineNumber === 2) {
            if (cubeType === "Red") {
              mappedLines.push({
                ...line,
                weight: line.weight * (red2 - 1),
                totalWeight: totalWeights2 * red2,
              });
            } else if (cubeType === "Black") {
              mappedLines.push({
                ...line,
                weight: line.weight * (black2 - 1),
                totalWeight: totalWeights2 * black2,
              });
            } else if (cubeType === "Purple") {
              mappedLines.push({
                ...line,
                weight: line.weight * (purple2 - 1),
                totalWeight: totalWeights2 * purple2,
              });
            }
          } else if (lineNumber === 3) {
            if (cubeType === "Red") {
              mappedLines.push({
                ...line,
                weight: line.weight * (red3 - 1),
                totalWeight: totalWeights2 * red3,
              });
            } else if (cubeType === "Black") {
              mappedLines.push({
                ...line,
                weight: line.weight * (black3 - 1),
                totalWeight: totalWeights2 * black3,
              });
            } else if (cubeType === "Purple") {
              mappedLines.push({
                ...line,
                weight: line.weight * (purple2 - 1),
                totalWeight: totalWeights2 * purple2,
              });
            }
          }
        }
      });
    }

    let junkWeight = 0;
    let junkTotalWeight = 0;

    if (lineNumber === 1) {
      junkWeight = totalWeights - usefulWeight;
      junkTotalWeight = totalWeights;
    } else if (lineNumber === 2 || lineNumber === 3) {
      let multiplier;
      if (cubeType === "Red") {
        if (lineNumber === 2) {
          multiplier = red2;
        } else multiplier = red3;
      } else if (cubeType === "Black") {
        if (lineNumber === 2) {
          multiplier = black2;
        } else multiplier = black3;
      } else if (cubeType === "Purple") {
        if (lineNumber === 2) {
          multiplier = purple2;
        } else multiplier = purple2;
      }

      junkWeight =
        (totalWeights - usefulWeight) * (totalWeights2 * multiplier) +
        (totalWeights2 - usefulWeight2) *
          (multiplier - 1) *
          (totalWeights * multiplier);
      junkTotalWeight = totalWeights * totalWeights2 * multiplier ** 2;
    }

    mappedLines.push({
      // stat: "0",
      // value: 0,
      type: "Junk",
      weight: junkWeight,
      totalWeight: junkTotalWeight,
    });

    return mappedLines;
  };

  const cubeProbabiltyCalc = (line1, line2, line3) => {
    let sumOne = 0;
    let sumTwo = 0;

    const probability =
      (line1.weight * line2.weight * line3.weight) /
      (line1.totalWeight * line2.totalWeight * line3.totalWeight);

    const lines = [line1, line2, line3];

    for (const line of lines) {
      if (
        line.type === typeOneInputValue ||
        (line.type === "AS" && acceptAS1)
      ) {
        sumOne += line.value;
      }
      if (
        checkSecondCriterion &&
        (line.type === typeTwoInputValue || (line.type === "AS" && acceptAS2))
      ) {
        sumTwo += line.value;
      }
    }

    if (checkSecondCriterion) {
      if (sumOne >= xOneInputValue && sumTwo >= xTwoInputValue) {
        return probability;
      }
    } else if (sumOne >= xOneInputValue) {
      return probability;
    }

    return 0;
  };

  const hexaFirst3LinesCalc = (l1, l2, l3, dictionary) => {
    let sum = 0;
    let sum2 = 0;
    let probability = 1;
    let lines = [];
    const specialLines = [
      "DR",
      "IED",
      "BOSS",
      "Decent Skill",
      "Invincibility Time",
      "Chance to Ignore DMG",
      "Chance of being invincibile",
    ];

    for (let i = 1; i <= 3; i++) {
      const currentLine = eval(`l${i}`);
      // if (!currentLine) continue;

      probability *= currentLine.weight / currentLine.totalWeight;
      if (
        currentLine.type === typeOneInputValue ||
        (currentLine.type === "AS" && acceptAS1) ||
        (checkSecondCriterion &&
          (currentLine.type === typeTwoInputValue ||
            (currentLine.type === "AS" && acceptAS2))) ||
        specialLines.includes(currentLine.type)
      ) {
        lines.push({ value: currentLine.value, type: currentLine.type });
      }
    }

    lineSorter(lines);

    let linesSelected = 0;
    let selectableLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (linesSelected >= 3 || sum >= xOneInputValue) {
        selectableLines.push(i);
        continue;
      }

      const line = lines[i];
      if (
        line.type === typeOneInputValue ||
        (line.type === "AS" && acceptAS1)
      ) {
        sum += line.value;
        linesSelected += 1;
        if (
          line.type === typeTwoInputValue ||
          (line.type === "AS" && acceptAS2)
        ) {
          sum2 += line.value;
        }
      } else {
        selectableLines.push(i);
      }
    }

    if (!checkSecondCriterion) {
      if (linesSelected <= 3 && sum >= xOneInputValue) {
        return probability;
      }
    } else {
      if (linesSelected === 3) {
        if (sum >= xOneInputValue && sum2 >= xTwoInputValue) {
          return probability;
        }
      } else {
        for (const index of selectableLines) {
          const line = lines[index];

          if (
            line.type === typeTwoInputValue ||
            (line.type === "AS" && acceptAS2)
          ) {
            sum2 += line.value;
            linesSelected += 1;
            if (
              line.type === typeOneInputValue ||
              (line.type === "AS" && acceptAS1)
            ) {
              sum += line.value;
            }
          }

          if (linesSelected >= 3) break;
        }

        if (sum >= xOneInputValue && sum2 >= xTwoInputValue) {
          return probability;
        }
      }
    }

    let keyArray = [];
    for (const line of lines) {
      keyArray.push(line.value.toString() + " " + line.type);
    }

    keySorter(keyArray);
    let key = keyArray.join(", ");
    if (key in dictionary) {
      dictionary[key] += probability;
    } else {
      dictionary[key] = probability;
    }

    return 0;
  };

  const hexaSingleLineCalc = (line, currentLines) => {
    let sum = 0;
    let sum2 = 0;
    const addedLine = [];
    let criteriaMet = false;

    if (
      line.type === typeOneInputValue ||
      (line.type === "AS" && acceptAS1) ||
      (checkSecondCriterion &&
        (line.type === typeTwoInputValue || (line.type === "AS" && acceptAS2)))
    ) {
      currentLines.push({ value: line.value, type: line.type });
      addedLine.push({ value: line.value, type: line.type });
    }

    lineSorter(currentLines);

    let linesSelected = 0;
    let selectableLines = [];
    for (let i = 0; i < currentLines.length; i++) {
      if (linesSelected >= 3 || sum >= xOneInputValue) {
        selectableLines.push(i);
        continue;
      }

      const line = currentLines[i];
      if (
        line.type === typeOneInputValue ||
        (line.type === "AS" && acceptAS1)
      ) {
        sum += line.value;
        linesSelected += 1;
        if (
          line.type === typeTwoInputValue ||
          (line.type === "AS" && acceptAS2)
        ) {
          sum2 += line.value;
        }
      } else {
        selectableLines.push(i);
      }
    }

    if (!checkSecondCriterion) {
      if (linesSelected <= 3 && sum >= xOneInputValue) {
        criteriaMet = true;
      }
    } else {
      if (linesSelected === 3) {
        if (sum >= xOneInputValue && sum2 >= xTwoInputValue) {
          criteriaMet = true;
        }
      } else {
        for (const index of selectableLines) {
          const line = currentLines[index];

          if (
            line.type === typeTwoInputValue ||
            (line.type === "AS" && acceptAS2)
          ) {
            sum2 += line.value;
            linesSelected += 1;
            if (
              line.type === typeOneInputValue ||
              (line.type === "AS" && acceptAS1)
            ) {
              sum += line.value;
            }
          }

          if (linesSelected >= 3) break;
        }

        if (sum >= xOneInputValue && sum2 >= xTwoInputValue) {
          criteriaMet = true;
        }
      }
    }

    if (criteriaMet && addedLine.length > 0) {
      const index = currentLines.findIndex(
        (line) =>
          line.value === addedLine[0].value && line.type === addedLine[0].type
      );
      currentLines.splice(index, 1);
    }

    return { criteriaMet, addedLine };
  };

  const newHexaAndRedCalc = () => {
    let totalProbability = 0;
    let redProbability = 0;
    let currentLines = [];
    const data = {};

    const line1 = potentialLineFormat(currentLines, "Red", 1);

    for (const l1 of line1) {
      const addedLine1 = l1.type;
      currentLines.push(addedLine1);
      const line2 = potentialLineFormat(currentLines, "Red", 2);

      for (const l2 of line2) {
        const addedLine2 = l2.type;
        currentLines.push(addedLine2);
        const line3 = potentialLineFormat(currentLines, "Red", 3);

        for (const l3 of line3) {
          totalProbability += hexaFirst3LinesCalc(l1, l2, l3, data);
        }
        currentLines.splice(currentLines.indexOf(addedLine2), 1);
      }
      currentLines.splice(currentLines.indexOf(addedLine1), 1);
    }

    redProbability = totalProbability;

    for (const [key, value] of Object.entries(data)) {
      const lineComponents = key.split(", ");
      let lines = lineComponents.map((component) => {
        let [value, ...typeParts] = component.split(" ");
        let type = typeParts.join(" ").trim();
        return { value: parseInt(value), type: type };
      });

      for (const line of lines) {
        currentLines.push(line.type);
      }

      const line4 = potentialLineFormat(currentLines, "Red", 2);

      for (const l4 of line4) {
        const result4 = hexaSingleLineCalc(l4, lines);
        if (result4.criteriaMet) {
          totalProbability += (value * l4.weight) / l4.totalWeight;
          continue;
        }
        const addedLine4 = l4.type;
        currentLines.push(addedLine4);
        const line5 = potentialLineFormat(currentLines, "Red", 3);

        for (const l5 of line5) {
          const result5 = hexaSingleLineCalc(l5, lines);
          if (result5.criteriaMet) {
            totalProbability +=
              (value * l5.weight * l4.weight) /
              (l4.totalWeight * l5.totalWeight);
            continue;
          }

          const addedLine5 = l5.type;
          currentLines.push(addedLine5);
          const line6 = potentialLineFormat(currentLines, "Red", 3);

          for (const l6 of line6) {
            const result6 = hexaSingleLineCalc(l6, lines);
            if (result6.criteriaMet) {
              totalProbability +=
                (value * l5.weight * l6.weight * l4.weight) /
                (l5.totalWeight * l6.totalWeight * l4.totalWeight);
            } else if (result6.addedLine.length > 0) {
              const addedLine = result6.addedLine[0];
              const index = lines.findIndex(
                (line) =>
                  line.value === addedLine.value && line.type === addedLine.type
              );
              lines.splice(index, 1);
            }
          }

          if (result5.addedLine.length > 0) {
            const addedLine = result5.addedLine[0];
            const index = lines.findIndex(
              (line) =>
                line.value === addedLine.value && line.type === addedLine.type
            );
            lines.splice(index, 1);
          }
          currentLines.splice(currentLines.indexOf(addedLine5), 1);
        }

        if (result4.addedLine.length > 0) {
          const addedLine = result4.addedLine[0];
          const index = lines.findIndex(
            (line) =>
              line.value === addedLine.value && line.type === addedLine.type
          );
          lines.splice(index, 1);
        }
        currentLines.splice(currentLines.indexOf(addedLine4), 1);
      }
      currentLines = [];
    }

    setRedProbability(redProbability);
    setRedCubeNumber((1 / redProbability).toFixed(CUBE_DECIMAL));
    setHexaProbability(totalProbability);
    setHexaCubeNumber((1 / totalProbability).toFixed(CUBE_DECIMAL));
  };

  const newEqualityCalc = () => {
    let totalProbability = 0;
    const currentLines = [];
    const line1 = potentialLineFormat(currentLines, "Black", 1);

    for (const l1 of line1) {
      const addedLine1 = l1.type;
      currentLines.push(addedLine1);

      const line2 = potentialLineFormat(currentLines, "Black", 1);
      for (const l2 of line2) {
        const addedLine2 = l2.type;
        currentLines.push(addedLine2);
        const line3 = potentialLineFormat(currentLines, "Black", 1);
        for (const l3 of line3) {
          totalProbability += cubeProbabiltyCalc(l1, l2, l3);
        }
        currentLines.splice(currentLines.indexOf(addedLine2), 1);
      }
      currentLines.splice(currentLines.indexOf(addedLine1), 1);
    }

    setEqualityProbability(totalProbability);
    setEqualityCubeNumber((1 / totalProbability).toFixed(CUBE_DECIMAL));
  };

  const newBlackCalc = () => {
    let totalProbability = 0;
    const currentLines = [];
    const line1 = potentialLineFormat(currentLines, "Black", 1);

    for (const l1 of line1) {
      const addedLine1 = l1.type;
      currentLines.push(addedLine1);

      const line2 = potentialLineFormat(currentLines, "Black", 2);
      for (const l2 of line2) {
        const addedLine2 = l2.type;
        currentLines.push(addedLine2);

        const line3 = potentialLineFormat(currentLines, "Black", 3);
        for (const l3 of line3) {
          totalProbability += cubeProbabiltyCalc(l1, l2, l3);
        }
        currentLines.splice(currentLines.indexOf(addedLine2), 1);
      }
      currentLines.splice(currentLines.indexOf(addedLine1), 1);
    }

    setBlackProbability(totalProbability);
    setBlackCubeNumber((1 / totalProbability).toFixed(CUBE_DECIMAL));
  };

  const newPurpleCalc = () => {
    let totalProbability = 0;
    const currentLines = [];
    const line1 = potentialLineFormat(currentLines, "Purple", 1);

    for (const l1 of line1) {
      const addedLine1 = l1.type;
      currentLines.push(addedLine1);

      const line2 = potentialLineFormat(currentLines, "Purple", 2);
      for (const l2 of line2) {
        const addedLine2 = l2.type;
        currentLines.push(addedLine2);
        const line3 = potentialLineFormat(currentLines, "Purple", 3);
        for (const l3 of line3) {
          totalProbability += cubeProbabiltyCalc(l1, l2, l3);
        }
        currentLines.splice(currentLines.indexOf(addedLine2), 1);
      }
      currentLines.splice(currentLines.indexOf(addedLine1), 1);
    }

    setPurpleProbability(totalProbability);
    setPurpleCubeNumber((1 / totalProbability).toFixed(CUBE_DECIMAL));
  };

  const newProbCalc = () => {
    newHexaAndRedCalc();
    newEqualityCalc();
    newBlackCalc();
    newPurpleCalc();
  };

  const toggleSwitch = () => {
    setSwitchChecked((prev) => !prev);
  };

  useEffect(() => {
    updateLineOptions(inputValue);
    newProbCalc();
  }, [switchChecked]);
  //============================================================= END ===============================================================

  function clearRows() {
    setRows([]);
  }

  function addToRows(row) {
    setRows((oldRows) => [...oldRows, row]);
  }

  function createRow(id, line1, line2, line3, red, black, equality, hexa) {
    return { id, line1, line2, line3, red, black, equality, hexa };
  }

  const handleRemoveItem = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  function updateCurPercentages(red1, red2, red3, black1, black2, black3) {
    setCurRedPercentage(red1 * red2 * red3);
    setCurBlackPercentage(black1 * black2 * black3);
  }

  function updateCurEqualityPercentages(eq1, eq2, eq3) {
    setCurEqualityPercentage(eq1 * eq2 * eq3);
  }

  function updateCurHexaPercentages(hex1, hex2, hex3) {
    setCurHexaPercentage(hex1 * hex2 * hex3);
  }

  useEffect(() => {
    const visited = localStorage["visited"];
    if (visited) {
      setHelpOpen(false);
    } else {
      localStorage["visited"] = true;
      setHelpOpen(true);
    }
  }, []);

  useEffect(() => {
    updateTypeOptionsTwo();
    if (
      typeOneInputValue === "STR" ||
      typeOneInputValue === "DEX" ||
      typeOneInputValue === "INT" ||
      typeOneInputValue === "LUK"
    ) {
      setAcceptAS1(true);
    } else {
      setAcceptAS1(false);
    }
  }, [typeOneInputValue, xOneInputValue]);

  useEffect(() => {
    lineOneInputValue === "" ||
    lineTwoInputValue === "" ||
    lineThreeInputValue === ""
      ? setSecondExpanded(false)
      : setSecondExpanded(true);
  }, [lineOneInputValue, lineTwoInputValue, lineThreeInputValue]);

  useEffect(() => {
    updateCurPercentages(
      lineOneRedPercentage,
      lineTwoRedPercentage,
      lineThreeRedPercentage,
      lineOneBlackPercentage,
      lineTwoBlackPercentage,
      lineThreeBlackPercentage
    );
    updateCurEqualityPercentages(
      lineOneEqualityPercentage,
      lineTwoEqualityPercentage,
      lineThreeEqualityPercentage
    );
    updateCurHexaPercentages(
      lineOneHexaPercentage,
      lineTwoHexaPercentage,
      lineThreeHexaPercentage
    );
  }, [
    lineOneRedPercentage,
    lineTwoRedPercentage,
    lineThreeRedPercentage,
    lineOneBlackPercentage,
    lineTwoBlackPercentage,
    lineThreeBlackPercentage,
    lineOneEqualityPercentage,
    lineTwoEqualityPercentage,
    lineThreeEqualityPercentage,
    lineOneHexaPercentage,
    lineTwoHexaPercentage,
    lineThreeHexaPercentage,
  ]);

  useEffect(() => {
    if (xTwoInputValue > 0 && typeTwoInputValue !== "") {
      setCheckSecondCombination(true);
      if (
        typeTwoInputValue === "STR" ||
        typeTwoInputValue === "DEX" ||
        typeTwoInputValue === "INT" ||
        typeTwoInputValue === "LUK"
      ) {
        setAcceptAS2(true);
      } else {
        setAcceptAS2(false);
      }
    } else {
      setCheckSecondCombination(false);
    }
  }, [xTwoInputValue, typeTwoInputValue]);

  useEffect(() => {
    let legendLines = [];
    let uniqueLines = [];
    let pcLegendLines = [];
    let pcUniqueLines = [];
    switch (inputValue) {
      case "Hat":
        legendLines = legendHatLines;
        uniqueLines = uniqueHatLines;
        pcLegendLines = pclegendHatLines;
        pcUniqueLines = pcuniqueHatLines;
        break;
      case "Top":
      case "Overall":
        legendLines = legendTopLines;
        uniqueLines = uniqueTopLines;
        pcLegendLines = pclegendTopLines;
        pcUniqueLines = pcuniqueTopLines;
        break;
      case "Bottom":
        legendLines = legendBottomLines;
        uniqueLines = uniquebottomShoeLines;
        pcLegendLines = pclegendBottomLines;
        pcUniqueLines = pcuniquebottomShoeLines;
        break;
      case "Shoe":
        legendLines = legendShoeLines;
        uniqueLines = uniquebottomShoeLines;
        pcLegendLines = pclegendShoeLines;
        pcUniqueLines = pcuniquebottomShoeLines;
        break;
      case "Glove":
        legendLines = legendGloveLines;
        uniqueLines = uniqueGloveLines;
        pcLegendLines = pclegendGloveLines;
        pcUniqueLines = pcuniqueGloveLines;
        break;
      case "Cape":
      case "Shoulder":
      case "Belt":
        legendLines = legendCapeShoulderBeltLines;
        uniqueLines = uniqueCapeShoulderBeltLines;
        pcLegendLines = pclegendCapeShoulderBeltLines;
        pcUniqueLines = pcuniqueCapeShoulderBeltLines;
        break;
      case "Ring":
      case "Earring":
      case "Pendant":
      case "Face":
      case "Eye":
        legendLines = legendAccessoryLines;
        uniqueLines = uniqueAccessoryLines;
        pcLegendLines = pclegendAccessoryLines;
        pcUniqueLines = pcuniqueAccessoryLines;
        break;
      case "Heart":
        legendLines = legendHeartLines;
        uniqueLines = uniqueAccessoryLines;
        pcLegendLines = pclegendHeartLines;
        pcUniqueLines = pcuniqueAccessoryLines;
        break;
      case "Weapon":
        legendLines = legendWeaponLines;
        uniqueLines = uniqueWeaponLines;
        pcLegendLines = pclegendWeaponLines;
        pcUniqueLines = pcuniqueWeaponLines;
        break;
      case "Secondary":
        legendLines = legendSecondaryLines;
        uniqueLines = uniqueSecondaryLines;
        pcLegendLines = pclegendSecondaryLines;
        pcUniqueLines = pcuniqueSecondaryLines;
        break;
      case "Emblem":
        legendLines = legendEmblemLines;
        uniqueLines = uniqueEmblemLines;
        pcLegendLines = pclegendEmblemLines;
        pcUniqueLines = pcuniqueEmblemLines;
        break;
      default:
        legendLines = legendHatLines;
        uniqueLines = uniqueHatLines;
        pcLegendLines = pclegendHatLines;
        pcUniqueLines = pcuniqueHatLines;
        break;
    }

    setLegendLineOp(legendLines);
    setUniqueLineOp(uniqueLines);
    setPcLegendLineOp(pcLegendLines);
    setPcUniqueLineOp(pcUniqueLines);
  }, [inputValue]);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={2}
        aria-label="Acknowledge"
        onClick={(event) => event.stopPropagation()}
        onFocus={(event) => event.stopPropagation()}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "96%",
          maxWidth: "1100px",
          margin: "10px auto",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={switchChecked} onChange={toggleSwitch} />}
            label="v225 and above"
          />
        </FormGroup>
        <Container sx={styles.container_wrap} disableGutters>
          <Box sx={styles.box}>
            <Autocomplete
              id="grouped-demo"
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                newInputValue === "" ? setExpanded(false) : setExpanded(true);
                setInputValue(newInputValue);
                updateLineOptions(newInputValue);
                clearRows();
              }}
              options={gearOptions.sort(
                (a, b) => -b.type.localeCompare(a.type)
              )}
              groupBy={(option) => option.type}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Gear" variant="outlined" />
              )}
            />
          </Box>
          {inputValue === "Glove" ? (
            <Box sx={styles.box}>
              <Grid container>
                <Grid item xs={6}>
                  <Paper sx={styles.paper}>
                    16% Crit -&gt; 1 in {switchChecked ? 36 : 43} Equality
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={styles.paper}>
                    24% Crit -&gt; 1 in {switchChecked ? 1000 : 1331} Equality
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          ) : inputValue === "Hat" ? (
            <Box sx={styles.box}>
              <Grid container>
                <Grid item xs={6}>
                  <Paper sx={styles.paper}>
                    At least 3s CDR -&gt; 1 in {switchChecked ? 37 : 44}{" "}
                    Equality
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={styles.paper}>
                    At least 4s CDR -&gt; 1 in {switchChecked ? 129 : 157}{" "}
                    Equality
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          ) : null}
        </Container>
        <Container sx={styles.container} disableGutters>
          {inputValue === "" ? (
            <Box
              style={{
                width: "50%",
                flexBasis: "100%",
              }}
            >
              <Button
                onClick={handleHelpOpen}
                color="primary"
                size="large"
                fullWidth
              >
                <HelpOutline />
              </Button>
              <Dialog
                onClose={handleHelpClose}
                aria-labelledby="simple-dialog-title"
                open={helpOpen}
              >
                <DialogTitle id="simple-dialog-title">Wat Do?</DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    1. <strong>Select</strong> piece of gear that you want to
                    generate lines for in <strong>dropdown</strong>
                  </Typography>
                  <Typography gutterBottom>
                    2. <strong>Enter</strong> the value of the lines
                  </Typography>
                  <Typography gutterBottom>
                    3. <strong>Select</strong> the type of lines
                  </Typography>
                  <Typography gutterBottom>
                    4. You can filter <strong>up to 2 stats</strong> at once.
                    eg. BOSS 60 + ATK 9 outputs line combinations with {">="}{" "}
                    60% BOSS % 9 ATK
                  </Typography>
                  <Typography gutterBottom>
                    5. Take note that AllStat filters already filter for the stat you want.
                    eg. Putting in 33% Str will also return 12%Str/12%Str/9%AS combinations
                  </Typography>
                </DialogContent>
              </Dialog>
            </Box>
          ) : (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              disableGutters
            >
              <Container sx={styles.container_wrap} disableGutters>
                <Box sx={styles.box}>
                  <Typography align="center">{`I want a combination of`}</Typography>
                  <TextField
                    id="outlined-basic"
                    label="At Least (?) %"
                    variant="outlined"
                    type="number"
                    style={{ marginBottom: "10px" }}
                    onChange={(e) => {
                      setXOneInputValue(safeParseInt(e.target.value));
                      clearRows();
                    }}
                    fullWidth
                  />
                  <Autocomplete
                    id="Line"
                    inputValue={typeOneInputValue}
                    onInputChange={(event, newInputValue) => {
                      setTypeOneInputValue(newInputValue);
                      clearRows();
                    }}
                    options={typeOptions}
                    getOptionLabel={(option) => option.type}
                    fullWidth
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Desired Line Type"
                        variant="outlined"
                      />
                    )}
                  />
                </Box>
                {matches &&
                  !(xOneInputValue === 0 || typeOneInputValue === "") && (
                    <ButtonBase
                      focusRipple
                      centerRipple
                      sx={{ flexBasis: "100%" }}
                      onClick={handleToggleExpand}
                    >
                      {secondOptionExpand ? <ExpandLess /> : <ExpandMore />}
                    </ButtonBase>
                  )}

                {!(xOneInputValue === 0 || typeOneInputValue === "") && (
                  <Collapse
                    in={secondOptionExpand}
                    sx={{
                      flex: matches ? "0 0 100%" : "0 1 50%",
                    }}
                  >
                    <Box sx={styles.box}>
                      <Typography align="center">{`as well as (leave blank if not required)`}</Typography>
                      <TextField
                        id="outlined-basic"
                        label="At Least (?) %"
                        variant="outlined"
                        type="number"
                        onChange={(e) => {
                          setXTwoInputValue(safeParseInt(e.target.value));
                          clearRows();
                        }}
                        style={{ marginBottom: "10px" }}
                        fullWidth
                      />
                      <Autocomplete
                        id="Line"
                        inputValue={typeTwoInputValue}
                        onInputChange={(event, newInputValue) => {
                          setTypeTwoInputValue(newInputValue);
                          clearRows();
                        }}
                        options={typeOptionsTwo}
                        getOptionLabel={(option) => option.type}
                        fullWidth
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Desired Line Type 2"
                            variant="outlined"
                          />
                        )}
                      />
                    </Box>
                  </Collapse>
                )}
              </Container>
              <Box
                style={{
                  width: "100%",
                  padding: "0 10px 10px 10px",
                  boxSizing: "border-box",
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() => {
                    newProbCalc();
                  }}
                >
                  Calculate
                </Button>
              </Box>
            </Container>
          )}
        </Container>
      </Paper>
      {/* </AccordionSummary>
      </Accordion> */}

      <Paper
        elevation={2}
        className="container"
        style={{
          width: "96%",
          maxWidth: "600px",
          margin: "10px auto",
        }}
      >
        <TableContainer>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell>Cube Type</StyledTableCell>
                <StyledTableCell>
                  Probability&nbsp;(%)
                  <StyledTableCellContentWord>
                    (Updated)
                  </StyledTableCellContentWord>
                </StyledTableCell>
                <StyledTableCell>
                  Probability&nbsp;(1&nbsp;in&nbsp;x)
                  <StyledTableCellContentWord>
                    (Updated)
                  </StyledTableCellContentWord>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>
                  <StyledTableCellContent>
                    <span>
                      {switchChecked ? "Regular\u00a0Cube" : "Red\u00a0Cube"}
                    </span>
                    {switchChecked ? (
                      <img
                        style={{ height: "25px" }}
                        src={regularCubeIcon}
                        alt="Regular Cube"
                      />
                    ) : (
                      <img
                        style={{ height: "25px" }}
                        src={redCubeIcon}
                        alt="Red Cube"
                      />
                    )}
                  </StyledTableCellContent>
                </StyledTableCell>
                <StyledTableCell>
                  {(redProbability * 100).toPrecision(DECIMAL_PRECISION)}
                  &nbsp;%
                </StyledTableCell>
                <StyledTableCell>
                  One in{" "}
                  {redCubeNumber !== 0 ? (
                    <b>{formatNumberWithCommas(redCubeNumber)}</b>
                  ) : (
                    "Infinite"
                  )}{" "}
                  cubes
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>
                  <StyledTableCellContent>
                    <span>
                      {switchChecked ? "Choice\u00a0Cube" : "Black\u00a0Cube"}
                    </span>
                    {switchChecked ? (
                      <img
                        style={{ height: "25px" }}
                        src={choiceCubeIcon}
                        alt="Choice Cube"
                      />
                    ) : (
                      <img
                        style={{ height: "25px" }}
                        src={blackCubeIcon}
                        alt="Black Cube"
                      />
                    )}
                  </StyledTableCellContent>
                </StyledTableCell>
                <StyledTableCell>
                  {(blackProbability * 100).toPrecision(DECIMAL_PRECISION)}
                  &nbsp;%
                </StyledTableCell>
                <StyledTableCell>
                  One in{" "}
                  {blackCubeNumber !== 0 ? (
                    <b>{formatNumberWithCommas(blackCubeNumber)}</b>
                  ) : (
                    "Infinite"
                  )}{" "}
                  cubes
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>
                  <StyledTableCellContent>
                    <span>Equality&nbsp;Cube</span>
                    <img height="25px" src={equalityCubeIcon} />
                  </StyledTableCellContent>
                </StyledTableCell>
                <StyledTableCell>
                  {(equalityProbability * 100).toPrecision(DECIMAL_PRECISION)}
                  &nbsp;%
                </StyledTableCell>
                <StyledTableCell>
                  One in{" "}
                  {equalityCubeNumber !== 0 ? (
                    <b>{formatNumberWithCommas(equalityCubeNumber)}</b>
                  ) : (
                    "Infinite"
                  )}{" "}
                  cubes
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>
                  <StyledTableCellContent>
                    <span>Hexa Cube</span>
                    <img height="25px" src={hexaCubeIcon} />
                  </StyledTableCellContent>
                </StyledTableCell>
                <StyledTableCell>
                  {(hexaProbability * 100).toPrecision(DECIMAL_PRECISION)}
                  &nbsp;%
                </StyledTableCell>
                <StyledTableCell>
                  One in{" "}
                  {hexaCubeNumber !== 0 ? (
                    <b>{formatNumberWithCommas(hexaCubeNumber)}</b>
                  ) : (
                    "Infinite"
                  )}{" "}
                  cubes
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>
                  <StyledTableCellContent>
                    <span>Purple Cube</span>
                    <img height="25px" src={purpleCubeIcon} />
                  </StyledTableCellContent>
                </StyledTableCell>
                <StyledTableCell>
                  {(purpleProbability * 100).toPrecision(DECIMAL_PRECISION)}
                  &nbsp;%
                </StyledTableCell>
                <StyledTableCell>
                  One in{" "}
                  {purpleCubeNumber !== 0 ? (
                    <b>{formatNumberWithCommas(purpleCubeNumber)}</b>
                  ) : (
                    "Infinite"
                  )}{" "}
                  cubes
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Paper>
      <Paper sx={{ textAlign: "center" }}>
        <Typography sx={styles.textBuffer}>
          1. All equality cube lines shown here assume that they have the same
          rate as rolling the first prime line of a red cube.
        </Typography>
        <Typography sx={styles.textBuffer}>
          2. Hexacube lines assume that the first line is the first line of a
          red cube, line 2/4 is a second line, and lines 3/5/6 are third lines.
        </Typography>
        <WhiteTextTypography color="textPrimary">
          This coding project is a prime example of why you need UI/UX designers
          and why I do backend
        </WhiteTextTypography>
        <Typography>
          Contact @pladz on discord for bugs, or Note Pladz in-game MapleSEA
        </Typography>
        <Typography>
          <a href="http://tiny.cc/finalfinaldamage" rel="noreferrer">
            IED Calculation aka "Final Final Damage" Doc
          </a>
        </Typography>
        <Typography>
          <a
            href="https://github.com/pladz/cube_calc/tree/master"
            rel="noreferrer"
          >
            Very scuffed source code
          </a>
        </Typography>
        <Typography>
          Updated to reflect the potential lines changes in the{" "}
          <a
            href="http://www.maplesea.com/updates/view/v235_Patch_Notes/"
            target="_blank"
            rel="noreferrer"
          >
            Lotus Remastered v235 using KMS cube rates
          </a>{" "}
          patch for MapleSEA. (aka 3 Line Boss/IED/DR is back)
        </Typography>
        <Typography>
          NaN input bug, CSS, Cube Rates for shitty lines fixed by
          https://github.com/hehai123/cube_calc
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}
