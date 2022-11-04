import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Typography from "@mui/material/Typography";


export default function CallCenter() {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.container}>
        <div className={classes.phoneIcon}>
          <LocalPhoneOutlinedIcon />
        </div>
        <div>
          <Typography>Call Center</Typography>
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
    width: "120px",
    marginRight: "17px",
  },
  phoneIcon: {
    width: 20,
    height: 20,
  },
}));
