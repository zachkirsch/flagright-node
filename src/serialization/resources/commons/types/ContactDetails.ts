/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const ContactDetails: core.serialization.ObjectSchema<
    serializers.ContactDetails.Raw,
    FlagrightApi.ContactDetails
> = core.serialization.object({
    emailIds: core.serialization.list(core.serialization.string()).optional(),
    contactNumbers: core.serialization.list(core.serialization.string()).optional(),
    faxNumbers: core.serialization.list(core.serialization.string()).optional(),
    websites: core.serialization.list(core.serialization.string()).optional(),
    addresses: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Address))
        .optional(),
});

export declare namespace ContactDetails {
    interface Raw {
        emailIds?: string[] | null;
        contactNumbers?: string[] | null;
        faxNumbers?: string[] | null;
        websites?: string[] | null;
        addresses?: serializers.Address.Raw[] | null;
    }
}
