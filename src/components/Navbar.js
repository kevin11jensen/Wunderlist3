import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    
.navbar {
    font-size: 3rem;
    background-color: dodgerblue;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    li {
        list-style: none;
        color: black;
        &:hover {
            color: white;
        }
    }
}
    
`
