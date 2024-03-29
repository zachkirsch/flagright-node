/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const TransactionEventMonitoringResult: core.serialization.ObjectSchema<
    serializers.TransactionEventMonitoringResult.Raw,
    FlagrightApi.TransactionEventMonitoringResult
> = core.serialization
    .object({
        eventId: core.serialization.string(),
        transaction: core.serialization.lazyObject(async () => (await import("../../..")).Transaction),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).RulesResults));

export declare namespace TransactionEventMonitoringResult {
    interface Raw extends serializers.RulesResults.Raw {
        eventId: string;
        transaction: serializers.Transaction.Raw;
    }
}
