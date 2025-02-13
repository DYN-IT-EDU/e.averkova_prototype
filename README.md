# SOAP Service with CAP, Express, and TypeScript

## Type Declarations

This code extends the `@sap/cds` module. The `src/types/sap__cds.d.ts` file declares that the `cds` object has a method `serve` that takes a service name as a string and returns an object with the `in` method. The `in` method is used to integrate the service into the Express app.

```typescript
cds.serve('all').in(app)
```

This integrates all available CAP services into the Express app, allowing us to utilize CAP’s data and logic within the Express service.

## SOAP Service Logic

The `HelloService.ts` defines the `HelloService` object, which describes the SOAP service. The service has a port `HelloPort` that implements the method `sayHello`. The method accepts an object with a `name` field and returns an object with a `greeting` field, which contains a greeting message.

## WSDL File

The `src/soap/HelloService.wsdl` defines the structure of the SOAP service. Specifically:

- **Messages** define the input and output data (in this case, the `name` and `greeting`).
- **PortType** describes the available operations, here just the `sayHello` operation.
- **Binding** specifies how the operations should be handled via the SOAP protocol.
- **Service** defines the location of the SOAP service, where clients can access it.

## Express Server Setup

The server is created using Express, and the SOAP service is hosted at `/soap`. The WSDL content is read from the `HelloService.wsdl` file, and the `HelloService` methods are exposed via the `soap` package.

### Express Configuration:

- An Express app is created, and middleware is added for handling CORS and parsing raw XML data.

### CAP Integration:

- The line `cds.serve('all').in(app)` integrates all available CAP services into the Express app.

### SOAP Service:

- The `listen` function from the `soap` library is used to configure the SOAP endpoint at `/soap`. We pass the WSDL content and the `HelloService`.

### Server Startup:

- The app listens on the specified port (defaults to 4004), and a message is logged when the server starts.

## How to Run

1. **Install Dependencies**: Ensure you have Node.js installed, and then run:
   ```bash
   npm install
   ```

2. **Start the Server**: Run the following command to start the server:
   ```bash
   npm start
   ```

3. **Accessing the Service**: Once the server is running, you can send SOAP requests to:
   ```
   http://localhost:4004/soap
   ```

## Testing the Service

### Example Request:

```xml
<soapenv:Envelope 
      xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
      xmlns:urn="urn:hello-service">
    <soapenv:Header/>
    <soapenv:Body>
      <urn:sayHello>
        <urn:name>World</urn:name>
      </urn:sayHello>
    </soapenv:Body>
</soapenv:Envelope>
```

### Response:

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope
	xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
	xmlns:tns="urn:hello-service">
	<soap:Body>
		<tns:sayHelloResponse>
			<tns:greeting>Hello, Test!</tns:greeting>
		</tns:sayHelloResponse>
	</soap:Body>
</soap:Envelope>
```
