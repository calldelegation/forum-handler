import { DiscoursePost, PostStauts, PostType } from "./Types";

export const parseDiscourseRawToPost = (rawPost: DiscoursePost): PostType => {
    return {
        id: rawPost.id.toString(),
        created_timestamp: Date.parse(rawPost.created_at),
        created_at: rawPost.created_at,
        updated_at: rawPost.updated_at,
        topic_title: rawPost.topic_title,
        topic_id: rawPost.topic_id.toString(),
        post_id: rawPost.post_number.toString(),
        post_body: rawPost.raw,
        category_id: rawPost.category_id.toString(),
        creator_username: rawPost.username,
        status: PostStauts.todo,
        asignee: "",
    };
}