import { Client } from "@notionhq/client";

export * from "./createTicket";
export * from "./getTicketByTopic";
export * from "./updateTicketBody";
export * from "./updateTicketTopic";
export * from "./setTicketAsNewComment";
export * from "./setTicketAsClosed";
export * from "./setTicketAsReOpen";

export const databaseId = process.env.NOTION_DATABASE_ID

export const notionClient = new Client({ auth: process.env.NOTION_KEY })

