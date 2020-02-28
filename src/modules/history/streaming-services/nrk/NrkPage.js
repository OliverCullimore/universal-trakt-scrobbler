import { NrkApi } from './NrkApi';
import { NrkStore } from "./NrkStore";
import { Page } from "../common/Page";

function NrkPage() {
    return new Page({serviceName: "NRK", store: NrkStore, api: NrkApi})
}

export { NrkPage };
