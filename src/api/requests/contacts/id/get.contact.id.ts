import {BaseRequest} from "../../base.request";
import {Method} from "axios";

export class GetContactInfo extends BaseRequest {
    url: string;
    method: Method;

    constructor(id: number | string) {
        super();
        this.url = this.baseUrl + `/api/contacts/${id}`;
        this.method = "GET";
    }
}