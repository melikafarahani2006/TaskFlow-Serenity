import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TaskTagRow } from "./TaskTagRow";

export namespace TaskTagService {
    export const baseUrl = 'TaskFlow/TaskTag';

    export declare function Create(request: SaveRequest<TaskTagRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TaskTagRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TaskTagRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TaskTagRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TaskTagRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TaskTagRow>>;

    export const Methods = {
        Create: "TaskFlow/TaskTag/Create",
        Update: "TaskFlow/TaskTag/Update",
        Delete: "TaskFlow/TaskTag/Delete",
        Retrieve: "TaskFlow/TaskTag/Retrieve",
        List: "TaskFlow/TaskTag/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TaskTagService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}