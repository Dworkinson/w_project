import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface SearchRequests {
    "page[offset]"?: number | null;
    "page[limit]"?: number | null;
    sort?: Sort | null;
    way?: string | null;
    "filter[status]"?: Status;
    "filter[id]"?: number | string;
    "filter[country_code]"?: string;
    "filter[sender]"?: string | number;
    "filter[created_at]"?: sDate;
}

type Status = "new" | "accepted" | "in_progress" | "registered" | "rejected";
type Sort = "id" | "sender" | "status" | "country_code" | "created_at";
type sDate = string;

export class GetSendersRequestsSms extends BaseRequest {
    url: string;
    method: Method;
    params: SearchRequests;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/senders/requests/sms`;
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

    sort(field: Sort) {
        this.params.sort = field;
        return this;
    }

    way(way: string) {
        this.params.way = way;
        return this;
    }

    status(status: Status) {
        this.params["filter[status]"] = status;
        return this;
    }

    id(id: string | number) {
        this.params["filter[id]"] = id;
        return this;
    }

    countryCode(code: string) {
        this.params["filter[country_code]"] = code;
        return this;
    }

    sender(sender: string | number) {
        this.params["filter[sender]"] = sender;
        return this;
    }

    createdAt(created: sDate) {
        this.params["filter[created_at]"] = created;
        return this;
    }
}
