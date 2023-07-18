export enum PostStauts {
    backlog = "backlog",
    todo = "todo",
    inProgress = "inProgress",
    closed = "closed",
    reOpen = "reOpen"
}

export type PostType = {
    id: string, // notion

    created_timestamp: number,
    created_at: string,
    updated_at: string,

    topic_title: string,
    topic_id: string,

    post_id: string,
    post_body: string,

    category_id: string,
    creator_username: string,

    status: PostStauts,

    asignee: string,

}

export type PostStautsChange = {
    timestamp: number,
    prev_status: PostStauts,
    next_status: PostStauts
    ticket_id: string,

}

export type DiscoursePost = {
    id: number;
    name: string;
    username: string;
    avatar_template: string;
    created_at: string;
    cooked: string;
    post_number: number;
    post_type: number;
    updated_at: string;
    reply_count: number;
    reply_to_post_number: number | null;
    quote_count: number;
    incoming_link_count: number;
    reads: number;
    score: number;
    topic_id: number;
    topic_slug: string;
    topic_title: string;
    category_id: number;
    display_username: string;
    primary_group_name: string | null;
    flair_name: string | null;
    flair_group_id: number | null;
    version: number;
    user_title: string | null;
    bookmarked: boolean;
    raw: string;
    moderator: boolean;
    admin: boolean;
    staff: boolean;
    user_id: number;
    hidden: boolean;
    trust_level: number;
    deleted_at: string | null;
    user_deleted: boolean;
    edit_reason: string | null;
    wiki: boolean;
    reviewable_id: number | null;
    reviewable_score_count: number;
    reviewable_score_pending_count: number;
    topic_posts_count: number;
    topic_filtered_posts_count: number;
    topic_archetype: string;
    category_slug: string;
    user_cakedate: string;
}
