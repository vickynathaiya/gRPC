// package: 
// file: src/proto/cibeez.proto

import * as jspb from "google-protobuf";

export class CbzName extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CbzName.AsObject;
  static toObject(includeInstance: boolean, msg: CbzName): CbzName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CbzName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CbzName;
  static deserializeBinaryFromReader(message: CbzName, reader: jspb.BinaryReader): CbzName;
}

export namespace CbzName {
  export type AsObject = {
    name: string,
  }
}

export class CbzRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CbzRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CbzRequest): CbzRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CbzRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CbzRequest;
  static deserializeBinaryFromReader(message: CbzRequest, reader: jspb.BinaryReader): CbzRequest;
}

export namespace CbzRequest {
  export type AsObject = {
    name: string,
    message: string,
  }
}

export class CbzResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CbzResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CbzResponse): CbzResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CbzResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CbzResponse;
  static deserializeBinaryFromReader(message: CbzResponse, reader: jspb.BinaryReader): CbzResponse;
}

export namespace CbzResponse {
  export type AsObject = {
    message: string,
  }
}

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    message: string,
  }
}

