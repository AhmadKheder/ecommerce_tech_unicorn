import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import ItemCard from "./ItemCard";
import useWindowDimensions from "../../Common/window";

export default function PremiumCollection() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <Box
      sx={{
        flexGrow: 1,
        
      }}
    >
      <section>
        <div className={classes.collectionTitleContaner}>
          <p className={classes.collectionTitle}>Our Premium Collection</p>
        </div>
        <div className={classes.filteringBtnsContaner}>
          <Button color="inherit">All Products</Button>
          <Button color="inherit">Coats & Jacket</Button>
          <Button color="inherit">Dressed</Button>
          <Button color="inherit">Playsuit</Button>
          <Button color="inherit">Short</Button>
          <Button color="inherit">Skirt</Button>
          <Button color="inherit">T-Shirt</Button>
        </div>
      </section>

      <section className={classes.ItemsContainer}>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      <ItemCard></ItemCard>
      
      </section>
    </Box>
  );
}
const useStyles = makeStyles(() => ({
  collectionTitleContaner: {
    display: "flex",
    justifyContent: "center",
  },
  collectionTitle: {
    width: "561px",
    height: "58px",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "120%",
    letterSpacing: "0.005em",
    color: "#11142D",
  },
  filteringBtnsContaner: {
    display: "flex",
    justifyContent: "center",
    
  },
  ItemsContainer: {
    display: "grid",
    gridTemplateColumns: "400px 400px 400px",
    gridTemplateRows: "672px 672px",
    gap: "16px 16px",
    justifyContent:"center",

  },
  SingleItemContainer: {
     

  },
}));
