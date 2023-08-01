export enum TicketEventName {
    ticketCreated = 'ticketCreated',
    staffFirstReply = 'staffFirstReply',
    staffReply = 'staffReply',
    userReply = 'userReply',
    ticketClosed = 'ticketClosed',
    ticketReopen = 'ticketReopen',
}

// todo post event log
export type TicketEvent = {
    timestamp?: Number
    event: TicketEventName
    ticket_id: string,
    topic_id: number
}
