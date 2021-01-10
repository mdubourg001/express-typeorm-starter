import User from "../entity/User";

export function userFormatter(user: User) {
  if (!user) return undefined;

  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}
