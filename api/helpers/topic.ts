import { VercelRequest, VercelResponse } from '@vercel/node';
import { notion } from '../services/notion';

export default async (req: VercelRequest, res: VercelResponse) => {

    return res.status(200).send({ forum_id: "forum_id", notionId: "ticket.id" });
};

