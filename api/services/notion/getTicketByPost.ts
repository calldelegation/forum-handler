import { CreatePageParameters, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

import { notionClient, databaseId } from "./";
import { parseNotionRawtoPost } from "../../post";
import { NotionPost } from "../../post/Types";


export default async (post_id: string) => {
    try {
        const response = await notionClient.databases.query({
            database_id: databaseId ?? "NO_DATABASE_ID",
            text: {
                "property": "post_id",
                "text": {
                    "equals": post_id
                }
            }
        } as QueryDatabaseParameters);


        return response.results.length > 0 ? parseNotionRawtoPost(response.results[0] as NotionPost) : null
    } catch (error) {
        return null
    }
};
