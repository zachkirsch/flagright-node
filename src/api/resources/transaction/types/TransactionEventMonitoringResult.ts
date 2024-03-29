/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model to convey the results of transaction monitoring
 */
export interface TransactionEventMonitoringResult extends FlagrightApi.RulesResults {
    eventId: string;
    transaction: FlagrightApi.Transaction;
}
