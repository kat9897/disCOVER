import React from 'react'

import styled from "styled-components";
import Button from 'react-bootstrap/Button';

import Arrow from "../images/Arrow 1.png";
//import Discover from "../images/only-words.png";
import Discover from "../images/disCOVER.png";
import background from '../images/background2.gif';
import { NavLink } from "react-router-dom"; 

const LandingPage = () => {  

    return (
        <LandingContainer>
            <NavLink className="nav-link" to="/resume-and-url">
                <Words>
                    <UnleashText>We've got you covered.</UnleashText>
                    <DiscoverText>
                        <img src={Discover} alt="Discover" style={{height: "200px"}}/>
                    </DiscoverText>
                        <YourFutureText>Your Future</YourFutureText>
                    <ArrowSymbol />
                </Words>
                <BackgroundCircles>
                    <RightContainer>
                        <RightCircle5 />
                        <RightCircle4 />
                        <RightCircle3 />
                        <RightCircle2 />
                        <RightCircle1 />
                    </RightContainer>
                    <TopCircle>
                        <TopCircle1 />
                        <TopCircle2 />
                    </TopCircle>
                    <LeftCircle>
                        <LeftEllipse1 />
                        <LeftEllipse2 />
                    </LeftCircle>
                </BackgroundCircles>
             </NavLink>
        </LandingContainer>
    )
}

const DiscoverText = styled.div`
position: absolute;
width: 554.44px;
height: 96.26px;
left: 365.78px;
top: 90px;

background: url(only-words.png);
`;

const ArrowSymbol = styled.div`
box-sizing: border-box;

position: absolute;
width: 215.61px;
height: 0px;
left: 1478.5px;
top: 364.49px;

border: 15.4011px solid #00E4C6;
`;

const YourFutureText = styled.h1`
/* Your Future */


position: absolute;
width: 975.4px;
height: 205.35px;
left: 487.7px;
top: 261.82px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 169.412px;
line-height: 205px;
display: flex;
align-items: center;

color: #00E4C6;
`;

const UnleashText = styled.h3`
/* Unleash your inner explorer and */

    position: absolute;
    width: 1714.65px;
    height: 75px;
    left: 0px;
    top: 0px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 61.6043px;
    line-height: 75px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #0080FF;

`;

const Words = styled.div`
/* Words */


position: absolute;
width: 1714.65px;
height: 467.17px;
left: 56.47px;
top: 407.89px;
`;

const LeftEllipse2 = styled.div`
/* Ellipse 4 */


position: absolute;
width: 411px;
height: 411px;
left: 92px;
top: 92px;
border-radius: 50%;

background: #00BACF;
`;

const LeftEllipse1 = styled.div`
/* Ellipse 1 */


position: absolute;
width: 595px;
height: 595px;
left: 0px;
top: 0px;
border-radius: 50%;

background: #22074D;
`;

const LeftCircle = styled.div`
/* Left Circle */


position: absolute;
width: 595px;
height: 595px;
left: 53.94px;
top: 887.44px;

`;

const TopCircle2 = styled.div`
/* Ellipse 5 */


position: absolute;
width: 410.7px;
height: 410.7px;
left: 41.07px;
top: 41.07px;
border-radius: 50%;

background: #22074D;
`;

const TopCircle1 = styled.div`
position: absolute;
width: 497.97px;
height: 497.97px;
left: 0px;
top: 0px;
border-radius: 50%;

background: #003784;
`;

const TopCircle = styled.div`
/* Top Circle */


position: absolute;
width: 497.97px;
height: 497.97px;
left: 426.1px;
top: 0px;

`;

const BackgroundCircles = styled.div`
/* Background Circles */


position: absolute;
width: 2233.16px;
height: 1899.47px;
left: -200.21px;
top: -246.42px;

`;

const RightContainer = styled.div`
    position: absolute;
    width: 924.06px;
    height: 924.06px;
    left: calc(50% - 924.06px/2 + 813.39px);
    top: calc(50% - 924.06px/2 - 526.26px);

`;

const RightCircle1 = styled.div`
    position: absolute;
    width: 343.96px;
    height: 343.96px;
    left: 290px;
    top: 275px;
    border-radius: 50%;

    background: #00E4C6;
`;

const RightCircle2 = styled.div`
position: absolute;
width: 441.5px;
height: 441.5px;
left: 241.28px;
top: 225.88px;
border-radius: 50%;

background: #22074D;
`;

const RightCircle3 = styled.div`
position: absolute;
width: 600.64px;
height: 600.64px;
left: 164.28px;
top: 159.14px;
border-radius: 50%;

background: #003784;
`;

const RightCircle4 = styled.div`
position: absolute;
width: 739.25px;
height: 739.25px;
left: 107.81px;
top: 77.01px;
border-radius: 50%;

background: #22074D;
`;

const RightCircle5 = styled.div`
    position: absolute;
    width: 924.06px;
    height: 924.06px;
    left: 0px;
    top: 0px;
    border-radius: 50%;

    background: #00E4C6;
`;

const LandingContainer = styled.div`
/* Landing Page */


position: relative;
width: 1920px;
height: 1080px;
overflow: hidden;


`;

// const Button = styled.button`
//   display: flex;
//   color: #00BACF;
//   font-size: 2em;
//   margin: 2em;
//   padding: 0.25em 2em;
//   border: 2px solid #00BACF;
//   border-radius: 10px;
//   display: block;
//   background-color: transparent;
//   transition: 0.5s;
//   margin-bottom: 300px;
//   &:hover {
//     background-color: #003784;
//     border-color: transparent;
//     color: white;
//     transition: 0.5s;
//   }
// `;


export default LandingPage;