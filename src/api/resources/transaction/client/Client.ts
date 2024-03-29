/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FlagrightApi } from "@fern-api/flagright";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.FlagrightApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    public async verify(
        request: FlagrightApi.VerifyTransactionRequest
    ): Promise<FlagrightApi.TransactionMonitoringResult> {
        const _queryParams = new URLSearchParams();
        if (request.validateOriginUserId != null) {
            _queryParams.append("validateOriginUserId", request.validateOriginUserId);
        }

        if (request.validateDestinationUserId != null) {
            _queryParams.append("validateDestinationUserId", request.validateDestinationUserId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.FlagrightApiEnvironment.Production, "transactions"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
            body: await serializers.transaction.verify.Request.json(request.body),
        });
        if (_response.ok) {
            return await serializers.transaction.verify.Response.parse(
                _response.body as serializers.transaction.verify.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlagrightApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlagrightApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlagrightApiTimeoutError();
            case "unknown":
                throw new errors.FlagrightApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async retrieve(transactionId: string): Promise<FlagrightApi.TransactionWithRulesResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlagrightApiEnvironment.Production,
                `transactions/${transactionId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.transaction.retrieve.Response.parse(
                _response.body as serializers.transaction.retrieve.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlagrightApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlagrightApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlagrightApiTimeoutError();
            case "unknown":
                throw new errors.FlagrightApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async create(
        request: FlagrightApi.TransactionEvent
    ): Promise<FlagrightApi.TransactionEventMonitoringResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlagrightApiEnvironment.Production,
                "events/transaction"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.transaction.create.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.transaction.create.Response.parse(
                _response.body as serializers.transaction.create.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlagrightApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlagrightApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlagrightApiTimeoutError();
            case "unknown":
                throw new errors.FlagrightApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
