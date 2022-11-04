import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { Product } from '../../Common/types';
import axios from 'axios';

export default function SearchBox() {
  const [productsList, setProductsList] = useState<Product[] | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
    setProductsList(response.data);
   

  });
}, [searchTerm,productsList]);
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search what you need' }}
        onChange={(e)=>{setSearchTerm(e.target.value)
          searchResult =   productsList?.filter((item: Product)=>{
            if(searchTerm == ""){
              return item
            }else{
              if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return item
              }
            }
          })
        // console.log({searchTerm})
      }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}
export let searchResult : Product[]|  undefined 