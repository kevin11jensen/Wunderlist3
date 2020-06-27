import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './device';

export default function Navbar() {
    return (
        <Nav>
            <div className = "navbar" >
                <Link to = '/'  style={{ textDecoration: 'none' }}>
                    <li>WunderList 3</li>
                </Link>
                <div className = 'nav-links'>
                    <Link to = '/about'  style={{ textDecoration: 'none' }}>
                        <li>About</li>
                    </Link>
                </div>
            </div>
        </Nav>
    );
}
const Nav = styled.nav `
    font-family: 'Balsamiq Sans', cursive;
    .navbar {
        font-size: 3rem;
        background-color: #234099;
        padding: 3% 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media ${device.tablet} {
            font-size: 1.6rem;
        }
        li {
            list-style: none;
            color: white;
            transition-duration: .5s;
            &:hover {
                color: black;
            }
        }
    }
    
`
