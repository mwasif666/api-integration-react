import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail =() => {
    const [data, setData] = useState({});
    const [loader, setloader] = useState(true);
    const { id } = useParams();
    const getProd = async () => {
        let responseData = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(responseData.data);
        setloader(false);
    }

    useEffect(() => {
        getProd();
    }, []);

  return (
      <>
          {
              loader ? <div>
                  loading.....
              </div> : 
                  <div>{data.title}</div>
            
        }  
      </>
  )
}

export default ProductDetail