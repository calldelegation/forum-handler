import { VercelRequest, VercelResponse } from '@vercel/node';
import { parseDiscourseRawToPost, handlePostCreated, handlePostEdited } from "../post";
import { syslog } from '../services';

export default (req: VercelRequest, res: VercelResponse) => {
  // try catch
  const event = req.headers['x-discourse-event'];
  const event_type = req.headers['x-discourse-event-type'];
  // parse post request

  const post = parseDiscourseRawToPost(req.body.post)
  syslog({ event, event_type, post: req.body.post })
  switch (event) {
    case 'post_created':
      return handlePostCreated(post, res);

    case 'post_edited':
      return handlePostEdited(post, res);

    default:
      return res.status(400).send({ error: 'Invalid post event' });
  }
};

/*
{
  "post": {
    "id": 14,
    "name": "san dus tee",
    "username": "sandusky",
    "avatar_template": "https://avatars.discourse-cdn.com/v4/letter/s/c68b51/{size}.png",
    "created_at": "2023-07-13T02:29:05.971Z",
    "cooked": "<p>this is a verbose body for test 2</p>",
    "post_number": 1,
    "post_type": 1,
    "updated_at": "2023-07-13T02:29:05.971Z",
    "reply_count": 0,
    "reply_to_post_number": null,
    "quote_count": 0,
    "incoming_link_count": 0,
    "reads": 0,
    "score": 0,
    "topic_id": 12,
    "topic_slug": "this-is-a-verbose-title-for-test-2",
    "topic_title": "This is a verbose title for test 2",
    "category_id": 4,
    "display_username": "san dus tee",
    "primary_group_name": null,
    "flair_name": null,
    "flair_group_id": null,
    "version": 1,
    "user_title": null,
    "bookmarked": false,
    "raw": "this is a verbose body for test 2",
    "moderator": false,
    "admin": true,
    "staff": true,
    "user_id": 2,
    "hidden": false,
    "trust_level": 1,
    "deleted_at": null,
    "user_deleted": false,
    "edit_reason": null,
    "wiki": false,
    "reviewable_id": null,
    "reviewable_score_count": 0,
    "reviewable_score_pending_count": 0,
    "topic_posts_count": 1,
    "topic_filtered_posts_count": 1,
    "topic_archetype": "regular",
    "category_slug": "general",
    "user_cakedate": "2023-07-12"
  }
}
*/