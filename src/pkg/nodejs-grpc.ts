/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from '@grpc/grpc-js'
import type {
    CallOptions,
    ClientOptions,
    ClientUnaryCall,
    handleUnaryCall,
    ServiceError,
    UntypedServiceImplementation,
} from '@grpc/grpc-js'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'nodejs.grpc'

export interface ServiceMethodRequest {
    message: string
}

export interface ServiceMethodResponse {
    message: string
}

function createBaseServiceMethodRequest(): ServiceMethodRequest {
    return { message: '' }
}

export const ServiceMethodRequest = {
    encode(message: ServiceMethodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceMethodRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseServiceMethodRequest()
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break
                    }

                    message.message = reader.string()
                    continue
            }
            if ((tag & 7) === 4 || tag === 0) {
                break
            }
            reader.skipType(tag & 7)
        }
        return message
    },

    fromJSON(object: any): ServiceMethodRequest {
        return { message: isSet(object.message) ? globalThis.String(object.message) : '' }
    },

    toJSON(message: ServiceMethodRequest): unknown {
        const obj: any = {}
        if (message.message !== '') {
            obj.message = message.message
        }
        return obj
    },

    create<I extends Exact<DeepPartial<ServiceMethodRequest>, I>>(base?: I): ServiceMethodRequest {
        return ServiceMethodRequest.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<ServiceMethodRequest>, I>>(object: I): ServiceMethodRequest {
        const message = createBaseServiceMethodRequest()
        message.message = object.message ?? ''
        return message
    },
}

function createBaseServiceMethodResponse(): ServiceMethodResponse {
    return { message: '' }
}

export const ServiceMethodResponse = {
    encode(message: ServiceMethodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceMethodResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseServiceMethodResponse()
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break
                    }

                    message.message = reader.string()
                    continue
            }
            if ((tag & 7) === 4 || tag === 0) {
                break
            }
            reader.skipType(tag & 7)
        }
        return message
    },

    fromJSON(object: any): ServiceMethodResponse {
        return { message: isSet(object.message) ? globalThis.String(object.message) : '' }
    },

    toJSON(message: ServiceMethodResponse): unknown {
        const obj: any = {}
        if (message.message !== '') {
            obj.message = message.message
        }
        return obj
    },

    create<I extends Exact<DeepPartial<ServiceMethodResponse>, I>>(base?: I): ServiceMethodResponse {
        return ServiceMethodResponse.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<ServiceMethodResponse>, I>>(object: I): ServiceMethodResponse {
        const message = createBaseServiceMethodResponse()
        message.message = object.message ?? ''
        return message
    },
}

export type NodeGrpcService = typeof NodeGrpcService
export const NodeGrpcService = {
    serviceMethod: {
        path: '/nodejs.grpc.NodeGrpc/ServiceMethod',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ServiceMethodRequest) => Buffer.from(ServiceMethodRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ServiceMethodRequest.decode(value),
        responseSerialize: (value: ServiceMethodResponse) => Buffer.from(ServiceMethodResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ServiceMethodResponse.decode(value),
    },
} as const

export interface NodeGrpcServer extends UntypedServiceImplementation {
    serviceMethod: handleUnaryCall<ServiceMethodRequest, ServiceMethodResponse>
}

export interface NodeGrpcClient extends Client {
    serviceMethod(
        request: ServiceMethodRequest,
        callback: (error: ServiceError | null, response: ServiceMethodResponse) => void,
    ): ClientUnaryCall
    serviceMethod(
        request: ServiceMethodRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ServiceMethodResponse) => void,
    ): ClientUnaryCall
    serviceMethod(
        request: ServiceMethodRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ServiceMethodResponse) => void,
    ): ClientUnaryCall
}

export const NodeGrpcClient = makeGenericClientConstructor(NodeGrpcService, 'nodejs.grpc.NodeGrpc') as unknown as {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NodeGrpcClient
    service: typeof NodeGrpcService
    serviceName: string
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never }

function isSet(value: any): boolean {
    return value !== null && value !== undefined
}
