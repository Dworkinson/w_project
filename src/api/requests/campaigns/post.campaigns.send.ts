import {BaseRequest} from "../base.request";

export interface SendRequest {
    phones?:      Phone[]; // required
    sender?:      string; // required
    text?:        string; // required
    tariff_code?: number;
    validity?:    number;
    start_at?:    lDate;
}

export interface Phone {
    number:       number; // required
    reference_id?: string;
}

type lDate = string;

export class Send extends BaseRequest {
    url: string;
    method: string;
    data: SendRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/campaigns/sms/send";
        this.method = "POST";

        this.data = {};
    }

    phones(phones: Phone[]) {
        this.data.phones = phones;
        return this;
    }

    sender(sender: string) {
        this.data.sender = sender;
        return this;
    }

    text(text: string) {
        this.data.text = text;
        return this;
    }

    tariffCode(tariff: number) {
        this.data.tariff_code = tariff;
        return this;
    }

    validity(validity: number) {
        this.data.validity = validity;
        return this;
    }

    startAt(date: lDate) {
        this.data.start_at = date;
        return this;
    }
}
