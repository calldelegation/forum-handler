import { DiscoursePost, NotionPost, PostStauts, PostType } from "./Types";

export const parseDiscourseRawToPost = (rawPost: DiscoursePost): PostType => (
    {
        notion_id: "",
        discourse_id: rawPost.id.toString(),
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
        asignee: "",// TODO handle asignee
    }
)


// TODO parse notion post to postType

export const parseNotionRawtoPost = (rawPost: NotionPost): PostType => ({
    notion_id: rawPost.id,
    discourse_id: rawPost.properties.discourse_id.rich_text[0].text.content,
    created_timestamp: rawPost.properties.created_timestamp.number,
    created_at: rawPost.properties.created_at.rich_text[0].text.content,
    updated_at: rawPost.properties.updated_at.rich_text[0].text.content,
    topic_title: rawPost.properties.topic_title.rich_text[0].text.content,
    topic_id: rawPost.properties.topic_id.rich_text[0].text.content,
    post_id: rawPost.properties.post_id.rich_text[0].text.content,
    post_body: rawPost.properties.post_body.rich_text[0].text.content,
    category_id: rawPost.properties.category_id.rich_text[0].text.content,
    creator_username: rawPost.properties.creator_username.rich_text[0].text.content,
    status: PostStauts[rawPost.properties.status.status.name],
    asignee: "",
})