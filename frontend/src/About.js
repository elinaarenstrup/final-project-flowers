import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const About = () => {

  return (
    <>
      <p>Vi gillar blommor, smultron och hallonsaft! </p>
      <Link className="back-link" to={'/'} >Tillbaks</Link>
    </>
  )
}

