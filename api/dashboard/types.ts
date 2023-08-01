export type NotionPage = {
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
        date: {
            id: string;
            type: string;
            date: {
                start: string;
                end: string | null;
                time_zone: string | null;
            };
        };
        event: {
            id: string;
            type: string;
            rich_text: Array<{
                type: string;
                text: {
                    content: string;
                    link: string | null;
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
                href: string | null;
            }>;
        };
        timestamp: {
            id: string;
            type: string;
            number: number;
        };
        topic_id: {
            id: string;
            type: string;
            number: number;
        };
        ticket_id: {
            id: string;
            type: string;
            rich_text: Array<{
                type: string;
                text: {
                    content: string;
                    link: string | null;
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
                href: string | null;
            }>;
        };
        Name: {
            id: string;
            type: string;
            title: Array<{
                type: string;
                text: {
                    content: string;
                    link: string | null;
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
                href: string | null;
            }>;
        };
    };
    url: string;
    public_url: null;
}
