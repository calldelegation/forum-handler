import { VercelResponse } from '@vercel/node';
import { notion } from '../services/notion';
import { PostType } from './PostType';

export const handlePostEdited = async (post: PostType, res: VercelResponse) => {

    let ticket: any = await notion.getTicketByPost(post.id)

    // if (!ticket) {
    //     ticket = await notion.createTicket(post.id)
    // }

    const forum_id = ticket.properties.forum_id.rich_text[0].plain_text

    return res.status(200).send({ forum_id, notionId: ticket.id });
};

