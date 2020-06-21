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
    
    padding: 2%;
    color: #234099;
    display: flex;
    justify-content: center;
    align-items: center;
`