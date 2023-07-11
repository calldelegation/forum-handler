import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

import handlePost from './helpers/post';
import handleTopic from './helpers/topic';

export default async (req: VercelRequest, res: VercelResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Invalid request method. Only POST is allowed' });
    }

    const eventType = req.headers['x-discourse-event-type'];
    const body = req.body;

    switch (eventType) {
        case 'post':
            return handlePost(req, res);
        case 'topic':
            return handleTopic(req, res);
        default:
            return res.status(400).send({ error: 'Invalid event type' });
    }
};
