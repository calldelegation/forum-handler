import { VercelRequest, VercelResponse } from '@vercel/node';
import { handleTopicEdited, parseDiscourseTopicToTicket } from "../ticket";

export const handleTopic = async (req: VercelRequest, res: VercelResponse) => {
    const event = req.headers['x-discourse-event'];
    const topic = parseDiscourseTopicToTicket(req.body.topic)

    switch (event) {
        // topic_edited doesnt need to be handled
        case 'topic_edited':
            return handleTopicEdited(topic, res)
        default:
            return res.status(400).send({ error: 'Invalid topic event' });
    }
    return res.status(200).send({ forum_id: "forum_id", notion_id: "ticket.id" });
};

