import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product(){
    const {id,name}=useParams()
    const [data,setData]=useState(null)
    useEffect(
        ()=>{
            fetch(`https://dummyjson.com/products/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data))
            .catch((error)=>console.error("data not fetched",error))
        },[id]
    )
    console.log(data)
    if(!data) return 'no data ..'
    return(
        <>
        <h1>
            {data.title} 
        
        </h1>
        <img src={data.images[0]} width={200} alt="" />
        </>
    )
}

export default Product;