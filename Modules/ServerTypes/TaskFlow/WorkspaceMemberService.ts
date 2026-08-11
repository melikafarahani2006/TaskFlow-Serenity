import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { WorkspaceMemberRow } from "./WorkspaceMemberRow";

export namespace WorkspaceMemberService {
    export const baseUrl = 'TaskFlow/WorkspaceMember';

    export declare function Create(request: SaveRequest<WorkspaceMemberRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<WorkspaceMemberRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<WorkspaceMemberRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<WorkspaceMemberRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<WorkspaceMemberRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<WorkspaceMemberRow>>;

    export const Methods = {
        Create: "TaskFlow/WorkspaceMember/Create",
        Update: "TaskFlow/WorkspaceMember/Update",
        Delete: "TaskFlow/WorkspaceMember/Delete",
        Retrieve: "TaskFlow/WorkspaceMember/Retrieve",
        List: "TaskFlow/WorkspaceMember/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>WorkspaceMemberService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}