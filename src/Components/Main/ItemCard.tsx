import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Product } from "../../Common/types";

interface Props{
  product: Product
}
export default function ItemCard(props: Props) {
 const {title, category, image} = props.product;
  return (
    <Card sx={{ maxWidth: 345,  width:"100%", margin: "72px 104px" ,backgroundColor:"#E5E5E5"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {image}
          alt="green iguana"
        />
        <CardContent sx={{maxWidth:400,maxHeight:300}}>
          <Typography variant="body2" color="text.secondary">
           {category}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" sx={{maxWidth:34,maxHeight:34}} >
        <ArrowCircleRightIcon sx={{color:"#F86338",width:34,height:34}} />
        </Button>
      </CardActions>
    </Card>
  );
}
