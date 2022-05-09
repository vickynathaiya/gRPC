// package: 
// file: src/proto/cibeez.proto

var src_proto_cibeez_pb = require("./cibeez_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CiBeez = (function () {
  function CiBeez() {}
  CiBeez.serviceName = "CiBeez";
  return CiBeez;
}());

CiBeez.CbzRpc = {
  methodName: "CbzRpc",
  service: CiBeez,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_cibeez_pb.CbzRequest,
  responseType: src_proto_cibeez_pb.CbzResponse
};

CiBeez.SayHello = {
  methodName: "SayHello",
  service: CiBeez,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_cibeez_pb.HelloRequest,
  responseType: src_proto_cibeez_pb.HelloReply
};

exports.CiBeez = CiBeez;

function CiBeezClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CiBeezClient.prototype.cbzRpc = function cbzRpc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CiBeez.CbzRpc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CiBeezClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CiBeez.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CiBeezClient = CiBeezClient;

var Greeter = (function () {
  function Greeter() {}
  Greeter.serviceName = "Greeter";
  return Greeter;
}());

Greeter.SayHello = {
  methodName: "SayHello",
  service: Greeter,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_cibeez_pb.HelloRequest,
  responseType: src_proto_cibeez_pb.HelloReply
};

exports.Greeter = Greeter;

function GreeterClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GreeterClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Greeter.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.GreeterClient = GreeterClient;

