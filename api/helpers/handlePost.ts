import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseDiscoursePostToTicket, handleTicketBodyEdited, handleTicketCreated, Ticket, handleTicketStaffComment } from "../ticket";
import { handleNewReply } from '../ticket/handleNewReply';
import { syslog } from '../services';

export const handlePost = (req: VercelRequest, res: VercelResponse) => {
  const post = parseDiscoursePostToTicket(req.body.post)
  const event = req.headers['x-discourse-event'];

  syslog({ event, body: req.body.post })

  if (event === 'post_created') {

    if (post.post_id == 1) {
      return handleTicketCreated(post, res);
    }

    if (post.post_id > 1) {
      if (!!req.body.post.staff || !!req.body.post.admin || !!req.body.post.moderator) {
        return handleTicketStaffComment(post, res)
      }

      return handleNewReply(post, res);
    }
  }

  if (event === 'post_edited') {
    if (post.post_id == 1) {
      return handleTicketBodyEdited(post, res);
    }
  }

  return res.status(400).send({ error: 'Not a post reply, not a ticket body' });

};
