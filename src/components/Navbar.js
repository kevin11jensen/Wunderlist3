import React from 'react';

import styled from 'styled-components';

export default function Navbar() {
    return (
        <Nav>
            <div className = "navbar" >
                <h1>hello from Navbar</h1>
            </div>
        </Nav>
    );
}
const Nav = styled.nav `
    font-size: 7rem;
`
