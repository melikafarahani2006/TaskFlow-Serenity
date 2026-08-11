import { ListRequest } from "@serenity-is/corelib";

export interface WorkspaceListRequest extends ListRequest {
    OwnerOnly?: boolean;
}