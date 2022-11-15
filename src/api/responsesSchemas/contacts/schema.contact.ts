export interface Contact {
    data: Data;
}

export interface Data {
    id:             number;
    phone:          number;
    fields:         Field[];
    created_at:     Date;
    groups:         Group[];
    hlr_status:     string;
    hlr_last_check: Date;
}

export interface Field {
    code: number | null;
    text: string | null;
}

export interface Group {
    id:          number | null;
    name:        string | null;
    description: string | null;
    default:     number | null;
    created_at:  lDate | null;
}

type lDate = string;
