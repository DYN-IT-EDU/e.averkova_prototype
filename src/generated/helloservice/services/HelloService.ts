import { HelloPort } from "../ports/HelloPort";

export interface HelloService {
    readonly HelloPort: HelloPort;
}
