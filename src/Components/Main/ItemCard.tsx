import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



export default function ItemCard() {
  return (
    <Card sx={{ maxWidth: 345,  width:"100%", margin: "72px 104px" ,backgroundColor:"#E5E5E5"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           Category
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            Lizard
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
