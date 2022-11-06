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
import { useNavigate  } from 'react-router-dom';
import './productCard.css'
import { PanTool } from '@mui/icons-material';

export default function ProductCard(props) {
    const dispatch=useDispatch()
    const cart = useSelector(state => state.cart)
    const navigate=useNavigate();

    let {data,listItems}=props;

    const addToCartClick = (item) => {
        item.count = 1;
        let u = [...cart,item]
        console.log(u,"============u=============")
        dispatch({ type: "ADD_CART", cart: u })
        // dispatch({type:"TOTAL_ITEM_COUNT",count:itemCount})

    }

    const updateQuantity = (item,quantity) =>{
        let copyItem = Object.assign({},item);
        copyItem.count = quantity;
        
        const updatedArr = cart.map(i => {
            if (item.id == i.id) {
                console.log(copyItem,"=========copyitem========")
                return copyItem;
            }
            return i;
        })
        dispatch({ type: "ADD_CART", cart: updatedArr})
    }

    const removeItemFromCartClick=(item)=>{
        const updatedArr = cart.filter(i => i.id!=item.id)
        dispatch({ type: "ADD_CART", cart: updatedArr})
    }

    const cartData = useSelector(state => state.cart)
    const isProductAddedtoCart = cartData.some(item=>item.id===data.id)
    
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
                {!props.isCartPage ? (
                    <div>{!isProductAddedtoCart ? (
                        <Button onClick={() => addToCartClick(data)} variant="contained" className={ "addToCartBtn1"} size="small">Add to cart</Button>
                    ) : <Button onClick={() => navigate("/cart")} variant="contained" className={"addToCartBtn1"} size="small">Go to cart</Button>
                    }</div>
                ) : (
                    <ButtonGroup className={"itemCoutnBtn1"} variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => updateQuantity(data,data.count+1)}>+</Button>
                        <Typography style={{ width: '25px', marginTop: '4px' }}>{data.count}</Typography>
                        <Button disabled={data.count===0&&true} onClick={() => updateQuantity(data,data.count-1)}>-</Button>
                        <Button onClick={()=>removeItemFromCartClick(data)}>Remove</Button>
                    </ButtonGroup>
                )} 
            </CardActions>
            
        </Card>
    );
}
