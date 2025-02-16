import { SayHelloRequest } from "../definitions/SayHelloRequest";
import { SayHelloResponse } from "../definitions/SayHelloResponse";

export interface HelloPort {
    sayHello(sayHelloRequest: SayHelloRequest, callback: (err: any, result: SayHelloResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
