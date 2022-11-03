import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Typography from "@mui/material/Typography";



export default function Shipping() {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.container}>
        <div className={classes.phoneIcon}>
          <LocalShippingOutlinedIcon />
        </div>
        <div>
          <Typography>Shipping & Returns</Typography>
        </div>
      </div>
    </Box>
  );
}
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "178px",
    height: "24px",
    left: "1158px",
    top: "37px",
    margin: "0 17px",
  },
  phoneIcon: {
    width: 20,
    height: 20,
  },
}));
