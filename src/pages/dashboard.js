
import React, { useEffect, useState } from "react";
import HeaderBar from "../components/headerBar/headerBar";
import ProductCard from "../components/productCard/productCard";
import './dashboard.css';
import {useSelector,useDispatch} from "react-redux"
import BasicModal from '../components/modal/basicModal'

function Dashboard() {
    const [data, setData] = useState([])
    const termsConditionStatus=useSelector(state=>state.termsConditionStatus)
    const dispatch=useDispatch()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
            data.map(i=>i.count=0)
            // dispatch({type:"TOTAL_ITEM",data:data})
            setData(data)
        })
    }, [])
    const value = useSelector(state=>state.data)
    console.log(value,"dashboar dataaa")

    return (
        <>
        {termsConditionStatus? <BasicModal />:''}
       
            <HeaderBar />
            <div className="mainDiv">{data&&data.map(item =>
            (
                <ProductCard key={item.id} data={item} listItems={data} />
            )
            )}
            </div>

        </>
    );
}

export default Dashboard;


