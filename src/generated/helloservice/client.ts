import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { SayHelloRequest } from "./definitions/SayHelloRequest";
import { SayHelloResponse } from "./definitions/SayHelloResponse";
import { HelloService } from "./services/HelloService";

export interface HelloServiceClient extends SoapClient {
    HelloService: HelloService;
    sayHelloAsync(sayHelloRequest: SayHelloRequest, options?: ISoapExOptions): Promise<[result: SayHelloResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create HelloServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<HelloServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
