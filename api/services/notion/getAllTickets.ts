import { databaseId, notionClient } from "."

export const getAllTickets = async () => {
    try {
        let response = await notionClient.databases.query(
            {
                database_id: databaseId,
            }
        )
        return response.results as any
    } catch (error) {
        return {
            error: error
        }
    }
}