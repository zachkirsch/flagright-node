/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for transaction amount details
 */
export interface TransactionAmountDetails {
    transactionAmount: number;
    transactionCurrency: FlagrightApi.CurrencyCode;
    country?: FlagrightApi.CountryCode;
}
