import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { Ticket, parseNotionToTicket } from "../../ticket";
import { notionClient, databaseId, owner_1, owner_2 } from "./";


export const createTicket = async (post: Ticket) => {
    let owner = post.topic_id % 2 === 0 ? owner_1 : owner_2
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
                number: post.discourse_id,

            },
            topic_id: {
                number: post.topic_id,

            },
            post_id: {
                number: post.post_id,

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
                number: post.category_id,

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
            asignee: {
                people: [{
                    id: "",
                    person: {
                        email: owner
                    }
                }]

            },
        },
    } as CreatePageParameters);

    return response.id
};
