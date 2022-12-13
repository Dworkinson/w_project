import {BaseRequest} from "../../base.request";
import {Method} from "axios";

interface LegalSender {
    country_code?: string; // required
    type?: "sms"; // required
    sender?: string | number; // required
    code_of_company?: string | number; // required
    description?: string; // required
    informing_purpose?: string; // required
    tax_number?: string | number; // required
    legal_name?: string; // required
    address?: string; // required
    site_url?: string;
    comment?: string;
}

export class PostSendersRequestLegal extends BaseRequest {
    url: string;
    method: Method;
    data: LegalSender;

    constructor() {
        super();
        this.url = this.baseUrl + `/api/senders/requests/legal`;
        this.method = "POST";

        this.data = {};
    }

    countryCode(code: string) {
        this.data.country_code = code;
        return this;
    }

    type(type: "sms") {
        this.data.type = type;
        return this;
    }

    sender(sender: string) {
        this.data.sender = sender;
        return this;
    }

    companyCode(code: string | number) {
        this.data.code_of_company = code;
        return this;
    }

    description(desc: string) {
        this.data.description = desc;
        return this;
    }

    informingPurpose(inf: string) {
        this.data.informing_purpose = inf;
        return this;
    }

    taxNumber(taxNumber: string | number) {
        this.data.tax_number = taxNumber;
        return this;
    }

    legalName(name: string) {
        this.data.legal_name = name;
        return this;
    }

    address(address: string) {
        this.data.address = address;
        return this;
    }

    siteUrl(url: string) {
        this.data.site_url = url;
        return this;
    }

    comment(comment: string) {
        this.data.comment = comment;
        return this;
    }
}