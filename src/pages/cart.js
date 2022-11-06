
import React, { useEffect, useState } from "react";
import HeaderBar from "../components/headerBar/headerBar";
import ProductCard from "../components/productCard/productCard";
import {useSelector,useDispatch} from "react-redux"
import './dashboard.css'

function Cart() {
    const data = useSelector(state => state.cart)
    // const finalData=useSelector(state=>state.data)
    // console.log(finalData)
    // const [data, setData] = useState(useSelector(state=>state.data))
    // console.log(data,"cart dataaa")

    return (
        <>
            <HeaderBar />
            <div className="mainDiv">{data&&data.map(item=>
                 (
                    <ProductCard key={item.id} data={item} isCartPage={true}/>
                )
                )}
                
                </div>

        </>
    );
}

export default Cart;


