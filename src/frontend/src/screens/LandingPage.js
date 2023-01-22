import React, { useEffect } from 'react'

import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Discover from "../images/disCOVER-colour.png";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom"; 

const LandingPage = () => {
    // const cohere = require('cohere-ai');
    // cohere.init('{apiKeyL0V2AxxD2airpTVmSpgaGpWVz82oHd62QiwyA5uD}');

    // useEffect(() => {
    // coverthere = async () => {
    //     const response = await cohere.generate({
    //         model: 'xlarge',
    //         prompt: 'Find the key phrases in this job posting:\nposting: Do you enjoy storytelling with data? Are you passionate about Data Science and Machine Learning? This is a new role within the data team who is involved in BI strategy formulation, stakeholder engagement and data communication/data storytelling. The incumbent will be a hands-on analyst who is involved with end-to-end delivery of BI products. The successful candidate will liaison with the business to build strong knowledge of the business operations and help understand and capture business requirements. They will then champion these requirements and collaborate closely with technical teams to realize it into dashboards, reports, KPIs and alerts. To achieve this, the incumbent will facilitate and lead information gathering sessions, create formal documentation, and build presentation of insights with business. The successful candidate will need to be adept in creating stunning data visualizations and be comfortable with reading and modifying SQL queries. Finally, the individual will collaborate with department managers to create and maintain BI and data strategies, as well as to provide training to other teams. There is also an optional data science and machine learning component where the incumbent is sometimes provided opportunities to apply their statistical or ML expertise to different scenarios as business need arises.\nThis role is classified as hybrid where you would be primarily working remote, but may be asked to come into our head office in Markham as needed.\nphrases: data, Data Science, Machine Learning, BI strategy forumlation, stakeholder engagement, data communication, data storytelling, analyst, BI products, business operations, KPIs, formal documentation, data visualizations, SQL queries, training, collaborate, ML expertise\n--\nFind the key phrases in this job posting:\nposting: Our client is looking for an Intermediate Business Systems Analyst to support data integration activities as part of the Pooling program. This is a 6 months contract to start with the chance of extension after.\nThis program was formed to create investment vehicles that facilitate centralized investment of private and alternative assets (Infrastructure, Credit, Private Equity, etc). The Data Management team is seeking such an individual to integrate core investment data from external systems into the Enterprise Data Management platform.\nphrases: Intermediate, Business Systems Analyst, data integration, pooling, investment vehicles, centralized investment, private and alternative assets, Infrastructure, Credit, Private Equity, Data Management, core investment data, Enterprise Data Management Platform.\n--\nFind the key phrases in this job posting:\nposting: As a Data Scientist at IBM, you will help transform our clients’ data into tangible business value by analyzing information, communicating outcomes and collaborating on product development. Work with Best in Class open source and visual tools, along with the most flexible and scalable deployment options. Whether it’s investigating patient trends or weather patterns, you will work to solve real world problems for the industries transforming how we live.\nphrases:',
    //         max_tokens: 200,
    //         temperature: 0.6,
    //         k: 0,
    //         p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //         stop_sequences: ["--"],
    //         return_likelihoods: 'NONE'
    //     });
    //     console.log(`Prediction: ${response.body.generations[0].text}`);
    //     alert(console.log(`Prediction: ${response.body.generations[0].text}`));
    // }});

    return (
        <LandingContainer>
            <NavLink className="nav-link" to="/resume-and-url">
                <img className="landing-logo" src={logo} alt="Logo"/>
                <Words>
                    <UnleashText>We've got you covered.</UnleashText>
                    <DiscoverText>
                        <img src={Discover} alt="Discover" style={{height: "280px"}}/>
                    </DiscoverText>
                        <YourFutureText>Your Future</YourFutureText>
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

const YourFutureText = styled.h1`
/* Your Future */


position: absolute;
width: 975.4px;
height: 205.35px;
left: 740px;
top: 280px;

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
width: 100%; //1920px
height: 100%; //1080px
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