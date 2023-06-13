const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export default openai;