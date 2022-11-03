import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useWindowDimensions from "../../Common/window";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HomeBackgroundContainer() {
  const { height, width } = useWindowDimensions();
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.container}>
        <section></section>
        <section className={classes.rightSide}>
          <Typography className={classes.backgroundTitle}>
            Your Premium Sound, Unplugged!
          </Typography>

          <Typography className={classes.backgroundParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            color="inherit"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            //   position: "absolute",
              width: "156px",
              height: "56px",
            //   left: "748px",
            top:"40px",
              background: "#F86338",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            Find out more
          </Button>
        </section>
      </div>
    </React.Fragment>
  );
}
const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    alignContent: "center",
    height: "500px",
    width: useWindowDimensions().width,
    left: "0px",
    backgroundColor: "#FFFFFF",
    border: "1px solid black",
  },
  rightSide: {
    display: "grid",
    gridTemplateRows: "auto auto auto",

  },

  backgroundTitle: {
    width: "593px",
    height: "154px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "120%",
    letterSpacing: "0.003em",
    color: "#11142D",
  },
  backgroundParagraph: {
    width: "612px",
    height: "40px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "125%",
    letterSpacing: "0.003em",
    color: "#515151",
  },
}));
