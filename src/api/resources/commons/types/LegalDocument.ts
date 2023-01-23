/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * LegalDocument model generalizes User's identity document type (ex: Passport)
 */
export interface LegalDocument {
    documentType: string;
    documentNumber: string;
    documentIssuedDate?: number;
    documentExpirationDate?: number;
    documentIssuedCountry: FlagrightApi.CountryCode;
    tags?: FlagrightApi.Tag[];
    nameOnDocument?: FlagrightApi.ConsumerName;
}