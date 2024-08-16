import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Product = () => {
 const [prod, setProd] = useState([]);
 const [load, setLoad] = useState(true);
const history = useNavigate();
    const handleClick = (id) => {
       history(`/productdetail/${id}`) 
    };
const getProct= async() => {
   let rest = await axios.get("https://fakestoreapi.com/products");
    setProd(rest.data);
    setLoad(false);
}
useEffect(() => {
    getProct();
}, []);



  return (
      <>
          {
              load ? <div>
                  loading......
              </div> : prod?.map((item) => (
                  <div key={item.id} onClick={()=> handleClick(item.id)}>{ item.title}</div>
              ))
        }
    </>
  )
}

export default Product;