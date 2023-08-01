import { TicketEventName } from "../../ticket"
import { eventsDatabaseId, notionClient } from "./"

export const getAllEvents = async () => {
    try {
        let response = await notionClient.databases.query(
            {
                database_id: eventsDatabaseId
            }
        )
        return response.results as any
    } catch (error) {
        return {
            error: error
        }
    }
}