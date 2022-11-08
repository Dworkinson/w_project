export interface SchemaTariffs {
    data: Tariff[];
}

export interface Tariff {
    id:         number;
    name:       string;
    code:       number;
    is_active:  boolean;
    is_default: boolean;
}