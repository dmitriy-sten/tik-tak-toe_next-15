import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { error } from "console";
import { Link } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const AuthFormLayout: React.FC<Props> = ({ className }) => {
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
          {true && (
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
};
