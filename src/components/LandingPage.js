import React from 'react';
import styled from 'styled-components';


export default function LandingPage() {
    return (
        <Landing>
            <div className = "landing-page" >
                <h1>hello from LandingPage</h1>
            </div>
        </Landing>
    );
}
const Landing = styled.div `
    font-size: 7rem;
`