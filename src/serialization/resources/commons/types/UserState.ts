/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const UserState: core.serialization.Schema<serializers.UserState.Raw, FlagrightApi.UserState> =
    core.serialization.enum_([
        "UNACCEPTABLE",
        "UNDECIDED",
        "TERMINATED",
        "ACTIVE",
        "INACTIVE",
        "DORMANT",
        "CREATED",
        "DELETED",
        "SUSPENDED",
        "BLOCKED",
    ]);

export declare namespace UserState {
    type Raw =
        | "UNACCEPTABLE"
        | "UNDECIDED"
        | "TERMINATED"
        | "ACTIVE"
        | "INACTIVE"
        | "DORMANT"
        | "CREATED"
        | "DELETED"
        | "SUSPENDED"
        | "BLOCKED";
}
