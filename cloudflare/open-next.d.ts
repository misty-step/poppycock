// OpenNext generates JavaScript only. This is the platform handler boundary;
// its actual built implementation is exercised in workerd and hosted preview.
declare module "*/.open-next/worker.js" {
  const worker: {
    fetch(request: Request, env: Record<string, unknown>, ctx: ExecutionContext): Promise<Response>;
  };
  export default worker;
}
