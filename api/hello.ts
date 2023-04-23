import type { VercelRequest, VercelResponse } from '@vercel/node'
import CharacterAI from 'node_characterai';
const characterAI = new CharacterAI();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  await characterAI.authenticateAsGuest();

  const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw" // Discord moderator

  const chat = await characterAI.createOrContinueChat(characterId);
  const response = await chat.sendAndAwaitResponse('Hello discord mod!', true)

  console.log(response);

  return res.json({
    message: `Hello ${name}!`,
    resp: response
  })
}
