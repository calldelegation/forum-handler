import { VercelRequest, VercelResponse } from '@vercel/node';

import handlePost from "./helpers/post";
import { syslog } from './services';

export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).send({ error: 'Invalid request method. Only POST is allowed' });
        }

        const eventType = req.headers['x-discourse-event-type'];
        const event = req.headers['x-discourse-event'];

        syslog({ event, eventType })

        switch (eventType) {
            case 'post':
                return handlePost(req, res);
            default:
                return res.status(400).send({ error: 'Invalid event type' });
        }

    } catch (error) {
        console.log('Internal server error:', error ?? 'NO ERROR');
        return res.status(500).send({ error: 'server error' })
    }
};

/*
 'x-forwarded-proto': 'https,http',
  'x-forwarded-for': '2602:fd3f:2:202:0:242:ac11:c,::ffff:127.0.0.1',
  'x-discourse-instance': 'https://forum-notion-integration.discourse.group',
  'x-discourse-event-type': 'post',
  'x-discourse-event-id': '9',
  'x-discourse-event': 'post_created',
*/