import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseDiscoursePostToTicket, handleTicketBodyEdited, handleTicketCreated, Ticket } from "../ticket";
import { handleNewReply } from '../ticket/handleNewReply';

export const handlePost = (req: VercelRequest, res: VercelResponse) => {
  const post = parseDiscoursePostToTicket(req.body.post)
  const event = req.headers['x-discourse-event'];


  if (event === 'post_created' && post.post_id == 1) {
    return handleTicketCreated(post, res);
    // if req.body.post.admin, .staff, .moderator => setAsTodo
  }

  if (event === 'post_edited') {

    if (post.post_id == 1) {
      return handleTicketBodyEdited(post, res);
    }

    if (post.post_id > 1) {
      return handleNewReply(post, res);

    }

  }

  return res.status(400).send({ error: 'Not a post reply, not a ticket body' });

};
