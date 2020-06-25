import React from 'react';
import styled from 'styled-components';
import HeroImg from '../images/wunderlistHero.jpg';
import { device } from './device';

export default function Hero() {
    return (
        <HeroDiv>
            <div className = "hero-content" >
                <h1>WunderList 3</h1>
                <button>Download</button>
            </div>
        </HeroDiv>
    );
}

const HeroDiv = styled.div `
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-size: 7.5rem;
    color: #234099;
    font-family: 'Balsamiq Sans', cursive;
    @media ${device.tablet} {
        font-size: 4rem;
    }
    @media ${device.mobileL} {
        font-size: 3.2rem;
        top: 0;
        font-weight: 900;
    }
    .hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
    
        
        button {
            font-family: 'Balsamiq Sans', cursive;
            background: none;
            color: #234099;
            font-size: 3.2rem;
            text-decoration: none;
            border: 2px solid #234099;
            padding: 1% 3%;
            margin-top: 3%;
            font-weight: 900;
            transition-duration: 1s;
            @media ${device.tablet} {
                font-size: 2.5rem;
            }
            @media ${device.mobileL} {
                margin-bottom: 50%;
                margin-top: 6%;
                background-color: #234099;
                color: white;
            }
            &:hover {
                background-color: #234099;
                color: white;
            }
            
        }
    }
`