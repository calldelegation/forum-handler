import { VercelRequest, VercelResponse } from '@vercel/node';
import { notion } from '../services/notion';
import { PostType } from './Types';

export const handlePostCreated = async (post: PostType, res: VercelResponse) => {


    // parse post request

    let ticket: any = await notion.getTicketByPost(post.id)

    if (!ticket) {
        ticket = await notion.createTicket(post)
    }

    const forum_id = ticket.properties.forum_id.rich_text[0].plain_text
    // TODO: warp in a custom object?
    return res.status(200).send({ forum_id, notionId: ticket.id });
};

