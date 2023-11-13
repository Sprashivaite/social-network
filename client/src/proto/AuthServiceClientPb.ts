/**
 * @fileoverview gRPC-Web generated client stub for authpackage
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: src/proto/auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_proto_auth_pb from '../../src/proto/auth_pb';


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorlogin = new grpcWeb.MethodDescriptor(
    '/authpackage.AuthService/login',
    grpcWeb.MethodType.UNARY,
    src_proto_auth_pb.LoginRequest,
    src_proto_auth_pb.LoginResponse,
    (request: src_proto_auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    src_proto_auth_pb.LoginResponse.deserializeBinary
  );

  login(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_auth_pb.LoginResponse>;

  login(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_proto_auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<src_proto_auth_pb.LoginResponse>;

  login(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_proto_auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authpackage.AuthService/login',
        request,
        metadata || {},
        this.methodDescriptorlogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authpackage.AuthService/login',
    request,
    metadata || {},
    this.methodDescriptorlogin);
  }

  methodDescriptorregister = new grpcWeb.MethodDescriptor(
    '/authpackage.AuthService/register',
    grpcWeb.MethodType.UNARY,
    src_proto_auth_pb.LoginRequest,
    src_proto_auth_pb.Message,
    (request: src_proto_auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    src_proto_auth_pb.Message.deserializeBinary
  );

  register(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_auth_pb.Message>;

  register(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_proto_auth_pb.Message) => void): grpcWeb.ClientReadableStream<src_proto_auth_pb.Message>;

  register(
    request: src_proto_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_proto_auth_pb.Message) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authpackage.AuthService/register',
        request,
        metadata || {},
        this.methodDescriptorregister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authpackage.AuthService/register',
    request,
    metadata || {},
    this.methodDescriptorregister);
  }

}

