import React from "react";
import styled from "styled-components";

export default function CoverLetter (props) {
    return (
    <>
        <CoverContainer>
            <Letter>{props.letter}</Letter>
            {/* <Container>
                <h3>{props.letter}</Letter>
            </Container> */}
        </CoverContainer>
    </>
    );
};

const Letter = styled.h3`
    text-align: center;
    margin: auto;
    color: black;
`;

const CoverContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    margin: 20px;
    background-color: white;
    border-radius: 70px;
    height: 70vh;
    color: black;   
    
`;

const Container = styled.div`
    
    width: 40vw;

`;