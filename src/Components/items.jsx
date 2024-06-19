import Item from "./item";
import { useState, useEffect } from "react";
import { sortData } from "../Services/service_example";
import Box from '@mui/material/Box';



export default function Items() {

    const [productsList, setproductsList] = useState([]);

  useEffect(() => {
   setproductsList( sortData());

  }, []);
  
    return(
        <div>
            <h1>Items</h1>

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 600,
                    height: 400,
                },
            }}
        >
            {productsList.map(p => <Item key={p.id} {...p} />)}

        </Box>
        </div>
        
    )
}