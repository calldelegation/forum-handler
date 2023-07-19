import { VercelResponse } from '@vercel/node';
import { notion, syslog } from '../services';
import { PostType } from './Types';
import updateTicketBody from '../services/notion/updateTicketBody';

export const handlePostEdited = async (post: PostType, res: VercelResponse) => {
    try {

        let ticket = await notion.getTicketByPost(post.post_id)

        if (!ticket) {
            // TODO create err msg const
            return res.status(400).send({ error: "post_id not found" });
        }
        const { discourse_id, notion_id } = ticket

        if (ticket.post_body !== post.post_body) {
            let last_edited_time = await updateTicketBody(notion_id, post.post_body)

            if (last_edited_time) {
                return res.status(200).send({ discourse_id, notion_id, last_edited_time });
            }
            throw new Error("updateTicketBody error");
        }

        return res.status(200).send({ discourse_id, notion_id, message: "nothing to edit" });

    } catch (error) {
        // todo create errors common object
        syslog({ handlePostCreatedError: JSON.stringify(error) })
        return res.status(500).send({ error: "error editing post" })
    }


};

