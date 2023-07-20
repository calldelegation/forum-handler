import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

import { notionClient, databaseId } from "./";
import { NotionTicket, parseNotionToTicket } from "../../ticket";

export const getTicketByTopic = async (topic_id: string) => {
    try {
        const response = await notionClient.databases.query({
            database_id: databaseId ?? "NO_DATABASE_ID",
            text: {
                "property": "topic_id",
                "text": {
                    "equals": topic_id
                }
            }
        } as QueryDatabaseParameters);


        return response.results.length > 0 ? parseNotionToTicket(response.results[0] as NotionTicket) : null
    } catch (error) {
        return null
    }
};
