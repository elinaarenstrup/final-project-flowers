import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import styled from "styled-components"
import { Link } from "react-router-dom"

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


export const Cart = () => {
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  const clearAll = () => {
    dispatch(cart.actions.clearCart())

    return (
      <div>
        <>
          <p>Total: {totalPrice} kr</p>
        </>

        <ul>
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </ul>
        <Button title="Ta bort" onClick={clearAll} />
        <Link className="aboutlink" to={"/checkout/"} style={{
          backgroundColor: "#FF7C98",
          color: "#FFFF",
          fontFamily: "Poppins",
          fontWeight: "700",
          textTransform: "uppercase",
          outline: "none",
          border: "none",
          margin: "20px"
        }}

        >Gå till betalning</Link>
      </div>
    )
  }
}