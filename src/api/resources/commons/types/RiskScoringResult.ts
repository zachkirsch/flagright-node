/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Model for results from Risk Scoring
 */
export interface RiskScoringResult {
    kycRiskScore: number;
    actionRiskScore: number;
    dynamicRiskScore?: number;
}
