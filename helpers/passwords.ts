import * as crypto from "crypto";

// TODO Handle salt
export function hash(clear: string) {
  return crypto.createHash("sha256").update(clear).digest("hex");
}
