import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';
import Hero from './Hero';
import MiddleSection from './MiddleSection';
import Footer from './Footer';


export default function LandingPage() {
    return (
        
        <Landing>
            <NavBar />
            <Hero />
            <MiddleSection />
            <Footer />
        </Landing>
    );
}

const Landing = styled.div `

`
