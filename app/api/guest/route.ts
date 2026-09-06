import { issueGuestSession } from "../../../lib/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(request: Request): Promise<Response> {
  return issueGuestSession(request);
}
