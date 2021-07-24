import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,

} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ExpandMore, Clear, Add, DoubleArrow, HelpOutline } from "@material-ui/icons";
import {
  hatLines,
  topLines,
  bottomLines,
  shoeLines,
  gloveLines,
  capeShoulderBeltLines,
  accessoryLines,
  heartLines,
  weaponLines,
  secondaryLines,
  emblemLines
} from './lines';
import {
  hatSubLines,
  topSubLines,
  bottomShoeSubLines,
  gloveSubLines,
  capeShoulderBeltSubLines,
  accessorySubLines,
  heartSubLines,
  weaponSubLines,
  secondarySubLines,
  emblemSubLines
} from './subLines';

import blackCubeIcon from './icons/blackCube.webp';
import redCubeIcon from './icons/redCube.webp';
import equalityCubeIcon from './icons/equalityCube.png';
import hexaCubeIcon from './icons/hexaCube.png';


//CSS
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  },
  flex: {
    display: "flex",
  },
  cubesAccordion: {
    width: '100%',
  },
  buffer: {
    marginTop: "10px",
    marginRight: "0px",
    marginBottom: "10px",
    marginLeft: "0px",
  },
  button: {
    width: 24, height: 24,
    padding: 0
  },
  parent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  boxes: {
    flex: '1 1 150px', /*  Stretching: */
    margin: '5px',
  },

}));

const gearType = [
  { title: 'Hat', type: 'Armor' },
  { title: 'Top', type: 'Armor' },
  { title: 'Bottom', type: 'Armor' },
  { title: 'Overall', type: 'Armor' },
  { title: 'Shoe', type: 'Armor' },
  { title: 'Cape', type: 'Armor' },
  { title: 'Glove', type: 'Armor' },
  { title: 'Shoulder', type: 'Armor' },
  { title: 'Ring', type: 'Accessory' },
  { title: 'Earring', type: 'Accessory' },
  { title: 'Pendant', type: 'Accessory' },
  { title: 'Belt', type: 'Accessory' },
  { title: 'Heart', type: 'Accessory' },
  { title: 'Face', type: 'Accessory' },
  { title: 'Eye', type: 'Accessory' },
  { title: 'Weapon', type: 'WSE' },
  { title: 'Emblem', type: 'WSE' },
  { title: 'Secondary', type: 'WSE' },
];


const gearOptions = gearType.map((option) => {
  const type = option.type;
  return {
    type: /[0-9]/.test(type) ? '0-9' : type,
    ...option,
  };
});


