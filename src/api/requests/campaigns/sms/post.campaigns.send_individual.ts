import {BaseRequest} from "../../base.request";
import {Method} from "axios";


interface SendIndividualRequest {
    messages?:    Message[]; // required
    tariff_code?: number;
    validity?:    number;
    start_at?:    lDate;
}

export interface Message {
    phone?:        number; // required
    text?:         string; // required
    sender?:       string; // required
    reference_id?: string;
}

type lDate = string;


export class SendIndividual extends BaseRequest {
    url: string;
    method: Method;
    data: SendIndividualRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/campaigns/sms/send-individual";
        this.method = "POST";

        this.data = {};
    }

    messages(msgs: Message[]) {
        this.data.messages = msgs;
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

    startAt(start_at: lDate) {
        this.data.start_at = start_at;
        return this;
    }
}
