import { Client } from "@notionhq/client";

export * from "./createTicket";
export * from "./getTicketByTopic";
export * from "./updateTicketBody";
export * from "./updateTicketTopic";
export * from "./setTicketAsNewComment";
export * from "./setTicketAsClosed";
export * from "./setTicketAsReOpen";
export * from "./setTicketAsBacklog";

export * from "./createEventEntry";


export const databaseId = process.env.NOTION_DATABASE_ID ?? "MISSING_DB_KEY"
export const eventsDatabaseId = process.env.NOTION_EVENTS_DATABASE_ID ?? "MISSING_EVENTS_DB_KEY"

export const notionClient = new Client({ auth: process.env.NOTION_KEY })

