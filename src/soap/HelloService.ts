export const HelloService = {
    HelloService: {
      HelloPort: {
        sayHello: (args: { name: string }) => {
          console.log("The sayHello method is called with arguments:", args);
          return { greeting: `Hello, ${args.name}!` }
        }
      }
    }
  }