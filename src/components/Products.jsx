import React, { useEffect,useState} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`


const Products = ({cat,filters,sort}) => {

const [products,setProducts] = useState([]);
const [filteredProducts,setfilteredProducts] = useState([]);

useEffect(()=>{
const getProducts = async()=>{
  try {
    const res = await axios.get(cat ? `http://localhost:3000/api/products?category=${cat}`
                                    : "http://localhost:3000/api/products")
    
    
    setProducts(res.data)
  
  } catch (err) {
    res.status(200).json(err)
  }
}
getProducts();

},[cat])
//console.log(products)

useEffect(()=>{
cat && 
  setfilteredProducts(
    
  products.filter(item => Object.entries(filters).every(([key,value])=>
    item[key].includes(value)
    )
    
  )
)

//console.log(filters)
//console.log("//////////////////////////////////////",filteredProducts)
//console.log("============",products)
//console.log("+++++++++++++++++/",filters)

},[products,cat,filters]);

console.log("filterproduct",filteredProducts)
console.log(sort)
useEffect(()=>{
  if(sort==="Newest")
  {
    setfilteredProducts(prev=>

      [...prev].sort((a,b)=>a.createdAt - b.createdAt)
    )
  }
  else if(sort==="asc"){
    setfilteredProducts(prev=>

      [...prev].sort((a,b)=>a.price - b.price)
    )

  }
  else{
    setfilteredProducts(prev=>

      [...prev].sort((a,b)=>b.price - a.price)
    )
  }

},[sort])

  return (
  <Container>
    {cat ? filteredProducts.map((item)=>(

        <Product item={item} key={item.id} />

    ))
  
  : products.slice(0,8).map((item)=>(

    <Product item={item} key={item.id} />

))
  
  }



    

  </Container>
  )
}

export default Products
