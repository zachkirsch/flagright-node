/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FlagrightApi } from "@fern-api/flagright";

/**
 * Model for a business user - optional fields
 */
export interface BusinessOptional {
    userStateDetails?: FlagrightApi.UserStateDetails;
    kycStatusDetails?: FlagrightApi.KycStatusDetails;
    shareHolders?: FlagrightApi.Person[];
    directors?: FlagrightApi.Person[];
    transactionLimits?: FlagrightApi.TransactionLimits;
    allowedPaymentMethods?: FlagrightApi.PaymentMethods[];
    tags?: FlagrightApi.Tag[];
    mccDetails?: FlagrightApi.MccDetails;
}
