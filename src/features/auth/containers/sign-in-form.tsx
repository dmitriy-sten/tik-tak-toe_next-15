"use client";

import { Right, right } from "@/shared/lib/either";
import React, { useActionState } from "react";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { signInAction, SignInFormState } from "../actions/sign-in";
import { routes } from "@/kernel/routes";




export const SignInForm: React.FC = () => {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState
  );

  return (
    <AuthFormLayout
      action={action}
      title="Sign In"
      description="Welcome back? Please sign in to your account."
      error={<ErrorMessage error={formState.errors?._errors} />}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>}
      link={
        <BottomLink
          text="Don't have an account?"
          linkText="Sign up"
          url={routes.signUp()}
        />
      }
    />
  );
};

