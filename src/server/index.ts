import { ServiceMethod } from './methods/ServiceMethod'
import { NodeGrpcServer } from '../pkg'

export const serverImplementation: NodeGrpcServer = {
    serviceMethod: ServiceMethod,
}
