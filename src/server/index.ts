import { nodeGrpcEchoMethod } from './methods/echo'
import { NodeGrpcServer } from '../pkg'

export const serverImplementation: NodeGrpcServer = { echoMethod: nodeGrpcEchoMethod }
