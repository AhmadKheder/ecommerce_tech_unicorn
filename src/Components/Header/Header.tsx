import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Logo from "./Logo";
import useWindowDimensions from "../../Common/window";
import CallCenter from "./CallCenter";
import Shipping from "./Shipping";


export default function Header() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <Box>
      <Toolbar
        sx={{
          display:"flex",
          width: { width },
          height: "93px",
          left: "0px",
          top: "0px",
          border: "2px solid red",
          background: "#FFFFFF",
        }}
      >
        <section className={classes.logo}>
          <Logo />
        </section>

        <div className={classes.contactShipping}>
          <div>
            <CallCenter/>
          </div>
          <div>
            <Shipping/>
          </div>
        </div>
      </Toolbar>
    </Box>
  );
}
const useStyles = makeStyles(() => ({
 
  contactShipping:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",  

  },
  logo:{

    marginRight:794,
    marginLeft:94,
  }
}));
