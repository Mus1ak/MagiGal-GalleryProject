import React from 'react'
import styled from 'styled-components'
import { PiPatreonLogoDuotone } from "react-icons/pi";



const Navbar = () => {
  return (
    <Container>
      {/* <PiPatreonLogoDuotone /> */}
      {/* <img src="https://www.juliakcrist.com/s/black-plant-png.PNG" alt="" /> */}
        <p>MagiGal</p>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #0809111f;
    width: 100%;
    padding: 0 10rem;
    height: 10vh;
    font-size: 2rem;
    p{
      font-weight: 500;
      font-size: 1.5rem;
    }
`

export default Navbar