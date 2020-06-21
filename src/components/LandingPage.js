import React from 'react';
import styled from 'styled-components';
import HeroImg from '../images/wunderlistHero.jpg';
import { device } from './device';

export default function LandingPage() {
    return (
        <Landing>
            <div className = "landing-page" >
                <h1>WunderList 3</h1>
                <button>Download</button>
            </div>
        </Landing>
    );
}
const Landing = styled.div `
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-size: 7rem;
    color: #234099;
    font-family: 'Balsamiq Sans', cursive;
    @media ${device.tablet} {
        font-size: 4rem;
    }
    @media ${device.mobileL} {
        font-size: 3rem;
        top: 0;
    }
    .landing-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    
        
        button {
            font-family: 'Balsamiq Sans', cursive;
            background: none;
            color: #234099;
            font-size: 3rem;
            text-decoration: none;
            border: 2px solid #234099;
            padding: 1% 3%;
            margin-top: 3%;
            font-weight: 600;
            transition-duration: 1s;
            @media ${device.tablet} {
                font-size: 2rem;
            }
            @media ${device.mobileL} {
                margin-bottom: 50%;
            }
            &:hover {
                background-color: #234099;
                color: white;
            }
        }
    }
`