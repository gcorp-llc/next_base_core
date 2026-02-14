import { useState, useEffect } from "react";

// Mock Session Hook
const useMockSession = () => {
  const [session, setSession] = useState<any>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setSession({
        user: {
          id: "1",
          name: "کاربر زتب",
          email: "info@zeteb.com",
          image: "/favicon.png",
        }
      });
      setIsPending(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { data: session, isPending };
};

export const authApi = {
  signIn: async (data: any) => {
    console.log("Mock Sign In:", data);
    return { success: true };
  },
  signUp: async (data: any) => {
    console.log("Mock Sign Up:", data);
    return { success: true };
  },
  signOut: async () => {
    console.log("Mock Sign Out");
    window.location.href = "/auth";
  },
  getSession: useMockSession,
  sendOTP: async (phoneNumber: string) => {
    console.log("Mock Send OTP:", phoneNumber);
    return { success: true };
  },
  verifyOTP: async (phoneNumber: string, code: string) => {
    console.log("Mock Verify OTP:", phoneNumber, code);
    return { success: true };
  },
};
