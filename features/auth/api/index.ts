import { authClient } from "../lib/auth-client";

export const authApi = {
  signIn: (data: { email: string; password: string }) =>
    authClient.signIn.email(data),
  signUp: (data: { email: string; password: string; name: string }) =>
    authClient.signUp.email(data),
  signOut: () => authClient.signOut(),
  getSession: () => authClient.useSession(),
  sendOTP: (phoneNumber: string) => authClient.phoneNumber.sendOtp({ phoneNumber }),
  verifyOTP: (phoneNumber: string, code: string) =>
    authClient.phoneNumber.verify({ phoneNumber, code }),
};
