import { TicketStatus } from "../../ticket";
import { notionClient } from "./";

export const setTicketAsBacklog = async (notionId: string) => {
    const response: any = await notionClient.pages.update({
        page_id: notionId,
        properties: {
            status: {
                status: {
                    name: TicketStatus.backlog
                },
            }
        }
    });

    return response.last_edited_time ?? null;
};