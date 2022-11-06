import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import {useSelector,useDispatch} from "react-redux"
import {useState,useEffect} from "react"
import './productCard.css'

export default function ProductCard(props) {
    const dispatch=useDispatch()
    const {data,listItems}=props;
  
    const addToCartClick=(item)=>{
        let itemCount=0;
        // item.count++;
        listItems.map(i=>{
            if(item.id==i.id)
             {
                 i.count++;
                }
                
                })
             
                listItems.map(i=>itemCount+=i.count)
                console.log(itemCount,"welcome",listItems)

        dispatch({type:"TOTAL_ITEM",data:listItems})
        // dispatch({type:"TOTAL_ITEM_COUNT",count:itemCount})

    }

    const removeItemFromCartClick=(item)=>{
        let itemCount=0;
        listItems.map(i=>{
            if(item.id==i.id) i.count--;
            })
            listItems.map(i=>itemCount+=i.count)

        dispatch({type:"TOTAL_ITEM",data:listItems})
        dispatch({type:"TOTAL_ITEM_COUNT",count:itemCount})

    }

    
    return (
        <Card  sx={{ maxWidth: 230 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                src={data.image}
                sx={{ width: '100%',objectFit:'contain' }}
           />
            <CardContent style={{paddingBottom:'0px'}}>
                
                <Typography className="countText" variant="body2" color="text.secondary">
                   {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   <b>Rs {data.price}</b> 
                </Typography>
            </CardContent>
            <CardActions>   
                <Button onClick={()=>addToCartClick(data)} variant="contained"  className={!data.count?"addToCartBtn1":"addToCartBtn"} size="small">Add to cart</Button>
                <ButtonGroup  className={!data.count?"itemCoutnBtn":"itemCoutnBtn1"} variant="contained" aria-label="outlined primary button group">
                    <Button onClick={()=>addToCartClick(data)}>+</Button>
                    <Typography  style={{width:'25px',marginTop:'4px'}}>{data.count}</Typography>
                    <Button onClick={()=>removeItemFromCartClick(data)}>-</Button>
                </ButtonGroup>
            </CardActions>
            
        </Card>
    );
}
