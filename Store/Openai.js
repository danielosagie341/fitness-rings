const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export default openai;