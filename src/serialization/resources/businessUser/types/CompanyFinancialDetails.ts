/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const CompanyFinancialDetails: core.serialization.ObjectSchema<
    serializers.CompanyFinancialDetails.Raw,
    FlagrightApi.CompanyFinancialDetails
> = core.serialization.object({
    expectedTransactionPerMonth: core.serialization
        .lazyObject(async () => (await import("../../..")).Amount)
        .optional(),
    expectedTurnoverPerMonth: core.serialization.lazyObject(async () => (await import("../../..")).Amount).optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Tag)).optional(),
});

export declare namespace CompanyFinancialDetails {
    interface Raw {
        expectedTransactionPerMonth?: serializers.Amount.Raw | null;
        expectedTurnoverPerMonth?: serializers.Amount.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}
