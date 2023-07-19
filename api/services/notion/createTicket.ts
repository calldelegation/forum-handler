import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { PostType } from "../../post";
import { notionClient, databaseId } from "./";


export default async (post: PostType) => {
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
                            content: post.topic_title
                        }
                    }
                ]
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
            discourse_id: {
                rich_text: [
                    {
                        text: {
                            content: post.discourse_id,
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
                status: {
                    name: post.status
                },
            },
            // asignee: {
            //     people: [{
            //         id: "",
            //         person: {
            //             email: post.asignee
            //         }
            //     }]

            // },
        },
    } as CreatePageParameters);

    return response;
};