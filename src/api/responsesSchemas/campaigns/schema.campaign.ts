export interface SendCampaign {
    data: Data;
}

export interface Data {
    id:            number;
    name:          string;
    sender:        string;
    status:        string;
    message_type:  string;
    start_at:      Date;
    real_start_at: null;
    finished_at:   null;
    created_at:    Date;
    statistics:    Statistics;
}

export interface Statistics {
    delivered: number;
    sent:      number;
}