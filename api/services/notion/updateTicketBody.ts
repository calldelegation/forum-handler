import { notionClient } from "./";


export default async (notionId: string, newPostBody: string) => {
    const response: any = await notionClient.pages.update({
        page_id: notionId,
        properties: {
            post_body: {
                rich_text: [
                    {
                        text: {
                            content: newPostBody,
                        },
                    },
                ],
            }
        }
    });

    return response.last_edited_time ?? null;
};