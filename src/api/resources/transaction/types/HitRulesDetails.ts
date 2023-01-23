/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for list of hit rules
 */
export interface HitRulesDetails {
    ruleId: string;
    ruleInstanceId: string;
    ruleName: string;
    ruleDescription: string;
    ruleAction: FlagrightApi.RuleAction;
    ruleHitMeta?: FlagrightApi.RuleHitMeta;
}
