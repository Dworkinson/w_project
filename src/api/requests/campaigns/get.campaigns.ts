import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface CampaignsRequest {
    "page[offset]"?: number | null;
    "page[limit]"?: number | null;
    sort?: string | null;
    way?: string | null;
    "filter[from]"?: lDate | null;
    "filter[to]"?: lDate | null;
    "filter[type]"?: string | null;
}

type lDate = string;

export class GetCampaigns extends BaseRequest {
    url: string;
    method: Method;
    params: CampaignsRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/campaigns";
        this.method = "GET";

        this.params = {}
    }

    pageOffset(offset: number) {
        this.params["page[offset]"] = offset;
        return this;
    }

    pageLimit(limit: number) {
        this.params["page[limit]"] = limit;
        return this;
    }

    sort(field: string) {
        this.params.sort = field;
        return this;
    }

    way(way: string) {
        this.params.way = way;
        return this;
    }

    filterFrom(from: string) {
        this.params["filter[from]"] = from;
        return this;
    }

    filterTo(to: string) {
        this.params["filter[to]"] = to;
        return this;
    }

    filterType(type: string) {
        this.params["filter[type]"] = type;
        return this;
    }
}
