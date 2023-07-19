import { VercelRequest, VercelResponse } from '@vercel/node';
import { notion, syslog } from '../services';
import { PostType } from './Types';

export const handlePostCreated = async (post: PostType, res: VercelResponse) => {
    try {

        let ticket: any = await notion.getTicketByPost(post.post_id)
        syslog({ getTicketByPost: ticket })

        if (!ticket) {
            ticket = await notion.createTicket(post)
        }

        const { discourse_id, notion_id } = ticket
        // TODO: warp in a custom object?
        return res.status(200).send({ discourse_id, notion_id });

    } catch (error) {
        syslog({ handlePostCreatedError: JSON.stringify(error) })
        return res.status(500).send({ error: "error creating post" })
    }
};

