import {
    SignInAuthScreen,
    SignUpAuthScreen,
    GoogleSignInButton,
} from "@firebase-oss/ui-react";
import { useNavigate } from "react-router";
import { useState } from "react";
  
export default function LoginPage() {
const navigate = useNavigate();
const [mode, setMode] = useState<"signIn" | "signUp">("signIn");

return (
    <div className="h-screen overflow-hidden bg-slate-100 flex items-center justify-center px-3">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-3 max-h-[95vh]">
        {mode === "signIn" ? (
        <SignInAuthScreen
            onSignIn={() => navigate("/")}
            onSignUpClick={() => setMode("signUp")}
        />
        ) : (
        <SignUpAuthScreen
            onSignUp={() => navigate("/complete-profile")}
            onSignInClick={() => setMode("signIn")}
        />
        )}
        <div className="flex items-center my-1">
        <div className="flex-1 h-px bg-slate-300" />
        <span className="mx-3 text-xs text-slate-500">OR</span>
        <div className="flex-1 h-px bg-slate-300" />
        </div>
        <GoogleSignInButton
            themed="neutral"
            onSignIn={() => navigate("/complete-profile")}
        />
    </div>
    </div>
);
}