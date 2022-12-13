import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface SearchGroupsRequest {
    "page[offset]"?: number | null;
    "page[limit]"?: number | null;
    sort?: string | null;
    way?: string | null;
    "search[field]"?: string | number;
    "search[operation]"?: ">" | "<" | ">=" | "<=" | "=" | "like" | any;
    "search[value]"?: lDate | any;
}

type lDate = string;


export class SearchGroups extends BaseRequest {
    url: string;
    method: Method;
    params: SearchGroupsRequest;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/groups/search";
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

    sort(field: string) {
        this.params.sort = field;
        return this;
    }

    way(way: string) {
        this.params.way = way;
        return this;
    }

    searchField(field: string | number) {
        this.params["search[field]"] = field;
        return this;
    }

    searchOperation(operation: string | any) {
        this.params["search[operation]"] = operation;
        return this;
    }

    searchValue(value: lDate | any) {
        this.params["search[value]"] = value;
        return this;
    }
}