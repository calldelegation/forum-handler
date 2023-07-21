import { VercelRequest, VercelResponse } from '@vercel/node';

import { handlePost, handleTopic } from "./helpers";
import { syslog } from './services';

export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).send({ error: 'Invalid request method. Only POST is allowed' });
        }

        const eventType = req.headers['x-discourse-event-type'];
        const event = req.headers['x-discourse-event'];

        syslog({ event, eventType, body: req.body })

        switch (eventType) {
            case 'topic':
                return handleTopic(req, res);
            case 'post':
                return handlePost(req, res);
            default:
                return res.status(400).send({ error: 'Invalid event type' });
        }

    } catch (error) {

        syslog({
            req,
            error,
            message: 'Internal server error'
        });
        return res.status(500).send({ error: 'Internal server error' })
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