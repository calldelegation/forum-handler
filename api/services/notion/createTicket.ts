import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { PostType } from "../../post";
import { Client } from "@notionhq/client";

const notionClient = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

export const createTicket = async (post: PostType) => {
    const response = await notionClient.pages.create({
        parent: {
            type: "database_id",
            database_id: databaseId,
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: `New topic ${post.id}`,
                        },
                    },
                ],
            },
            forum_id: {
                rich_text: [
                    {
                        text: {
                            content: post.id,
                        },
                    },
                ],
            },
            id: {
                rich_text: [
                    {
                        text: {
                            content: post.id,
                        },
                    },
                ],
            },
            created_timestamp: {
                number: post.created_timestamp,
            },
            created_at: {
                rich_text: [
                    {
                        text: {
                            content: post.created_at,
                        },
                    },
                ],
            },
            updated_at: {
                rich_text: [
                    {
                        text: {
                            content: post.updated_at,
                        },
                    },
                ],
            },
            topic_title: {
                rich_text: [
                    {
                        text: {
                            content: post.topic_title,
                        },
                    },
                ],
            },
            topic_id: {
                rich_text: [
                    {
                        text: {
                            content: post.topic_id,
                        },
                    },
                ],
            },
            post_id: {
                rich_text: [
                    {
                        text: {
                            content: post.post_id,
                        },
                    },
                ],
            },
            post_body: {
                rich_text: [
                    {
                        text: {
                            content: post.post_body,
                        },
                    },
                ],
            },
            category_id: {
                rich_text: [
                    {
                        text: {
                            content: post.category_id,
                        },
                    },
                ],
            },
            creator_username: {
                rich_text: [
                    {
                        text: {
                            content: post.creator_username,
                        },
                    },
                ],
            },
            status: {
                rich_text: [
                    {
                        text: {
                            content: post.status,
                        },
                    },
                ],
            },
            asignee: {
                rich_text: [
                    {
                        text: {
                            content: post.asignee,
                        },
                    },
                ],
            },
        },
    } as CreatePageParameters);

    return response;
};
