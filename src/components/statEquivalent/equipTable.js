import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Box } from "@material-ui/core";

const EquipTable = ({ equipStats }) => {
  return (
    <>
      {equipStats.map((equipment) => (
        <Box key={equipment.id}>
          <Box>
            <strong>Equipment:</strong> {equipment.name}
          </Box>
          <TableContainer component={Paper}>
            <Table>
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
                  <TableRow key={statKey} hover>
                    <TableCell>{equipment.stats[statKey].name}</TableCell>
                    <TableCell>{equipment.stats[statKey].total}</TableCell>
                    {Object.keys(equipment.stats[statKey].sources).map(
                      (source) => (
                        <TableCell key={source}>
                          {equipment.stats[statKey].sources[source].value}
                        </TableCell>
                      )
                    )}
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
