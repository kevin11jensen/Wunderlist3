import React from 'react';
import styled from 'styled-components';
import { device } from './device';

export default function Footer() {

    return (
        <FootNote>
            <div className = 'footer'>
                <p>&copy; WunderList Team 2020</p>
            </div>
        </FootNote>
    )
}

const FootNote = styled.footer `
    font-size: 1.2rem;
    font-family: 'Balsamiq Sans', cursive;
    color: #234099;
    margin-top: 6%;
    .footer {
        
        display: flex;
        justify-content: center;
        align-items: flex-end;

        p {
            @media ${device.tablet} {
                margin-top: 11%;
                padding: 6%;
            }
            
        }
    }
    
`