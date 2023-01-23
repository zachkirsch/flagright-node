/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for business user company financial details
 */
export interface CompanyFinancialDetails {
    expectedTransactionPerMonth?: FlagrightApi.Amount;
    expectedTurnoverPerMonth?: FlagrightApi.Amount;
    tags?: FlagrightApi.Tag[];
}