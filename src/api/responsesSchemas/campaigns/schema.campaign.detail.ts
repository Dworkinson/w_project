export interface CampaignByIdDetail {
    data: Data;
}

export interface Data {
    id:              number;
    name:            string;
    sender:          string;
    status:          string;
    type:            string;
    started_at:      lDate;
    actual_start_at: lDate | null;
    finished_at:     lDate | null;
    created_at:      lDate;
    statistics:      Statistics;
    total_messages:  number;
    total_phones:    number;
    total_price:     string;
    currency:        string;
}

export interface Statistics {
    delivered:   number;
    scheduled:   number;
    moderation:  number;
    accepted:    number;
    sending:     number;
    sent:        number;
    expired:     number;
    failed:      number;
    undelivered: number;
    unknown:     number;
}

type lDate = string;