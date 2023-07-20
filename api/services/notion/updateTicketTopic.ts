import { notionClient } from "./";


export const updateTicketTopic = async (notionId: string, newTopicTitle: string) => {
    const response: any = await notionClient.pages.update({
        page_id: notionId,
        properties: {
            topic_title: {
                rich_text: [
                    {
                        text: {
                            content: newTopicTitle,
                        },
                    },
                ],
            }
        }
    });

    return response.last_edited_time ?? null;
};