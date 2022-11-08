export interface Campaigns {
    data: Campaign[];
    meta: Meta;
}

export interface Campaign {
    id:            number;
    name:          string;
    sender:        string;
    status:        Status;
    message_type:  MessageType;
    start_at:      lDate;
    real_start_at: lDate | null;
    finished_at:   lDate | null;
    created_at:    lDate;
    statistics:    Statistics;
}

export enum MessageType {
    Hlr = "hlr",
    SMS = "sms",
    Viber = "viber"
}

export interface Statistics {
    delivered: number;
    sent:      number;
}

export enum Status {
    Creation = "creation",
    Spam = "spam",
    Scheduled = "scheduled",
    Sending = "sending",
    Paused = "paused",
    Done = "done",
    Stopped = "stopped"
}

export interface Meta {
    page: Page;
}

export interface Page {
    limit:  number;
    offset: number;
    total:  number;
}

export type lDate = string;