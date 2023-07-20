import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseDiscoursePostToTicket, handleTicketBodyEdited, handleTicketCreated } from "../ticket";

export const handlePost = (req: VercelRequest, res: VercelResponse) => {
  const post = parseDiscoursePostToTicket(req.body.post)

  // check that the post is the first of the topic
  if (post.post_id == "1") { // TODO post id to be number
    // else new comment
    const event = req.headers['x-discourse-event'];

    switch (event) {
      case 'post_created':
        return handleTicketCreated(post, res);

      case 'post_edited':
        return handleTicketBodyEdited(post, res);

      default:
        return res.status(400).send({ error: 'Invalid post event' });
    }
  }
  return res.status(400).send({ error: 'The post is a reply' });
};
