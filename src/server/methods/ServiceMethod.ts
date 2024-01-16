import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import * as grpc from '@grpc/grpc-js'

import { ServiceMethodRequest, ServiceMethodResponse } from '../../pkg'

export const ServiceMethod = (
    call: ServerUnaryCall<ServiceMethodRequest, ServiceMethodResponse>,
    callback: sendUnaryData<ServiceMethodResponse>,
) => {
    callback({ code: grpc.status.OK, message: call.request.message }, null)
}
