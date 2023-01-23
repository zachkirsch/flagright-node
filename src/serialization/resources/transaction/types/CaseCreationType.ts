/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const CaseCreationType: core.serialization.Schema<
    serializers.CaseCreationType.Raw,
    FlagrightApi.CaseCreationType
> = core.serialization.enum_(["TRANSACTION", "USER"]);

export declare namespace CaseCreationType {
    type Raw = "TRANSACTION" | "USER";
}
