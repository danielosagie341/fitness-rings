import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey,
});

const openai = new OpenAIApi(configuration);

export default openai;
