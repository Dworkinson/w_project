import {BaseRequest} from "../base.request";
import {Method} from "axios";

interface Group {
    name?: string | number;
    description?: string;
    default?: boolean;
}

export class StoreGroup extends BaseRequest {
    url: string;
    method: Method;
    data: Group;

    constructor() {
        super();
        this.url = this.baseUrl + "/api/groups";
        this.method = "POST";

        this.data = {};
    }

    name(name: string | number) {
        this.data.name = name;
        return this;
    }

    description(desc: string) {
        this.data.description = desc;
        return this;
    }

    default(def: boolean) {
        this.data.default = def;
        return this;
    }
}