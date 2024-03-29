/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for User details
 */
export interface UserBase {
    userId: string;
    userDetails?: FlagrightApi.UserDetails;
    createdTimestamp: number;
}
