import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import ItemCard from "./ItemCard";
import useWindowDimensions from "../../Common/window";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../Common/types";

export default function PremiumCollection() {
  const [productsList, setProductsList] = useState<Product[] | null>(null);
  const [shownProducts, setShownProducts] = useState<Product[] | null>(null);

  const [url, setUrl] = useState<string>("https://fakestoreapi.com/products");
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  console.log({ productsList });
  console.log({ shownProducts });

  const fliterByCategoryHandler = (category: string) => {
    if(category === "all"){
    setShownProducts(productsList);

    }else{

      let products: Product[] | null = productsList
        ? productsList.filter((item) => {
            return item.category === category;
          })
        : null;
      setShownProducts(products);
    }
  };

  useEffect(() => {
      axios.get(url).then((response) => {
      setProductsList(response.data);
      setShownProducts(response.data);
    });
  }, []);
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
          <Button
            color="inherit"
            onClick={() => {
              fliterByCategoryHandler("all")
            }}
          >
            All Products
          </Button>
          <Button
            color="inherit"
            onClick={() => fliterByCategoryHandler("men's clothing")}
          >
            men's clothing
          </Button>
          <Button
            color="inherit"
            onClick={() => fliterByCategoryHandler("jewelery")}
          >
            jewelery
          </Button>
          <Button
            color="inherit"
            onClick={() => fliterByCategoryHandler("electronics")}
          >
            electronics
          </Button>
          <Button
            color="inherit"
            onClick={() => fliterByCategoryHandler("women's clothing")}
          >
            women's clothing
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setUrl("https://fakestoreapi.com/products?sort=desc");
            }}
          >
            Sort
          </Button>
          {/* <Button color="inherit" onClick={()=>fliterByCategoryHandler("men's clothing")}>T-Shirt</Button> */}
        </div>
      </section>

      <section className={classes.ItemsContainer}>
        {shownProducts ? (
          shownProducts.map((item) => {
            return <ItemCard key={item.id} product={item} />;
          })
        ) : (
          <h1>No Products</h1>
        )}
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
    justifyContent: "center",
  },
  SingleItemContainer: {},
}));
