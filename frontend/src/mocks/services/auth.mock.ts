export async function login() {
  return {
    resource: "auth",
    success: true,
    latency: 20,
    token: crypto.randomUUID(),
    expiresIn: 3600,
  };
}
