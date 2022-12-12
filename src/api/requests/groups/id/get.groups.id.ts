import {BaseRequest} from "../../base.request";
import {Method} from "axios";

export class GetGroupInfo extends BaseRequest {
    url: string;
    method: Method;

    constructor(id: number | string) {
        super();
        this.url = this.baseUrl + `/api/groups/${id}`;
        this.method = "GET";
    }
}