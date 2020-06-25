import React from 'react';
import styled from 'styled-components';

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
    
    .footer {
        
        padding: 9% 2% 6% 2%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        p {
            
            margin: 3% 0 0 0;
        }
    }
    
`