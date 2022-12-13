import {BaseRequest} from "../base.request";
import {Method} from "axios";

export class GetSenders extends BaseRequest {
    url: string;
    method: Method;
    params: {type?: string};

    constructor() {
        super();
        this.url = this.baseUrl + `/api/senders`;
        this.method = "GET";

        this.params = {};
        this.params.type = "sms";
    }

    type(type: string) {
        this.params.type = type;
        return this;
    }
}
