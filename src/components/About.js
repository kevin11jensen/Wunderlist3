import React from 'react';
import { device } from './device';
import styled from 'styled-components';
import NavBar from './Navbar';
import Footer from './Footer';

export default function About() {
    return (
        
        <AboutUs>
            <NavBar />
            <div className = "about" >
                <h1>About WunderList 3</h1>
                <p>Wunderlist 3 takes your traditional to-do list app and automates it. It not only allows you to write your to-do, work, grocery, trip and household lists, but allows you to set up recurring to do lists by date and time. (Think recurring events on google calendar + to-do list app).<br/><br/>No matter how much is on your plate, Wunderlist 3 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly.</p>
            </div>
            <Footer />
        </AboutUs>
        
    );
}
const AboutUs = styled.div `
    
    .about {
        font-size: 5rem;
        font-family: 'Balsamiq Sans', cursive;
        display: flex;
        
        align-items: center;
        flex-direction: column;
        
        height: 90vh;
        
        @media ${device.tablet} {
            font-size: 2.9rem;
            margin-bottom: 11%;
        }
        @media ${device.mobileL} {
            font-size: 2.4rem;
        }
        h1 {
            margin 4% 2% 2% 2%;
            color: #234099;
        }
        p {
            font-size: 2rem;
            line-height: 2.5rem;
            margin: 0 9% 11% 9%;
            @media ${device.mobileL} {
                font-size: 1.6rem;
                margin: 0 3% 11% 6%;
            }
        }
    }
    
`