import { toast } from "sonner"
import { ResetPasswordAction } from "@/lib/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

export function useResetPassword() {
    // translations
 const { formatMessage } = useIntl();
//  router
const navigate = useNavigate();
 
 // mutations
    const { isPending, error, mutate } = useMutation({
        mutationFn : async ({ email, newPassword }: { email: string; newPassword: string }) => {
            const payload = await ResetPasswordAction(email, newPassword);
            if (!payload.success) {
                throw new Error(payload.message || "Failed to reset password");
            }

            return payload;
        },
        onSuccess: (payload) => {
            toast.success(payload.message || formatMessage({ id: "password-reset-success" }));

            navigate("/login");
        },
    });
    
    return { isPending, error,  resetPassword: mutate };
}