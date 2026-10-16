import { forwardToBackend, type DurableObjectNamespaceLike } from "@parlor/cloudflare";
import nextWorker from "../.open-next/worker.js";
import { BACKEND_BASE_PATH } from "./backend";

export { PoppycockBackend } from "./backend";

type Env = Parameters<typeof nextWorker.fetch>[1] & {
  POPPYCOCK_BACKEND: DurableObjectNamespaceLike;
};

export default {
  fetch(request: Request, env: Env, ctx: Parameters<typeof nextWorker.fetch>[2]) {
    return (
      forwardToBackend(request, env.POPPYCOCK_BACKEND, BACKEND_BASE_PATH) ??
      nextWorker.fetch(request, env, ctx)
    );
  },
};
