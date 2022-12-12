import {BaseRequest} from "../../base.request";
import {Method} from "axios";

export class GetContactFields extends BaseRequest {
    url: string;
    method: Method;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/contacts/fields`;
        this.method = "GET";
    }
}