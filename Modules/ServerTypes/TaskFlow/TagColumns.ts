import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TagRow } from "./TagRow";

export interface TagColumns {
    Name: Column<TagRow>;
    Color: Column<TagRow>;
    CreatedAt: Column<TagRow>;
    UpdatedAt: Column<TagRow>;
}

export class TagColumns extends ColumnsBase<TagRow> {
    static readonly columnsKey = 'TaskFlow.Tag';
    static readonly Fields = fieldsProxy<TagColumns>();
}