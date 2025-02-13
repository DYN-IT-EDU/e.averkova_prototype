"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloService = void 0;
exports.HelloService = {
    HelloService: {
        HelloPort: {
            sayHello: (args) => {
                console.log("Вызван метод sayHello с аргументами:", args);
                return { greeting: `Hello, ${args.name}!` };
            }
        }
    }
};
