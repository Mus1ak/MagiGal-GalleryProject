import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import styled from 'styled-components';
import axios from 'axios'

const Button = ({ setUpdateUI }) => {

    const handleChange = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("photo", e.target.files[0])

        axios.post("http://localhost:5000/api/save", formData).then((res) => {
            console.log(res.data);
            setUpdateUI(res.data._id)
        }).catch((err) => console.log(err))
    }

    return (
        <Container>
            <label htmlFor="file_picker" className='button'>
                <IoIosAddCircle />
                <input hidden type="file" name="file_picker" id="file_picker" onChange={(e) => handleChange(e)} />
            </label>
        </Container>
    )
}

const Container = styled.div`
    font-size: 70px;
    height: 65px;
    position: fixed;
    right : 0;
    bottom: 0;
    margin: 4rem;

    
    
    .button{
        transition: color 0.2s ease-in-out ;
        cursor: pointer;
        &:hover{
        color: #000000a7;
    }
    }


`

export default Button