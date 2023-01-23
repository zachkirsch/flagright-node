/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for business user risk score response
 */
export interface BusinessUsersResponse {
    userId: string;
    userRiskScoreDetails?: FlagrightApi.RiskScoringResult;
}
