import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface FindContactsRequest {
    "page[offset]"?: number | null;
    "page[limit]"?: number | null;
    sort?: string | null;
    way?: string | null;
    "search[field]"?: string | number | null;
    "search[operation]"?: "<" | ">" | ">=" | "<=" | "=" | "like" | any;
    "search[value]"?: string | null;
}

export class FindContacts extends BaseRequest {
    url: string;
    method: Method;
    params: FindContactsRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/contacts/search";
        this.method = "GET";

        this.params = {};
    }

    pageOffset(offset: number) {
        this.params["page[offset]"] = offset;
        return this;
    }

    pageLimit(limit: number) {
        this.params["page[limit]"] = limit;
        return this;
    }

}
