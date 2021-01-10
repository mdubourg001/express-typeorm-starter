import User from "../entity/User";
import { userFormatter } from "../formatters/user";

export function forgePayload(user: User, iat: number = Date.now()) {
  return {
    user: userFormatter(user),
    iat,
  };
}
