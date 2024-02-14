import axios from "axios";
import {spaseXBaseUrl} from "../constants/urls";

const SpaceXAPIService = axios.create({baseURL:spaseXBaseUrl})

export {
    SpaceXAPIService
}