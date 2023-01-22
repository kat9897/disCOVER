const express = require("express");
const cohereRoutes = express.Router();
const cohere = require('cohere-ai');

cohere.init('L0V2AxxD2airpTVmSpgaGpWVz82oHd62QiwyA5uD');

cohereRoutes.route("/cohere").get(async () => {
    const response = await cohere.generate({
      model: 'xlarge',
      prompt: 'Find the key phrases in this job posting:\nposting: Do you enjoy storytelling with data? Are you passionate about Data Science and Machine Learning? This is a new role within the data team who is involved in BI strategy formulation, stakeholder engagement and data communication/data storytelling. The incumbent will be a hands-on analyst who is involved with end-to-end delivery of BI products. The successful candidate will liaison with the business to build strong knowledge of the business operations and help understand and capture business requirements. They will then champion these requirements and collaborate closely with technical teams to realize it into dashboards, reports, KPIs and alerts. To achieve this, the incumbent will facilitate and lead information gathering sessions, create formal documentation, and build presentation of insights with business. The successful candidate will need to be adept in creating stunning data visualizations and be comfortable with reading and modifying SQL queries. Finally, the individual will collaborate with department managers to create and maintain BI and data strategies, as well as to provide training to other teams. There is also an optional data science and machine learning component where the incumbent is sometimes provided opportunities to apply their statistical or ML expertise to different scenarios as business need arises.\nThis role is classified as hybrid where you would be primarily working remote, but may be asked to come into our head office in Markham as needed.\nphrases: data, Data Science, Machine Learning, BI strategy forumlation, stakeholder engagement, data communication, data storytelling, analyst, BI products, business operations, KPIs, formal documentation, data visualizations, SQL queries, training, collaborate, ML expertise\n--\nFind the key phrases in this job posting:\nposting: Our client is looking for an Intermediate Business Systems Analyst to support data integration activities as part of the Pooling program. This is a 6 months contract to start with the chance of extension after.\nThis program was formed to create investment vehicles that facilitate centralized investment of private and alternative assets (Infrastructure, Credit, Private Equity, etc). The Data Management team is seeking such an individual to integrate core investment data from external systems into the Enterprise Data Management platform.\nphrases: Intermediate, Business Systems Analyst, data integration, pooling, investment vehicles, centralized investment, private and alternative assets, Infrastructure, Credit, Private Equity, Data Management, core investment data, Enterprise Data Management Platform.\n--\nFind the key phrases in this job posting:\nposting: As a Data Scientist at IBM, you will help transform our clients’ data into tangible business value by analyzing information, communicating outcomes and collaborating on product development. Work with Best in Class open source and visual tools, along with the most flexible and scalable deployment options. Whether it’s investigating patient trends or weather patterns, you will work to solve real world problems for the industries transforming how we live.\nphrases:',
      max_tokens: 200,
      temperature: 0.6,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["--"],
      return_likelihoods: 'NONE'
    });
    console.log(`Prediction: ${response.body.generations[0].text}`);
    alert(console.log(`Prediction: ${response.body.generations[0].text}`));
  });

module.exports = cohereRoutes;