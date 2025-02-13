declare module '@sap/cds' {
    const cds: {
      serve(service: string): { in(app: any): void }
    }
    export default cds
  }