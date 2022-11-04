import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";



export default function Logo() {
  const classes = useStyles();

  return (
    
            <Typography
              variant="h6"
              component="div"
              sx={{
                width: "152px",
                height: "47px",
                left: "94px",
                top: "25px",
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontweight: "700",
                fontSize: "39px",
                lineHeight: "120%",
                letterSpacing: "0.005em",
                color: "#F86338",
              }}
            >
              Dealerz.
            </Typography>

  );
}
const useStyles = makeStyles(() => ({

}));
