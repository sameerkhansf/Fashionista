import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { GoogleSignInButton } from "./GoogleSignInButton";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <form className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2 text-center">
            Sign in
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{" "}
            <Link
              className="text-primary font-medium underline"
              href="/sign-up"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-primary underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
        <div className="flex items-center my-2">
          <div className="flex-grow border-t border-zinc-300 dark:border-zinc-700" />
          <span className="mx-3 text-xs text-muted-foreground">or</span>
          <div className="flex-grow border-t border-zinc-300 dark:border-zinc-700" />
        </div>
        <GoogleSignInButton />
      </form>
    </div>
  );
}
