import React from "react"
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"
import { cart } from "reducers/cart"
import { ProductPage } from "components/ProductPage"
import { Link } from 'react-router-dom'

// const bouquetURL = ``

const Button = styled.button`
  background-color: #FF7C98;
  color: #FFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase; 
  outline: none;
  border: none;
  margin: 20px;
`

const PriceTag = styled.h4`
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 24px;
`

const ProductTitle = styled.h3`
color: #FF7C98;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 28px;
`

export const Product = ({ product }) => {
  fetch(`https://bouquetdb.herokuapp.com/${product._id}`).then((res) => {
    return res.json()
    console.log(res.json)
  })


  return (
    <>
      {/* //lägg till bild */}
      <ProductTitle>{product.name}</ProductTitle>
      <PriceTag>{product.price} kr</PriceTag>

      <Link to={`bouquets/${product._id}`}>
        <Button
          type="button"
          onClick={() => <ProductPage />}
        >
          Mer info
      </Button>
      </Link>
    </>
  )
}