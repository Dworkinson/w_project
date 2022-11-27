export interface Groups {
    data:  Datum[];
    total: number;
}

export interface Datum {
    id:          number;
    name:        string;
    description: null | string;
    default:     boolean;
    created_at:  lDate;
}

type lDate = string;
