
import React, { useEffect, useState } from "react";
import HeaderBar from "../components/headerBar/headerBar";
import ProductCard from "../components/productCard/productCard";
import {useSelector,useDispatch} from "react-redux"
import './dashboard.css'

function Cart() {
    const [data, setData] = useState([])
    // const finalData=useSelector(state=>state.data)
    // console.log(finalData)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    // const [data, setData] = useState(useSelector(state=>state.data))
    // console.log(data,"cart dataaa")

    return (
        <>
            <HeaderBar />
            <div className="mainDiv">{data&&data.map(item=>
                 (
                    <ProductCard key={item.id} data={item} />
                )
                )}
                
                </div>

        </>
    );
}

export default Cart;


