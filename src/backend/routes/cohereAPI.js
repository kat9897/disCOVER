const express = require("express");
const cohereRoutes = express.Router();
const cohere = require('cohere-ai');

// pages/api/cohereAPI.js

if (!process.env.COHERE_API_KEY) {
  throw new Error('COHERE_API_KEY is required');
}
cohere.init(process.env.COHERE_API_KEY);

cohereRoutes.route("/cohere").post((req, res) => {
  console.log("get request");
  console.log('request body: ', req);
  let generatedRes = cohere.generate({
    model: 'xlarge',
    prompt: `Here are 10 interesting questions to ask about sheep:`,
    max_tokens: 150,
    temperature: 1,
  });

  console.log(" generated: ", generatedRes);
  //console.log(res);
  res.send("API POST is working well for cohere"); 
});

cohereRoutes.route("/cohere").get((req, res) => {
  console.log("get request");
  console.log('request body: ', req);
  let generatedRes = cohere.generate({
    model: 'xlarge',
    prompt: `Here are 10 interesting questions to ask about sheep:`,
    max_tokens: 150,
    temperature: 1,
  });

  console.log(" generated: ", generatedRes);
  //console.log(res);
  res.send("API GET is working well for cohere"); 
});

module.exports = cohereRoutes;

// cohereRoutes.route("/cohere").post((req, res) => {

//   console.log("BOO the post request");
//   console.log('request body: ', req);
  
//   const generatedRes = cohereAPI.generate({
//     model: 'xlarge',
//     prompt: `Here are 10 interesting questions to ask about ${topic}:`,
//     max_tokens: 150,
//     temperature: 1,
//   });

//   console.log(" generated: ", generatedRes);
// });

// cohereRoutes.route("./api/generateCohere").get(function (req, res) {
//   console.log(req.body);
// })

// import axios from 'axios';

// const options = {
//   method: 'POST',
//   url: 'https://api.cohere.ai/generate',
//   headers: {
//     accept: 'application/json',
//     'Cohere-Version': '2022-12-06',
//     'content-type': 'application/json'
//   },
//   data: {
//     max_tokens: 20,
//     return_likelihoods: 'NONE',
//     truncate: 'END',
//     prompt: 'Once upon a time in a magical land called'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });