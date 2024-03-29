/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const CreateConsumerUsersResponse: core.serialization.ObjectSchema<
    serializers.CreateConsumerUsersResponse.Raw,
    FlagrightApi.CreateConsumerUsersResponse
> = core.serialization
    .object({
        message: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).ConsumerUsersResponse));

export declare namespace CreateConsumerUsersResponse {
    interface Raw extends serializers.ConsumerUsersResponse.Raw {
        message: string;
    }
}
