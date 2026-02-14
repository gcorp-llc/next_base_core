// Mocking authClient for visual purposes only
export const authClient = {
    useSession: () => ({
        data: {
            user: {
                id: "1",
                name: "کاربر زتب",
                email: "info@zeteb.com",
                image: "/favicon.png",
            }
        },
        isPending: false
    }),
    signIn: {
        email: async () => ({ success: true }),
    },
    signUp: {
        email: async () => ({ success: true }),
    },
    signOut: async () => {
        window.location.href = "/auth";
    },
    phoneNumber: {
        sendOtp: async () => ({ success: true }),
        verify: async () => ({ success: true }),
    }
} as any;
