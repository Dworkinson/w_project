import {BaseRequest} from "../../base.request";

export class GetContactInfo extends BaseRequest {
    url: string;
    method: string;

    constructor(id: number | string) {
        super();
        this.url = this.baseUrl + `/api/contacts/${id}`;
        this.method = "GET";
    }
}