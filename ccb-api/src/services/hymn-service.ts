import { requestBackend } from "../utils/requests";

export function findById(hymnNumber: number){
    return requestBackend({ url: `/hymns/${hymnNumber}` });
}