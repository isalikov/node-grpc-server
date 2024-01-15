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

export const protobufPackage = 'nodegrpc'

export interface EchoRequest {
    message: string
}

export interface EchoResponse {
    message: string
}

function createBaseEchoRequest(): EchoRequest {
    return { message: '' }
}

export const EchoRequest = {
    encode(message: EchoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseEchoRequest()
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

    fromJSON(object: any): EchoRequest {
        return { message: isSet(object.message) ? globalThis.String(object.message) : '' }
    },

    toJSON(message: EchoRequest): unknown {
        const obj: any = {}
        if (message.message !== '') {
            obj.message = message.message
        }
        return obj
    },

    create<I extends Exact<DeepPartial<EchoRequest>, I>>(base?: I): EchoRequest {
        return EchoRequest.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<EchoRequest>, I>>(object: I): EchoRequest {
        const message = createBaseEchoRequest()
        message.message = object.message ?? ''
        return message
    },
}

function createBaseEchoResponse(): EchoResponse {
    return { message: '' }
}

export const EchoResponse = {
    encode(message: EchoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message)
        }
        return writer
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input)
        let end = length === undefined ? reader.len : reader.pos + length
        const message = createBaseEchoResponse()
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

    fromJSON(object: any): EchoResponse {
        return { message: isSet(object.message) ? globalThis.String(object.message) : '' }
    },

    toJSON(message: EchoResponse): unknown {
        const obj: any = {}
        if (message.message !== '') {
            obj.message = message.message
        }
        return obj
    },

    create<I extends Exact<DeepPartial<EchoResponse>, I>>(base?: I): EchoResponse {
        return EchoResponse.fromPartial(base ?? ({} as any))
    },
    fromPartial<I extends Exact<DeepPartial<EchoResponse>, I>>(object: I): EchoResponse {
        const message = createBaseEchoResponse()
        message.message = object.message ?? ''
        return message
    },
}

export type NodeGrpcService = typeof NodeGrpcService
export const NodeGrpcService = {
    echoMethod: {
        path: '/nodegrpc.NodeGrpc/EchoMethod',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: EchoRequest) => Buffer.from(EchoRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => EchoRequest.decode(value),
        responseSerialize: (value: EchoResponse) => Buffer.from(EchoResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => EchoResponse.decode(value),
    },
} as const

export interface NodeGrpcServer extends UntypedServiceImplementation {
    echoMethod: handleUnaryCall<EchoRequest, EchoResponse>
}

export interface NodeGrpcClient extends Client {
    echoMethod(
        request: EchoRequest,
        callback: (error: ServiceError | null, response: EchoResponse) => void,
    ): ClientUnaryCall
    echoMethod(
        request: EchoRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: EchoResponse) => void,
    ): ClientUnaryCall
    echoMethod(
        request: EchoRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: EchoResponse) => void,
    ): ClientUnaryCall
}

export const NodeGrpcClient = makeGenericClientConstructor(NodeGrpcService, 'nodegrpc.NodeGrpc') as unknown as {
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
