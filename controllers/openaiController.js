const openAI = require("openai");
const { Configuration, OpenAIApi } = openAI;

const configuration = new Configuration({
  organization: "org-lzNaw2VLO9d4bnIdcb6iaXyL",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const postApiResponse = async (req, res) => {
  const { answer, interviewQuestion } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Act as a hiring manager for a software team at a tech firm, providing feedback for a behavioural interview question and response from an intern candidate.  
    
    Here is the interview question: ${interviewQuestion}
    
    Here is the response: ${answer}
    
    
`,
    max_tokens: 3000,
    temperature: 0.7,
  });

  console.log(response.data);
  if (response.data.choices) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
};

module.exports = {
  postApiResponse,
};