export default function PotentialTable() {
  const classes = useStyles();

  const [inputValue, setInputValue] = React.useState('');
  const [lineOneInputValue, setLineOneInputValue] = React.useState('');
  const [lineTwoInputValue, setLineTwoInputValue] = React.useState('');
  const [lineThreeInputValue, setLineThreeInputValue] = React.useState('');

  const [xOneInputValue, setXOneInputValue] = React.useState(0);
  const [typeOneInputValue, setTypeOneInputValue] = React.useState('');
  const [xTwoInputValue, setXTwoInputValue] = React.useState(0);
  const [typeTwoInputValue, setTypeTwoInputValue] = React.useState('');
  const [both, setBoth] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);
  const [secondExpanded, setSecondExpanded] = React.useState(false);
  const [lineOptions, setLineOptions] = React.useState([]);
  const [subLineOptions, setSubLineOptions] = React.useState([]);
  const [typeOptions, setTypeOptions] = React.useState([]);

  //line percentages
  const [lineOneRedPercentage, setLineOneRedPercentage] = React.useState(0);
  const [lineOneBlackPercentage, setLineOneBlackPercentage] = React.useState(0);
  const [lineOneEqualityPercentage, setLineOneEqualityPercentage] = React.useState(0);
  const [lineOneHexaPercentage, setLineOneHexaPercentage] = React.useState(0);
  const [lineTwoRedPercentage, setLineTwoRedPercentage] = React.useState(0);
  const [lineTwoBlackPercentage, setLineTwoBlackPercentage] = React.useState(0);
  const [lineTwoEqualityPercentage, setLineTwoEqualityPercentage] = React.useState(0);
  const [lineTwoHexaPercentage, setLineTwoHexaPercentage] = React.useState(0);
  const [lineThreeRedPercentage, setLineThreeRedPercentage] = React.useState(0);
  const [lineThreeBlackPercentage, setLineThreeBlackPercentage] = React.useState(0);
  const [lineThreeEqualityPercentage, setLineThreeEqualityPercentage] = React.useState(0);
  const [lineThreeHexaPercentage, setLineThreeHexaPercentage] = React.useState(0);
  const [curRedPercentage, setCurRedPercentage] = React.useState(0);
  const [curBlackPercentage, setCurBlackPercentage] = React.useState(0);
  const [curEqualityPercentage, setCurEqualityPercentage] = React.useState(0);
  const [curHexaPercentage, setCurHexaPercentage] = React.useState(0);

  //table
  const [rows, setRows] = React.useState([]);
  const [curRowId, setCurRowId] = React.useState([]);

  //readMe
  const [helpOpen, setHelpOpen] = React.useState(false);
  const handleHelpOpen = () => {
    setHelpOpen(true);
  };

  const handleHelpClose = (value) => {
    setHelpOpen(false);
  };


  function updateLineOptions(title) {
    var curLines = [];
    var curSubLines = [];

    switch (title) {
      case 'Hat':
        curLines = hatLines;
        curSubLines = hatSubLines;
        break;
      case 'Top':
        curLines = topLines;
        curSubLines = topSubLines;
        break;
      case 'Bottom':
        curLines = bottomLines;
        curSubLines = bottomShoeSubLines;
        break;
      case 'Overall':
        curLines = topLines;
        curSubLines = topSubLines;
        break;
      case 'Shoe':
        curLines = shoeLines;
        curSubLines = bottomShoeSubLines;
        break;
      case 'Glove':
        curLines = gloveLines;
        curSubLines = gloveSubLines;
        break;
      case 'Cape':
      case 'Shoulder':
      case 'Belt':
        curLines = capeShoulderBeltLines;
        curSubLines = capeShoulderBeltSubLines;
        break;
      case 'Ring':
      case 'Earring':
      case 'Pendant':
      case 'Face':
      case 'Eye':
        curLines = accessoryLines;
        curSubLines = accessorySubLines;
        break;
      case 'Heart':
        curLines = heartLines;
        curSubLines = heartSubLines;
        break;
      case 'Weapon':
        curLines = weaponLines;
        curSubLines = weaponSubLines;
        break;
      case 'Secondary':
        curLines = secondaryLines;
        curSubLines = secondarySubLines;
        break;
      case 'Emblem':
        curLines = emblemLines;
        curSubLines = emblemSubLines;
        break;
      default:
        curLines = hatLines;
        break;
    }

    setLineOptions(curLines.map((option) => {
      const stat = option.stat;
      const prime = option.prime;
      const red1 = option.red1;
      const black1 = option.black1;
      const red2 = option.red2;
      const black2 = option.black2;
      const red3 = option.red3;
      const black3 = option.black3;
      const type = option.type;
      const value = option.value;

      return {
        stat: stat,
        type: type,
        value: value,
        prime: prime,
        red1: red1,
        black1: black1,
        red2: red2,
        black2: black2,
        red3: red3,
        black3: black3,
        ...option,
      };
    }))

    setSubLineOptions(curLines.concat(curSubLines).map((option) => {
      const stat = option.stat;
      const prime = option.prime;
      const red2 = option.red2;
      const black2 = option.black2;
      const red3 = option.red3;
      const black3 = option.black3;
      const type = option.type;
      const value = option.value;

      return {
        stat: stat,
        type: type,
        value: value,
        prime: prime,
        red2: red2,
        black2: black2,
        red3: red3,
        black3: black3,
        ...option,
      };
    }))

    let types = curLines.concat(curSubLines).map((option) => {
      const type = option.type;

      return {
        type: type,
      };
    })

    let result = types.filter(function ({ type }) {
      return !this.has(type) && this.add(type);
    }, new Set)

    setTypeOptions(result);
  }

  function getTotalRedPercentages() {
    var totalRedPercentage = 0;
    rows.map((row) =>
      totalRedPercentage = totalRedPercentage + row.red
    )
    return totalRedPercentage;
  }

  function getTotalBlackPercentages() {
    var totalBlackPercentage = 0;
    rows.map((row) =>
      totalBlackPercentage = totalBlackPercentage + row.black
    )
    return totalBlackPercentage;
  }

  function getTotalEqualityPercentages() {
    var totalEqualityPercentage = 0;
    rows.map((row) =>
      totalEqualityPercentage = totalEqualityPercentage + row.equality
    )
    return totalEqualityPercentage;
  }

  function getTotalHexaPercentages() {
    var totalHexaPercentage = 0;
    rows.map((row) =>
      totalHexaPercentage = totalHexaPercentage + row.hexa
    )
    return totalHexaPercentage;
  }

  function clearRows() {
    setRows([]);
  }

  function addToRows(row) {
    setRows(oldRows => [...oldRows, row]);
  }

  function createRow(id, line1, line2, line3, red, black, equality, hexa) {
    return { id, line1, line2, line3, red, black, equality, hexa };
  }

  const handleRemoveItem = id => {
    setRows(rows.filter(row => row.id !== id))
  }

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

  function moreThanStat(x, type, line1, line2, line3) {
    let sum = 0;
    let acceptAllStat = false;
    if (type === 'STR' || type === 'DEX' || type === 'INT' || type === 'LUK') {
      acceptAllStat = true;
    }

    if (line1.type === 'BOSS' && line2.type === 'BOSS' && line3.type === 'BOSS') {
      return false;
    }

    if (line1.type === type || (line1.type === 'AS' && acceptAllStat)) {
      sum = sum + line1.value;
    }
    if (line2.type === type || (line2.type === 'AS' && acceptAllStat)) {
      sum = sum + line2.value;
    }
    if (line3.type === type || (line3.type === 'AS' && acceptAllStat)) {
      sum = sum + line3.value;
    }

    if (sum >= x) {
      return true;
    }

    return false;
  }

  function addIfMoreThanStat(x1, type1, x2, type2) {

    lineOptions.forEach((line1, i) => {
      subLineOptions.forEach((line2, j) => {
        subLineOptions.forEach((line3, k) => {
          //First stat check
          if (moreThanStat(x1, type1, line1, line2, line3)) {
            if ((x2 === "" || type2 === "") || (x2 !== "" && type2 !== "" && moreThanStat(x2, type2, line1, line2, line3))) {
              let redPercentage = line1.red1 * line2.red2 * line3.red3;
              let blackPercentage = line1.black1 * line2.black2 * line3.black3;
              let equalityPercentage = 0;
              let hexaline1 = line1.red1;
              let hexaline2 = 1 - ((1 - line2.red2) * Math.pow((1 - line2.red3), 4));
              let hexaline3 = 1 - (Math.pow((1 - line3.red3), 4));
              let hexaPercentage = hexaline1 * hexaline2 * hexaline3;

              if (line2.red1 && line3.red1) {
                equalityPercentage = line1.red1 * line2.red1 * line3.red1;
              }

              addToRows(createRow(curRowId, line1.stat, line2.stat, line3.stat, redPercentage, blackPercentage, equalityPercentage, hexaPercentage));
              setCurRowId(curRowId + 1);
            }
          }
        })
      })
    })
  }

  useEffect(() => {
    ((lineOneInputValue === "" || lineTwoInputValue === "" || lineThreeInputValue === "") ? setSecondExpanded(false) : setSecondExpanded(true));
  }, [lineOneInputValue, lineTwoInputValue, lineThreeInputValue]);

  useEffect(() => {
    updateCurPercentages(lineOneRedPercentage, lineTwoRedPercentage, lineThreeRedPercentage, lineOneBlackPercentage, lineTwoBlackPercentage, lineThreeBlackPercentage);
    updateCurEqualityPercentages(lineOneEqualityPercentage, lineTwoEqualityPercentage, lineThreeEqualityPercentage);
    updateCurHexaPercentages(lineOneHexaPercentage, lineTwoHexaPercentage, lineThreeHexaPercentage);
  }, [lineOneRedPercentage, lineTwoRedPercentage, lineThreeRedPercentage,
    lineOneBlackPercentage, lineTwoBlackPercentage, lineThreeBlackPercentage,
    lineOneEqualityPercentage, lineTwoEqualityPercentage, lineThreeEqualityPercentage,
    lineOneHexaPercentage, lineTwoHexaPercentage, lineThreeHexaPercentage]);


  return (
    <div>
      <Accordion expanded={expanded} fullWidth>
        {inputValue === "" ?
          <AccordionSummary
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <Paper elevation={2} width='50%'
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()} >
              <Autocomplete
                id="grouped-demo"
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  (newInputValue === '' ? setExpanded(false) : setExpanded(true));
                  setInputValue(newInputValue);
                  updateLineOptions(newInputValue);
                  clearRows();
                }}
                options={gearOptions.sort((a, b) => -b.type.localeCompare(a.type))}
                groupBy={(option) => option.type}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gear" variant="outlined" />}
              />
              <IconButton variant="contained" color="primary" onClick={handleHelpOpen}>
              <HelpOutline />
            </IconButton>
            <Dialog onClose={handleHelpClose} aria-labelledby="simple-dialog-title" open={helpOpen}>
              <DialogTitle id="simple-dialog-title">Wat Do?</DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  1. Select piece of gear that you want to generate lines for (Top left hand corner)
                </Typography>
                <Typography gutterBottom>
                  2a. Auto stat populator is for finding combinations that are more than or equal to the amount of stat listed.
                </Typography>
                <Typography gutterBottom>
                  2b. To filter cube lines, key in the type of lines you are selecting for, and enter the value of the lines you require.
                </Typography>
                <Typography gutterBottom>
                  2c. You can filter up to 2 stats at once. eg. BOSS 60 + ATK 9 outputs line combinations with more than or equal to 60% BOSS % 9 ATK
                </Typography>
              </DialogContent>
            </Dialog>
            </Paper>
          </AccordionSummary>
          :
          <AccordionSummary
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <Paper elevation={2}
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()} >
              <Autocomplete
                id="grouped-demo"
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  (newInputValue === '' ? setExpanded(false) : setExpanded(true));
                  setInputValue(newInputValue);
                  updateLineOptions(newInputValue);
                  clearRows();
                }}
                options={gearOptions.sort((a, b) => -b.type.localeCompare(a.type))}
                groupBy={(option) => option.type}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Gear" variant="outlined" />}
              />

              <Typography padding="10px" align="center">
                {`Auto Stat Populator`}
                <p></p>
                {`Stat 1`}
              </Typography>
              <Autocomplete
                id="Line"
                inputValue={typeOneInputValue}
                onInputChange={(event, newInputValue) => {
                  setTypeOneInputValue(newInputValue);
                  clearRows();
                }}
                options={typeOptions}
                getOptionLabel={(option) => option.type}
                style={{ width: 300, fullWidth: true }}
                renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
              />
              <p></p>
              <TextField
                id="outlined-basic"
                label=">= X%"
                variant="outlined"
                value={xOneInputValue}
                onChange={(e) => {
                  setXOneInputValue(parseInt(e.target.value))
                  clearRows();
                }}
                style={{ width: 300, fullWidth: true }}
              />
              <IconButton
                onClick={() => {
                  clearRows();
                  addIfMoreThanStat(xOneInputValue, typeOneInputValue, xTwoInputValue, typeTwoInputValue);
                }}
                color="primary" aria-label="Do the magic" align="right">
                <DoubleArrow />
              </IconButton>
            </Paper>
            {xOneInputValue === 0 || typeOneInputValue === "" ? [] :
              <div>
                <Paper style={{ position: 'absolute', bottom: 68, left: 330 }}>
                  <Box>
                    <Typography padding="10px" align="center">
                      {`Stat 2 (Leave Blank if not required)`}
                    </Typography>
                    <Autocomplete
                      id="Line"
                      inputValue={typeTwoInputValue}
                      onInputChange={(event, newInputValue) => {
                        setTypeTwoInputValue(newInputValue);
                        clearRows();
                      }}
                      options={typeOptions}
                      getOptionLabel={(option) => option.type}
                      style={{ width: 300, fullWidth: true }}
                      renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
                    />
                    <p></p>
                    <TextField
                      id="outlined-basic"
                      label=">= X%"
                      variant="outlined"
                      value={xTwoInputValue}
                      onChange={(e) => {
                        setXTwoInputValue(parseInt(e.target.value))
                        clearRows();
                      }}
                      style={{ width: 300, fullWidth: true }}
                    />
                  </Box>
                </Paper>
                <Paper style={{ position: 'absolute', bottom: 115, left: 330 }}>
                  <Box>

                    {/* {both ?
                      <Button color="primary" onClick={() => setBoth(false)}>
                        <Typography padding="10px" align="center">
                          {'AND'}
                        </Typography>
                      </Button>
                      :
                      <Button color="primary" onClick={() => setBoth(true)}>
                        <Typography padding="10px" align="center">
                          {'OR'}
                        </Typography>
                      </Button>
                    } */}

                  </Box>
                </Paper>
              </div>
            }
            <Paper style={{ padding: 10 }}>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>AS = All Stats</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>SL = All Skill Levels +X</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>CID = Chance to ignore X% damage</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>CDR = Skill CD -X seconds</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>SKILL = Decent Skills</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>ER = x% Elemental Resistance</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>IT = Invincibility Time +Xs</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>INV = X% chance to become invincible</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>CD = X% Crit Damage</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>MPC = -X% MP Consumption</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>MESO = X% Meso Rate</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>DR = X% Drop Rate</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>(M)ATTTEN = X (M)ATT every 10 levels</Paper>
                </Grid>
              </Grid>
            </Paper>
          </AccordionSummary>
        }

        {/*<AccordionDetails>
           <Accordion expanded={secondExpanded}>
            <AccordionSummary
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >

              <Paper elevation={2} className={classes.flex}
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()} >
                <Autocomplete
                  id="lineOne"
                  inputValue={lineOneInputValue}
                  onInputChange={(event, newInputValue) => {
                    setLineOneInputValue(newInputValue);
                    if (newInputValue !== "") {
                      const line1 = lineOptions.find(obj => obj.stat === newInputValue)
                      setLineOneRedPercentage(line1.red1);
                      setLineOneBlackPercentage(line1.black1);
                      setLineOneEqualityPercentage(line1.red1);
                      setLineOneHexaPercentage(line1.red1);
                    }
                  }}
                  options={lineOptions}
                  getOptionLabel={(option) => option.stat}
                  style={{ width: 300, padding: 10 }}
                  renderInput={(params) => <TextField {...params} label="Line 1" variant="outlined" />}
                />
                <Autocomplete
                  id="lineTwo"
                  inputValue={lineTwoInputValue}
                  onInputChange={(event, newInputValue) => {
                    setLineTwoInputValue(newInputValue);
                    if (newInputValue !== "") {
                      const line2 = subLineOptions.find(obj => obj.stat === newInputValue)
                      setLineTwoRedPercentage(line2.red2);
                      setLineTwoBlackPercentage(line2.black2);
                      if (line2.prime === "Prime") {
                        setLineTwoEqualityPercentage(line2.red1);
                      }
                      let hexaPercentage = 1 - (Math.pow((1 - line2.red2), 2) * Math.pow((1 - line2.red3), 3));
                      setLineTwoHexaPercentage(hexaPercentage);
                    }
                  }}
                  options={subLineOptions.sort((a, b) => b.prime.localeCompare(a.prime))}
                  groupBy={(option) => option.prime}
                  getOptionLabel={(option) => option.stat}
                  style={{ width: 300, padding: 10 }}
                  renderInput={(params) => <TextField {...params} label="Line 2" variant="outlined" />}
                />
                <Autocomplete
                  id="lineThree"
                  inputValue={lineThreeInputValue}
                  onInputChange={(event, newInputValue) => {
                    setLineThreeInputValue(newInputValue);
                    if (newInputValue !== "") {
                      const line3 = subLineOptions.find(obj => obj.stat === newInputValue)
                      setLineThreeRedPercentage(line3.red3);
                      setLineThreeBlackPercentage(line3.black3);
                      if (line3.prime === "Prime") {
                        setLineThreeEqualityPercentage(line3.red1);
                      }
                      let hexaPercentage = 1 - (Math.pow((1 - line3.red2), 1) * Math.pow((1 - line3.red3), 3));
                      setLineThreeHexaPercentage(hexaPercentage);
                    }
                  }}
                  options={subLineOptions.sort((a, b) => b.prime.localeCompare(a.prime))}
                  groupBy={(option) => option.prime}
                  getOptionLabel={(option) => option.stat}
                  style={{ width: 300, padding: 10 }}
                  renderInput={(params) => <TextField {...params} label="Line 3" variant="outlined" />}
                />
                <IconButton
                  onClick={() => {
                    addToRows(createRow(curRowId, lineOneInputValue, lineTwoInputValue, lineThreeInputValue, curRedPercentage, curBlackPercentage, curEqualityPercentage, curHexaPercentage));
                    setCurRowId(curRowId + 1);
                  }}
                  color="primary" aria-label="Add to List">
                  <Add />
                </IconButton>
              </Paper>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.cubesAccordion}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      {`Red Cubes: ${curRedPercentage * 100}%`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="textSecondary">
                      {`One in ${Math.round(1 / (curRedPercentage))} red cubes`}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      {`Black Cubes: ${curBlackPercentage * 100}%`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="textSecondary">
                      {`One in ${Math.round(1 / (curBlackPercentage))} black cubes`}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      {`Equality Cubes: ${curEqualityPercentage * 100}%`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="textSecondary">
                      {`One in ${Math.round(1 / (curEqualityPercentage))} equality cubes`}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails> */}
      </Accordion>

      <Paper elevation={2} className='container'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Lines
            </TableCell>
                <TableCell align="right">Percentages</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Line 1</TableCell>
                <TableCell align="center">Line 2</TableCell>
                <TableCell align="center">Line 3</TableCell>
                <TableCell align="center">
                  <img src={redCubeIcon} />
                  &nbsp;Red (%)
                  </TableCell>
                <TableCell align="center">
                  <img src={blackCubeIcon} />
                  &nbsp;Black (%)
                  </TableCell>
                <TableCell align="center">
                  <img src={equalityCubeIcon} />
                  &nbsp;Equality (%)
                  </TableCell>
                <TableCell align="center">
                  <img src={hexaCubeIcon} />
                  &nbsp;Hexa (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.line1}</TableCell>
                  <TableCell align="center">{row.line2}</TableCell>
                  <TableCell align="center">{row.line3}</TableCell>
                  <TableCell align="center">{`${row.red * 100}%`}</TableCell>
                  <TableCell align="center">{`${row.black * 100}%`}</TableCell>
                  <TableCell align="center">{`${row.equality * 100}%`}</TableCell>
                  <TableCell align="center">{`${row.hexa * 100}%`}</TableCell>
                  <TableCell align="right">
                    <IconButton className={classes.button}
                      onClick={() => {
                        handleRemoveItem(row.id);
                      }}
                      color="primary" aria-label="Add to List">
                      <Clear />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell>Total Red(%)</TableCell>
                <TableCell align="right">{`${getTotalRedPercentages() * 100} %`}</TableCell>
                <TableCell align="right">{`One in ${Math.round(1 / (getTotalRedPercentages()))} red cubes`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Black(%)</TableCell>
                <TableCell align="right">{`${getTotalBlackPercentages() * 100} %`}</TableCell>
                <TableCell align="right">{`One in ${Math.round(1 / (getTotalBlackPercentages()))} black cubes`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Equality(%)</TableCell>
                <TableCell align="right">{`${getTotalEqualityPercentages() * 100} %`}</TableCell>
                <TableCell align="right">{`One in ${Math.round(1 / (getTotalEqualityPercentages()))} equality cubes`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Hexa(%)</TableCell>
                <TableCell align="right">{`${getTotalHexaPercentages() * 100} %`}</TableCell>
                <TableCell align="right">{`One in ${Math.round(1 / (getTotalHexaPercentages()))} hexa cubes`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper>
        <Typography>
          All equality cube lines shown here assume that they have the same rate as rolling the first prime line of a red cube,
          while hexa cube lines assume that the first line is the first line of a red cube, second is a second line, and lines 3-6 are third lines.
          Hexacube numbers might be slightly off, so take with a pinch of salt.
        </Typography>
        <Typography>
          Contact pladz#1984 on discord for bugs, or Note Pladz in-game MapleSEA
        </Typography>
        <Typography>
          <a href="http://tiny.cc/finalfinaldamage" rel="noreferrer">
            IED Calculation aka "Final Final Damage" Doc
        </a>
        </Typography>
        <Typography>
          <a href="https://github.com/pladz/cube_calc/tree/master" rel="noreferrer">
            Very scuffed source code
        </a>
        </Typography>
        <Typography>
          To Do List: Add Addpot lines
        </Typography>
      </Paper>
    </div>
  );
}
