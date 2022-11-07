import {AxiosRequestConfig, AxiosRequestHeaders} from "axios";
import {config} from "../../helpers/envController";


export class BaseRequest implements AxiosRequestConfig {
    baseUrl: string;
    headers: AxiosRequestHeaders;

    constructor() {
        this.baseUrl = config.baseUrl;
        this.headers = {
            'Content-Type': 'application/json',
        };
    }
}
