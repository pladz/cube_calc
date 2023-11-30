import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import {
  Paper,
  Box,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import SimpleInputField from "./simpleInputField";

const EquipTable = ({ equipStats, updateStarforce, updateEquipType }) => {
  return (
    <>
      {equipStats.map((equipment) => (
        <Box key={equipment.id}>
          <Box>
            <Typography gutterBottom>
              <strong>Equipment:</strong> {equipment.name}
            </Typography>
            <FormControl
              variant="standard"
              size="small"
              sx={{ m: 1, minWidth: 200 }}
            >
              <InputLabel id="equip-type-label">Type of equipment</InputLabel>
              <Select
                id={`equip-${equipment.id}`}
                value={equipment.equipType}
                onChange={(e) => {
                  updateEquipType(equipment.id, e.target.value);
                }}
                label="Type of equipment"
              >
                {/* {equipment.setOptions.split(", ").map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))} */}
                {equipment.setOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <SimpleInputField
              fieldData={{
                id: equipment.id,
                name: "Star Force",
                value: equipment.starforce,
              }}
              onFieldChange={(fieldId, newValue) =>
                updateStarforce(fieldId, newValue)
              }
              variant="standard"
              fullWidth={false}
            />
          </Box>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Stat</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Base</TableCell>
                  <TableCell>Flame</TableCell>
                  <TableCell>Scrolling</TableCell>
                  <TableCell>Starforce</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(equipment.stats).map((statKey) => (
                  <TableRow key={statKey}>
                    <TableCell>{equipment.stats[statKey].name}</TableCell>
                    <TableCell>{equipment.stats[statKey].total}</TableCell>
                    <TableCell>{equipment.stats[statKey].base}</TableCell>
                    <TableCell>{equipment.stats[statKey].flame}</TableCell>
                    <TableCell>{equipment.stats[statKey].scrolling}</TableCell>
                    {/* <TableCell>{equipment.stats[statKey].starforce}</TableCell> */}
                    <TableCell>{equipment.starforce}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </>
  );
};

export default EquipTable;
