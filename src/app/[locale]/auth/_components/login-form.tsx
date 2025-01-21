import { CardWrapper } from "@/app/[locale]/auth/_components/card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Login"
      backButtonLabel="Don't have an account?"
      href="/auth/register"
    >
      Login Form
    </CardWrapper>
  );
}
