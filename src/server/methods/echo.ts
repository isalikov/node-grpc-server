import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import * as grpc from '@grpc/grpc-js'

import { EchoRequest, EchoResponse } from '../../pkg'

export const nodeGrpcEchoMethod = (
    call: ServerUnaryCall<EchoRequest, EchoResponse>,
    callback: sendUnaryData<EchoResponse>,
) => {
    callback({ code: grpc.status.OK, message: call.request.message }, null)
}
