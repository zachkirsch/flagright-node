/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

export interface TransactionLimit {
    transactionCountLimit?: FlagrightApi.TransactionCountLimit;
    transactionAmountLimit?: FlagrightApi.TransactionAmountLimit;
    averageTransactionAmountLimit?: FlagrightApi.TransactionAmountLimit;
}
