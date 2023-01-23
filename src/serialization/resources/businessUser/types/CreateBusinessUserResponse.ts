/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const CreateBusinessUserResponse: core.serialization.ObjectSchema<
    serializers.CreateBusinessUserResponse.Raw,
    FlagrightApi.CreateBusinessUserResponse
> = core.serialization
    .object({
        message: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BusinessUsersResponse));

export declare namespace CreateBusinessUserResponse {
    interface Raw extends serializers.BusinessUsersResponse.Raw {
        message: string;
    }
}
