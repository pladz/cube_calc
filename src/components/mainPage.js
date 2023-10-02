import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import PotentialTable from "./potentialTable";
import PercentageGraphs from "./percentageGraphs";
import { Link, useNavigate } from "react-router-dom";
import ShouldITodd from "./shouldITodd";

// const useStyles = makeStyles((theme) => ({
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   button: {
//     width: "120px",
//   },
// }));

const MainPage = () => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const styles = {
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      width: "120px",
    },
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#f25c54" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            // className={classes.menuButton}
            sx={styles.menuButton}
            onClick={handleClick}
            size="large"
            id="menu-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            // getContentAnchorEl={null}
            // onMouseLeave={handleMenuClose}
            MenuListProps={{ "aria-labelledby": "menu-button" }}
          >
            <MenuItem
              component={Link}
              to="/stats_calc"
              // onMouseLeave={handleClose}
            >
              Stats Calculator
            </MenuItem>
            <MenuItem
              component={Link}
              to="/todd_calc"
              // onMouseLeave={handleClose}
            >
              Todd Calculator
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            // className={classes.title}
            sx={styles.title}
            align="center"
          >
            Maple Math with <del>Shitty</del> Okay UI
          </Typography>
          <Button
            sx={styles.button}
            // className={classes.button}
            color="inherit"
            onClick={handleOpen}
          >
            {open ? (
              <Typography>TODD COST CALCULATOR</Typography>
            ) : (
              <Typography>CUBE RATES CALCULATOR</Typography>
            )}
          </Button>
        </Toolbar>
      </AppBar>
      {open ? <PotentialTable /> : <ShouldITodd />}
    </>
  );
};

export default MainPage;
