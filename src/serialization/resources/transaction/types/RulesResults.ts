/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const RulesResults: core.serialization.ObjectSchema<serializers.RulesResults.Raw, FlagrightApi.RulesResults> =
    core.serialization.object({
        executedRules: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ExecutedRulesResult)
        ),
        hitRules: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).HitRulesDetails)
        ),
    });

export declare namespace RulesResults {
    interface Raw {
        executedRules: serializers.ExecutedRulesResult.Raw[];
        hitRules: serializers.HitRulesDetails.Raw[];
    }
}
