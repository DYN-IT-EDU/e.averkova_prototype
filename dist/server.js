"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_1 = __importDefault(require("@sap/cds"));
const express_1 = __importDefault(require("express"));
const soap_1 = require("soap");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const HelloService_1 = require("./soap/HelloService");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const { PORT = 4004 } = process.env;
const app = (0, express_1.default)();
const wsdlPath = path_1.default.join(__dirname, 'soap/HelloService.wsdl');
const wsdlContent = fs_1.default.readFileSync(wsdlPath, 'utf-8');
app.use((0, cors_1.default)());
app.use(body_parser_1.default.raw({ type: 'text/xml' }));
cds_1.default.serve('all').in(app);
app.use((req, res, next) => {
    var _a;
    console.log('Incoming request:', req.method, req.url);
    console.log('Headers:', req.headers);
    console.log('Body:', (_a = req.body) === null || _a === void 0 ? void 0 : _a.toString());
    next();
});
(0, soap_1.listen)(app, {
    path: '/soap',
    services: HelloService_1.HelloService,
    xml: wsdlContent
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
