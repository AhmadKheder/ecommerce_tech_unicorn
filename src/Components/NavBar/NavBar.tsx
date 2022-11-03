import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBox from "./SearchBox";
import { makeStyles } from "@mui/styles";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
export default function NavBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ flexGrow: 1 }}>
        <Toolbar className={classes.toolBar}>
          <div>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">Promo</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Blog</Button>
          </div>

          <SearchBox />

          <div className={classes.iconBtns}>
            <Button color="inherit">
              <FavoriteBorderOutlinedIcon />
            </Button>
            <Button color="inherit">
              
              <ShoppingCartOutlinedIcon />
            </Button>
            <Button color="inherit">
              <PersonOutlineOutlinedIcon />
            </Button>
            <Button color="inherit">
              
              <NotificationsOutlinedIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const useStyles = makeStyles(() => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  iconBtns:{
    display: "flex",
    justifyContent: "space-between",
  }
}));
