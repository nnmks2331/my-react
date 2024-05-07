import React, { useState, useEffect } from 'react';
import Product from './Product';
function ProductList (){
  const api_url ="https://fakestoreapi.com/products";
const [products,setProducts]=useState([]);

  
  useEffect(()=>{
      fetch( api_url)
      .then((res)=>res.json())
      .then((data)=>setProducts(data));
    },[])




  return(

        <>
        <h1 ClassName ="text-center">Our Products</h1>
        
        <div ClassName="container">
        <div ClassName="row">
          {products.map((product)=>{
            return( 
            <div ClassName="col-3" key={product.id}>
            <Product product={product}/>
            </div>
            );
          }) }
       
        </div>

            
  
        </div>
        </>



    );
}
export default ProductList;