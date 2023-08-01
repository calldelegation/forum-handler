import { VercelRequest, VercelResponse } from "@vercel/node";

import { Ticket, TicketEvent, parseNotionTicketEventToTicketEvent, parseNotionToTicket } from "../ticket";
import { getAverages, getTotalCounter, getEventsById } from "./helpers";
import { notion, syslog } from "../services";


export const handleDashboard = async () => {
    try {

        const tickets: Ticket[] = (await notion.getAllTickets()).map(
            (e: notion.NotionTicket) => parseNotionToTicket(e)
        )


        const counters = getTotalCounter(tickets)

        const events: TicketEvent[] = (await notion.getAllEvents()).map(
            (e: notion.NotionTicketEvent) => parseNotionTicketEventToTicketEvent(e)
        )


        const averages = getAverages(getEventsById(events))


        // todo type this
        await notion.createDataSnapshot(
            averages.closeTimeAvg, averages.firstReplyAvg,
            counters.total, counters.opened, counters.closed, counters.reOpen
        )

        return {
            counters,
            averages
        }

    } catch (error) {
        syslog(error)
    }
}