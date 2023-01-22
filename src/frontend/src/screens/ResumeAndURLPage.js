import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import '../styles/App.css';
import cohere from 'cohere-ai';

const ResumeAndURLPage = () => {
    const [jobURL, setJobURL] = useState();
    const [resume, setResume] = useState();

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
    cohere.init(process.env.COHERE_API_KEY);
    (async () => {
        const response = await cohere.generate({model: 'invalid-model'});
      
        if (response.statusCode !== 200) {
            console.log(response.body.message);
        }
        console.log(response.body);
      })();

    return (
        <Container>
            {/* <h1>You can't do anything until you take a step forward!</h1> */}

            <UnleashText>Congratulations on taking your first step to success! Please upload the Job Posting URL you are looking at and your updated resume.</UnleashText>
            <Form onSubmit={onFormSubmit}>

                <Form.Group className="mb-3" controlId="formJobURL">
                    <Form.Label>Job URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Job URL"
                        onChange={onInputJobURL}
                    />
                    <Form.Text className="text-muted">
                    Please only enter one job URL in this field.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Resume</Form.Label>
                    <Form.Control type="file" accept='.pdf, .doc, .docx'/>
                    <Form.Text className="text-muted">
                    Please only upload either .pdf or .doc files.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={onFormSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-text: center;
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

export default ResumeAndURLPage;