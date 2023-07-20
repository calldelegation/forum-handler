import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

import { notionClient, databaseId } from "./";
import { NotionTicket, parseNotionToTicket } from "../../ticket";
import { syslog } from "../syslog";

export const getTicketByTopic = async (topic_id: string) => {
    try {
        const response = await notionClient.databases.query({
            database_id: databaseId ?? "NO_DATABASE_ID",
            filter: {
                "property": "topic_id",
                rich_text: {
                    equals: topic_id
                }
            }
        } as QueryDatabaseParameters);


        syslog({ topic_id, response })

        return response.results.length > 0 ? parseNotionToTicket(response.results[0] as NotionTicket) : null
    } catch (error) {
        return null
    }
};
