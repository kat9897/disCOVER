import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import '../styles/App.css';
import axios from 'axios';

const ResumeAndURLPage = () => {
    const [job, setJob] = useState();
    const [resume, setResume] = useState();

    const navigate = useNavigate();

    const onInputJob = ({target:{value}}) => setJob(value);
    const onInputResume = ({target:{value}}) => setResume(value);

    const onFormSubmit = async (e) => {
        e.preventDefault()
        setJob(e.target[0].value);
        setResume(e.target[1].value);

        //console.log("Job: ", job);
        //console.log("Resume: ", resume);
        let keywords = await generateKeyWords(job);

        console.log("keywords: ", keywords);
        const coverLetter = await generateCoverLetter(keywords, resume);

        navigate("/result", {
            state: {
                keywords: keywords,
                coverLetter: coverLetter,
            }
        });
    };

    const cohere = require('cohere-ai');
    cohere.init(process.env.COHERE_API_KEY);

    async function generateCoverLetter(keywords, resume) {
        const promptTmp = "Write a cover letter for applying to a job based on the following keywords and resume:\n\nKEYWORDS: {keyword}\nRESUME: {resume}\n--";
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
    
    async function generateKeyWords(job) {
        const promptTmp = "POSTING: "+ job + "\nKEYPHRASES:";
        console.log("Prompt:",promptTmp);
        const options = await {
            method: 'POST',
            url: 'https://api.cohere.ai/generate',
            headers: {
              "accept": 'application/json',
              'Cohere-Version': '2022-12-06',
              'content-type': 'application/json',
              "authorization": 'Bearer L0V2AxxD2airpTVmSpgaGpWVz82oHd62QiwyA5uD '
            },
            data: {
              max_tokens: 50,
              temperature: 0.9,
              model:"0ea2ca4f-725f-478a-b6e6-b7d46735d13e-ft",
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
        <Container>
            {/* <h1>You can't do anything until you take a step forward!</h1> */}
            <UnleashText>Congratulations on taking your first step to success! 
            Please copy and paste the job description for the desired Job Posting 
             and your latest resume.</UnleashText>
            <Form className="form-wrapper" onSubmit={onFormSubmit}>
                <Form.Group className="form-elem" controlId="formJobURL">
                    <Form.Label>Job URL</Form.Label>
                    <Form.Control 
                        type="textarea" 
                        placeholder="Enter Job Posting Data"
                        onChange={onInputJob}
                    />
                    <Form.Text className="text-muted">
                    Please only enter copied job posting data in this field. Otherwise, results may vary.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="form-elem" controlId="formFile">
                    <Form.Label>Upload Resume</Form.Label>
                    <Form.Control 
                        type="textarea" 
                        placeholder="Enter Resume Data"
                        onChange={onInputResume}
                    />
                    <Form.Text className="text-muted">
                    Please only enter copied resume data in this field. Otherwise, results may vary.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-text: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
    width: 100%;
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
  margin-top: 800px;
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

export default ResumeAndURLPage;