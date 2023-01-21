const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;



const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3500;

const configuration = new Configuration({
  organization: "org-uLBLBkrOaXXFu3xeCUDsshu0",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines(); 

app.use(bodyParser.json());
app.use(cors());

app.post('/', async(req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "analyze this interview with this question and answer",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data)
    if(response.data.choices[0].text){
      res.json({
        message: response.data.choices[0].text
      });
    }
  
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})