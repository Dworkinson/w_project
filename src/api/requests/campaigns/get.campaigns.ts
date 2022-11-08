import {BaseRequest} from "../base.request";

interface CampaignsRequest {
    "page[offset]"?: string | null;
    "page[limit]"?: string | null;
    sort?: string | null;
    way?: string | null;
    "filter[from]"?: string | null;
    "filter[to]"?: string | null;
    "filter[type]"?: string | null;
}

export class GetCampaigns extends BaseRequest {
    url: string;
    method: string;
    params: CampaignsRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/campaigns";
        this.method = "GET";

        this.params = {}
    }

    pageOffset(offset: number) {
        this.params["page[offset]"] = `${offset}`;
        return this;
    }

    pageLimit(limit: number) {
        this.params["page[limit]"] = `${limit}`;
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
