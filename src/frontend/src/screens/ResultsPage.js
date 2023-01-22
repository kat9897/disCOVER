import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';

const ResultsPage = () => {
    const [jobURL, setJobURL] = useState();
    const [resume, setResume] = useState();

    const keyphrases = 'development, .NET, .NET Core, Microsoft SQL Server, Transact-SQL, software engineering, functional programming, object-oriented programming, solution architect, Microservices, Agile, code reviews, QA, business requirements, architecture';

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

const UnleashText = styled.h2`
/* Unleash your inner explorer and */

    position: relative;
    left: 0px;
    top: 0px;

    background-image: linear-gradient(45deg,#3dffef,#d51e85);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 50px;
    font-family: 'Georgia';
    font-style: normal;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #78e5f0;

`;

export default ResultsPage;