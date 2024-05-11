import React from 'react'
import styled from 'styled-components'

const Grid = ({photos}) => {
  return (
    <Container>
        <div className="logo">
          <img src="https://www.juliakcrist.com/s/black-plant-png.PNG" alt="" />
          <h1>MagiGal</h1>
        </div>
        <div className="text">
        <p>Way to your Gallery.</p>
        <p>Made by you and your imaginations.</p>
        </div>
        <div className='grid'>
            {photos.map(({photo, _id})=> (
                <div key={_id} className='grid_item'>
                    <img src={`http://localhost:5000/uploads/${photo}`} alt="grid_image" />
                </div>
            ))}
        </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  
  .text{

    color: #757272b3;
    padding: 2rem;
    text-align: center;
    width:100%;
    margin: 1.5rem;
    margin-bottom: 4rem;
  }
  .logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      height: 10rem;
    }

  }
  h1{
    font-weight: 600;
    font-size: 10rem;
    letter-spacing: 0.01rem;

  }

  p{
    font-size: 2.6rem;
    font-weight: 300;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 2rem;
    /* padding-top: 0; */
  }
  .grid_item{
    height: 40rem;
    
    overflow: hidden;

    img {
    width: 100%; /* Ensures the image takes up the full width of the grid item */
    height: 100%; /* Ensures the image takes up the full height of the grid item */
    object-fit: cover; /* Scales the image while maintaining its aspect ratio to cover the entire container */

    &:hover{
      opacity: 0.8;
      transition: opacity 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
} 
  }
`

export default Grid