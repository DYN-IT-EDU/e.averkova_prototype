/* tslint:disable:max-line-length no-empty-interface */
export interface IsayHelloInput {
    /** xsd:string(undefined) */
    name: string;
}

export interface IsayHelloOutput {
    /** xsd:string(undefined) */
    greeting: string;
}

export interface IHelloPortSoap {
    sayHello: (input: IsayHelloInput, cb: (err: any | null, result: IsayHelloOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}
