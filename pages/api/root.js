import openai from "@/Store/Openai";

export default async function handleChatbot(req, res) {
    const { content } = req.body;
  console.log("Content:", content); // Log the value of content)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant',
      },
      {
        role: 'user',
        content: 'hello'
      }
    ]
  });
  const response = completion.data.choices[0].message.content;
  console.log("Response:", response); // Log the generated response

  res.status(200).json(response);
}