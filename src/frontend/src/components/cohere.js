import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Cohere = () => {
    const cohere = require('cohere-ai');
    cohere.init(process.env.COHERE_API_KEY);
    // const generate = async () => {
    //     const response = await cohere.generate({
    //         model: 'xlarge',
    //         prompt: 'peepeepoopoo',
    //         max_tokens: 50,
    //         temperature: 0.9,
    //         k: 0,
    //         p: 0.75,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //         stop_sequences: [],
    //         return_likelihoods: 'NONE'
    //     });
    //     console.log(`Prediction: ${response.body.generations[0].text}`);
    // };

    

    async function generate() {

        const options = {
            method: 'POST',
            url: 'https://api.cohere.ai/generate',
            headers: {
              "accept": 'application/json',
              'Cohere-Version': '2022-12-06',
              'content-type': 'application/json',
              "authorization": 'Bearer WXqkQKSysQYbfAp2CwDAaJmISQC21OQyaE07Nh14'
            },
            data: {
              max_tokens: 20,
              return_likelihoods: 'NONE',
              truncate: 'END',
              prompt: 'Once upon a time in a magical land called'
            }
          };
          
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });

        // console.log("pressed");
        // const rawResponse = await fetch(`/cohere`)
        // .then(res => res.json())
        // .then(res1 => setRes(res1));

        // const rawResponse = await fetch(`http://localhost:3000/cohere/`, 
        // {
        //     method: 'POST',
        //     url: 'https://api.cohere.ai/generate',
        //     headers: {
        //         "Accept": 'application/json',
        //         'Cohere-Version': '2022-12-06',
        //         'Content-Type': 'application/json',
        //         "Authorization": 'Bearer WXqkQKSysQYbfAp2CwDAaJmISQC21OQyaE07Nh14'
        //     },
        //     body: JSON.stringify({
        //         max_tokens: 20,
        //         return_likelihoods: 'NONE',
        //         truncate: 'END',
        //         prompt: 'Once upon a time in a magical land called'
        //     })
        // });

        // const response = rawResponse;   
        
        // if (!response.ok) {
        //     const message = `An error occurred: ${response.statusText}`;
        //     window.alert(message);
        //     return;
        // } 
        // console.log(response);

        // setRes(response);
        // console.log("Response: ", response);

        //, 
        // {
        //     method: 'POST',
        //     //url: 'https://api.cohere.ai/generate',
        //     headers: {
        //         accept: 'application/json',
        //         'Cohere-Version': '2022-12-06',
        //         'Content-Type': 'application/json',
        //         authorization: 'Bearer WXqkQKSysQYbfAp2CwDAaJmISQC21OQyaE07Nh14'
        //     },
        //     body: JSON.stringify({
        //         max_tokens: 20,
        //         return_likelihoods: 'NONE',
        //         truncate: 'END',
        //         prompt: 'Once upon a time in a magical land called'
        //     })
        // });
        //   .then((res) => {
        //     setRes(res);
        //     console.log("res is now: ", res);
        // })
        //   .catch(error => {
        //     window.alert(error);
        //     return;
        //   });

    }
    return (<div>
        <button onClick={generate}>Press here</button>
    </div>)
}

export default Cohere;