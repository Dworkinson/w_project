import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface Group {
    name?: string | null;
    description?: string | null;
    default?: boolean | null;
}

export class UpdateGroup extends BaseRequest {
    url: string;
    method: Method;
    data: Group;

    constructor(id: number | string) {
        super();
        this.url = this.baseUrl + `/api/groups/${id}`;
        this.method = "PUT";

        this.data = {};
    }

    name(name: string) {
        this.data.name = name;
        return this;
    }

    description(desc: string) {
        this.data.description = desc;
        return this;
    }

    default(isDefault: boolean) {
        this.data.default = isDefault;
        return this;
    }
}