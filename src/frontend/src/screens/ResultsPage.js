import React, { useState } from 'react'
import { useLocation } from 'react-router';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';


const ResultsPage = () => {
    const { state } = useLocation();
    const [jobURL, setJobURL] = useState();
    const [resume, setResume] = useState();

    const keyphrases = 'development, .NET, .NET Core, Microsoft SQL Server, Transact-SQL, software engineering, functional programming, object-oriented programming, solution architect, Microservices, Agile, code reviews, QA, business requirements, architecture'

    const onInputJobURL = ({target:{value}}) => setJobURL(value);
    const onFormSubmit = e => {
        e.preventDefault()
        if (!e.target.files[0]) {
            return;
        }
        console.log(jobURL)
        setJobURL()
        setResume(e.target.files[0])
    };

    return (
        <div>
            <Container>
                {/* <h1>You can't do anything until you take a step forward!</h1> */}
                <UnleashText>Here are the key skills and proficiencies we found from your job posting!</UnleashText>
            </Container>
            <Bontainer>
                <span class = "bolded"> Key Phrases: </span> {keyphrases}
            </Bontainer>
            <Button variant="primary" type="submit">
                Generate a Cover Letter Guideline
            </Button>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    align-text: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Bontainer = styled.div`
    display: flex;
    align-text: center;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 100%;
`;

const Aontainer = styled.div`
    display: flex;
    align-text: center;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 100%;
    font-style: italic;
`;

const Button = styled.button`
  display: flex;
  color: #00BACF;
  font-size: 2em;
  margin: 2em;
  padding: 0.25em 2em;
  border: 2px solid #00BACF;
  border-radius: 10px;
  display: block;
  background-color: transparent;
  transition: 0.5s;
  margin-bottom: 300px;
  &:hover {
    background-color: #003784;
    border-color: transparent;
    color: white;
    transition: 0.5s;
  }
`;

const UnleashText = styled.h3`
/* Unleash your inner explorer and */

    position: relative;
    width: 1714.65px;
    height: 75px;
    left: 105px;
    top: 0px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 75px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #0080FF;

`;

export default ResultsPage;