export enum TicketStatus {
    backlog = "backlog",
    todo = "todo",
    inProgress = "inProgress",
    newComment = "newComment",
    closed = "closed",
    reOpen = "reOpen"
}

export type Ticket = {
    notion_id: string, // notion
    discourse_id: number,

    created_timestamp: number,
    created_at: string,
    updated_at: string,

    topic_title: string,
    topic_id: number,

    post_id: number,
    post_body: string,

    category_id: number,
    creator_username: string,

    status: TicketStatus,
    asignee: string,

}
// todo post event log
export type TicketStatusChange = {
    timestamp: number,
    prev_status: TicketStatus,
    next_status: TicketStatus
    ticket_id: string,

}


export type NotionTicket = {

    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
        object: string;
        id: string;
    };
    last_edited_by: {
        object: string;
        id: string;
    };
    cover: null;
    icon: null;
    parent: {
        type: string;
        database_id: string;
    };
    archived: boolean;
    properties: {
        category_id: {
            id: string;
            type: string;
            number: number;
        };
        updated_at: {
            id: string;
            type: string;
            rich_text: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
        status: {
            id: string;
            type: string;
            status: {
                id: string;
                name: string;
                color: string;
            };
        };
        creator_username: {
            id: string;
            type: string;
            rich_text: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
        discourse_id: {
            id: string;
            type: string;
            number: number;
        };
        post_id: {
            id: string;
            type: string;
            number: number;
        };
        post_body: {
            id: string;
            type: string;
            rich_text: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
        created_at: {
            id: string;
            type: string;
            rich_text: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
        asignee: {
            id: string;
            type: string;
            people: [];
        };
        topic_id: {
            id: string;
            type: string;
            number: number;
        };
        forum_id: {
            id: string;
            type: string;
            rich_text: [];
        };
        created_timestamp: {
            id: string;
            type: string;
            number: number;
        };
        topic_title: {
            id: string;
            type: string;
            rich_text: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
        Name: {
            id: string;
            type: string;
            title: [
                {
                    type: string;
                    text: {
                        content: string;
                        link: null;
                    };
                    annotations: {
                        bold: boolean;
                        italic: boolean;
                        strikethrough: boolean;
                        underline: boolean;
                        code: boolean;
                        color: string;
                    };
                    plain_text: string;
                    href: null;
                }
            ];
        };
    };
    url: string;
    public_url: null;
}
