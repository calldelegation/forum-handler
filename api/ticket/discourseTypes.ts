
export type DiscourseTopic = {
    tags: any[];
    tags_descriptions: Record<string, any>;
    id: number;
    title: string;
    fancy_title: string;
    posts_count: number;
    created_at: string;
    views: number;
    reply_count: number;
    like_count: number;
    last_posted_at: string;
    visible: boolean;
    closed: boolean;
    archived: boolean;
    archetype: string;
    slug: string;
    category_id: number;
    word_count: number;
    deleted_at: string | null;
    user_id: number;
    featured_link: string | null;
    pinned_globally: boolean;
    pinned_at: string | null;
    pinned_until: string | null;
    unpinned: string | null;
    pinned: boolean;
    highest_post_number: number;
    deleted_by: string | null;
    has_deleted: boolean;
    bookmarked: boolean;
    participant_count: number;
    thumbnails: string | null;
    created_by: {
        id: number;
        username: string;
        name: string;
        avatar_template: string;
    };
    last_poster: {
        id: number;
        username: string;
        name: string;
        avatar_template: string;
    };
};


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