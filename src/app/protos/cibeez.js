/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.CiBeez = (function() {
    
        /**
         * Constructs a new CiBeez service.
         * @exports CiBeez
         * @classdesc Represents a CiBeez
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CiBeez(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (CiBeez.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CiBeez;
    
        /**
         * Creates new CiBeez service using the specified rpc implementation.
         * @function create
         * @memberof CiBeez
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CiBeez} RPC service. Useful where requests and/or responses are streamed.
         */
        CiBeez.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link CiBeez#cbzRpc}.
         * @memberof CiBeez
         * @typedef CbzRpcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CbzResponse} [response] CbzResponse
         */
    
        /**
         * Calls CbzRpc.
         * @function cbzRpc
         * @memberof CiBeez
         * @instance
         * @param {ICbzRequest} request CbzRequest message or plain object
         * @param {CiBeez.CbzRpcCallback} callback Node-style callback called with the error, if any, and CbzResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CiBeez.prototype.cbzRpc = function cbzRpc(request, callback) {
            return this.rpcCall(cbzRpc, $root.CbzRequest, $root.CbzResponse, request, callback);
        }, "name", { value: "CbzRpc" });
    
        /**
         * Calls CbzRpc.
         * @function cbzRpc
         * @memberof CiBeez
         * @instance
         * @param {ICbzRequest} request CbzRequest message or plain object
         * @returns {Promise<CbzResponse>} Promise
         * @variation 2
         */
    
        /**
         * Callback as used by {@link CiBeez#sayHello}.
         * @memberof CiBeez
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {HelloReply} [response] HelloReply
         */
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof CiBeez
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @param {CiBeez.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CiBeez.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.HelloRequest, $root.HelloReply, request, callback);
        }, "name", { value: "SayHello" });
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof CiBeez
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<HelloReply>} Promise
         * @variation 2
         */
    
        return CiBeez;
    })();
    
    $root.CbzName = (function() {
    
        /**
         * Properties of a CbzName.
         * @exports ICbzName
         * @interface ICbzName
         * @property {string|null} [name] CbzName name
         */
    
        /**
         * Constructs a new CbzName.
         * @exports CbzName
         * @classdesc Represents a CbzName.
         * @implements ICbzName
         * @constructor
         * @param {ICbzName=} [properties] Properties to set
         */
        function CbzName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CbzName name.
         * @member {string} name
         * @memberof CbzName
         * @instance
         */
        CbzName.prototype.name = "";
    
        /**
         * Creates a new CbzName instance using the specified properties.
         * @function create
         * @memberof CbzName
         * @static
         * @param {ICbzName=} [properties] Properties to set
         * @returns {CbzName} CbzName instance
         */
        CbzName.create = function create(properties) {
            return new CbzName(properties);
        };
    
        /**
         * Encodes the specified CbzName message. Does not implicitly {@link CbzName.verify|verify} messages.
         * @function encode
         * @memberof CbzName
         * @static
         * @param {ICbzName} message CbzName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified CbzName message, length delimited. Does not implicitly {@link CbzName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CbzName
         * @static
         * @param {ICbzName} message CbzName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CbzName message from the specified reader or buffer.
         * @function decode
         * @memberof CbzName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CbzName} CbzName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CbzName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CbzName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CbzName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CbzName} CbzName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CbzName message.
         * @function verify
         * @memberof CbzName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CbzName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a CbzName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CbzName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CbzName} CbzName
         */
        CbzName.fromObject = function fromObject(object) {
            if (object instanceof $root.CbzName)
                return object;
            var message = new $root.CbzName();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a CbzName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CbzName
         * @static
         * @param {CbzName} message CbzName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CbzName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this CbzName to JSON.
         * @function toJSON
         * @memberof CbzName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CbzName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CbzName;
    })();
    
    $root.CbzRequest = (function() {
    
        /**
         * Properties of a CbzRequest.
         * @exports ICbzRequest
         * @interface ICbzRequest
         * @property {string|null} [name] CbzRequest name
         * @property {string|null} [message] CbzRequest message
         */
    
        /**
         * Constructs a new CbzRequest.
         * @exports CbzRequest
         * @classdesc Represents a CbzRequest.
         * @implements ICbzRequest
         * @constructor
         * @param {ICbzRequest=} [properties] Properties to set
         */
        function CbzRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CbzRequest name.
         * @member {string} name
         * @memberof CbzRequest
         * @instance
         */
        CbzRequest.prototype.name = "";
    
        /**
         * CbzRequest message.
         * @member {string} message
         * @memberof CbzRequest
         * @instance
         */
        CbzRequest.prototype.message = "";
    
        /**
         * Creates a new CbzRequest instance using the specified properties.
         * @function create
         * @memberof CbzRequest
         * @static
         * @param {ICbzRequest=} [properties] Properties to set
         * @returns {CbzRequest} CbzRequest instance
         */
        CbzRequest.create = function create(properties) {
            return new CbzRequest(properties);
        };
    
        /**
         * Encodes the specified CbzRequest message. Does not implicitly {@link CbzRequest.verify|verify} messages.
         * @function encode
         * @memberof CbzRequest
         * @static
         * @param {ICbzRequest} message CbzRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified CbzRequest message, length delimited. Does not implicitly {@link CbzRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CbzRequest
         * @static
         * @param {ICbzRequest} message CbzRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CbzRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CbzRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CbzRequest} CbzRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CbzRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CbzRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CbzRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CbzRequest} CbzRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CbzRequest message.
         * @function verify
         * @memberof CbzRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CbzRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a CbzRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CbzRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CbzRequest} CbzRequest
         */
        CbzRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.CbzRequest)
                return object;
            var message = new $root.CbzRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a CbzRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CbzRequest
         * @static
         * @param {CbzRequest} message CbzRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CbzRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.message = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this CbzRequest to JSON.
         * @function toJSON
         * @memberof CbzRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CbzRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CbzRequest;
    })();
    
    $root.CbzResponse = (function() {
    
        /**
         * Properties of a CbzResponse.
         * @exports ICbzResponse
         * @interface ICbzResponse
         * @property {string|null} [message] CbzResponse message
         */
    
        /**
         * Constructs a new CbzResponse.
         * @exports CbzResponse
         * @classdesc Represents a CbzResponse.
         * @implements ICbzResponse
         * @constructor
         * @param {ICbzResponse=} [properties] Properties to set
         */
        function CbzResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CbzResponse message.
         * @member {string} message
         * @memberof CbzResponse
         * @instance
         */
        CbzResponse.prototype.message = "";
    
        /**
         * Creates a new CbzResponse instance using the specified properties.
         * @function create
         * @memberof CbzResponse
         * @static
         * @param {ICbzResponse=} [properties] Properties to set
         * @returns {CbzResponse} CbzResponse instance
         */
        CbzResponse.create = function create(properties) {
            return new CbzResponse(properties);
        };
    
        /**
         * Encodes the specified CbzResponse message. Does not implicitly {@link CbzResponse.verify|verify} messages.
         * @function encode
         * @memberof CbzResponse
         * @static
         * @param {ICbzResponse} message CbzResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified CbzResponse message, length delimited. Does not implicitly {@link CbzResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CbzResponse
         * @static
         * @param {ICbzResponse} message CbzResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CbzResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CbzResponse message from the specified reader or buffer.
         * @function decode
         * @memberof CbzResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CbzResponse} CbzResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CbzResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CbzResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CbzResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CbzResponse} CbzResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CbzResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CbzResponse message.
         * @function verify
         * @memberof CbzResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CbzResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a CbzResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CbzResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CbzResponse} CbzResponse
         */
        CbzResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.CbzResponse)
                return object;
            var message = new $root.CbzResponse();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a CbzResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CbzResponse
         * @static
         * @param {CbzResponse} message CbzResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CbzResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this CbzResponse to JSON.
         * @function toJSON
         * @memberof CbzResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CbzResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CbzResponse;
    })();
    
    $root.Greeter = (function() {
    
        /**
         * Constructs a new Greeter service.
         * @exports Greeter
         * @classdesc Represents a Greeter
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Greeter(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }
    
        (Greeter.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Greeter;
    
        /**
         * Creates new Greeter service using the specified rpc implementation.
         * @function create
         * @memberof Greeter
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Greeter} RPC service. Useful where requests and/or responses are streamed.
         */
        Greeter.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };
    
        /**
         * Callback as used by {@link Greeter#sayHello}.
         * @memberof Greeter
         * @typedef SayHelloCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {HelloReply} [response] HelloReply
         */
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof Greeter
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @param {Greeter.SayHelloCallback} callback Node-style callback called with the error, if any, and HelloReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Greeter.prototype.sayHello = function sayHello(request, callback) {
            return this.rpcCall(sayHello, $root.HelloRequest, $root.HelloReply, request, callback);
        }, "name", { value: "SayHello" });
    
        /**
         * Calls SayHello.
         * @function sayHello
         * @memberof Greeter
         * @instance
         * @param {IHelloRequest} request HelloRequest message or plain object
         * @returns {Promise<HelloReply>} Promise
         * @variation 2
         */
    
        return Greeter;
    })();
    
    $root.HelloRequest = (function() {
    
        /**
         * Properties of a HelloRequest.
         * @exports IHelloRequest
         * @interface IHelloRequest
         * @property {string|null} [name] HelloRequest name
         */
    
        /**
         * Constructs a new HelloRequest.
         * @exports HelloRequest
         * @classdesc Represents a HelloRequest.
         * @implements IHelloRequest
         * @constructor
         * @param {IHelloRequest=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HelloRequest name.
         * @member {string} name
         * @memberof HelloRequest
         * @instance
         */
        HelloRequest.prototype.name = "";
    
        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @function create
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest=} [properties] Properties to set
         * @returns {HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };
    
        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link HelloRequest.verify|verify} messages.
         * @function encode
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };
    
        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link HelloRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HelloRequest
         * @static
         * @param {IHelloRequest} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @function decode
         * @memberof HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HelloRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HelloRequest message.
         * @function verify
         * @memberof HelloRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };
    
        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HelloRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.HelloRequest)
                return object;
            var message = new $root.HelloRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };
    
        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HelloRequest
         * @static
         * @param {HelloRequest} message HelloRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };
    
        /**
         * Converts this HelloRequest to JSON.
         * @function toJSON
         * @memberof HelloRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HelloRequest;
    })();
    
    $root.HelloReply = (function() {
    
        /**
         * Properties of a HelloReply.
         * @exports IHelloReply
         * @interface IHelloReply
         * @property {string|null} [message] HelloReply message
         */
    
        /**
         * Constructs a new HelloReply.
         * @exports HelloReply
         * @classdesc Represents a HelloReply.
         * @implements IHelloReply
         * @constructor
         * @param {IHelloReply=} [properties] Properties to set
         */
        function HelloReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HelloReply message.
         * @member {string} message
         * @memberof HelloReply
         * @instance
         */
        HelloReply.prototype.message = "";
    
        /**
         * Creates a new HelloReply instance using the specified properties.
         * @function create
         * @memberof HelloReply
         * @static
         * @param {IHelloReply=} [properties] Properties to set
         * @returns {HelloReply} HelloReply instance
         */
        HelloReply.create = function create(properties) {
            return new HelloReply(properties);
        };
    
        /**
         * Encodes the specified HelloReply message. Does not implicitly {@link HelloReply.verify|verify} messages.
         * @function encode
         * @memberof HelloReply
         * @static
         * @param {IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            return writer;
        };
    
        /**
         * Encodes the specified HelloReply message, length delimited. Does not implicitly {@link HelloReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HelloReply
         * @static
         * @param {IHelloReply} message HelloReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HelloReply message from the specified reader or buffer.
         * @function decode
         * @memberof HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HelloReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HelloReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HelloReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HelloReply} HelloReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HelloReply message.
         * @function verify
         * @memberof HelloReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HelloReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };
    
        /**
         * Creates a HelloReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HelloReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HelloReply} HelloReply
         */
        HelloReply.fromObject = function fromObject(object) {
            if (object instanceof $root.HelloReply)
                return object;
            var message = new $root.HelloReply();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };
    
        /**
         * Creates a plain object from a HelloReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HelloReply
         * @static
         * @param {HelloReply} message HelloReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };
    
        /**
         * Converts this HelloReply to JSON.
         * @function toJSON
         * @memberof HelloReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HelloReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return HelloReply;
    })();

    return $root;
});
