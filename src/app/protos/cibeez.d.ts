import * as $protobuf from "protobufjs";
export class CiBeez extends $protobuf.rpc.Service {
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CiBeez;
    public cbzRpc(request: ICbzRequest, callback: CiBeez.CbzRpcCallback): void;
    public cbzRpc(request: ICbzRequest): Promise<CbzResponse>;
    public sayHello(request: IHelloRequest, callback: CiBeez.SayHelloCallback): void;
    public sayHello(request: IHelloRequest): Promise<HelloReply>;
}

export namespace CiBeez {

    type CbzRpcCallback = (error: (Error|null), response?: CbzResponse) => void;

    type SayHelloCallback = (error: (Error|null), response?: HelloReply) => void;
}

export interface ICbzName {
    name?: (string|null);
}

export class CbzName implements ICbzName {
    constructor(properties?: ICbzName);
    public name: string;
    public static create(properties?: ICbzName): CbzName;
    public static encode(message: ICbzName, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ICbzName, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CbzName;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CbzName;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): CbzName;
    public static toObject(message: CbzName, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ICbzRequest {
    name?: (string|null);
    message?: (string|null);
}

export class CbzRequest implements ICbzRequest {
    constructor(properties?: ICbzRequest);
    public name: string;
    public message: string;
    public static create(properties?: ICbzRequest): CbzRequest;
    public static encode(message: ICbzRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ICbzRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CbzRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CbzRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): CbzRequest;
    public static toObject(message: CbzRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ICbzResponse {
    message?: (string|null);
}

export class CbzResponse implements ICbzResponse {
    constructor(properties?: ICbzResponse);
    public message: string;
    public static create(properties?: ICbzResponse): CbzResponse;
    public static encode(message: ICbzResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ICbzResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CbzResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CbzResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): CbzResponse;
    public static toObject(message: CbzResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export class Greeter extends $protobuf.rpc.Service {
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Greeter;
    public sayHello(request: IHelloRequest, callback: Greeter.SayHelloCallback): void;
    public sayHello(request: IHelloRequest): Promise<HelloReply>;
}

export namespace Greeter {

    type SayHelloCallback = (error: (Error|null), response?: HelloReply) => void;
}

export interface IHelloRequest {
    name?: (string|null);
}

export class HelloRequest implements IHelloRequest {
    constructor(properties?: IHelloRequest);
    public name: string;
    public static create(properties?: IHelloRequest): HelloRequest;
    public static encode(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): HelloRequest;
    public static toObject(message: HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IHelloReply {
    message?: (string|null);
}

export class HelloReply implements IHelloReply {
    constructor(properties?: IHelloReply);
    public message: string;
    public static create(properties?: IHelloReply): HelloReply;
    public static encode(message: IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IHelloReply, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloReply;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloReply;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): HelloReply;
    public static toObject(message: HelloReply, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
