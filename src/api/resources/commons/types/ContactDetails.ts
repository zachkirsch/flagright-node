/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for business user contact information details
 */
export interface ContactDetails {
    emailIds?: string[];
    contactNumbers?: string[];
    faxNumbers?: string[];
    websites?: string[];
    addresses?: FlagrightApi.Address[];
}
