import React from 'react';
import styled from 'styled-components';
import { device } from './device';
import wunderlist1 from '../images/wunderlist1.jpg';
import wunderlist2 from '../images/wunderlist2.jpg';
import wunderlist3 from '../images/wunderlist3.jpg';
import wunderlist4 from '../images/wunderlist4.jpg';

export default function MiddleSection() {

    return (
        <Middle>
            <div className = 'wunderlist-1'>
                <img src = {wunderlist1} alt = 'list' />
                <p>Never forget another task again.</p>
            </div>
            <div className = 'wunderlist-2'>
                <p>Keep track of your busy schedule.</p>
                <img src = {wunderlist2} alt = 'list' />
            </div>
            <div className = 'wunderlist-3'>
                <img src = {wunderlist3} alt = 'list' />
                <p>Schedule reminders.</p>
            </div>
            <div className = 'wunderlist-4'>
                <p>Remember to not forget!</p>
                <img src = {wunderlist4} alt = 'list' />
            </div>
        </Middle>
    )
}

const Middle = styled.section `
    font-family: 'Balsamiq Sans', cursive;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .wunderlist-2, .wunderlist-4 {
        
        @media ${device.tablet} {
            display: flex;
            flex-direction: column-reverse;
        }
    }
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 77%;
        margin: 3%;
        @media ${device.tablet} {
            flex-direction: column;
            width: 90%;
            margin: 3% 3% 6% 3%;
        }
        img {
            width: 45%;
            
            box-shadow: 1rem 1rem 1rem #234099;
            @media ${device.tablet} {
                width: 99%;
                margin-bottom: 3%;
            }
        }
        p {
            font-size: 2rem;
            width: 45%;
            
            text-align: left;
            @media ${device.tablet} {
                width: 95%;
                font-size: 1.6rem;
                margin-top: 3%;
                text-align: center;
            }
        }
    }
    
`