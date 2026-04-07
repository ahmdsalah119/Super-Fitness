import { SendOTPAction } from "@/lib/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";

export function useSendOTP() {

    // mutations
    const {  isPending, error: errorMessage , mutate } = useMutation({
        mutationFn: async (email: string) => {
            const payload = await SendOTPAction(email);
            if (!payload.success) {
                throw new Error(payload.message || "Failed to send OTP");
            }
            return payload;
        }
    });
    
    return { isPending , errorMessage, sendOTP : mutate }
}