import { Client } from "@notionhq/client";
import createTicket from "./createTicket";
import getTicketByPost from "./getTicketByPost";

const databaseId = process.env.NOTION_DATABASE_ID

const notionClient = new Client({ auth: process.env.NOTION_KEY })

export { getTicketByPost, createTicket, notionClient, databaseId }