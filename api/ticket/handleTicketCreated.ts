import { VercelResponse } from '@vercel/node';
import { notion, syslog } from '../services';
import { Ticket } from './Types';

export const handleTicketCreated = async (post: Ticket, res: VercelResponse) => {
    try {
        let ticket: any = await notion.getTicketByTopic(post.topic_id)

        if (!ticket) {
            ticket = await notion.createTicket(post)
        }
        const { discourse_id, notion_id, topic_id } = ticket
        return res.status(200).send({ discourse_id, notion_id, topic_id });

    } catch (error) {
        syslog({ handleTicketCreatedError: JSON.stringify(error) })
        return res.status(500).send({ error: "error creating post" })
    }
};

