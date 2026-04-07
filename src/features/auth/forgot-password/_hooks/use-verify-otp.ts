import { VerifyOTPAction } from "@/lib/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";

export function useVerifyOTP() {

    // mutations
    const {  isPending, error , mutate } = useMutation({
        mutationFn: async (resetCode: number) => {
            const payload = await VerifyOTPAction(resetCode);
            if (!payload.success) {
                throw new Error(payload.message || "Failed to verify OTP");
            }
            return payload;
        }
    });
    
    return { isPending , error, verifyOTP : mutate }
}