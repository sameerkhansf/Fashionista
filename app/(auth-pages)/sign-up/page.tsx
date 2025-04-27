import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <form className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2 text-center">
            Sign up
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <Link
              className="text-primary font-medium underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
        <SmtpMessage />
      </form>
    </div>
  );
}
