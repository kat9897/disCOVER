import cohere from 'cohere-ai';

if (!process.env.COHERE_API_KEY) {
  throw new Error('COHERE_API_KEY is required');
}
cohere.init(process.env.COHERE_API_KEY);

const handler = async (req, res) => {
  const topic = req.query.topic;

  const generations = await cohere.generate({
    model: 'xlarge',
    prompt: `Here are 10 interesting questions to ask about ${topic}:`,
    max_tokens: 150,
    temperature: 1,
  });

  res.status(200).json({ generations });
};

export default handler;