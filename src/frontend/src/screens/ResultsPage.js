import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';

import cohere from 'cohere-ai';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ResultsPage = () => {
    const [searchParams] = useSearchParams();
    const [keywords, setKeywords] = useState(searchParams.get("keywords"));
    const [job, setJob] = useState();
    const [resume, setResume] = useState(searchParams.get("resume"));

    const navigate = useNavigate();

    //const keyphrases = 'development, .NET, .NET Core, Microsoft SQL Server, Transact-SQL, software engineering, functional programming, object-oriented programming, solution architect, Microservices, Agile, code reviews, QA, business requirements, architecture';

    const cohere = require('cohere-ai');
    cohere.init(process.env.COHERE_API_KEY);

    async function generateCoverLetter(keywords, resume) {
        const promptTmp = "Write a cover letter for applying to a job based on the following keywords and resume:\n\nKEYWORDS: "+keywords+"\nRESUME: "+resume+"\n--";
        console.log("Keywords", keywords);
        console.log("Resume", resume);
        const options = await {
            method: 'POST',
            url: 'https://api.cohere.ai/generate',
            headers: {
              "accept": 'application/json',
              'Cohere-Version': '2022-12-06',
              'content-type': 'application/json',
              "authorization": 'Bearer L0V2AxxD2airpTVmSpgaGpWVz82oHd62QiwyA5uD'
            },
            data: {
              max_tokens: 500,
              temperature: 0.9,
              stop_sequences: ["--"],
              model:"command-xlarge-nightly",
              prompt: promptTmp,
            }
        };
          
        axios
        .request(options)
        .then(await function (response) {
            console.log(response.data.generations[0].text);
            return response.data.generations[0].text;
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <Container>
                <UnleashText>Here are the key skills and proficiencies we found from your job posting!</UnleashText>
            </Container>
            <Bontainer>
                <span class = "bolded"> Key Phrases: </span> {keywords}
            </Bontainer>
            <Buttons>
                <Button variant="primary" onClick={() => generateCoverLetter(keywords, resume)}>
                    Generate Cover Letter Template
                </Button>
                <Button variant="primary" onClick={() => navigate("/")}>
                    Start Over
                </Button>
            </Buttons>
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
    transition: 0.5s;
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

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-text: center;
    position: relative;
    bottom: -200px;
`;

const Button = styled.button`
  display: flex;
  color: #00BACF;
  font-size: 4em;
  margin: 1em;
  padding: 0.25em 4em;
  border: 2px solid #00BACF;
  border-radius: 10px;
  display: block;
  background-color: transparent;
  transition: 0.5s;
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
    top: 50px;

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