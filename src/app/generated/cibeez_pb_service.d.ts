// package: 
// file: src/proto/cibeez.proto

import * as src_proto_cibeez_pb from "./cibeez_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CiBeezCbzRpc = {
  readonly methodName: string;
  readonly service: typeof CiBeez;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_cibeez_pb.CbzRequest;
  readonly responseType: typeof src_proto_cibeez_pb.CbzResponse;
};

type CiBeezSayHello = {
  readonly methodName: string;
  readonly service: typeof CiBeez;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_cibeez_pb.HelloRequest;
  readonly responseType: typeof src_proto_cibeez_pb.HelloReply;
};

export class CiBeez {
  static readonly serviceName: string;
  static readonly CbzRpc: CiBeezCbzRpc;
  static readonly SayHello: CiBeezSayHello;
}

type GreeterSayHello = {
  readonly methodName: string;
  readonly service: typeof Greeter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_cibeez_pb.HelloRequest;
  readonly responseType: typeof src_proto_cibeez_pb.HelloReply;
};

export class Greeter {
  static readonly serviceName: string;
  static readonly SayHello: GreeterSayHello;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CiBeezClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  cbzRpc(
    requestMessage: src_proto_cibeez_pb.CbzRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.CbzResponse|null) => void
  ): UnaryResponse;
  cbzRpc(
    requestMessage: src_proto_cibeez_pb.CbzRequest,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.CbzResponse|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: src_proto_cibeez_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: src_proto_cibeez_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.HelloReply|null) => void
  ): UnaryResponse;
}

export class GreeterClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: src_proto_cibeez_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: src_proto_cibeez_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: src_proto_cibeez_pb.HelloReply|null) => void
  ): UnaryResponse;
}

