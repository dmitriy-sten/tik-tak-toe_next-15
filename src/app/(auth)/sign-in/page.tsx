"use client";

import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import Link from "next/link";
import React from "react";

export default function SignIn() {
  const [error, setError] = React.useState(true);

  return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={""}
                onChange={(e) => e}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={""}
                onChange={(e) => e}
                required
              />
            </div>
            {error && (
              <Alert variant={"destructive"}>
                <AlertDescription>{"error"}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-primary/60">
            Already have account?{" "}
            <Link
              className="font-medium text-primary hover:underline"
              href={"/sign-in"}
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
  );
}
