/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const TransactionUpdatable: core.serialization.ObjectSchema<
    serializers.TransactionUpdatable.Raw,
    FlagrightApi.TransactionUpdatable
> = core.serialization.object({
    transactionState: core.serialization.lazy(async () => (await import("../../..")).TransactionState).optional(),
    originAmountDetails: core.serialization
        .lazyObject(async () => (await import("../../..")).TransactionAmountDetails)
        .optional(),
    destinationAmountDetails: core.serialization
        .lazyObject(async () => (await import("../../..")).TransactionAmountDetails)
        .optional(),
    relatedTransactionIds: core.serialization.list(core.serialization.string()).optional(),
    productType: core.serialization.string().optional(),
    promotionCodeUsed: core.serialization.boolean().optional(),
    reference: core.serialization.string().optional(),
    deviceData: core.serialization.lazyObject(async () => (await import("../../..")).DeviceData).optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Tag)).optional(),
});

export declare namespace TransactionUpdatable {
    interface Raw {
        transactionState?: serializers.TransactionState.Raw | null;
        originAmountDetails?: serializers.TransactionAmountDetails.Raw | null;
        destinationAmountDetails?: serializers.TransactionAmountDetails.Raw | null;
        relatedTransactionIds?: string[] | null;
        productType?: string | null;
        promotionCodeUsed?: boolean | null;
        reference?: string | null;
        deviceData?: serializers.DeviceData.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}
