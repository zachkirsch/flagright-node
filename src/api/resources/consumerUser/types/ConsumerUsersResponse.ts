/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for consumer user risk score response
 */
export interface ConsumerUsersResponse {
    /** user ID the risk score pertains to */
    userId: string;
    userRiskScoreDetails?: FlagrightApi.RiskScoringResult;
}