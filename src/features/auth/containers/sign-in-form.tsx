"use client";

import { Right, right } from "@/shared/lib/either";
import React, { useActionState } from "react";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { signInAction } from "../actions/sign-in";




export const SignInForm: React.FC = () => {
  // @ts-ignore
  const [formState, action, isPending] = useActionState(
    signInAction,
    right(undefined),
  );

  return (
    <AuthFormLayout
      action={action}
      title="Sign In"
      description="Welcome back? Please sign in to your account."
      error={<ErrorMessage error={formState} />}
      fields={<AuthFields />}
      actions={<SubmitButton isPending={isPending}>Sign In</SubmitButton>}
      link={
        <BottomLink
          text="Don't have an account?"
          linkText="Sign up"
          url="/sign-up"
        />
      }
    />
  );
};

