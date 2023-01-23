/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for business user company general details
 */
export interface CompanyGeneralDetails {
    legalName: string;
    businessIndustry?: string[];
    mainProductsServicesSold?: string[];
    tags?: FlagrightApi.Tag[];
}