// Mocking auth for visual purposes only to avoid DB initialization errors
export const auth = {
    api: {
        getSession: async () => {
            return {
                user: {
                    id: "1",
                    name: "کاربر زتب",
                    email: "info@zeteb.com",
                    image: "/favicon.png",
                },
                session: {
                    id: "session-1",
                    userId: "1",
                    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
                }
            };
        }
    },
    handler: async (req: Request) => {
        return new Response(JSON.stringify({ message: "Mock Auth Handler" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    }
} as any;
