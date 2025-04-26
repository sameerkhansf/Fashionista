"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export function GoogleSignInButton() {
  const handleGoogleSignIn = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleSignIn}
      className="mt-4 w-full"
    >
      Sign in with Google
    </Button>
  );
}
