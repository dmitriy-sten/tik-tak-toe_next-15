'use client'

import { right } from "@/shared/lib/either";
import React from "react";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";

interface Props {
  className?: string;
}

export const SignInForm: React.FC<Props> = ({ className }) => {
  return (
    <AuthFormLayout
      title="Sign In"
      description="Welcome back? Please sign in to your account."
      error={<ErrorMessage error={right(null)} />}
      fields={
        <AuthFields />
      }
      actions={<SubmitButton>Sign In</SubmitButton>}
      link={
        <BottomLink
          text="Don't have an account?"
          linkText="Sign up"
          url="/sign-up"
        />
      }
    //   onSubmit={}
    />
  );
};
