/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for transaction base Payload
 */
export interface TransactionBase {
    type?: FlagrightApi.TransactionType;
    transactionId: string;
    timestamp: number;
    originUserId?: string;
    destinationUserId?: string;
}