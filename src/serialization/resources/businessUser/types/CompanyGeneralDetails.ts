/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const CompanyGeneralDetails: core.serialization.ObjectSchema<
    serializers.CompanyGeneralDetails.Raw,
    FlagrightApi.CompanyGeneralDetails
> = core.serialization.object({
    legalName: core.serialization.string(),
    businessIndustry: core.serialization.list(core.serialization.string()).optional(),
    mainProductsServicesSold: core.serialization.list(core.serialization.string()).optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Tag)).optional(),
});

export declare namespace CompanyGeneralDetails {
    interface Raw {
        legalName: string;
        businessIndustry?: string[] | null;
        mainProductsServicesSold?: string[] | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}