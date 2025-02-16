"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientAsync = createClientAsync;
const soap_1 = require("soap");
/** Create HelloServiceClient */
function createClientAsync(...args) {
    return (0, soap_1.createClientAsync)(args[0], args[1], args[2]);
}
