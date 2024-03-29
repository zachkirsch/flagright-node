/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const Person: core.serialization.ObjectSchema<serializers.Person.Raw, FlagrightApi.Person> =
    core.serialization.object({
        generalDetails: core.serialization.lazyObject(async () => (await import("../../..")).UserDetails),
        legalDocuments: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).LegalDocument))
            .optional(),
        contactDetails: core.serialization.lazyObject(async () => (await import("../../..")).ContactDetails).optional(),
        pepStatus: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).PepStatus))
            .optional(),
        tags: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Tag))
            .optional(),
    });

export declare namespace Person {
    interface Raw {
        generalDetails: serializers.UserDetails.Raw;
        legalDocuments?: serializers.LegalDocument.Raw[] | null;
        contactDetails?: serializers.ContactDetails.Raw | null;
        pepStatus?: serializers.PepStatus.Raw[] | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}
