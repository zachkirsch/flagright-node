/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const ConsumerUserEvent: core.serialization.Schema<
    serializers.ConsumerUserEvent.Raw,
    FlagrightApi.ConsumerUserEvent
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ConsumerUserEvent {
    type Raw = Record<string, unknown>;
}
