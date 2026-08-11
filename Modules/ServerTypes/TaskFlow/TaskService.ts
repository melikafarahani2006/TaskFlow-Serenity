import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TaskRow } from "./TaskRow";

export namespace TaskService {
    export const baseUrl = 'TaskFlow/Task';

    export declare function Create(request: SaveRequest<TaskRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TaskRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TaskRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TaskRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TaskRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TaskRow>>;

    export const Methods = {
        Create: "TaskFlow/Task/Create",
        Update: "TaskFlow/Task/Update",
        Delete: "TaskFlow/Task/Delete",
        Retrieve: "TaskFlow/Task/Retrieve",
        List: "TaskFlow/Task/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TaskService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}