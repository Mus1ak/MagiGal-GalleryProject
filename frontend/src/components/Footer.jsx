import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <Container>
            <h5>Upload Your Images,</h5>
            <h5>Using the Plus icon on bottom</h5>

            <div className="Us">
                <div className="links">
                <a href="https://github.com/Mus1ak"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mustbemustak/"><FaLinkedin /></a>
                <p>Connect with me.</p>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
color: black;
/* background-color: red; */
/* margin: 1.5rem; */
margin-bottom: 4rem;

h5{
    text-align: center;
    letter-spacing: 1.02px;
    font-size: 2.6rem;
    font-weight: 500;
}
.Us{
    /* border-top: 1px solid black; */
        height: 10rem;

        font-size: 1.7rem;
        color: #757272b3;
        display: flex;
        justify-content: center;
        align-items: center;
        
        flex-direction: column;
        width: 100%;
        /* background-color: red; */

        .links{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            a{
                /* background-color: red; */
                display: flex;
                align-items: center;
                justify-content: center;
                color: #838383;
                font-size: 2.5rem;
            }
        }
    }
`
export default Footer