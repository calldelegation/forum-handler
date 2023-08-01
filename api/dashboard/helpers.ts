import { Ticket, TicketEvent, TicketEventName } from "../ticket";

export const getTotalCounter = (data: Ticket[]) => {
    let dashboard = {
        total: data.length,
        closed: 0,
        opened: 0,
        reOpen: 0
    }

    data.forEach((e: Ticket) => {
        dashboard[e.status] = dashboard[e.status] ? dashboard[e.status] + 1 : 1

    })

    return dashboard
}

export const getAverages = (data: { [name: number]: TicketEvent[] }) => {
    const results = {}
    let closedSum = 0
    let firstReplySum = 0
    const total = Object.keys(data).length

    for (const topic_id in data) {
        const events = data[topic_id]
        events.forEach(e => {
            let res = results[topic_id]
            if (!res) {
                res = {}
            }

            switch (e.event) {
                case TicketEventName.ticketCreated:
                    res.open = e.timestamp
                    break;

                case TicketEventName.ticketClosed:
                    res.closed = e.timestamp
                    break;

                case TicketEventName.staffFirstReply:
                    res.firstReply = e.timestamp
                    break;
            }

            if (res.open && res.closed && res.closed) {
                res.closedTime = res.closed - res.open
                closedSum += res.closedTime
            }


            if (res.open && res.closed && res.firstReply) {
                res.firstReply = res.firstReply - res.open
                firstReplySum += res.firstReply
            }


            results[topic_id] = res
        })
    }
    // TODO: storing firstReplySum and closedSum makes unnecesary to iterate every time
    return {
        firstReplyAvg: firstReplySum / total,
        closeTimeAvg: closedSum / total

    }

}


export const getEventsById = (data: TicketEvent[]): { [name: number]: TicketEvent[] } => {
    const eventsById = {}
    data.forEach((e: TicketEvent) => {
        if (!eventsById[e.topic_id]) {
            eventsById[e.topic_id] = []
        }
        eventsById[e.topic_id].push(e)
    })
    return eventsById
}