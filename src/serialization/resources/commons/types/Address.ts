/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FlagrightApi } from "@fern-api/flagright";
import * as core from "../../../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, FlagrightApi.Address> =
    core.serialization.object({
        addressLines: core.serialization.list(core.serialization.unknown()),
        postcode: core.serialization.string(),
        city: core.serialization.string(),
        state: core.serialization.string().optional(),
        country: core.serialization.string(),
        tags: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Tag))
            .optional(),
    });

export declare namespace Address {
    interface Raw {
        addressLines: unknown[];
        postcode: string;
        city: string;
        state?: string | null;
        country: string;
        tags?: serializers.Tag.Raw[] | null;
    }
}