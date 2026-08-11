import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TagRow } from "./TagRow";

export namespace TagService {
    export const baseUrl = 'TaskFlow/Tag';

    export declare function Create(request: SaveRequest<TagRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TagRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TagRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TagRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TagRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TagRow>>;

    export const Methods = {
        Create: "TaskFlow/Tag/Create",
        Update: "TaskFlow/Tag/Update",
        Delete: "TaskFlow/Tag/Delete",
        Retrieve: "TaskFlow/Tag/Retrieve",
        List: "TaskFlow/Tag/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TagService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}