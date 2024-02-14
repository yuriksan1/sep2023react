import {SpaceXAPIService} from "./SpaceXAPIService";
import {urls} from "../constants/urls";

const launchService = {
    getAll:()=>SpaceXAPIService.get(urls.launches)
}

export {
    launchService
}