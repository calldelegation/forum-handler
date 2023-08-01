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

export * from "./getAllTickets";
export * from "./getAllEvents";

export * from "./createDataSnapshot";

export * from "./types"


export const databaseId = process.env.NOTION_DATABASE_ID ?? "MISSING_DB_KEY"
export const eventsDatabaseId = process.env.NOTION_EVENTS_DATABASE_ID ?? "MISSING_EVENTS_DB_KEY"
export const snapshotsDatabaseId = process.env.NOTION_DATA_SNAPSHOTS_DATBASE_ID ?? "MISSING_EVENTS_DB_KEY"


export const owner_1 = process.env.MAIL_1 ?? "MISSING_MAIL_1"
export const owner_2 = process.env.MAIL_2 ?? "MISSING_MAIL_2"

export const notionClient = new Client({ auth: process.env.NOTION_KEY })

