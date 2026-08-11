import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { ProjectRow } from "./ProjectRow";

export namespace ProjectService {
    export const baseUrl = 'TaskFlow/Project';

    export declare function Create(request: SaveRequest<ProjectRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ProjectRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ProjectRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ProjectRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ProjectRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ProjectRow>>;

    export const Methods = {
        Create: "TaskFlow/Project/Create",
        Update: "TaskFlow/Project/Update",
        Delete: "TaskFlow/Project/Delete",
        Retrieve: "TaskFlow/Project/Retrieve",
        List: "TaskFlow/Project/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>ProjectService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}