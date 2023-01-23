/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.consumerUser.create.Request.Raw, FlagrightApi.User> =
    core.serialization.lazyObject(async () => (await import("../../..")).User);

export declare namespace Request {
    type Raw = serializers.User.Raw;
}

export const Response: core.serialization.Schema<
    serializers.consumerUser.create.Response.Raw,
    FlagrightApi.CreateConsumerUsersResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).CreateConsumerUsersResponse);

export declare namespace Response {
    type Raw = serializers.CreateConsumerUsersResponse.Raw;
}
