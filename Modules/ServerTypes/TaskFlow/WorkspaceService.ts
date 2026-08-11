import { DeleteRequest, DeleteResponse, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { WorkspaceListRequest } from "./WorkspaceListRequest";
import { WorkspaceRow } from "./WorkspaceRow";

export namespace WorkspaceService {
    export const baseUrl = 'TaskFlow/Workspace';

    export declare function Create(request: SaveRequest<WorkspaceRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<WorkspaceRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<WorkspaceRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<WorkspaceRow>>;
    export declare function List(request: WorkspaceListRequest, onSuccess?: (response: ListResponse<WorkspaceRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<WorkspaceRow>>;

    export const Methods = {
        Create: "TaskFlow/Workspace/Create",
        Update: "TaskFlow/Workspace/Update",
        Delete: "TaskFlow/Workspace/Delete",
        Retrieve: "TaskFlow/Workspace/Retrieve",
        List: "TaskFlow/Workspace/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>WorkspaceService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}