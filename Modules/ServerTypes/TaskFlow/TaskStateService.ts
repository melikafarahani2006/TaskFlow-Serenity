import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TaskStateRow } from "./TaskStateRow";

export namespace TaskStateService {
    export const baseUrl = 'TaskFlow/TaskState';

    export declare function Create(request: SaveRequest<TaskStateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TaskStateRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TaskStateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TaskStateRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TaskStateRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TaskStateRow>>;

    export const Methods = {
        Create: "TaskFlow/TaskState/Create",
        Update: "TaskFlow/TaskState/Update",
        Delete: "TaskFlow/TaskState/Delete",
        Retrieve: "TaskFlow/TaskState/Retrieve",
        List: "TaskFlow/TaskState/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TaskStateService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}