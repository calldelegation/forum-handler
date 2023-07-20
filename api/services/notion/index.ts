import { Client } from "@notionhq/client";

export * from "./createTicket";
export * from "./getTicketByTopic";
export * from "./updateTicketBody";
export * from "./updateTicketTopic";

export const databaseId = process.env.NOTION_DATABASE_ID

export const notionClient = new Client({ auth: process.env.NOTION_KEY })

