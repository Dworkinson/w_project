import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface SendGroupRequest {
    sender?:      string; // required
    text?:        string; // required
    groups?:      number[]; // required
    validity?:    number;
    tariff_code?: number;
    start_at?:    lDate;
}

type lDate = string;


export class SendGroups extends BaseRequest {
    url: string;
    method: Method;
    data: SendGroupRequest

    constructor() {
        super();
        this.url = this.baseUrl + "/api/campaigns/sms/send-groups";
        this.method = "POST";

        this.data = {};
    }

    sender(sender: string) {
        this.data.sender = sender;
        return this;
    }

    text(text: string) {
        this.data.text = text;
        return this;
    }

    groups(groups: number[]) {
        this.data.groups = groups;
        return this;
    }

    validity(validity: number) {
        this.data.validity = validity;
        return this;
    }

    tariffCode(tariff: number) {
        this.data.tariff_code = tariff;
        return this;
    }

    startAt(start_at: lDate) {
        this.data.start_at = start_at;
        return this;
    }
}
