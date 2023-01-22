import React from "react";
import styled from "styled-components";

export default function CoverLetter (props) {
    return (
    <>
        <Title>Cover Letter</Title>
        <CoverContainer>
            <Letter>{props.letter}</Letter>
            {/* <Container>
                <h3>{props.letter}</Letter>
            </Container> */}
        </CoverContainer>
    </>
    );
};

const Title = styled.h1`
    font-family: sans-serif;
    font-size: 55px;
    color: white;
    margin-top: 30px;
`;

const Letter = styled.h3`
    text-align: center;
    margin: auto;
    color: black;
    padding: 20px;
    font-size: 25px;
`;

const CoverContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: 70px;
    height: 70vh;
    color: black;   
    width: 80vw;
    
`;

const Container = styled.div`
    

`;